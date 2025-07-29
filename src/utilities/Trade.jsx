// import { useState } from "react";

const Trade = ({ setActiveTab, activeTab }) => {
  console.log(activeTab)
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <h1 className="text-xl font-bold text-white">Trade</h1>
      {/* trade buttons */}
      <div className="px-2 md:px-3 lg:px-8 xl:px-12 flex flex-col w-full lg:flex-row items-center justify-between">
        {/* buy/sell  */}
        <div className="flex  w-full items-center justify-between gap-x-3 lg:justify-normal lg:gap-x-8 lg:w-[60%]">
          <button className="bg-green-500 min-w-[100px] w-full lg:w-[200px] py-3 text-sm  rounded-lg font-semibold text-white">
            Buy
          </button>
          <button className="bg-red-500 min-w-[100px] w-full lg:w-[200px] text-sm py-3  rounded-lg font-semibold text-white">
            Sell
          </button>
          <button className="hidden lg:flex min-w-[100px] w-full bg-primary lg:w-[200px] text-black font-semibold text-sm rounded-lg py-3 items-center justify-center text-center">
            Copy trade
          </button>
        </div>

        {/*  trade options button */}
        <div className="hidden lg:flex w-full bg-whyCard rounded-lg p-0 mt-3 lg:mt-0 lg:w-[20%]">
          <button onClick={() => setActiveTab('stock')} className={`${activeTab === 'stock' ? 'bg-primary text-black' : 'bg-whyCard text-white'}font-semibold text-sm py-3 w-full rounded-lg text-white cursor-pointer hover:transition-transform hover:border-1 hover:border-gray-600 duration-100 ease-in-out`}>
            Stock
          </button>
          <button onClick={() => setActiveTab('crypto')} className={`${activeTab === 'crypto' ? 'bg-primary text-black' : 'bg-whyCard text-white'}font-semibold text-sm py-3 w-full rounded-lg text-white cursor-pointer hover:transition-transform hover:border-1 hover:border-gray-600 duration-100 ease-in-out`}>
            Crypto
          </button>
          <button onClick={() => setActiveTab('forex')} className={`${activeTab === 'forex' ? 'bg-primary text-black' : 'bg-whyCard text-white'}font-semibold text-sm py-3 w-full rounded-lg text-white cursor-pointer hover:transition-transform hover:border-1 hover:border-gray-600 duration-100 ease-in-out`}>
            Forex
          </button>
        </div>

        {/* mobile copy trade button */}
        <button className="lg:hidden min-w-[100px] w-full bg-primary lg:w-[200px] text-black font-semibold text-sm rounded-lg py-3 items-center justify-center text-center mt-2">
          Copy trade
        </button>
      </div>
    </div>
  );
};

export default Trade;
