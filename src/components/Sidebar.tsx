import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowDown2, ArrowUp2, Trash } from "iconsax-react";

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div
      className={`sidebar ${
        isSidebarOpen ? "open" : "closed"
      } scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full`}
    >
      <SidebarContent />
    </div>
  );
}

export const SidebarContent = () => {
  const [experience, setExperience] = useState(true);
  const [job, setJob] = useState(true);
  const [isVisible, setIsVisble] = useState(true);

  return (
    <div className="">
      <div
        className="flex items-center w-full justify-between py-2 border-b mb-4"
        onClick={() => setJob(!job)}
      >
        <span className="text-[#000]">Filter by</span>
        <div className="flex items-center gap-3">
          {isVisible && (
            <button className="text-[#f98586] text-[14px] font-[600] cursor-pointer">
              <Trash />
            </button>
          )}
          <button onClick={() => setIsVisble(!isVisible)}>
            {isVisible ? (
              <ArrowDown2 color="#000" />
            ) : (
              <ArrowUp2 color="#000" />
            )}
          </button>
        </div>
      </div>
      {isVisible && (
        <div className="flex justify-between lg:flex-col gap-5">
          <div className="">
            <div
              className="flex w-full justify-between items-center"
              onClick={() => setExperience(!experience)}
            >
              <span className="text-[#000] font-[600] text-[14px]">
                Job type
              </span>
            </div>
            <div className="flex flex-col gap-[12px] pt-[12px]">
              <div className="flex w-full justify-start gap-[12px] items-center">
                <Checkbox className="" />
                <span className="text-[#6a6b6d] text-18-title">Contract</span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] pt-[12px]">
              <div className="flex w-full justify-start gap-[12px] items-center">
                <Checkbox />
                <span className="text-[#6a6b6d] text-18-title">Full-Time</span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] pt-[12px]">
              <div className="flex w-full justify-start gap-[12px] items-center">
                <Checkbox />
                <span className="text-[#6a6b6d] text-18-title">Part-Time</span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] pt-[12px]">
              <div className="flex w-full justify-start gap-[12px] items-center">
                <Checkbox />
                <span className="text-[#6a6b6d] text-18-title">Internship</span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center">
              <div
                className="flex w-full justify-between items-center"
                onClick={() => setExperience(!experience)}
              >
                <span className="text-[#000] font-[600] text-[14px]">
                  Experience level
                </span>
              </div>
              <div>
                <div className="flex flex-col gap-[12px] pt-[12px]">
                  <div className="flex w-full justify-start gap-[12px] items-center">
                    <Checkbox />
                    <span className="text-[#6a6b6d] text-18-title">
                      1 - 3 Years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] pt-[12px]">
                  <div className="flex w-full justify-start gap-[12px] items-center">
                    <Checkbox />
                    <span className="text-[#6a6b6d] text-18-title">
                      3 - 5 Years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] pt-[12px]">
                  <div className="flex w-full justify-start gap-[12px] items-center">
                    <Checkbox />
                    <span className="text-[#6a6b6d] text-18-title">
                      5 - 10 Years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] pt-[12px]">
                  <div className="flex w-full justify-start gap-[12px] items-center">
                    <Checkbox />
                    <span className="text-[#6a6b6d] text-18-title">
                      More than 10 Years
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
