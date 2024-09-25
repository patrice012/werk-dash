
import { Setting4 } from "iconsax-react";

export default function Recommended() {
  return (
    <div className="bg-[#f0f5fa] w-full px-[20px] items-start sm:items-center flex sm:flex-row flex-col gap-[12px] sm:justify-between py-[20px]">
      <span className="text-[#212222] font-[500] text-20-title">
        Recommended Jobs
      </span>
      <div className="relative">
        <button className="bg-[#f0f5fa] border text-[14px] flex gap-[12px] border-[#6a6b6d] py-[8px]  px-[20px] font-[500] rounded-full transition ease-in-out duration-300 hover:bg-[#6a6b6d2b]  items-center  text-[#212222]">
          Most recent
          <Setting4 size="20" color="#212222" />
        </button>
      </div>
    </div>
  );
}
