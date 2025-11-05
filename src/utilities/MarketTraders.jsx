import { FaStar } from "react-icons/fa";
import { Spinner } from "flowbite-react";



const MarketTraders = ({ traders, handleCopy, loading }) => {
  return (
    <div className="flex flex-col py-3 px-2 lg:py-8 lg:px-6 gap-y-2 bg-whyCard rounded-xl">
      <span className="flex gap-x-2 text-green-400 text-sm lg:text-xl">
        {Array.from({ length: traders.stars }).map((_, index) => (
          <FaStar key={index} />
        ))}
      </span>
      <h1 className="text-lg lg:text-xl font-bold text-primary lg:pt-4 pt-2">{traders.name}</h1>
      <div className="flex flex-col px-3 py-1 lg:px-8 gap-y-3 lg:py-2">
        <div className="flex justify-between w-full text-white font-semibold text-sm lg:text-xl">
          <span>Return</span>
          <span className="text-green-400">{traders.returns}%</span>
        </div>
        <div className="flex justify-between w-full text-white font-semibold text-sm lg:text-xl">
          <span>Win rate</span>
          <span className="">{traders.win_rate}%</span>
        </div>
        <div className="flex justify-between w-full text-white font-semibold lg:text-xl text-sm">
          <span>Copiers</span>
          <span className="">{traders.copiers}</span>
        </div>

        {/* button */}
        <div className="w-full flex items-center justify-center mt-4">
          {
            loading === traders.id ? (
              <Spinner size="sm" color="warning" />
            ) : (
              <button onClick={() => handleCopy(traders.id)} className="lg:text-xl text-sm font-semibold text-black py-2  rounded-xl bg-primary w-[80%] ">
                Copy trader
              </button>
            )
          }

          
        </div>
      </div>
    </div>
  );
};

export default MarketTraders;
