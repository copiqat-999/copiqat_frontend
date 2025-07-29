import React from "react";

const Table = () => {
  return (
    <div className="hidden lg:grid lg:grid-cols-7 gap-2 py-4 px-2 bg-whyCard rounded-lg shadow-lg place-items-center ">
      <span className="text-sm text-white font-semibold">AAPL Apple Inc.</span>
      <span className="text-[10px] h-fit w-fit text-white flex items-center font-semibold px-4 py-0.5 rounded-xl bg-lime-500">Buy</span>
      <span className="text-sm text-white ">$378.39</span>
      <span className="text-sm text-white  ">$235.89</span>
      <span className="text-sm   font-semibold text-lime-400 ">+$460.9(20%)</span>
      <span className="text-sm text-white  ">2d 4h</span>
      <button className="text-sm w-fit bg-red-600 px-4 py-2 text-white rounded-xl cursor-pointer hover:transition-transform hover:scale-105 duration-300 font-semibold ">Close</button>
    </div>
  );
};

export default Table;
