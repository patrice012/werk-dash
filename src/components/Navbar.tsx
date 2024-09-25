import {
  CloseCircle,
  HambergerMenu,
  Map1,
  Notification,
  SearchNormal1,
} from "iconsax-react";
import profile from "/assets/profileImg.png";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/job/");

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleOpen = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log("first", isSidebarOpen);
  };

  return (
    <>
      <div className="bg-[#000] px-3 sm:px-5 pb-[30px] pt-2">
        <div className="flex items-center justify-between w-full resize-none">
          <div className="flex justify-start gap-[12px] items-center">
            <span
              className="text-24-title font-[900] text-[#0f7afd] cursor-pointer"
              onClick={() => navigate("/")}>
              WerkLinker
            </span>
          </div>
          <nav className="text-white">
            <ul className="gap-[30px] hidden md:flex">
              <li className="text-[15px] font-normal cursor-pointer ">
                Find Jobs
              </li>
              <li className="text-[15px] font-normal cursor-pointer ">
                Find Talent
              </li>
              <li className="text-[15px] font-normal cursor-pointer">
                Upload Job
              </li>
              <li className="text-[15px] font-normal cursor-pointer">
                About Us
              </li>
            </ul>
          </nav>
          <div className="flex md:hidden">
            <div
              className=" border border-[#fff] rounded-[4px] cursor-pointer flex xl:hidden"
              id="openSidebar"
              onClick={toggleOpen}>
              <HambergerMenu size="32" color="#fff" />
            </div>
          </div>
          <div className="hidden gap-[24px] items-center md:flex">
            <div className="p-[6px] border border-[#1E1E1E] rounded-full bg-[#1E1E1E]">
              <Notification
                size={22}
                color="white"
                className="cursor-pointer"
              />
            </div>
            <div className="flex gap-[12px] items-center text-white">
              <span className="text-[15px] font-normal">Kang Addin</span>
              <img src={profile} className="w-[40px]" alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 sm:gap-3 mt-4">
          <div className="flex items-center">
            <h1 className="text-white font-medium text-lg sm:text-3xl">
              Find your dream job here
            </h1>
            <div className="h-10 sm:h-20">
              <img className="h-full " src="/unnamed.webp" alt="" />
            </div>
          </div>
          {!isDetailPage && (
            <div className="flex flex-col sm:flex-row w-full bg-white gap-4 rounded-[15px] sm:rounded-[35px] sm:h-[70px] p-3">
              <div className="flex flex-col sm:flex-row grow  gap-4 items-center sm:divide-x">
                <div className="px-2 sm:px-3 grow flex items-center">
                  <SearchNormal1 size="24" color="#b9b9b9" />
                  <Input
                    // value={searchTerm}
                    // onChange={handleChange}
                    type="search"
                    placeholder="Job title or keyword"
                  />
                </div>
                <div className="px-2 sm:px-3 grow flex items-center">
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
                <Button className="w-full h-full sm:w-[120px] bg-[#2A85FF] hover:bg-[#2A85FF]/70 rounded-[35px]">
                  <span className="p-1">Search</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        {isSidebarOpen && (
          <div className="navmenu">
            <div className="px-12 py-16 z-20 " onClick={toggleOpen}>
              <CloseCircle size="32" color="#fff" />
            </div>
            <div className=" flex flex-col gap-[24px] right-0  top-0 bg-neutral-900  h-full p-12 pb-2 rounded-s-2xl">
              <div>
                <a href="" className="font-normal text-[#fff] text-20-title">
                  About Us
                </a>
              </div>
              <div>
                <a href="" className="font-normal text-[#fff] text-20-title">
                  Services
                </a>
              </div>
              <div>
                <a href="" className="font-normal  text-[#fff] text-20-title">
                  Use Cases
                </a>
              </div>
              <div>
                <a href="" className="font-normal text-[#fff] text-20-title">
                  Pricing
                </a>
              </div>
              <div>
                <a href="" className="font-normal text-[#fff] text-20-title">
                  Blog
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
