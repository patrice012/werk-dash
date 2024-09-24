import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex bg-[#fff] rounded-[6px] p-[15px] gap-[15px] flex-col border w-full">
      <div className="flex w-full justify-between">
        <div className="flex justify-start gap-[12px]">
          <Skeleton className="w-[48px] h-[48px] rounded-full" />
          <div className="flex flex-col gap-[2px]">
            <Skeleton className="h-4 w-[230px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <Skeleton className="w-[30px] h-[30px]" />
      </div>
      <Skeleton className="h-4 w-[250px]" />
      <div className="flex gap-[8px]">
        <Skeleton className="h-4 w-[50px]  rounded-[4px]" />
        <Skeleton className="h-4 w-[50px]  rounded-[4px]" />
        <Skeleton className="h-4 w-[50px]  rounded-[4px]" />
      </div>
      <Skeleton className="h-4 w-[250px]" />
      <div className="flex justify-between w-full items-center">
        <Skeleton className="h-4 w-[100px]  rounded-[4px]" />
        <Skeleton className="h-8 w-[100px]  rounded-[4px]" />
      </div>
    </div>
  );
}


