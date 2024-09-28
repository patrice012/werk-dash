import { Separator } from "./ui/separator";
import Job from "@/models/job.model";
import { Heart } from "iconsax-react";

export const Card = ({
  job,
  onPress,
  isSelected,
}: {
  job?: Job;
  onPress: (item: unknown) => void;
  isSelected?: boolean;
}) => {
  return (
    <div
      onClick={() => onPress(1)}
      className={`${
        isSelected ? "border-[rgb(64,138,211)]" : " border-transparent"
      } transition-all border-[2.5px] h-max  cursor-pointer bg-[#fff] rounded-[16px] p-[1.7rem] gap-[15px] flex flex-col w-full hover:shadow-xl text-ellipsis overflow-hidden `}
    >
      <div className="grid w-full grid-cols-[5fr_1fr] gap-x-2 justify-between items-center">
        <div className="flex flex-col gap-[2px] overflow-hidden">
          <span className="font-[500] text-[#000] text-[1.15rem] truncate capitalize">
            {job?.jobTitle}
          </span>
          <span className="text-[#4a4a4a] font-[500] text-[12px] truncate capitalize">
            {job?.companyName}
          </span>
        </div>
        <div className="h-[54px] flex  justify-end">
          <Heart size="30" color="#888888" />
        </div>
      </div>
      <div className="flex gap-[8px]">
        <div className="bg-[#f1e3ff] px-[6px] py-[3px] text-[#7744aa] font-semibold text-[12px] rounded-[4px]">
          {job?.employmentType}
        </div>
      </div>
      <p
        className="text-[#2e2e2e] text-[14px] two-line-limit font-normal"
        dangerouslySetInnerHTML={{
          __html: job?.jobDescriptionRawHtml?.trim() || "",
        }}
      />
      <Separator />
      <div className="flex gap-4 justify-between w-full items-center text-ellipsis overflow-hidden ">
        <span className="text-[#4a4a4a] text-[14px] truncate ...">
          {job?.updatedAt?.slice(0, 10)}
        </span>
        <div className="flex gap-[6px] items-center">
          <span className="text-[#888888] capitalize truncate ...">
            {job?.city}, <span className="uppercase">{job?.country}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
