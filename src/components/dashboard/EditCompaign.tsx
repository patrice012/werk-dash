import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ReactNode, useEffect, useState } from "react";
import { ButtonLoading } from "@/components/ui/loadingButton";
import { useToast } from "@/hooks/use-toast";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import postReq from "@/helpers/postReq";
import { FieldValues, useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { CompaignType } from "../../pages/Dashboard/type";
import botPostReq from "@/helpers/botPostReq";

export function EditComapaignDialog({
  children,
  compaign,
}: {
  children: ReactNode;
  compaign: CompaignType;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const location = window.document.URL;

  const [user] = useCurrentUser();
  const { toast } = useToast();

  // Create the domainList string dynamically
  const domainList = compaign?.domains?.join(", ");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isDirty, dirtyFields },
  } = useForm({
    defaultValues: {
      ...compaign,
      domainList,
    },
  });

  const handleFormSubmit = async (data: FieldValues) => {
    if (!isDirty) {
      toast({
        title: "No changes detected.",
      });
      return;
    }
    try {
      setIsLoading(true);

      // Split the domain list into an array of strings
      const domainsArray = data.domainList
        .split(",")
        .map((domain: string) => domain.trim());

      // Prepare the request data structure for the API
      const requestData: CompaignType = {
        domains: domainsArray,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        uid: user?.uid || "",
        companyName: data.companyName,
        _id: compaign._id,
      };

      const response = await postReq({
        data: requestData,
        url: "/api/compaign/update",
      });

      if (response?.ok || response?.status === 201) {
        toast({
          title: "Compaign updated successfully",
        });
        setOpen(false);

        queryClient.invalidateQueries({
          queryKey: ["get-all-compaigns"],
        });

        if (new URL(location).pathname.includes("/compaign/")) {
          queryClient.invalidateQueries({
            queryKey: ["get-compaign"],
          });
        }

        if (dirtyFields.domainList) {
          // start bot scraper
          try {
            const updateCompaign = await response.json();
            const botResponsePromise = botPostReq({
              data: {
                domains: updateCompaign?.compaign?.domains?.map(
                  (data: {
                    domain: string;
                    status: string;
                    scrapedAt: string;
                  }) => data?.domain
                ),
                uid: user?.uid || "",
                compaignId: updateCompaign?.compaign?._id,
              },
              url: "/api/scrape-url/create",
            });

            // Schedule refetching every 5s after the first one
            const interval = setInterval(() => {
              queryClient.invalidateQueries({ queryKey: ["get-compaign"] });
            }, 5 * 1000);

            // Stop query after 2 minute (failsafe)
            const maxTimeTimer = setTimeout(() => {
              clearInterval(interval);
              clearTimeout(maxTimeTimer);
            }, 2 * 60 * 1000);

            const botResponse = await botResponsePromise;

            if (botResponse.ok || botResponse.status === 201) {
              const fillFormResponse = await botPostReq({
                data: {
                  uid: user?.uid || "",
                  ...updateCompaign.compaign,
                },
                url: "/api/scrape-url/fill-form",
              });
              toast({
                title: "Contact scraped successfully",
              });

              if (fillFormResponse.ok || fillFormResponse.status === 201) {
                toast({
                  title: "Contact form submited successfully",
                });

                // Refetch one last time after 4s and stop all refetch queries
                clearInterval(interval);
                clearTimeout(maxTimeTimer);

                const finalRefetchTimer = setTimeout(() => {
                  queryClient.invalidateQueries({ queryKey: ["get-compaign"] });
                  clearTimeout(finalRefetchTimer);
                }, 4 * 1000);
              }
            } else {
              toast({
                variant: "destructive",
                title: "There was a problem with your request.",
              });

              // Refetch one last time after 4s and stop all refetch queries
              clearInterval(interval);
              clearTimeout(maxTimeTimer);
            }
          } catch (e) {
            console.log(e, "startScraper");
          }
        }
      } else {
        toast({
          title: "Something went wrong, Try again!",
        });
      }
    } catch (error) {
      const err = error as Error;
      console.log(err.message);
      const errorMsg = err.message;

      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: errorMsg || "There was a problem with your request.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset, compaign]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-center w-full">
            Update Compaign
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid gap-5 py-4">
            <div className="grid gap-2">
              <Label htmlFor="companyName">Company name</Label>
              <Input
                id="companyName"
                placeholder="Example company"
                {...register("companyName", {
                  required: "Company name is required",
                })}
              />
              {errors.companyName && (
                <span className="text-red-500">
                  {errors.companyName.message as ReactNode}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="domainsList">
                Domains list (comma-separated)
              </Label>
              <Textarea
                {...register("domainList", {
                  required: "Domains list is required",
                })}
                rows={6}
                placeholder="domain1.com, domain2.com, domain3.com"
                id="domainsList"
              />
              {errors.domainList && (
                <span className="text-red-500">
                  {errors.domainList.message as ReactNode}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Pedro"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <span className="text-red-500">
                  {errors.firstName.message as ReactNode}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Duarte"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <span className="text-red-500">
                  {errors.lastName.message as ReactNode}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500">
                  {errors.email.message as ReactNode}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1234567890"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-red-500">
                  {errors.phone.message as ReactNode}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                rows={6}
                placeholder="Type here..."
                id="message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500">
                  {errors.message.message as ReactNode}
                </span>
              )}
            </div>
          </div>

          <DialogFooter className="w-full">
            <div className="flex items-center justify-center w-full">
              {isLoading ? (
                <ButtonLoading />
              ) : (
                <Button type="submit">Save</Button>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
