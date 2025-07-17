import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TradeForm = () => {
  const [selectTime, setSelectTime] = useState("1 Hour");
  const [selectPair, setSelectPair] = useState("BTC/ETH");
  const [selection, setSelection] = useState("crypto");
  return (
    <div className="w-full flex px-2 md:px-3 lg:px-8 xl:px-12">
      <form className="flex w-full justify-normal lg:justify-between ">
        <div className="w-full lg:w-[60%] gap-1 lg:gap-6 flex flex-col lg:flex-row  items-center">

          
          <div className="relative lg:hidden flex min-w-[100px] w-full">
            <select
              value={selection}
              onChange={(e) => setSelection(e.target.value)}
              className="min-w-[100px] w-full border-none rounded-lg bg-whyCard lg:hidden flex items-start justify-start px-2 text-sm text-white font-semibold py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
            >
              <option value="crypto">Crypto</option>
              <option value="stocks">Stocks</option>
              <option value="forex">Forex</option>
            </select>
            <IoIosArrowDown
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
              size={20}
            />
          </div>

          <div className="flex flex-col  justify-start  py-2 lg:py-0 gap-y-2 w-full ">
            <label
              className="text-sm font-semibold text-white"
              htmlFor="stop-loss"
            >
              Stop Loss
            </label>
            <input
              placeholder="Enter stop loss"
              className="py-3 w-full px-2 font-semibold text-sm bg-black text-white border-1 border-primary rounded-2xl focus:ring-1 focus:ring-primary"
              type="number"
              name=""
              id="stop-loss"
            />
          </div>
          <div className="flex flex-col justify-start  py-2 lg:py-0 gap-y-2 w-full ">
            <label
              className="text-sm font-semibold text-white"
              htmlFor="stop-loss"
            >
              Take Profit
            </label>
            <input
              placeholder="Enter take profit"
              className="py-3 w-full px-2 font-semibold text-sm bg-black text-white border-1 border-primary rounded-2xl focus:ring-1 focus:ring-primary"
              type="number"
              name=""
              id="stop-loss"
            />
          </div>

          <div className="w-full py-3 flex flex-col gap-2">
            <label
              className="text-sm font-semibold text-white"
              htmlFor="stop-loss"
            >
              Time Frame
            </label>
            <select
              value={selectTime}
              onChange={(e) => setSelectTime(e.target.value)}
              className="w-full py-3 px-2 border-1 border-primary rounded-2xl bg-black text-white text-sm font-semibold  focus:ring-1 focus:ring-primary"
            >
              <option value="1 Hour">1 Hour</option>
              <option value="2 Hours">2 Hours</option>
              <option value="3 Hours">3 Hours</option>
            </select>
          </div>

          {/* stock/trading pair mobile */}
          <div className="lg:hidden w-full py-3 flex flex-col gap-2">
            <label
              className="text-sm font-semibold text-white"
              htmlFor="stop-loss"
            >
              Stock/Trading Pair
            </label>
            <select
              value={selectPair}
              onChange={(e) => setSelectPair(e.target.value)}
              className="w-full py-3 px-2 border-1 border-primary rounded-2xl bg-black text-white text-sm   focus:ring-1 focus:ring-primary"
            >
              <option value="BTC/ETH">BTC/ETH</option>
              <option value="ETH/DOGE">ETH/DOGE</option>
              <option value="BNB/SOL">ETH/DOGE</option>
            </select>
          </div>
        </div>

        {/* stock/trading pair desktop */}
        <div className="hidden w-full lg:w-[25%] py-3 lg:flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-white"
            htmlFor="stop-loss"
          >
            Stock/Trading Pair
          </label>
          <select
            value={selectPair}
            onChange={(e) => setSelectPair(e.target.value)}
            className="w-full py-3 px-2 border-1 border-primary rounded-2xl bg-black text-white text-sm  focus:ring-1 focus:ring-primary"
          >
            <option value="BTC/ETH">BTC/ETH</option>
            <option value="ETH/DOGE">ETH/DOGE</option>
            <option value="BNB/SOL">ETH/DOGE</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default TradeForm;
