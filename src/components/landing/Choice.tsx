export default function Choice() {
  return (
    <div className="bg-[#F7F7FB]  xs:items-center flex flex-col gap-[40px] xl:gap-[80px] px-[24px] sm:px-[50px] xl:px-[100px] py-[100px]">
      <span className="text-[#001E00] xs:text-center text-48-title">
        Stop sifting, start thriving.
      </span>
      <div className="flex flex-col items-start xs:items-center gap-[24px]">
        <div className="flex lm:flex-row flex-col gap-[24px]">
          <div className="bg-[#fff] p-[10px] sm:p-[20px] gap-[20px] rounded-full flex items-center justify-start">
            <img src="/assets/Icon.svg" className="size-[40px]" alt="" />
            <span className="font-semibold text-24-title text-[#19191B]">
              Google Chrome Extension
            </span>
          </div>
          <div className="bg-[#fff] p-[10px] sm:p-[20px] gap-[20px] rounded-full flex items-center justify-start">
            <img src="/assets/Icon.svg" className="size-[40px]" alt="" />
            <span className="font-semibold text-24-title text-[#19191B]">
              Switch Automation On/Off
            </span>
          </div>
          <div className="bg-[#fff] hidden p-[20px] gap-[20px] rounded-full xl:flex items-center ">
            <img src="/assets/Icon.svg" className="size-[40px]" alt="" />
            <span className="font-semibold text-24-title text-[#19191B]">
              Instant Results
            </span>
          </div>
        </div>
        <div className="flex lm:flex-row flex-col xs:items-center gap-[24px]">
          <div className="bg-[#fff] p-[10px] sm:p-[20px] gap-[20px] rounded-full flex items-center justify-start">
            <img src="/assets/Icon.svg" className="size-[40px]" alt="" />
            <span className="font-semibold text-24-title text-[#19191B]">
              Tailored messages
            </span>
          </div>
          <div className="bg-[#fff] p-[10px] sm:p-[20px] gap-[20px] rounded-full flex items-center justify-start">
            <img src="/assets/Icon.svg" className="size-[40px]" alt="" />
            <span className="font-semibold text-24-title text-[#19191B]">
              Add Custom Information
            </span>
          </div>
        </div>
        <div className="flex lm:flex-row flex-col xs:items-center gap-[24px]">
          <div className="bg-[#fff] p-[10px] sm:p-[20px] gap-[20px] rounded-full flex items-center justify-start">
            <img src="/assets/Icon.svg" className="size-[40px]" alt="" />
            <span className="font-semibold text-24-title text-[#19191B]">
              68% average increase
            </span>
          </div>
          <div className="bg-[#fff] p-[10px] sm:p-[20px] gap-[20px] rounded-full flex items-center justify-start">
            <img src="/assets/Icon.svg" className="size-[40px]" alt="" />
            <span className="font-semibold text-24-title text-[#19191B]">
              Simple Pricing
            </span>
          </div>
          <div className="bg-[#fff] hidden p-[20px] gap-[20px] rounded-full xl:flex  items-center justify-start">
            <img src="/assets/Icon.svg" className="size-[40px]" alt="" />
            <span className="font-semibold text-24-title text-[#19191B]">
              Add Custom Information
            </span>
          </div>
        </div>
        <div className="flex lm:flex-row flex-col xl:hidden items-start xs:items-center gap-[24px]">
          <div className="bg-[#fff] p-[10px] sm:p-[20px] gap-[20px] rounded-full flex items-center justify-start">
            <img src="/assets/Icon.svg" className="size-[40px]" alt="" />
            <span className="font-semibold text-24-title text-[#19191B]">
              Instant Results
            </span>
          </div>
          <div className="bg-[#fff] p-[10px] sm:p-[20px] gap-[20px] rounded-full flex items-center justify-start">
            <img src="/assets/Icon.svg" className="size-[40px]" alt="" />
            <span className="font-semibold text-24-title text-[#19191B]">
              Add Custom Information
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
