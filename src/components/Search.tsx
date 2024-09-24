import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@radix-ui/react-select";
import { SearchNormal1, Location } from "iconsax-react";

export default function Search() {
  return (
    <div className="flex flex-col gap-[30px] border " >
      <div className="flex lg:flex-row w-full gap-[12.5px] flex-col">
        <div className="grow relative">
          <input
            type="text"
            placeholder="Find jobs"
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
        </div>
      </div>
    </div>
  );
}
