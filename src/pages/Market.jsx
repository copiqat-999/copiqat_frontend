import RootNavbar from "../utilities/RootNavbar";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MarketTraders from "../utilities/MarketTraders";

const Market = () => {
  const [selection, setSelection] = useState("Sort by Win Rate");
  const [filter, setFilter] = useState("Top Performers");

  // List of filter options
  const filterOptions = [
    "Top Performers",
    "All Traders",
    "New Traders",
    "Low Risk",
    "High Risk",
  ];

  const traders = [
    {
      stars: 5,
      name: "Alpha Trader",
      return: "67",
      win_rate: "89",
      copiers: 457,
    },
    {
      stars: 4,
      name: "Beta Shark",
      return: "52",
      win_rate: "83",
      copiers: 312,
    },
    {
      stars: 5,
      name: "CryptoKing",
      return: "75",
      win_rate: "91",
      copiers: 624,
    },
    {
      stars: 3,
      name: "SwingBoss",
      return: "43",
      win_rate: "78",
      copiers: 198,
    },
    {
      stars: 4,
      name: "SniperFX",
      return: "61",
      win_rate: "85",
      copiers: 351,
    },
    {
      stars: 5,
      name: "Elite Trader",
      return: "88",
      win_rate: "93",
      copiers: 734,
    },
    {
      stars: 2,
      name: "RiskyPip",
      return: "29",
      win_rate: "60",
      copiers: 97,
    },
    {
      stars: 3,
      name: "ForexFalcon",
      return: "49",
      win_rate: "76",
      copiers: 214,
    },
    {
      stars: 4,
      name: "SteadyProfit",
      return: "58",
      win_rate: "82",
      copiers: 289,
    },
    
  ];

  return (
    <section className="container mx-auto flex flex-col py-2 gap-y-4 px-2">
      <RootNavbar />

      <div className="py-8 mt-4 flex flex-col lg:px-12 w-full">
        {/* Search and filter div */}
        <div className="flex flex-col lg:flex-row w-full justify-normal lg:justify-between ">
          {/* Search div */}
          <div className="flex flex-row w-full lg:w-[70%] gap-x-2 lg:gap-x-8 ">
            <div className="flex justify-start items-center px-4 py-3 rounded-xl bg-whyCard gap-3 w-full lg:w-[60%]">
              <button>
                <IoSearch className="text-white text-xl" />
              </button>
              <input
                placeholder="Search traders"
                type="text"
                className="border-none focus:ring-0 outline-0 bg-whyCard text-sm font-semibold w-full placeholder:text-sm"
              />
            </div>

            <div className="relative flex w-full lg:w-[30%]">
              <select
                value={selection}
                onChange={(e) => setSelection(e.target.value)}
                className="min-w-[100px] w-full border-none rounded-lg bg-whyCard flex items-start justify-start px-2 text-sm text-white font-semibold py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
              >
                <option value="win_rate">Win Rate</option>
                <option value="returns">Return</option>
                <option value="coplers">Coplers</option>
              </select>
              <IoIosArrowDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
                size={20}
              />
            </div>
          </div>

          {/* Action button */}
          <div className="flex lg:justify-end justify-center w-full mt-4 lg:mt-0 lg:w-[30%] ">
            <button className="py-3 px-6 bg-primary rounded-lg lg:w-fit w-full text-sm text-black font-bold">
              Become a Trader
            </button>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="w-full flex flex-wrap-reverse lg:flex gap-4  lg:gap-x-3 py-4 text-white mt-4 lg:mt-0">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`text-sm py-2 px-4 rounded-full border border-gray-400 cursor-pointer ${
                filter === option
                  ? "bg-primary text-black border-none"
                  : "bg-black text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Traders */}
        <div className="flex flex-col pt-8 mt-8 gap-y-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2.5 lg:gap-x-4 gap-y-8">
            {/* trader */}
            {traders.map((trader) => (
              <MarketTraders traders={trader} key={trader} />
            ))}
          </div>

          {/* pagination button */}
          <div className="w-full flex items-center justify-center py-4">
              <button className="text-xl font-bold bg-black border-1 border-primary px-14 py-3 rounded-xl w-fit">
                Load More
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
