import { Skeleton } from "@/components/ui/skeleton";
import { TableRow, TableCell } from "../ui/table";

export const TableLoadingSkeleton = () => {
  return (
    <>
      <TableRow>
        <TableCell className="font-medium py-4">
          <Skeleton className="h-4 w-full" />
        </TableCell>
        <TableCell className="font-medium py-4">
          <Skeleton className="h-4 w-full" />
        </TableCell>
        <TableCell className="font-medium py-4">
          <Skeleton className="h-4 w-full" />
        </TableCell>
        <TableCell className="font-medium py-4">
          <Skeleton className="h-4 w-full" />
        </TableCell>
        <TableCell className="font-medium py-4">
          <Skeleton className="h-4 w-full" />
        </TableCell>
      </TableRow>
    </>
  );
};
