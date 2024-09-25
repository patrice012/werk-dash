import {
  HambergerMenu,
  Map1,
  Notification,
  SearchNormal1,
} from "iconsax-react";
import profile from "/assets/profileImg.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  return (
    <div className="bg-[#141414] px-5 pb-5 pt-2 h-[225px]">
      <div className="flex items-center justify-between w-full resize-none">
        <div className="flex justify-start gap-[12px] items-center">
          <div
            className="bg-[#e8edf0] rounded-[4px] cursor-pointer flex xl:hidden"
            id="openSidebar"
            onClick={toggleSidebar}>
            <HambergerMenu size="32" color="#0f7afd" />
          </div>
          <span
            className="text-24-title font-[900] text-[#0f7afd] cursor-pointer"
            onClick={() => navigate("/")}>
            WerkLinker
          </span>
        </div>
        <nav className="text-white">
          <ul className="gap-[30px] hidden lg:flex">
            <li className="text-[15px] font-normal cursor-pointer ">
              Find Jobs
            </li>
            <li className="text-[15px] font-normal cursor-pointer ">
              Find Talent
            </li>
            <li className="text-[15px] font-normal cursor-pointer">
              Upload Job
            </li>
            <li className="text-[15px] font-normal cursor-pointer">About Us</li>
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
          <div className="p-[6px] border border-[#1E1E1E] rounded-full bg-[#1E1E1E]">
            <Notification size={22} color="white" className="cursor-pointer" />
          </div>
          <div className="flex gap-[12px] items-center text-white">
            <span className="text-[15px] font-normal">Kang Addin</span>
            <img src={profile} className="w-[40px]" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-white font-medium text-3xl">
          Find your dream job here
        </h1>
        <div className="w-full bg-white flex gap-4 rounded-[37.5px] h-[65px] p-2">
          <div className="grow flex gap-4 items-center divide-x">
            <div className="px-3 grow flex items-center">
              <SearchNormal1 size="24" color="#b9b9b9" />
              <Input
                // value={searchTerm}
                // onChange={handleChange}
                type="search"
                placeholder="Job title or keyword"
              />
            </div>
            <div className="px-3 grow flex items-center">
              <Map1 size="24" color="#b9b9b9" />
              <Input
                // value={searchTerm}
                // onChange={handleChange}
                prefix="Prefix"
                type="search"
                placeholder="Add country or city"
              />
            </div>
          </div>
          <div className="h-full">
            <Button className="h-full w-[120px] bg-[#2A85FF] hover:bg-[#2A85FF]/70 rounded-[37.5px]">
              <span>Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
