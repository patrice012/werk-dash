import { Setting4 } from "iconsax-react";

export default function Recommended() {
  return (
    <div className="bg-[#f0f5fa] w-full px-3 sm:px-6 items-center sm:items-center flex sm:flex-row gap-[12px] sm:justify-between py-4 sm:py-[20px] justify-between">
      <span className="text-[#212222] font-medium text-40-title truncate ...">
        Recommended Jobs
      </span>
      <button className="border text-[14px] sm:text-[18px] flex gap-[10px] border-[#6a6b6d] py-[8px] sm:py-3 px-[20px] font-[500] rounded-full transition ease-in-out duration-300 hover:bg-[#6a6b6d2b]  items-center  text-[#212222]">
        <span className="truncate ...">Most recent</span>
        <Setting4 size={22} color="#212222" />
      </button>
    </div>
  );
}
