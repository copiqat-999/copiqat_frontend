import { IoMdTime } from "react-icons/io";
import { IoTriangle } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

const Portfolio = ({ dashboardData }) => {
  const navigate = useNavigate();

  
  return (
    <div className="flex flex-col gap-y-3 bg-black  w-full lg:w-[65%] ">
      <div className="flex flex-col gap-y-0 lg:gap-y-6 bg-primary lg:bg-whyCard py-3 lg:py-4 px-4  lg:px-4 md:px-4 w-full rounded-lg justify-start lg:justify-normal">
        {/* header div */}
        <div className="flex flex-row items-center justify-end lg:justify-between w-full ">
          <h1 className="hidden lg:flex text-lg font-semibold text-white">
            Portfolio Overview
          </h1>
          <span className="text-3xl text-black font-bold lg:text-primary">
            <IoMdTime />
          </span>
        </div>

        {/* Deposit / Withdraw */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:justify-between lg:py-4 py-0">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="lg:hidden flex text-lg text-black font-normal">
              Total Balance
            </h1>
            <h1 className="text-3xl font-bold text-black lg:text-primary py-2">
              {/* ${dashboardData.balance} */}
              {!dashboardData ? <Spinner size="sm" color="warning" /> : `$${dashboardData.balance}`}
            </h1>
            <div className="lg:flex hidden items-center gap-x-1.5">
              <span className="text-sm text-lime-400 font-semibold flex items-center">
                <IoTriangle /> +5.27%
              </span>
              <span className="text-white text-sm">today</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-4 py-0 lg:py-4">
            <button
              onClick={() => navigate("/deposit")}
              className="px-4 py-3 text-[16px] bg-black lg:bg-primary text-primary lg:text-black font-semibold   lg:text-xl rounded-xl flex items-center gap-1 hover:transition-transform hover:scale-105 duration-300 cursor-pointer"
            >
              <FaPlus /> Deposit
            </button>
            <button
              onClick={() => navigate("/withdraw")}
              className="px-4 py-3 text-[16px] bg-primary lg:border-none border-1 border-black lg:bg-black text-black lg:text-primary lg:text-xl font-semibold  rounded-xl flex items-center gap-1 lg:border-primary hover:transition-transform hover:scale-105 duration-300 cursor-pointer"
            >
              <FaMinus /> Withdraw
            </button>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="flex flex-col md:flex-row  items-center justify-center md:justify-start gap-3 py-4 md:gap-6 lg:gap-8">
        <div className="w-full flex gap-3 md:w-fit md:gap-6 lg:gap-8">
          <div className="flex flex-col bg-whyCard py-4 px-4 md:px-6   rounded-lg items-center justify-center w-full md:w-fit">
            <span className="text-sm  text-white">Daily P/L</span>
            <span className="text-lg font-semibold text-lime-400">
              {!dashboardData ? <Spinner size="sm" color="warning" /> : `+$${dashboardData.daily_pl}`}
            </span>
          </div>
          <div className="flex flex-col bg-whyCard py-4 px-4 md:px-6 rounded-lg items-center justify-center w-full md:w-fit">
            <span className="text-sm  text-white">Weekly P/L</span>
            <span className="text-lg font-semibold text-lime-400">
              {/* +${dashboardData.weekly_pl} */}
              {!dashboardData ? <Spinner size="sm" color="warning" /> : `+$${dashboardData.weekly_pl}`}
            </span>
          </div>
        </div>
        <div className="w-full flex gap-3 md:w-fit md:gap-6 lg:gap-8">
          <div className="flex flex-col bg-whyCard py-4 px-4 md:px-6 rounded-lg items-center justify-center w-full md:w-fit">
            <span className="text-sm  text-white">Monthly P/L</span>
            <span className="text-lg font-semibold text-lime-400">
              {/* +${dashboardData.monthly_pl} */}
              {!dashboardData ? <Spinner size="sm" color="warning" /> : `+$${dashboardData.monthly_pl}`}
            </span>
          </div>
          <div className="flex flex-col bg-whyCard py-4 px-4 md:px-6 rounded-lg items-center justify-center w-full md:w-fit">
            <span className="text-sm  text-white">Active Trades</span>
            <span className="text-lg font-bold text-white">
              {/* {dashboardData.active_trades_count} */}
              {!dashboardData ? <Spinner size="sm" color="warning" /> : `${dashboardData.active_trades_count}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
