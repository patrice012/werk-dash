import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoList } from "react-icons/io5";
import { SearchNormal1, Location, Category, Save2 } from "iconsax-react";
import netflix from "/assets/google.png";
import oracle from "/assets/oracle.png";
import favicon from "/assets/favicon.png";

export default function Page() {
  function Card() {
    return (
      <div className=" flex flex-col lg:flex-row items-center justify-between w-full gap-[30px] ">
        <div className="bg-[#fff] rounded-[8px] p-[20px] gap-[15px] flex flex-col w-full hover:shadow-xl">
          <div className="flex w-full justify-between">
            <div className="flex justify-start gap-[12px]">
              <img src={favicon} alt="" className="w-[56px]" />
              <div className="flex flex-col gap-[6px]">
                <span className="font-[600] text-20-title">UI/UX Designer</span>
                <span className="text-[#888888]">
                  Pixel Studio . Yogyarkata
                </span>
              </div>
            </div>
            <Save2 size="32" color="#888888" />
          </div>
          <span className="text-[#888888]">Match with your profile</span>
          <div className="flex justify-start gap-[6px]">
            <div className="bg-[#e8edf0] p-[4px] rounded-[4px]">FullTime</div>
            <div className="bg-[#e8edf0] p-[4px] rounded-[4px]">Hybrid</div>
            <div className="bg-[#e8edf0] p-[4px] rounded-[4px]">2-4 Years</div>
          </div>
          <span className="text-[#888888]">2 day ago . 140 applicants</span>
          <div className="flex justify-between w-full items-center">
            <span className="">
              {" "}
              <span className="text-[#388bf0] text-18-title font-[600]">
                $1000
              </span>
              /m
            </span>
            <button className="bg-[#388bf06c] hover:bg-[#388bf0c8] hover:text-[#fff] transition duration-500 ease-in-out  px-[12px] h-[48px] items-center rounded-[4px] w-[150px] text-[#388bf0] text-20-title font-[600]">
              Apply Now
            </button>
          </div>
        </div>
        <div className="bg-[#fff] rounded-[8px] p-[20px] gap-[15px] flex flex-col w-full hover:shadow-xl ">
          <div className="flex w-full justify-between">
            <div className="flex justify-start gap-[12px]">
              <img src={oracle} alt="" className="w-[56px]" />
              <div className="flex flex-col gap-[6px]">
                <span className="font-[600] text-20-title">UI/UX Designer</span>
                <span className="text-[#888888]">
                  Pixel Studio . Yogyarkata
                </span>
              </div>
            </div>
            <Save2 size="32" color="#888888" />
          </div>
          <span className="text-[#888888]">Match with your profile</span>
          <div className="flex justify-start gap-[6px]">
            <div className="bg-[#e8edf0] p-[4px] rounded-[4px]">FullTime</div>
            <div className="bg-[#e8edf0] p-[4px] rounded-[4px]">Hybrid</div>
            <div className="bg-[#e8edf0] p-[4px] rounded-[4px]">2-4 Years</div>
          </div>
          <span className="text-[#888888]">2 day ago . 140 applicants</span>
          <div className="flex justify-between w-full items-center">
            <span className="">
              {" "}
              <span className="text-[#388bf0] text-18-title font-[600]">
                $1000
              </span>
              /m
            </span>
            <button className="bg-[#388bf06c] hover:bg-[#388bf0c8] hover:text-[#fff] transition duration-500 ease-in-out  px-[12px] h-[48px] items-center rounded-[4px] w-[150px] text-[#388bf0] text-20-title font-[600]">
              Apply Now
            </button>
          </div>
        </div>
        <div className="bg-[#fff] rounded-[8px] p-[20px] gap-[15px] flex flex-col w-full hover:shadow-xl">
          <div className="flex w-full justify-between">
            <div className="flex justify-start gap-[12px]">
              <img src={netflix} alt="" className="w-[56px]" />
              <div className="flex flex-col gap-[6px]">
                <span className="font-[600] text-20-title">UI/UX Designer</span>
                <span className="text-[#888888]">
                  Pixel Studio . Yogyarkata
                </span>
              </div>
            </div>
            <Save2 size="32" color="#888888" />
          </div>
          <span className="text-[#888888]">Match with your profile</span>
          <div className="flex justify-start gap-[6px]">
            <div className="bg-[#e8edf0] p-[4px] rounded-[4px]">FullTime</div>
            <div className="bg-[#e8edf0] p-[4px] rounded-[4px]">Hybrid</div>
            <div className="bg-[#e8edf0] p-[4px] rounded-[4px]">2-4 Years</div>
          </div>
          <span className="text-[#888888]">2 day ago . 140 applicants</span>
          <div className="flex justify-between w-full items-center">
            <span className="">
              {" "}
              <span className="text-[#388bf0] text-18-title font-[600]">
                $1000
              </span>
              /m
            </span>
            <button className="bg-[#388bf06c] hover:bg-[#388bf0c8] hover:text-[#fff] transition duration-500 ease-in-out  px-[12px] h-[48px] items-center rounded-[4px] w-[150px] text-[#388bf0] text-20-title font-[600]">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full gap-[30px] p-[30px] scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full  ">
      <div className="flex lg:flex-row w-full justify-between gap-3 flex-col  ">
        <div className="relative">
          <input
            type="text"
            className="rounded-[4px] h-[48px] lg:w-[300px] xl:w-[320px] 2xl:w-[400px]  bg-[#fff] border-[#b9b9b9] focus:outline-0 pl-[40px] pr-[10px]"
          />
          <SearchNormal1
            size="24"
            color="#b9b9b9"
            className="absolute top-[12px] left-[10px]"
          />
        </div>

        <Select>
          <SelectTrigger className="border flex items-center px-2 bg-[#fff] h-[48px] justify-between w-[150px] rounded-[4px] active:outline-0 focus:outline-0">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="relative">
          <input
            type="text"
            className="rounded-[4px] h-[48px] lg:w-[300px] xl:w-[320px] 2xl:w-[400px] bg-[#fff] border-[#b9b9b9] focus:outline-0 pl-[40px] pr-[10px]"
          />
          <Location
            size="24"
            color="#b9b9b9"
            className="absolute top-[12px] left-[10px]"
          />
        </div>
        <button className="bg-[#388bf0] font-[500] transition ease-in-out duration-300 hover:bg-[#388bf0c5] px-[12px] h-[48px] items-center rounded-[4px] w-[100px] text-[#fff]">
          Search
        </button>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 items-center w-full justify-between">
        <div className="flex justify-start gap-[12px]">
          <span className="text-[#888888] text-15-title">Showing</span>
          <span className="font-[500] text-15-title">150</span>
          <span className="text-[#888888] text-15-title">Jobs</span>
          <span className="font-[500] text-18-title">UI/UX Designer</span>
          <span className="text-[#888888] text-15-title">in</span>
          <span className="font-[500] text-15-title">Indonesia</span>
        </div>
        <div className="flex items-center justify-start gap-[12px]">
          <span className="text-[#888888]">Short by</span>
          <Select>
            <SelectTrigger className="border flex items-center px-2  border-[#888888] bg-[#ececec] h-[32px] justify-between w-[150px] rounded-[4px] focus:outline-0">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
