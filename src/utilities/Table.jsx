import React from "react";

const Table = () => {
  return (
    <div className="hidden lg:grid lg:grid-cols-7 gap-2 py-4 px-2 bg-whyCard rounded-lg shadow-lg ">
      <span className="text-sm text-white font-semibold">AAPL Apple Inc.</span>
      <span className="text-sm w-fit text-white font-semibold px-3 py-1 rounded-2xl bg-green-400">Buy</span>
      <span className="text-sm text-white ">$378.39</span>
      <span className="text-sm text-white  ">$235.89</span>
      <span className="text-sm  font-semibold text-green-400 ">+$460.9(20%)</span>
      <span className="text-sm text-white  ">2d 4h</span>
      <button className="text-sm w-fit bg-red-500 px-3 py-1 text-white rounded-2xl font-semibold ">Close</button>
    </div>
  );
};

export default Table;
