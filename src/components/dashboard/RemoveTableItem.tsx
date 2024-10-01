import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ReactNode, useState } from "react";
import { ButtonLoading } from "../ui/loadingButton";
import { useToast } from "@/hooks/use-toast";
import postReq from "@/helpers/postReq";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function RemoveTableItemDialog({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useCurrentUser();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = window.document.URL;

  const handleDeletion = async () => {
    try {
      setIsLoading(true);
      const response = await postReq({
        data: {
          uid: user?.uid || "",
          id: id,
        },
        url: "/api/compaign/delete",
      });

      if (response?.status === 200) {
        toast({
          title: "Item deleted successfully",
        });
        queryClient.invalidateQueries({
          queryKey: ["get-all-compaigns"],
        });

        setOpen(false);

        if (new URL(location).pathname.includes("/compaign/")) {
          navigate("/");
        }
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
        });
        setOpen(true);
      }
    } catch (e) {
      console.log(e, "error getCompaigns");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
      });
      setOpen(true);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently remove this data
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {isLoading ? (
            <ButtonLoading />
          ) : (
            <AlertDialogAction
              onClick={handleDeletion}
              className="bg-red-600 hover:bg-red-400 dark:bg-red-400 dark:hover:bg-red-400 dark:text-neutral-950"
            >
              Continue
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
