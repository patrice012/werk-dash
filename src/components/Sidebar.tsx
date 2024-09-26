import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowDown2, ArrowUp2, Trash } from "iconsax-react";
import { useFilter } from "@/context/filterContext";

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <div
      className={`sidebar ${
        isSidebarOpen ? "open" : "closed"
      } scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full`}>
      <SidebarContent />
    </div>
  );
}

/* export const SidebarContent = () => {
  const [experience, setExperience] = useState(true);
  const [job, setJob] = useState(true);
  const [isVisible, setIsVisble] = useState(true);

  const { }
  
  return (
    <div className="">
      <div
        className="flex items-center w-full justify-between py-2 border-b mb-4"
        onClick={() => setJob(!job)}>
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
        <div className="flex flex-col xs:grid xl:grid-cols-1 xs:grid-cols-2 xl:col-span-1 xxs:col-span-2 justify-between gap-5">
          <div className="">
            <div
              className="flex w-full justify-between items-center"
              onClick={() => setExperience(!experience)}>
              <span className="text-[#000] font-[600] text-[14px]">
                Job type
              </span>
            </div>
            <div className="flex flex-col gap-[12px] pt-[12px]">
              <div className="flex w-full justify-start gap-[10px] items-center">
                <Checkbox className="" />
                <span className="text-[#4a4a4a] text-[.82rem] font-[500]">
                  Contract
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] pt-[12px]">
              <div className="flex w-full justify-start gap-[12px] items-center">
                <Checkbox />
                <span className="text-[#4a4a4a] text-[.82rem] font-[500]">
                  Full-Time
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] pt-[12px]">
              <div className="flex w-full justify-start gap-[12px] items-center">
                <Checkbox />
                <span className="text-[#4a4a4a] text-[.82rem] font-[500]">
                  Part-Time
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] pt-[12px]">
              <div className="flex w-full justify-start gap-[12px] items-center">
                <Checkbox />
                <span className="text-[#4a4a4a] text-[.82rem] font-[500]">
                  Internship
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-center">
              <div
                className="flex w-full justify-between items-center"
                onClick={() => setExperience(!experience)}>
                <span className="text-[#000] font-[600] text-[14px]">
                  Experience level
                </span>
              </div>
              <div>
                <div className="flex flex-col gap-[12px] pt-[12px]">
                  <div className="flex w-full justify-start gap-[12px] items-center">
                    <Checkbox />
                    <span className="text-[#4a4a4a] text-[.82rem] font-[500]">
                      1 - 3 Years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] pt-[12px]">
                  <div className="flex w-full justify-start gap-[12px] items-center">
                    <Checkbox />
                    <span className="text-[#4a4a4a] text-[.82rem] font-[500]">
                      3 - 5 Years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] pt-[12px]">
                  <div className="flex w-full justify-start gap-[12px] items-center">
                    <Checkbox />
                    <span className="text-[#4a4a4a] text-[.82rem] font-[500]">
                      5 - 10 Years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] pt-[12px]">
                  <div className="flex w-full justify-start gap-[12px] items-center">
                    <Checkbox />
                    <span className="text-[#4a4a4a] text-[.82rem] font-[500]">
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
}; */

export const SidebarContent = () => {
  const { jobTypes, experienceLevels, toggleJobType, toggleExperienceLevel } = useFilter();
  const [experience, setExperience] = useState(true);
  const [job, setJob] = useState(true);
  const [isVisible, setIsVisble] = useState(true);

  return (
    <div className="">
      <div
        className="flex items-center w-full justify-between py-2 border-b mb-4"
        onClick={() => setJob(!job)}>
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
        <div className="flex flex-col xs:grid xl:grid-cols-1 xs:grid-cols-2 xl:col-span-1 xxs:col-span-2 justify-between gap-5">
          <div>
            <div
              className="flex w-full justify-between items-center"
              onClick={() => setExperience(!experience)}>
              <span className="text-[#000] font-[600] text-[14px]">
                Job type
              </span>
            </div>
            <div className="flex flex-col gap-[12px] pt-[12px]">
              {["Contract", "Full-Time", "Part-Time", "Internship", "Temporary"].map(
                (type) => (
                  <div
                    className="flex w-full justify-start gap-[10px] items-center"
                    key={type}>
                    <Checkbox
                      checked={jobTypes.includes(type)}
                      onCheckedChange={() => toggleJobType(type)}
                    />
                    <span className="text-[#4a4a4a] text-[.82rem] font-[500]">
                      {type}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <div
                className="flex w-full justify-between items-center"
                onClick={() => setExperience(!experience)}>
                <span className="text-[#000] font-[600] text-[14px]">
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
                    className="flex w-full justify-start gap-[12px] items-center"
                    key={level}>
                    <Checkbox
                      checked={experienceLevels.includes(level)}
                      onCheckedChange={() => toggleExperienceLevel(level)}
                    />
                    <span className="text-[#4a4a4a] text-[.82rem] font-[500]">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
