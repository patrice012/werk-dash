import { Setting4 } from "iconsax-react";

export default function Recommended() {
  return (
    <div className="bg-[#f0f5fa] w-full px-3 items-center sm:items-center flex sm:flex-row gap-[12px] sm:justify-between py-4 sm:py-[20px] justify-between">
      <span className="text-[#212222] font-[500] text-20-title truncate ...">
        Recommended Jobs
      </span>
      <button className="bg-[#f0f5fa] border text-[14px] flex gap-[10px] border-[#6a6b6d] py-[8px]  px-[20px] font-[500] rounded-full transition ease-in-out duration-300 hover:bg-[#6a6b6d2b]  items-center  text-[#212222]">
        <span className="truncate ...">Most recent</span>
        <Setting4 size="18" color="#212222" />
      </button>
    </div>
  );
}
