import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useFilter } from "@/context/filterContext";

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div
      className={`sidebar ${
        isSidebarOpen ? "open" : "closed"
      } scrollbar scrollbar-thumb-[#d4d4d4] scrollbar-w-[7px] scrollbar-thumb-rounded-full`}
    >
      <SidebarContent />
    </div>
  );
}

export const SidebarContent = () => {
  const {
    jobTypes,
    experienceLevels,
    toggleJobType,
    toggleExperienceLevel,
    setJobTypes,
    setExperienceLevels,
  } = useFilter();
  const [isVisible, setIsVisble] = useState(true);

  return (
    <>
      {isVisible && (
        <div className="flex flex-col xs:grid xl:grid-cols-1 xs:grid-cols-2 xl:col-span-1 xxs:col-span-2 justify-between gap-5">
          <div>
            <div className="flex w-full justify-between items-center">
              <span className="text-[#000] font-[600] text-[14px] sm:text-[18px]">
                Job type
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setJobTypes([]);
                    setExperienceLevels([]);
                  }}
                  className="text-[#f98586] font-semibold sm:text-[18px] cursor-pointer"
                >
                  Clear all
                </button>
                {/* <button
                  className="sm:hidden"
                  onClick={() => setIsVisble(!isVisible)}
                >
                  {isVisible ? (
                    <ArrowDown2 color="#000" />
                  ) : (
                    <ArrowUp2 color="#000" />
                  )}
                </button> */}
              </div>
            </div>
            <div className="flex flex-col gap-[12px] pt-[12px]">
              {[
                "Contract",
                "Full-Time",
                "Part-Time",
                "Internship",
                "Temporary",
              ].map((type) => (
                <div
                  className="flex mb-2 w-full justify-start gap-[10px] items-center"
                  key={type}
                >
                  <Checkbox
                    className="size-5 rounded-[5px]"
                    checked={jobTypes.includes(type)}
                    onCheckedChange={() => toggleJobType(type)}
                  />
                  <span className="text-[#4a4a4a] text-[.82rem] sm:text-[18px] font-[500]">
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <div className="flex w-full justify-between items-center">
                <span className="text-[#000] font-[600] text-[14px] sm:text-[18px]">
                  Experience level
                </span>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                {[
                  "1 - 3 Years",
                  "3 - 5 Years",
                  "5 - 10 Years",
                  "More than 10 Years",
                ].map((level) => (
                  <div
                    className="flex mb-2 w-full justify-start gap-[12px] items-center"
                    key={level}
                  >
                    <Checkbox
                      className="size-5 rounded-[5px]"
                      checked={experienceLevels.includes(level)}
                      onCheckedChange={() => toggleExperienceLevel(level)}
                    />
                    <span className="text-[#4a4a4a] text-[.82rem] sm:text-[18px] font-[500]">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
