import { Button } from "@/components/ui/button";
import { Setting4 } from "iconsax-react";

export default function Recommended() {
  return (
    <div className="bg-[#f0f5fa] w-full px-[40px] items-center mt-[72px] flex justify-between h-[100px]">
      <span className="text-[#212222] font-[500] text-[36px]">
        Recommended Jobs
      </span>
      <div className="relative">
        <Button className="bg-[#f0f5fa] border flex gap-[12px] border-[#6a6b6d] py-[20px]  px-[20px] font-[500] rounded-full transition ease-in-out duration-300 hover:bg-[#6a6b6d]  items-center  text-[#212222]">
          Most recent
          <Setting4 size="20" color="#212222" />
        </Button>
      </div>
    </div>
  );
}
