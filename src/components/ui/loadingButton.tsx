import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "./button";

export function ButtonLoading() {
  return (
    <Button variant={"outline"} disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}
