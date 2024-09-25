import { Separator } from "./ui/separator";
import Job from "@/models/job.model";
import { Heart } from "iconsax-react";

export const Card = ({
  job,
  onPress,
  isSelected,
}: {
  job: Job;
  onPress: (item: unknown) => void;
  isSelected: boolean;
}) => {
  console.log(isSelected);
  return (
    <div
      onClick={() => onPress(1)}
      className={`${
        isSelected ? "border-[2.5px] border-[rgb(64,138,211)]" : ""
      } cursor-pointer bg-[#fff] rounded-[16px] p-[35px] gap-[15px] flex flex-col w-full hover:shadow-xl text-ellipsis overflow-hidden `}>
      <div className="grid w-full grid-cols-[auto_1fr_auto] justify-between items-center">
        {/* Image - largeur fixe */}
        {/*   <div className="bg-[#f8f8f8] p-[3px] rounded-[8px] h-[54px] w-[54px]">
          <img src={netflix} alt="" className="w-[48px] h-[48px]" />
        </div> */}

        <div className="flex flex-col gap-[2px] overflow-hidden">
          <span className="font-[500] text-[#000] text-[18px] truncate capitalize">
            {job.jobTitle}
          </span>
          <span className="text-[#4a4a4a] font-[500] text-[12px] truncate capitalize">
            {job.companyName}
          </span>
        </div>
        <div className="h-[54px] flex  justify-end">
          <Heart size="30" color="#888888" />
        </div>
      </div>

      <div className="flex gap-[8px]">
        <div className="bg-[#f1e3ff] px-[5px] py-[3px] text-[#7744aa] font-semibold text-[12px] rounded-[4px]">
          {job.employmentType}
        </div>
      </div>
      <span
        className="text-[#4a4a4a] text-[14px] two-line-limit"
        dangerouslySetInnerHTML={{
          __html: job?.jobDescriptionRawHtml || "",
        }}
      />

      <Separator className="my-[6px]" />

      <div className="flex justify-between w-full items-center text-ellipsis overflow-hidden ">
        <span className="text-[#4a4a4a] text-[14px] ">{job.city}</span>
        {/* <button className="bg-[#D9EBFF] hover:bg-[#408AD3] hover:text-[#fff] transition duration-500 ease-in-out px-[12px] h-[44px] items-center rounded-[4px] max-w-max text-[#388bf0] text-[18px] font-[500]">
            Apply Now
          </button> */}
        <div className="flex gap-[6px] items-center">
        
          <span className="text-[#888888] text-[14px]  capitalize">{job.country} </span>
        </div>
      </div>
    </div>
  );
};
