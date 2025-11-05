// import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const TradeForm = ({
  setActiveTab,
  activeTab,
  
  setTradeForm,
  errors,
}) => {
  const forexPairs = [
    "Select a pair",
    "EUR/USD",
    
  ];
  const stockPairs = ["Select a pair", "AAPL",];
  const cryptoPairs = ["Select a pair", "BTC/USD", "ETH/USD",];

  const getPairOptions = () => {
    if (activeTab === "forex") return forexPairs;
    if (activeTab === "stock") return stockPairs;
    return cryptoPairs; // fallback is crypto
  };

  const [selectPair, setSelectPair] = useState("Select a pair");
  const [selectTime, setSelectTime] = useState("Select time frame");

  return (
    <div className="w-full flex flex-col px-2 md:px-3 lg:px-8 xl:px-12">
      <form className="flex  w-full justify-normal lg:justify-between ">
        <div className="w-full lg:w-[60%] gap-1 lg:gap-6 flex flex-col lg:flex-row  items-center">
          <div className="relative lg:hidden flex min-w-[100px] w-full">
            <select
              value={activeTab}
              onChange={(e) => {
                setActiveTab(e.target.value);
              }}
              className="min-w-[100px] w-full border-none rounded-lg bg-whyCard lg:hidden flex items-start justify-start px-2 text-sm text-white font-semibold py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
            >
              <option value="crypto">Crypto</option>
              <option value="stock">Stocks</option>
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
              onChange={(e) => {
                setTradeForm((prev) => ({
                  ...prev,
                  stop_loss: e.target.value,
                }));
              }}
              className="py-3 w-full px-2 font-semibold text-sm bg-black text-white border-1 border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
              type="number"
              name=""
              id="stop-loss"
            />
            {errors.stop_loss && (
              <p className="text-red-500 text-sm mt-1">{errors.stop_loss[0]}</p>
            )}
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
              onChange={(e) => {
                setTradeForm((prev) => ({
                  ...prev,
                  take_profit: e.target.value,
                }));
              }}
              className="py-3 w-full px-2 font-semibold text-sm bg-black text-white border-1 border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
              type="number"
              name=""
              id="take-profit"
            />
            {errors.take_profit && (
              <p className="text-red-500 text-sm mt-1">
                {errors.take_profit[0]}
              </p>
            )}
          </div>

          <div className="relative flex w-full  flex-col gap-2">
            <label
              className="text-sm font-semibold text-white"
              htmlFor="stop-loss"
            >
              Time Frame
            </label>

            <select
              value={selectTime}
              onChange={(e) => {
                setSelectTime(e.target.value)
                setTradeForm((prev) => ({ ...prev, duration: e.target.value }));
              }}
              className=" w-full rounded-xl  bg-black flex items-start justify-start px-2 text-sm text-white font-semibold py-3 border-1 border-primary  focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
            >
              <option value="select">Select trade duration</option>
              <option value="1 Hour">1 Hour</option>
              <option value="2 Hours">2 Hours</option>
              <option value="3 Hours">3 Hours</option>
            </select>
            <IoIosArrowDown
              className="absolute right-2 mt-3.5 top-1/2  transform -translate-y-1/2 text-white pointer-events-none"
              size={20}
            />
            {errors.duration && (
              <p className="hidden text-red-500 text-sm mt-1  w-full justify-start lg:flex">
                {errors.duration[0]}
              </p>
            )}
          </div>
          {errors.duration && (
            <p className="text-red-500 text-sm mt-1 flex w-full justify-start lg:hidden">
              {errors.duration[0]}
            </p>
          )}

          {/* stock/trading pair mobile */}

          <div className="relative lg:hidden w-full py-3 flex flex-col gap-2">
            <label
              className="text-sm font-semibold text-white"
              htmlFor="stock trading"
            >
              Stock/Trading Pair
            </label>
            <select
              value={selectPair}
              onChange={(e) => {
                setSelectPair(e.target.value);
                setTradeForm((prev) => ({ ...prev, asset: e.target.value }));
              }}
              className=" w-full rounded-xl  bg-black flex items-start justify-start px-2 text-sm text-white font-semibold py-3 border-1 border-primary  focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
            >
              {getPairOptions().map((pair, idx) => (
                <option key={idx} value={pair}>
                  {pair}
                </option>
              ))}
            </select>
            <IoIosArrowDown
              className="absolute right-2 mt-3.5 top-1/2  transform -translate-y-1/2 text-white pointer-events-none"
              size={20}
            />
          </div>
          {errors.asset && (
            <p className="lg:hidden text-red-500 text-sm mt-1 flex items-start justify-start w-full">
              {errors.asset[0]}
            </p>
          )}
        </div>

        {/* stock/trading pair desktop */}

        <div className="relative hidden w-full lg:w-[25%] lg:flex  py-3 flex-col gap-2">
          <label
            className="text-sm font-semibold text-white"
            htmlFor="stock trading"
          >
            Stock/Trading Pair
          </label>
          <select
            value={selectPair}
            onChange={(e) => {
              setSelectPair(e.target.value);
              setTradeForm((prev) => ({ ...prev, asset: e.target.value }));
            }}
            className=" w-full rounded-xl  bg-black flex items-start justify-start px-2 text-sm text-white font-semibold py-3 border-1 border-primary  focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
          >
            {getPairOptions().map((pair, idx) => (
              <option key={idx} value={pair}>
                {pair}
              </option>
            ))}
          </select>
          <IoIosArrowDown
            className="absolute right-2 mt-3.5 top-1/2  transform -translate-y-1/2 text-white pointer-events-none"
            size={20}
          />
          {errors.asset && (
            <p className="text-red-500 text-sm mt-1">{errors.asset[0]}</p>
          )}
        </div>
      </form>
      {errors.non_field_errors && (
        <p className=" text-red-500 text-sm mt-1 flex items-start justify-start w-full">
          {errors.non_field_errors[0]}
        </p>
      )}
      {errors.detail && (
        <p className=" text-red-500 text-sm mt-1 flex items-start justify-start w-full">
          {errors.detail}
        </p>
      )}
    </div>
  );
};

export default TradeForm;
