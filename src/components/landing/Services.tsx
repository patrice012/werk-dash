export default function Services() {
  return (
    <div className="flex lg:flex-row flex-col justify-start items-center gap-[40px] xl:gap-[80px] px-[24px] sm:px-[50px] bg-[#F3FAF7] xl:px-[100px] md:py-[100px] py-[50px]">
      <div className="flex flex-col gap-[25px] w-full">
        <div className="bg-[#fff] p-[20px] gap-[20px] rounded-[20px] flex justify-start">
          <img src="/assets/Icon.svg" className="size-[50px]" alt="" />
          <div className="flex flex-col gap-[6px]">
            <span className="font-semibold text-24-title text-[#19191B]">
              Google Chrome Extension
            </span>
            <span className="text-[#696871]">
              Candles us galleons snape knut trace. Snare side-along hedwig
              kittens silver cabinet wool.
            </span>
          </div>
        </div>
        <div className="bg-[#fff] p-[20px] gap-[20px] rounded-[20px] flex justify-start">
          <img src="/assets/Icon.svg" className="size-[50px]" alt="" />
          <div className="flex flex-col gap-[6px]">
            <span className="font-semibold text-24-title text-[#19191B]">
              Add Custom Information
            </span>
            <span className="text-[#696871]">
              Candles us galleons snape knut trace. Snare side-along hedwig
              kittens silver cabinet wool.
            </span>
          </div>
        </div>
        <div className="bg-[#fff] p-[20px] gap-[20px] rounded-[20px] flex justify-start">
          <img src="/assets/Icon.svg" className="size-[50px]" alt="" />
          <div className="flex flex-col gap-[6px]">
            <span className="font-semibold text-24-title text-[#19191B]">
              Switch Automation On/Off
            </span>
            <span className="text-[#696871]">
              Candles us galleons snape knut trace. Snare side-along hedwig
              kittens silver cabinet wool.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[29px] w-full items-start">
        <span className="text-48-title font-semibold text-[#001E00]">
          Build automation for your freelance services
        </span>
        <span className="text-[#001E00] text-24-title">
          Ipsum is side frisbees orbs bred shell. ‘zis green tears turns goblet
          vanishing. Candles us galleons snape knut trace. Snare side-along
          hedwig kittens silver cabinet wool.
        </span>
        <button className="border border-[#001E00] bg-[#0f7afd] rounded-full text-[#fff] px-[24px] py-[16px] transition ease-in-out duration-500 hover:bg-[#0f7afda3]">
          Learn more
        </button>
      </div>
    </div>
  );
}
