import { Sms } from "iconsax-react";
import Arrow from "/arrow.svg";
import Check from "/check.svg";
import Medium from "/medium.svg";
import Xcom from "/xcom.svg";
import Insta from "/insta.svg";
import Dribbble from "/dribbble.svg";
import Behance from "/behance.svg";

const PricingSection = () => {
  return (
    <div className="w-full">
      <div className="bg-white pt-[100px] pb-[94px]">
        <div className="flex flex-col gap-20 items-center justify-center">
          {/* <div className="px-[180px]">
            <div className="flex flex-col gap-5 justify-center items-center">
              <h1 className="text-5xl text-[#001E00] font-semibold">
                One simple pricing plan.
              </h1>
              <p>
                Boostlancer is currently open to Upwork sellers on subscription
                basis. You can cancel your subscription in any moment.
              </p>
            </div>
            <div className="mt-[80px] flex items-center gap-4 justify-center">
              <span className="">Monthly</span>
              <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:bg-gray-700 peer-checked:bg-[#14A800]"></div>
              </label>
              <span className="">Yearly</span>
              <span className="px-4 py-2 bg-[#14A800] text-white rounded-full text-sm">
                Save 25%
              </span>
            </div>
          </div>
          <div className="bg-[#F7F7FB] w-full flex items-center justify-around py-[64px] px-20 shadow-md rounded-[20px]">
            <div className="flex flex-col self-end items-center gap-10">
              <div className="flex flex-col items-center">
                <span>starter</span>
                <span className="text-[80px] font-bold">
                  <span className="text-[30px] font-bold">$</span>19
                  <span className="text-[30px] font-bold">/mo</span>
                </span>
                <span>Per user</span>
              </div>
              <button className="bg-[#14A800] text-white rounded-[100px] max-w-max px-8 py-4">
                Start 14 day free trial
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-4">
                <img src={Arrow} /> Custom Cover Letters,
              </div>
              <div className="flex gap-4">
                <img src={Arrow} /> Priority support
              </div>
              <div className="flex gap-4">
                <img src={Arrow} /> unlimited notifications.
              </div>
              <div className="flex gap-4">
                <img src={Arrow} /> 14 day free trial
              </div>
              <div className="flex gap-4">
                <img src={Arrow} /> Lifetime updates
              </div>
            </div>
          </div>
          <div className="px-[180px] flex flex-col pb-[82px] bg-[#001E00]">
            <div className="grid grid-cols-2 gap-14 text-white">
              <div>
                <div className="flex items-center gap-3">
                  <img src={Check} alt="" />
                  <h1 className="text-[24px] font-semibold">
                    Can I use Boostlancer for my clients?
                  </h1>
                </div>
                <p>
                  Ipsum is side frisbees orbs bred shell. ‘zis green tears turns
                  goblet vanishing. Candles us galleons snape knut trace. Snare
                  side-along hedwig kittens silver cabinet wool.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <img src={Check} alt="" />
                  <h1 className="text-[24px] font-semibold">
                    Can I use Boostlancer for my clients?
                  </h1>
                </div>
                <p>
                  Ipsum is side frisbees orbs bred shell. ‘zis green tears turns
                  goblet vanishing. Candles us galleons snape knut trace. Snare
                  side-along hedwig kittens silver cabinet wool.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <img src={Check} alt="" />
                  <h1 className="text-[24px] font-semibold">
                    Can I use Boostlancer for my clients?
                  </h1>
                </div>
                <p>
                  Ipsum is side frisbees orbs bred shell. ‘zis green tears turns
                  goblet vanishing. Candles us galleons snape knut trace. Snare
                  side-along hedwig kittens silver cabinet wool.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <img src={Check} alt="" />
                  <h1 className="text-[24px] font-semibold">
                    Can I use Boostlancer for my clients?
                  </h1>
                </div>
                <p>
                  Ipsum is side frisbees orbs bred shell. ‘zis green tears turns
                  goblet vanishing. Candles us galleons snape knut trace. Snare
                  side-along hedwig kittens silver cabinet wool.
                </p>
              </div>
            </div>
          </div> */}

          <div className="w-full relative border">
            {/* Section blanche */}
            <div className="bg-red-400 h-[400px] flex justify-center items-center">
              <h1 className="text-black">Section Blanche</h1>
            </div>

            {/* Section chevauchante */}
            <div className="absolute left-0 right-0 top-[300px] z-10 flex justify-center">
              <div className="bg-gray-400 h-[200px] w-[300px] rounded-[20px] shadow-lg flex justify-center items-center">
                <div className="bg-[#F7F7FB] w-full flex items-center justify-around py-[64px] px-20 shadow-md rounded-[20px]">
                  <div className="flex flex-col self-end items-center gap-10">
                    <div className="flex flex-col items-center">
                      <span>starter</span>
                      <span className="text-[80px] font-bold">
                        <span className="text-[30px] font-bold">$</span>19
                        <span className="text-[30px] font-bold">/mo</span>
                      </span>
                      <span>Per user</span>
                    </div>
                    <button className="bg-[#14A800] text-white rounded-[100px] max-w-max px-8 py-4">
                      Start 14 day free trial
                    </button>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                      <img src={Arrow} /> Custom Cover Letters,
                    </div>
                    <div className="flex gap-4">
                      <img src={Arrow} /> Priority support
                    </div>
                    <div className="flex gap-4">
                      <img src={Arrow} /> unlimited notifications.
                    </div>
                    <div className="flex gap-4">
                      <img src={Arrow} /> 14 day free trial
                    </div>
                    <div className="flex gap-4">
                      <img src={Arrow} /> Lifetime updates
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section noire */}
            <div className="bg-black h-[400px] flex justify-center items-center">
              <div className="grid grid-cols-2 gap-14 text-white">
                <div>
                  <div className="flex items-center gap-3">
                    <img src={Check} alt="" />
                    <h1 className="text-[24px] font-semibold">
                      Can I use Boostlancer for my clients?
                    </h1>
                  </div>
                  <p>
                    Ipsum is side frisbees orbs bred shell. ‘zis green tears
                    turns goblet vanishing. Candles us galleons snape knut
                    trace. Snare side-along hedwig kittens silver cabinet wool.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <img src={Check} alt="" />
                    <h1 className="text-[24px] font-semibold">
                      Can I use Boostlancer for my clients?
                    </h1>
                  </div>
                  <p>
                    Ipsum is side frisbees orbs bred shell. ‘zis green tears
                    turns goblet vanishing. Candles us galleons snape knut
                    trace. Snare side-along hedwig kittens silver cabinet wool.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <img src={Check} alt="" />
                    <h1 className="text-[24px] font-semibold">
                      Can I use Boostlancer for my clients?
                    </h1>
                  </div>
                  <p>
                    Ipsum is side frisbees orbs bred shell. ‘zis green tears
                    turns goblet vanishing. Candles us galleons snape knut
                    trace. Snare side-along hedwig kittens silver cabinet wool.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <img src={Check} alt="" />
                    <h1 className="text-[24px] font-semibold">
                      Can I use Boostlancer for my clients?
                    </h1>
                  </div>
                  <p>
                    Ipsum is side frisbees orbs bred shell. ‘zis green tears
                    turns goblet vanishing. Candles us galleons snape knut
                    trace. Snare side-along hedwig kittens silver cabinet wool.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-5xl text-[#001E00] font-semibold">
              Build Fast, Launch Faster
            </h1>
            <p>
              Candles us galleons snape knut trace. Snare side-along hedwig
              kittens silver cabinet wool.
            </p>
            <button className="bg-[#14A800] text-white rounded-[100px] max-w-max px-8 py-4 border">
              Get early access
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#001E00] text-white px-[100px] pt-20 pb-8">
        <div className="flex justify-between">
          <div className="basis-1/2">
            <h1 className="text-[24px] font-bold">BOOSTLANCER</h1>
            <p>
              Candles us galleons snape knut trace. Snare side-along hedwig
              kittens silver cabinet wool. Candles us galleons snape knut trace.
              Snare side.
            </p>
          </div>
          <div className="basis-1/2 border p-2 flex items-center rounded-[100px] justify-between max-w-max h-[76px]">
            <div className="ml-6 flex items-center">
              <Sms />
              <input
                className="bg-transparent h-full outline-0 focus:outline-0 border-0 focus:border-0"
                type="text"
                placeholder="Email address"
              />
            </div>
            <button className="bg-[#14A800] text-white rounded-[100px] max-w-max px-8 h-full">
              Get started
            </button>
          </div>
        </div>

        <div className="w-full h-[1px] my-10 bg-[#14A800]"></div>

        <div className="flex items-center justify-between">
          <h4>LitCollective © 2022</h4>
          <div className="flex items-center gap-3">
            <img src={Behance} alt="" />
            <img src={Dribbble} alt="" />
            <img src={Xcom} alt="" />
            <img src={Insta} alt="" />
            <img src={Medium} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
