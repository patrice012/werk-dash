
import { Setting4 } from "iconsax-react";

export default function Recommended() {
  return (
    <div className="bg-[#f0f5fa] w-full px-[20px] items-center flex justify-between h-[100px]">
      <span className="text-[#212222] font-[500] text-[28px]">
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
