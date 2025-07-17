import { FaChartLine } from "react-icons/fa";

import { TiFlash } from "react-icons/ti";
<TiFlash />;

import { IoShieldCheckmarkSharp } from "react-icons/io5";
<IoShieldCheckmarkSharp />;

const Why = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center py-8 mt-2 mb-8 gap-y-6 px-2">
      {/* header text */}
      <div className="flex flex-col items-center justify-center text-center w-full gap-y-2 md:w-[60%]">
        <h1 className="text-[25px] md:text-3xl text-white font-bold">
          Why Choose <span className="text-primary">Copiqat</span> ?
        </h1>
        <p className="text-sm text-white font-normal">
          Our platform combines cutting-edge technology with proven trading
          strategies to maximize your Trading potential.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center md:justify-between md:px-8 py-3 md:w-full ">
        {/* Trader Card */}
        <div className="w-full h-[300px] rounded-xl py-2 px-8 md:px-2 bg-whyCard border-1 border-primary flex flex-col justify-center items-center text-center gap-2  max-w-[350px]">
          <span className="p-3 rounded-lg bg-primary w-fit">
            <FaChartLine className="text-3xl text-black" />
          </span>
          <h3 className="text-2xl font-bold text-white py-2">Top Traders</h3>
          <span className="text-sm font-normal text-white">
            Follow and copy trades from verified professional traders with
            proven track records and consistent profits.
          </span>
        </div>
        {/* Trader Card2 */}
        <div className="w-full h-[300px] rounded-xl py-2 px-8 md:px-2 bg-whyCard border-1 border-primary flex flex-col justify-center items-center text-center gap-2 max-w-[350px]">
          <span className="p-3 rounded-lg bg-primary w-fit">
            <TiFlash className="text-3xl text-black" />
          </span>
          <h3 className="text-2xl font-bold text-white py-2">
            Instant Execution
          </h3>
          <span className="text-sm font-normal text-white">
            Lightning-fast trade execution ensures you never miss profitable
            opportunities with real-time synchronization.
          </span>
        </div>
        {/* Trader Card3 */}
        <div className="w-full h-[300px] rounded-xl py-2 px-8 md:px-2 bg-whyCard border-1 border-primary flex flex-col justify-center items-center text-center gap-2 max-w-[350px]">
          <span className="p-3 rounded-lg bg-primary w-fit">
            <IoShieldCheckmarkSharp className="text-3xl text-black" />
          </span>
          <h3 className="text-2xl font-bold text-white py-2">
            Risk Management
          </h3>
          <span className="text-sm font-normal text-white">
            Advanced risk controls and customizable settings help protect your
            capital while maximizing returns.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Why;
