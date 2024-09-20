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
import { IoMdClose } from "react-icons/io";
import netflix from "/assets/google.png";
import { useRef, useState } from "react";

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSeletedItem] = useState<number>();

  const handleSelectItem = (item: number) => {
    scrollRef.current?.scrollTo({ top: 0 });
    setSeletedItem(item);
  };

  return (
    <div className="flex flex-col w-full gap-[30px] p-[30px] scrollbar scrollbar-thumb-[#5a5959]/50 scrollbar-w-[5px] scrollbar-h-44 scrollbar-thumb-rounded-full">
      <div className="flex lg:flex-row w-full gap-[12.5px] flex-col">
        <div className="grow relative">
          <input
            type="text"
            className="w-full rounded-[4px] h-[48px] bg-[#fff] border-[#b9b9b9] focus:outline-0 pl-[40px] pr-[10px]"
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
        <div className="h-[48px] grow relative">
          <input
            type="text"
            className="grow rounded-[4px] h-full w-full bg-[#fff] border-[#b9b9b9] focus:outline-0 pl-[40px] pr-[10px]"
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
          <div className="bg-[#e8edf0] rounded-[4px] p-[6px]">
            <Category size="24" color="#000" className="cursor-pointer" />
          </div>
          <IoList size={28} color="#888888" className="cursor-pointer" />
        </div>
      </div>

      {/*  */}
      <div ref={scrollRef} className="grid grid-cols-3 gap-5 items-start">
        <div
          className={`grid ${
            selectedItem != undefined ? "grid-rows-1" : "grid-cols-3 col-span-3"
          } gap-[20px]`}
        >
          {Array.from({ length: 9 }).map((e: unknown, idx: number) => {
            const selected = selectedItem == idx;
            return (
              <Card
                isSelected={selected}
                key={idx}
                onPress={() => handleSelectItem(idx)}
                id={idx}
              />
            );
          })}
        </div>

        <div
          className={`${
            selectedItem != undefined ? "sticky" : "hidden"
          }  top-[20px] col-span-2 p-[15px] bg-[#fff] rounded-[4px] max-h-max`}
        >
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setSeletedItem(undefined)}
              className="cursor-pointer absolute right-0 top-0 p-[6px]"
            >
              <IoMdClose size={30} />
            </button>
            <h1 className="font-[500] text-[#303533] text-[18px]">
              UI/UX Designer {selectedItem}
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              aliquid dignissimos quia officia illum saepe. Sunt rerum
              perferendis, est nulla molestiae repudiandae commodi ex obcaecati
              aspernatur, inventore dolores, eum tempore.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              aliquid dignissimos quia officia illum saepe. Sunt rerum
              perferendis, est nulla molestiae repudiandae commodi ex obcaecati
              aspernatur, inventore dolores, eum tempore.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              aliquid dignissimos quia officia illum saepe. Sunt rerum
              perferendis, est nulla molestiae repudiandae commodi ex obcaecati
              aspernatur, inventore dolores, eum tempore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({
  id,
  onPress,
  isSelected,
}: {
  id: number;
  onPress: (item: unknown) => void;
  isSelected: boolean;
}) => {
  return (
    <div
      onClick={() => onPress(id)}
      className={`${
        isSelected ? "border-[2.5px] border-[#408AD3]" : ""
      } cursor-pointer bg-[#fff] rounded-[4px] p-[15px] gap-[15px] flex flex-col w-full hover:shadow-xl`}
    >
      <div className="flex w-full justify-between">
        <div className="flex justify-start gap-[12px]">
          <img src={netflix} alt="" className="w-[48px] h-[48px]" />
          <div className="flex flex-col gap-[2px]">
            <span className="font-[500] text-[#303533] text-[18px]">
              UI/UX Designer {id}
            </span>
            <span className="text-[#888888] text-[16px]">
              Pixel Studio . Yogyarkata
            </span>
          </div>
        </div>
        <Save2 size={28} color="#888888" />
      </div>
      <span className="text-[#888888]">Match with your profile</span>
      <div className="flex gap-[8px]">
        <div className="bg-[#F5F5F5] px-[5px] py-[3px] text-[#696D6C] font-semibold rounded-[4px]">
          FullTime
        </div>
        <div className="bg-[#F5F5F5] px-[5px] py-[3px] text-[#696D6C] font-semibold rounded-[4px]">
          Hybrid
        </div>
        <div className="bg-[#F5F5F5] px-[5px] py-[3px] text-[#696D6C] font-semibold rounded-[4px]">
          2-4 Years
        </div>
      </div>
      <span className="text-[#888888]">2 day ago . 140 applicants</span>
      <div className="flex justify-between w-full items-center">
        <span className="">
          <span className="text-[#388bf0] text-[18px] font-semibold">
            $1000
          </span>
          /m
        </span>
        <button className="bg-[#D9EBFF] hover:bg-[#408AD3] hover:text-[#fff] transition duration-500 ease-in-out px-[12px] h-[44px] items-center rounded-[4px] max-w-max text-[#388bf0] text-[18px] font-[500]">
          Apply Now
        </button>
      </div>
    </div>
  );
};

{
  /* <div className="bg-[#fff] rounded-[8px] p-[20px] gap-[15px] flex flex-col w-full hover:shadow-xl border">
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
        </div> */
}
