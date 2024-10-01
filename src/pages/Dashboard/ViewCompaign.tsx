import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MoreHorizontal } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import { DashboardLayout } from "@/components/dashboard/Layout";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useParams } from "react-router-dom";
import postReq from "@/helpers/postReq";
import { useQuery } from "@tanstack/react-query";
import { EditComapaignDialog } from "../../components/dashboard/EditCompaign";
import { RemoveTableItemDialog } from "../../components/dashboard/RemoveTableItem";
import { formatDate } from "@/helpers/formatDate";
import { ViewCompaignSkeleton } from "../../components/dashboard/ViewCompaignSkeleton";
import { useState, useEffect } from "react";
import { ErrorRequest } from "@/components/request/ErrorRequest";
import { NotFoundData } from "@/components/request/NotFoundData";
import botPostReq from "@/helpers/botPostReq";
import { ButtonLoading } from "@/components/ui/loadingButton";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information.";

export function ViewCompaign() {
  const { id } = useParams();
  const [user] = useCurrentUser();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(true);
  const [botStart, setStartBotStart] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  async function getCompaign() {
    try {
      const response = await postReq({
        data: {
          uid: user?.uid || "",
          id,
        },
        url: "/api/compaign/get",
      });

      if (response?.status === 200) {
        return response.json();
      } else return {};
    } catch (e) {
      console.log(e, "error getCompaign");
    }
  }

  const getCompaignQuery = useQuery({
    queryKey: ["get-compaign", user?.uid, id],
    queryFn: getCompaign,
    enabled: !!user?.uid,
  });

  const startScraper = async () => {
    try {
      setStartBotStart(true);

      // Start the bot scraper
      const responsePromise = botPostReq({
        data: {
          uid: user?.uid || "",
          ...getCompaignQuery.data,
        },
        url: "/api/scrape-url/fill-form",
      });

      // Schedule refetching every 5s after the first one
      const interval = setInterval(() => {
        getCompaignQuery.refetch();
      }, 5 * 1000);

      // Stop query after 1 minute (failsafe)
      const maxTimeTimer = setTimeout(() => {
        clearInterval(interval);
        clearTimeout(maxTimeTimer);
      }, 60 * 1000);

      // Await the bot scraper response
      const response = await responsePromise;

      if (response.ok || response.status === 201) {
        toast({
          title: "Contact scraped successfully",
        });

        // Refetch one last time after 4s and stop all refetch queries
        clearInterval(interval);
        clearTimeout(maxTimeTimer);

        const finalRefetchTimer = setTimeout(() => {
          getCompaignQuery.refetch();
          clearTimeout(finalRefetchTimer);
        }, 4 * 1000);
      } else {
        toast({
          variant: "destructive",
          title: "There was a problem with your request.",
        });

        // Stop all timers if the request fails
        clearInterval(interval);
        clearTimeout(maxTimeTimer);
      }

      setStartBotStart(false);
    } catch (e) {
      console.log(e, "startScraper");

      setStartBotStart(false);

      // Display error toast
      toast({
        variant: "destructive",
        title: "There was a problem with your request.",
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto w-full">
        <Card
          className="overflow-hidden max-w-3xl mx-auto"
          x-chunk="dashboard-05-chunk-4"
        >
          <CardHeader className="flex flex-row items-start bg-muted/50 py-2">
            <div className="flex gap-5 ">
              <CardTitle className="col-span-1 group flex items-center gap-2 text-lg">
                Compaign
              </CardTitle>

              {getCompaignQuery.isSuccess ? (
                <div className="col-span-1">
                  {botStart ? (
                    <ButtonLoading />
                  ) : (
                    <Button onClick={startScraper}>Run</Button>
                  )}
                </div>
              ) : null}
            </div>

            {getCompaignQuery.isSuccess ? (
              <div className="ml-auto flex items-center gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <EditComapaignDialog
                        compaign={{
                          ...getCompaignQuery.data,
                          domains: getCompaignQuery.data?.domains?.map(
                            (data: { domain: string }) => data?.domain
                          ),
                        }}
                      >
                        <DropdownMenuLabel className="cursor-pointer px-4 font-[500] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm">
                          Edit
                        </DropdownMenuLabel>
                      </EditComapaignDialog>
                      <RemoveTableItemDialog id={getCompaignQuery.data?._id}>
                        <DropdownMenuLabel className="cursor-pointer px-4 font-[500] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm">
                          Delete
                        </DropdownMenuLabel>
                      </RemoveTableItemDialog>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : null}
          </CardHeader>

          {isLoading || getCompaignQuery.isLoading ? (
            <ViewCompaignSkeleton />
          ) : null}
          {getCompaignQuery.isSuccess ? (
            Object.keys(getCompaignQuery.data).length ? (
              <>
                <CardContent className="p-6 text-sm">
                  <div className="grid gap-3">
                    <div className="font-bold text-[1rem]">
                      Compaign Information
                    </div>
                    <ul className="grid gap-3">
                      {getCompaignQuery.data?.companyName ? (
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">Company</span>
                          <span>{getCompaignQuery.data?.companyName}</span>
                        </li>
                      ) : null}

                      {getCompaignQuery.data?.firstName ? (
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Fist name
                          </span>
                          <span>{getCompaignQuery.data?.firstName}</span>
                        </li>
                      ) : null}

                      {getCompaignQuery.data?.lastName ? (
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Last name
                          </span>
                          <span>{getCompaignQuery.data?.lastName}</span>
                        </li>
                      ) : null}

                      {getCompaignQuery.data?.email ? (
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">Email</span>
                          <span>{getCompaignQuery.data?.email}</span>
                        </li>
                      ) : null}

                      {getCompaignQuery.data?.phone ? (
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Phone number
                          </span>
                          <span>{getCompaignQuery.data?.phone}</span>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid gap-3">
                    {getCompaignQuery.data?.message ? (
                      <div className="space-y-3">
                        <div className="font-bold text-[1rem]">Message</div>
                        <div className="">{getCompaignQuery.data?.message}</div>
                      </div>
                    ) : null}

                    {getCompaignQuery.data?.domains?.length ? (
                      <div className="space-y-3">
                        <div className="font-bold text-[1rem] mt-3">
                          Domain list
                        </div>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Domain name</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead className="text-right">
                                Started At
                              </TableHead>
                              {/* Started At / Date */}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {getCompaignQuery.data?.domains.map(
                              (
                                domainData: {
                                  domain: string;
                                  status: string;
                                  scrapedAt: string;
                                },
                                index: number
                              ) => {
                                const status = domainData.status
                                  ?.trim()
                                  ?.toLowerCase();

                                return (
                                  <TableRow key={index}>
                                    <TableCell className="block  truncate max-w-[18rem]">
                                      {domainData?.domain}
                                    </TableCell>
                                    <TableCell>
                                      <Badge
                                        variant={
                                          status === "pending"
                                            ? "secondary"
                                            : status === "success"
                                            ? "outline"
                                            : "default"
                                        }
                                        className="rounded-full font-bold"
                                      >
                                        {domainData?.status}
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                      {formatDate(domainData?.scrapedAt)}
                                    </TableCell>
                                  </TableRow>
                                );
                              }
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    ) : null}
                  </div>
                </CardContent>
                {getCompaignQuery.data?.updatedAt ||
                getCompaignQuery.data?.createdAt ? (
                  <CardFooter className="flex flex-col items-start justify-center gap-3 border-t bg-muted/50 px-6 py-3">
                    {getCompaignQuery.data?.updatedAt ? (
                      <div className="text-xs text-muted-foreground">
                        Updated:{" "}
                        <time dateTime="2023-11-23">
                          {formatDate(getCompaignQuery.data?.updatedAt)}
                        </time>
                      </div>
                    ) : null}
                    {getCompaignQuery.data?.createdAt ? (
                      <div className="text-xs text-muted-foreground">
                        Created:{" "}
                        <time dateTime="2023-11-23">
                          {formatDate(getCompaignQuery.data?.createdAt)}
                        </time>
                      </div>
                    ) : null}
                  </CardFooter>
                ) : null}
              </>
            ) : (
              <NotFoundData refresh={getCompaignQuery.refetch} />
            )
          ) : null}

          {getCompaignQuery.isError ? (
            <ErrorRequest refresh={getCompaignQuery.refetch} />
          ) : null}
        </Card>
      </div>
    </DashboardLayout>
  );
}
