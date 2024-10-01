import { CloseCircle, HambergerMenu, Map1, SearchNormal1 } from "iconsax-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { searchTermProps } from "@/helpers/types";

export default function Navbar({
  useSearchbar,
  onSubmit,
}: {
  useSearchbar?: boolean;
  onSubmit?: (value: searchTermProps) => void;
}) {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleOpen = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (onSubmit) {
      onSubmit({ jobTitle: searchTerm, jobLocation: searchLocation });
    }
  };

  return (
    <>
      <div className="bg-[#141414] pt-4 sm:pt-0 px-3 sm:px-6 pb-[30px] sm:pb-[40px] sm:bg-[url('/header-bg.png')] sm:bg-no-repeat sm:bg-[right_17%_top_0] sm:bg-contain">
        <div className="flex items-start justify-between w-full resize-none">
          <div className="flex justify-start gap-[12px] items-center pt-2">
            <Link to={"/"}>
              <span className="text-56-title leading-none font-[900] text-[#0f7afd]">
                Logo
              </span>
            </Link>
          </div>
          <nav className="text-[#b0b0b0]">
            <ul className="gap-[30px] hidden lm:flex text-[16px] font-[450]">
              <li
                className={`hover:text-[#0f7afd] pt-[22px] ${
                  location.pathname == "/" && !location.hash
                    ? "border-[#0f7afd] text-[#0f7afd]"
                    : "border-transparent"
                } active:text-[#0f7afd] transition-all border-t-4 sm:text-[18px]`}>
                <Link to={"/"}>Find Jobs</Link>
              </li>
              <li
                className={`hover:text-[#0f7afd] pt-[22px] ${
                  location.hash == "#discord"
                    ? "border-[#0f7afd] text-[#0f7afd]"
                    : "border-transparent"
                } active:text-[#0f7afd] transition-all border-t-4 sm:text-[18px]`}>
                <Link to={"#discord"}>Discord</Link>
              </li>
              <li
                className={`hover:text-[#0f7afd] pt-[22px] ${
                  location.hash == "#telegram"
                    ? "border-[#0f7afd] text-[#0f7afd]"
                    : "border-transparent"
                } active:text-[#0f7afd] transition-all border-t-4 sm:text-[18px]`}>
                <Link to={"#telegram"}>Telegram</Link>
              </li>
              <li
                className={`hover:text-[#0f7afd] pt-[22px] ${
                  location.hash == "/landing"
                    ? "border-[#0f7afd] text-[#0f7afd]"
                    : "border-transparent"
                } active:text-[#0f7afd] transition-all border-t-4 sm:text-[18px]`}>
                <Link to={"/landing"}>Page</Link>
              </li>
            </ul>
          </nav>
          <div className="flex lm:hidden">
            <div
              className="border-[#fff] rounded-[4px] cursor-pointer flex xl:hidden"
              id="openSidebar"
              onClick={toggleOpen}>
              <HambergerMenu size="32" color="#fff" />
            </div>
          </div>
          <div className="flex gap-[12px] items-center">
            <Link
              to="/auth/login"
              className="bg-[#0f7afd] border-[#0f7afd] border-2 hover:bg-[#0f7afdc5] transition-all mt-[10px] py-[10px] px-[32px] rounded-full text-[18px] font-semibold text-white hidden lm:flex">
              Login
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-1 sm:gap-3 mt-4 sm:mt-10">
          <div className="flex items-center">
            <h1 className="text-white font-medium text-2xl sm:text-5xl">
              Find your dream job here
            </h1>
            <div className="h-14 sm:h-28">
              <img className="h-full " src="/unnamed.png" alt="" />
            </div>
          </div>
          {useSearchbar && (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row w-full bg-white rounded-[15px] sm:rounded-[35px] sm:h-[70px] md:rounded-[45px] md:h-[90px] px-3">
                <div className="flex flex-col gap-[20px] sm:gap-0 sm:grid sm:grid-cols-2 w-full sm:items-center sm:divide-x-[3px] py-3 sm:divide-[#808080]">
                  <div className="sm:px-3 grow flex items-center h-full">
                    <SearchNormal1 size="36" color="#8C8C8C" />
                    <Input
                      value={searchTerm}
                      type="search"
                      placeholder="Job title or keyword"
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                      className="placeholder:text-[#808080] text-[#808080]  cursor-pointer text-[18px] sm:text-[20px] md:text-[22px]"
                    />
                  </div>
                  <div className=" grow flex items-center h-full">
                    <div className="sm:pl-8"></div>
                    <Map1 size="36" color="#8C8C8C" />
                    <Input
                      prefix="Prefix"
                      value={searchLocation}
                      type="search"
                      placeholder="Add country or city"
                      onChange={(e) => {
                        setSearchLocation(e.target.value);
                      }}
                      className="placeholder:text-[#808080] text-[#808080] cursor-pointer text-[18px] sm:text-[20px] md:text-[22px]"
                    />
                  </div>
                </div>
                <div className="h-full py-2">
                  <Button
                    onClick={handleSubmit}
                    className="text-[1.1rem] w-full h-full sm:w-[120px] md:w-[160px] text-[#fff] bg-[#2A85FF] hover:bg-[#2A85FF]/70 rounded-[45px] transition-all">
                    <span className="p-1">Search</span>
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <div>
        {isSidebarOpen && (
          <div className="navmenu">
            <div className="px-9 py-9 z-20 " onClick={toggleOpen}>
              <CloseCircle size="32" color="#fff" />
            </div>
            <div className=" flex flex-col gap-[24px] right-0  top-0 bg-neutral-900  h-full p-9 pb-2 rounded-s-2xl">
              <div>
                <a href="" className="font-normal text-[#fff] text-20-title">
                  Find Jobs
                </a>
              </div>
              <div>
                <a href="" className="font-normal text-[#fff] text-20-title">
                  Discord
                </a>
              </div>
              <div>
                <a href="" className="font-normal  text-[#fff] text-20-title">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
