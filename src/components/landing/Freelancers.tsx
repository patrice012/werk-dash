export default function Freelancer() {
  return (
    <div className="flex relative">
      <div className="flex flex-col  gap-[40px] xl:gap-[80px] px-[24px] sm:px-[50px] bg-[#fff] xl:px-[100px] py-[100px]">
        <div className="flex gap-[12px] items-center">
          <img src="/assets/free.png" className="h-[50px]" alt="" />
          <span className="text-[#001E00]">100k+ Freelancers joined</span>
        </div>
        <div className="flex flex-col gap-[29px] items-start">
          <span className="text-48-title font-semibold text-[#001E00]">
            Get notified jobs matching with your skills!
          </span>
          <span className="text-[#001E00] text-24-title">
            Mcgonagall phials string squashy stan mischief lily dirigible 50.
            Spells above ghost trevor mr nick cupboard portkey bott’s blubber.
            Many patronus bedroom revision ludo.
          </span>
          <button className="border border-[#001E00] bg-[#0f7afd] rounded-full text-[#fff] px-[24px] py-[16px] transition ease-in-out duration-500 hover:bg-[#0f7afda3]">
            Learn more
          </button>
        </div>
      </div>
      <img src="/assets/cloche.svg" className="absolute hidden ll:flex top-[50px] right-[450px]" alt="" />
      <img src="/assets/user.png" className="h-full hidden ll:flex " alt="" />
    </div>
  );
}
