import { Checkbox } from "@/components/ui/checkbox";
import { FilterContext } from "@/context/filterContext";
import { useContext } from "react";

export default function Sidebar({
  onTagItemPress,
}: {
  onTagItemPress: (value: string) => void;
}) {
  const { jobTypes, toggleJobType, setJobTypes } = useContext(FilterContext);
  const url = window.document.location.href;
  const jobTitleTerms = new URL(url).searchParams.get("jobTitle");

  return (
    <div
      key="side-bar"
      className="xl:sticky top-[10px] w-full xl:max-w-[300px] scrollbar scrollbar-thumb-[#d4d4d4] scrollbar-w-[7px] scrollbar-thumb-rounded-full"
    >
      <div className="flex flex-col xs:grid xl:grid-cols-1 xs:grid-cols-2 xl:col-span-1 xs:col-span-2 justify-between gap-5">
        <div>
          <div className="flex w-full justify-between items-center">
            <span className="text-[#000] font-[600] text-[14px] sm:text-[18px]">
              Job type
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setJobTypes([]);
                }}
                className="text-[#f98586] font-semibold sm:text-[18px] cursor-pointer"
              >
                Clear all
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] pt-[12px]">
            {[
              "Contract",
              "Full-Time",
              "Part-Time",
              "Internship",
              "Temporary",
            ].map((type, idx) => (
              <div
                className="flex mb-2 w-full justify-start gap-[10px] items-center"
                key={idx}
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
                Most popular
              </span>
            </div>
            <div className="flex flex-col xl:flex-wrap gap-3 items-start pt-[12px]">
              {["DevOps", "Software", "Full-Stack", "Engineer"].map(
                (level, idx) => {
                  const isSelected =
                    jobTitleTerms?.toLowerCase().trim() ===
                    level?.toLowerCase().trim();
                  return (
                    <div
                      key={idx}
                      onClick={() => onTagItemPress(level)}
                      className={`${
                        isSelected
                          ? "bg-[#0f7afdae] border-[#0f7afd] hover:bg-[#0f7afdab]"
                          : "bg-[#d9d8d6] border-[#bdbdbd] hover:bg-[#b6b5b4]"
                      }  border-2 border-solid rounded-full text-[.82rem] sm:text-[18px] font-[500] transition ease-in-out duration-500 cursor-pointer max-w-max px-[15px] py-[10px]`}
                    >
                      <span>{level}</span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
