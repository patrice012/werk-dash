import { CloseCircle, HambergerMenu } from "iconsax-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleOpen = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="pt-4 sm:pt-0 px-3 sm:px-6 pb-[16px] sm:pb-[16px]  ">
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
          <div className="flex gap-[12px] items-center">
            <Link
              to="/auth/login"
              className="bg-[#0f7afd] border-[#0f7afd] border-2 hover:bg-[#0f7afdc5] transition-all mt-[10px] py-[10px] px-[32px] rounded-full text-[18px] font-semibold text-white hidden lm:flex">
              Login
            </Link>
          </div>
          <div className="flex lm:hidden">
            <div
              className="border-[#fff] rounded-[4px] cursor-pointer flex xl:hidden"
              id="openSidebar"
              onClick={toggleOpen}>
              <HambergerMenu size="32" color="#fff" />
            </div>
          </div>
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
      <div className="relative flex flex-col px-[24px] md:px-[50px] lg:px-[150px] pt-[50px] md:pt-[120px] pb-[50px] gap-[56px]">
        <img src="/assets/cakephp.png" className="absolute top-1 " />
        <img src="/assets/swift.png" className="absolute top-5 right-[232px]" />
        <img
          src="/assets/django.png"
          className="absolute top-[332px] left-[80px] "
        />
        <img
          src="/assets/python.png"
          className="absolute top-[520px] left-[185px] "
        />
        <img
          src="/assets/flutter.png"
          className="absolute top-[281px] right-[102px] "
        />
        <img
          src="/assets/javascript.png"
          className="absolute top-[542px] right-[180px]"
        />
        <div className=" flex flex-col gap-[36px] md:gap-[56px] items-center ">
          <div className="flex flex-col items-center">
            <span className="text-75-title text-center  font-[500] text-[#0f7afd] ">
              Turn Your MVP Vision{" "}
            </span>
            <span className="text-75-title text-center  font-[500] text-[#ffffff] ">
              into Reality in just 2 weeks
            </span>
          </div>
          <div className="flex flex-col justify-center items-center text-center w-[80%] ">
            <span className="font-[300] text-24-title text-[#ffffff]">
              Our team comprises seasoned developers, designers, and project
              managers with extensive experience across various industries and
              technologies.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] md:gap-[50px] lg:gap-[120px]  justify-center items-center">
          <div className="flex gap-[16px] items-center justify-start">
            <button className="bg-[#0f7afd] text-24-title font-[700] text-[#fff] px-[56px] py-[16px] rounded-full transition ease-in-out hover:bg-[#0f7afdbb] hover:text-[#fff] duration-300 ">
              GET FREE CONSULTATION
            </button>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center gap-[24px] ">
            <div className="flex justify-center items-center gap-[12px]">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6836 21C13.8655 21 15.0358 20.7672 16.1277 20.3149C17.2197 19.8626 18.2118 19.1997 19.0476 18.364C19.8833 17.5282 20.5462 16.5361 20.9985 15.4442C21.4508 14.3522 21.6836 13.1819 21.6836 12C21.6836 10.8181 21.4508 9.64778 20.9985 8.55585C20.5462 7.46392 19.8833 6.47177 19.0476 5.63604C18.2118 4.80031 17.2197 4.13738 16.1277 3.68508C15.0358 3.23279 13.8655 3 12.6836 3C10.2966 3 8.00746 3.94821 6.31963 5.63604C4.63181 7.32387 3.68359 9.61305 3.68359 12C3.68359 14.3869 4.63181 16.6761 6.31963 18.364C8.00746 20.0518 10.2966 21 12.6836 21ZM12.4516 15.64L17.4516 9.64L15.9156 8.36L11.6156 13.519L9.39059 11.293L7.97659 12.707L10.9766 15.707L11.7506 16.481L12.4516 15.64Z"
                  fill="#C291FE"
                />
              </svg>
              <span className="text-[20px] font-[400] text-[#fff]">
                USP Number 01
              </span>
            </div>
            <div className="flex justify-center items-center gap-[12px]">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6836 21C13.8655 21 15.0358 20.7672 16.1277 20.3149C17.2197 19.8626 18.2118 19.1997 19.0476 18.364C19.8833 17.5282 20.5462 16.5361 20.9985 15.4442C21.4508 14.3522 21.6836 13.1819 21.6836 12C21.6836 10.8181 21.4508 9.64778 20.9985 8.55585C20.5462 7.46392 19.8833 6.47177 19.0476 5.63604C18.2118 4.80031 17.2197 4.13738 16.1277 3.68508C15.0358 3.23279 13.8655 3 12.6836 3C10.2966 3 8.00746 3.94821 6.31963 5.63604C4.63181 7.32387 3.68359 9.61305 3.68359 12C3.68359 14.3869 4.63181 16.6761 6.31963 18.364C8.00746 20.0518 10.2966 21 12.6836 21ZM12.4516 15.64L17.4516 9.64L15.9156 8.36L11.6156 13.519L9.39059 11.293L7.97659 12.707L10.9766 15.707L11.7506 16.481L12.4516 15.64Z"
                  fill="#C291FE"
                />
              </svg>
              <span className="text-[20px] font-[400] text-[#fff]">
                USP Number 01
              </span>
            </div>
            <div className="flex justify-center items-center gap-[12px]">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6836 21C13.8655 21 15.0358 20.7672 16.1277 20.3149C17.2197 19.8626 18.2118 19.1997 19.0476 18.364C19.8833 17.5282 20.5462 16.5361 20.9985 15.4442C21.4508 14.3522 21.6836 13.1819 21.6836 12C21.6836 10.8181 21.4508 9.64778 20.9985 8.55585C20.5462 7.46392 19.8833 6.47177 19.0476 5.63604C18.2118 4.80031 17.2197 4.13738 16.1277 3.68508C15.0358 3.23279 13.8655 3 12.6836 3C10.2966 3 8.00746 3.94821 6.31963 5.63604C4.63181 7.32387 3.68359 9.61305 3.68359 12C3.68359 14.3869 4.63181 16.6761 6.31963 18.364C8.00746 20.0518 10.2966 21 12.6836 21ZM12.4516 15.64L17.4516 9.64L15.9156 8.36L11.6156 13.519L9.39059 11.293L7.97659 12.707L10.9766 15.707L11.7506 16.481L12.4516 15.64Z"
                  fill="#C291FE"
                />
              </svg>
              <span className="text-[20px] font-[400] text-[#fff]">
                USP Number 01
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
