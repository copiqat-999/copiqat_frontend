import RootNavbar from "../utilities/RootNavbar";
import Portfolio from "../utilities/Portfolio";
import Referral from "../utilities/Referral";
import Trade from "../utilities/Trade";
import CryptoTable from "../utilities/CryptoTable";
import StockCards from "../utilities/StockCards";
import { useState } from "react";
import TradeForm from "../utilities/TradeForm";
import AccordionTable from "../utilities/AccordionTable";
import Table from "../utilities/Table";
import StockChart from "../utilities/StockChart";

const sampleData = [
  {
    asset: "Bitcoin",
    entry_price: "$250",
    type: "Buy",
    current_price: "$160",
    pl: "+$60 (3.25%)",
    duration: "1 day",
  },
  {
    asset: "Ethereum",
    entry_price: "$50",
    type: "Sell",
    current_price: "$60",
    pl: "+$60 (3.25%)",
    duration: "2 hours",
  },
];

const Vault = () => {
  const [view, setView] = useState("crypto");
  const [trade, setTrade] = useState("live");

  return (
    <section className="container mx-auto flex flex-col py-2 gap-y-4 px-2">
      {/* Navbar */}
      <RootNavbar />
      {/* Portfolio and Referral program */}
      <div className="flex flex-col  w-full gap-8 items-start mb-12 ">
        <div className="flex flex-col lg:flex-row w-full gap-8 items-start ">
          <Portfolio />
          <Referral />
        </div>
        {/* mobile view stock chart */}
        <div className=" flex w-full h-[700px]  justify-center items-center p-0">
          <StockChart symbol="AAPL" />
        </div>
      </div>
      {/* Table */}
      <div className="flex w-full flex-col">
        <h1 className="text-xl font-bold text-white py-4">
          Top Trading Assets
        </h1>
        <div className="flex flex-col gap-2 w-full px-2 md:px-3 lg:px-8 xl:px-12 ">
          <div className="flex ">
            <button
              onClick={() => setView("stock")}
              className={`w-fit ${
                view === "stock" ? "border-b-2 border-primary" : ""
              }   bg-black text-white text-sm px-3 py-2 transition-colors hover:text-primary duration-200 cursor-pointer`}
            >
              Stock
            </button>
            <button
              onClick={() => setView("crypto")}
              className={`w-fit ${
                view === "crypto" ? "border-b-2 border-primary" : ""
              }   bg-black text-white text-sm px-3 py-2 transition-colors hover:text-primary duration-200 cursor-pointer`}
            >
              Crypto
            </button>
          </div>
          <hr className="bg-white border-0 h-px border-gray-300" />
        </div>
        {view === "crypto" ? <CryptoTable /> : <StockCards />}

        {/* Desktop view stock chart */}
      </div>

      {/* Trade */}
      <div className="py-8 mt-2 flex w-full gap-y-3 flex-col-reverse  lg:flex-col">
        <Trade />
        <TradeForm />
      </div>
      {/* Your trades */}
      <div className="flex flex-col px-2 md:px-3 lg:px-8 xl:px-12 gap-y-4 py-8">
        <h1 className="text-xl font-bold text-white">Your Trades</h1>
        {/* trade buttons */}
        <div>
          <button
            onClick={() => setTrade("live")}
            className={`w-fit ${
              trade === "live" ? "border-b-2 border-primary" : ""
            }   bg-black text-white text-sm px-3 py-2 transition-colors hover:text-primary duration-200 cursor-pointer`}
          >
            Live
          </button>
          <button
            onClick={() => setTrade("closed")}
            className={`w-fit ${
              trade === "closed" ? "border-b-2 border-primary" : ""
            }   bg-black text-white text-sm px-3 py-2 transition-colors hover:text-primary duration-200 cursor-pointer`}
          >
            Closed
          </button>
        </div>
        <hr className="bg-white border-0 h-px border-gray-300" />
        {/* Trades div */}
        <div className="flex flex-col gap-y-3 w-full">
          {/* header element */}
          <div className="hidden lg:grid lg:grid-cols-7 gap-2 py-4 px-2 bg-primary rounded-lg shadow-lg mb-2">
            <span className="text-sm text-black font-semibold">Asset</span>
            <span className="text-sm text-black font-semibold">Type</span>
            <span className="text-sm text-black font-semibold">
              Entry Price
            </span>
            <span className="text-sm text-black font-semibold ">
              Current Price
            </span>
            <span className="text-sm text-black font-semibold ">P/L</span>
            <span className="text-sm text-black font-semibold ">Duration</span>
            <span className="text-sm text-black font-semibold ">Action</span>
          </div>
          <Table />
          <Table />
          <Table />
          <div className="w-full lg:hidden">
            <AccordionTable data={sampleData} />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Vault;
