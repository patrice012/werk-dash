import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="bg-[#fff] rounded-[16px] p-[1.7rem] gap-[15px] flex flex-col w-full hover:shadow-xl text-ellipsis overflow-hidden transition-all">
      <div className="flex w-full justify-between gap-6">
        <div className="flex flex-col justify-start gap-[10px] w-full">
          <Skeleton className="h-4 w-[100%]" />
          <Skeleton className="h-4 w-[75%]" />
        </div>
        <Skeleton className="w-[40px] h-[38px]" />
      </div>
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="h-4 w-[90%] mt-2" />
      <div className="flex gap-[8px]">
        <Skeleton className="h-4 w-[20%]" />
        <Skeleton className="h-4 w-[33%]" />
        <Skeleton className="h-4 w-[15%]" />
      </div>
      <Skeleton className="h-4 w-[65%]" />
      <div className="flex justify-between w-full items-center">
        <Skeleton className="h-4 w-[100px] " />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  );
}
