import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { Switch } from "@/components/ui/switch";
import { Range } from "react-range";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function Sidebar({ isSidebarOpen } : { isSidebarOpen : boolean}) {
  const [experience, setExperience] = useState(true);
  const [price, setPrice] = useState(true);
  const [job, setJob] = useState(true);

  const Histogram = () => {
    const data = {
      labels: ["0", "5000", "10000", "15000", "20000", "25000"],
      datasets: [
        {
          label: "Price distribution",
          data: [5, 15, 25, 10, 20, 30],
          backgroundColor: "rgba(0, 123, 255, 0.5)",
        },
      ],
    };

    const options = {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    return <Bar data={data} options={options} />;
  };

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
                  background: "#0f7afd", // La couleur bleue pour la section sélectionnée
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
                height: "24px",
                width: "24px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                border: "2px solid #0f7afd",
              }}
            />
          )}
        />
        <div className="flex gap-1 mt-4">
          <span className="text-[#888888]">${values[0].toLocaleString()}</span>{" "}
          -{" "}
          <span className="text-[#888888]">${values[1].toLocaleString()}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="flex justify-between items-center border-b border-[#b9b9b9] pb-[20px]">
        <span className="text-[#000] font-[600]"> Filter</span>
        <span className="text-[#0f7afd] font-[600] cursor-pointer">
          Clear All
        </span>
      </div>
      <div className=" border-b border-[#b9b9b9] py-[20px]">
        <div className="flex flex-col justify-center">
          <div className="flex w-full justify-between items-center">
            <span className="text-[#000] font-[600]"> Job Type</span>
            {job ? (
              <ArrowUp2
                size={24}
                color="#6e6e6e"
                className="cursor-pointer"
                onClick={() => setJob(!job)}
              />
            ) : (
              <ArrowDown2
                size={24}
                color="#6e6e6e"
                className="cursor-pointer"
                onClick={() => setJob(!job)}
              />
            )}
          </div>
          {job && (
            <>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">Contract</span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">
                    Full-Time
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">
                    Part-Time
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">
                    Internship
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className=" border-b border-[#b9b9b9] py-[20px]">
        <div className="flex w-full justify-between items-center">
          <span className="text-[#000] font-[600]"> Open to remote</span>
          <Switch />
        </div>
      </div>
      <div className=" border-b border-[#b9b9b9] py-[20px]">
        <div className="flex flex-col justify-center">
          <div className="flex w-full justify-between items-center">
            <span className="text-[#000] font-[600]"> Range Salary</span>
            {price ? (
              <ArrowUp2
                size={24}
                color="#6e6e6e"
                className="cursor-pointer"
                onClick={() => setPrice(!price)}
              />
            ) : (
              <ArrowDown2
                size={24}
                color="#6e6e6e"
                className="cursor-pointer"
                onClick={() => setPrice(!price)}
              />
            )}
          </div>

          {price && (
            <>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">
                    Less than $1000
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">
                    $1000 - $15,000
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">
                    More than $15,000
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center pb-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">Custom</span>
                </div>
                <PriceRangeSlider />
              </div>
            </>
          )}
        </div>
      </div>
      <div className=" border-b border-[#b9b9b9] py-[20px]">
        <div className="flex flex-col justify-center">
          <div className="flex w-full justify-between items-center">
            <span className="text-[#000] font-[600]"> Experience</span>
            {experience ? (
              <ArrowUp2
                size={24}
                color="#6e6e6e"
                className="cursor-pointer"
                onClick={() => setExperience(!experience)}
              />
            ) : (
              <ArrowDown2
                size={24}
                color="#6e6e6e"
                className="cursor-pointer"
                onClick={() => setExperience(!experience)}
              />
            )}
          </div>
          {experience && (
            <>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">
                    1 - 3 Years
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">
                    3 - 5 Years
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">
                    5 - 10 Years
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] pt-[12px]">
                <div className="flex w-full justify-start gap-[12px] items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#6e6e6e] text-18-title">
                    More than 10 Years
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
