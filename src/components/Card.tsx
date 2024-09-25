import netflix from "/assets/google.png";
import { Separator } from "./ui/separator";
import Job from "@/models/job.model";
import { Clock, Heart } from "iconsax-react";

export const Card = ({
  job,
  onPress,
  isSelected,
}: {
  job: Job;
  onPress: (item: unknown) => void;
  isSelected: boolean;
}) => {
  return (
    <div
      onClick={() => onPress(1)}
      className={`${
        isSelected ? "border-[2.5px] border-[rgb(64,138,211)]" : ""
      } cursor-pointer bg-[#fff] rounded-[16px] p-[35px] gap-[15px] flex flex-col w-full hover:shadow-xl`}>
      <div className="flex w-full justify-between">
        <div className="flex justify-start gap-[12px]">
          <div className="bg-[#f8f8f8] p-[3px] rounded-[8px] h-[54px] w-[54px] ">
            <img src={netflix} alt="" className="w-[48px] h-[48px]" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="font-[500] text-[#303533] text-[18px] truncate">
              {job.jobTitle && job?.jobTitle?.length > 22 ?  job.jobTitle.slice(0,22) + "..." : job.jobTitle}
            </span>
            <span className="text-[#888888] text-[16px]">
              Pixel Studio . Yogyarkata
            </span>
          </div>
        </div>
        <Heart size="30" color="#888888" />
      </div>
      <div className="flex gap-[8px]">
        <div className="bg-[#f1e3ff] px-[5px] py-[3px] text-[#7744aa] font-semibold rounded-[4px]">
          FullTime
        </div>
        <div className="bg-[#e4fff1] px-[5px] py-[3px] text-[#4db06a] font-semibold rounded-[4px]">
          Hybrid
        </div>
        <div className="bg-[#ffede3] px-[5px] py-[3px] text-[#a97442] font-semibold rounded-[4px]">
          2-4 Years
        </div>
      </div>
      <span className="text-[#888888] two-line-limit">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore aliquid
        dignissimos  est nulla molestiae repudiandae commodi.
      </span>

      <Separator className="my-[6px]" />

      <div className="flex justify-between w-full items-center">
        <span className="text-[#bebebe]">
          <span className="text-[#000] text-[18px] font-semibold">$250</span>
          /hr
        </span>
        {/* <button className="bg-[#D9EBFF] hover:bg-[#408AD3] hover:text-[#fff] transition duration-500 ease-in-out px-[12px] h-[44px] items-center rounded-[4px] max-w-max text-[#388bf0] text-[18px] font-[500]">
            Apply Now
          </button> */}
        <div className="flex gap-[6px] items-center">
          {" "}
          <Clock size="20" color="#888888" />{" "}
          <span className="text-[#888888]"> Posted 2 day ago </span>
        </div>
      </div>
    </div>
  );
};
