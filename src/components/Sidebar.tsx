import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  const [experience, setExperience] = useState(true);
  const [job, setJob] = useState(true);

  return (
    <div
      className={`sidebar ${
        isSidebarOpen ? "open" : "closed"
      } scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full`}
    >
      <div className="  pb-[20px]">
        <div className="flex flex-col justify-center">
          <div
            className="flex w-full justify-between items-center"
            onClick={() => setJob(!job)}
          >
            <span className="text-[#000] font-[600] text-[14px]">
              {" "}
              Job Type
            </span>
           
            <span className="text-[#f98586] text-[14px] font-[600] cursor-pointer">
              Clear all
            </span>
          </div>

          <>
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
            <div className="flex flex-col gap-[12px] pt-[12px]">
              <div className="flex w-full justify-start gap-[12px] items-center">
                <Checkbox />

                <span className="text-[#6a6b6d] text-18-title">Temporary</span>
              </div>
            </div>
          </>
        </div>
      </div>
      {/* <div className="  py-[20px]">
        <div className="flex w-full justify-between items-center">
          <span className="text-[#000] font-[600] text-[14px]"> Open to remote</span>
          <Switch />
        </div>
      </div> */}
      {/*   <div className="  py-[20px]">
        <div className="flex flex-col justify-center">
          <div
            className="flex w-full justify-between items-center"
            onClick={() => setPrice(!price)}>
            <span className="text-[#000] font-[600]">  Salary Range</span>
    
          </div>

        
            <>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <Checkbox />

                  <span className="text-[#6a6b6d] text-18-title">
                    Less than $1000
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <Checkbox />

                  <span className="text-[#6a6b6d] text-18-title">
                    $1000 - $15,000
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <Checkbox />

                  <span className="text-[#6a6b6d] text-18-title">
                    More than $15,000
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center pb-4">
                  <Checkbox />

                  <span className="text-[#6a6b6d] text-18-title">Custom</span>
                </div>
                <PriceRangeSlider />
              </div>
            </>
        
        </div>
      </div> */}
      <div className="  py-[20px]">
        <div className="flex flex-col justify-center">
          <div
            className="flex w-full justify-between items-center"
            onClick={() => setExperience(!experience)}
          >
            <span className="text-[#000] font-[600] text-[14px]">
              {" "}
              Experience level
            </span>
            {/* {experience ? (
              <ArrowUp2
                size={24}
                color="#6a6b6d"
                className="cursor-pointer"
                onClick={() => setExperience(!experience)}
              />
            ) : (
              <ArrowDown2
                size={24}
                color="#6a6b6d"
                className="cursor-pointer"
                onClick={() => setExperience(!experience)}
              />
            )} */}
          </div>

          <>
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
          </>
        </div>
      </div>
    </div>
  );
}
