import { ArrowDown2, HambergerMenu, Notification } from "iconsax-react";
import profile from "/assets/profileImg.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar({ toggleSidebar } : { toggleSidebar : () => void}) {
  return (
    <div className="bg-[#fff] flex items-center justify-between h-[72px] max-h-[72px] top-0 absolute w-full resize-none border-b border-[#b9b9b9] px-[15px] md:px-[30px] ">
      <div className="flex justify-start gap-[12px] items-center">
        <div
          className="bg-[#e8edf0] border rounded-[4px] cursor-pointer flex xl:hidden"
          id="openSidebar" onClick={toggleSidebar}>
          <HambergerMenu size="32" color="#0f7afd" />
        </div>
        <span className="text-24-title font-[900] text-[#0f7afd]">
          WerkLinker
        </span>
      </div>
      <nav>
        <ul className=" gap-[64px] hidden lg:flex">
          <li className="text-18-title text-[#000]  font-[400] hover:font-[600] cursor-pointer ">
            Home
          </li>
          <li className="text-18-title text-[#000] font-[400] hover:font-[600] cursor-pointer">
            About us
          </li>
          <li className="text-18-title text-[#000] font-[400] hover:font-[600] cursor-pointer">
            Jobs
          </li>
          <li className="text-18-title text-[#000] font-[400] hover:font-[600] cursor-pointer">
            Insight
          </li>
        </ul>
      </nav>
      <div className="flex lg:hidden">
        <Select>
          <SelectTrigger className="border flex items-center px-2 bg-[#fff] h-[32px] justify-between w-[150px] rounded-[4px] active:outline-0 focus:outline-0">
            <SelectValue placeholder="Home" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="banana">About us</SelectItem>
              <SelectItem value="jobs">Jobs</SelectItem>
              <SelectItem value="insight">Insight</SelectItem>
              <SelectItem value="account" className="flex md:hidden">
                Account
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="hidden gap-[24px] items-center md:flex">
        <Notification size="28" color="#000" className="cursor-pointer" />
        <div className="flex gap-[12px] items-center">
          <img src={profile} className="w-[40px]" alt="" />
          <span className="font-[600] text-[#000]">Kang Addin</span>
          <ArrowDown2 size="28" color="#000" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
