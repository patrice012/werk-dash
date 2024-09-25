import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { Switch } from "@/components/ui/switch";
import { Range } from "react-range";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  const [experience, setExperience] = useState(true);
  const [price, setPrice] = useState(true);
  const [job, setJob] = useState(true);

  const PriceRangeSlider = () => {
    const [values, setValues] = useState([1000, 25000]);

    return (
      <div>
        <Range
          step={100}
          min={0}
          max={50000}
          values={values}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "2px",
                width: "100%",
                backgroundColor: "#ccc",
                position: "relative",
              }}>
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  background: "#212222", // La couleur bleue pour la section sélectionnée
                  left: `${(values[0] / 50000) * 100}%`,
                  width: `${((values[1] - values[0]) / 50000) * 100}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "12px",
                width: "12px",
                borderRadius: "50%",
                backgroundColor: "#212222",
              }}
            />
          )}
        />
        <div className="flex gap-1 mt-4">
          <span className="text-[#6a6b6d]">${values[0].toLocaleString()}</span>{" "}
          -{" "}
          <span className="text-[#6a6b6d]">${values[1].toLocaleString()}</span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`sidebar ${
        isSidebarOpen ? "open" : "closed"
      } scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full`}>
      {/*  <div className="flex justify-between items-center  pb-[20px]">
        <span className="text-[#000] font-[600]"> Filter</span>
        <span className="text-[#f98586] text-[16px] font-[600] cursor-pointer">
          Clear all
        </span>
      </div> */}
      <div className="  pb-[20px]">
        <div className="flex flex-col justify-center">
          <div
            className="flex w-full justify-between items-center"
            onClick={() => setJob(!job)}>
            <span className="text-[#000] font-[600] text-[14px]"> Job Type</span>
            {/* {job ? (
              <ArrowUp2
                size={24}
                color="#6a6b6d"
                className="cursor-pointer"
                onClick={() => setJob(!job)}
              />
            ) : (
              <ArrowDown2
                size={24}
                color="#6a6b6d"
                className="cursor-pointer"
                onClick={() => setJob(!job)}
              />
            )} */}
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
            onClick={() => setExperience(!experience)}>
            <span className="text-[#000] font-[600] text-[14px]"> Experience level</span>
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
