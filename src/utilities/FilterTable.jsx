const FilterTable = ({ trade }) => {
  function isNegative(number) {
    return String(number).startsWith("-");
  }

  if (!trade || trade.length === 0) {
    return (
      <div className="w-full flex items-center justify-center text-lg font-light text-primary py-6">
        <span>You have no active trades...</span>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex flex-col gap-3">
      <div className="hidden lg:grid lg:grid-cols-7 gap-2 py-4 px-2 bg-primary rounded-lg shadow-lg mb-2 place-items-center">
        <span className="text-sm text-black font-semibold">Asset</span>
        <span className="text-sm text-black font-semibold">Type</span>
        <span className="text-sm text-black font-semibold">Entry Price</span>
        <span className="text-sm text-black font-semibold ">Current Price</span>
        <span className="text-sm text-black font-semibold ">P/L</span>
        <span className="text-sm text-black font-semibold ">Duration</span>
        <span className="text-sm text-black font-semibold ">Status</span>
      </div>
      {trade.map((trade_data) => (
        <div
          key={trade_data.id}
          className="hidden lg:grid lg:grid-cols-7 gap-2 py-4 px-2 bg-whyCard rounded-lg shadow-lg place-items-center "
        >
          <span className="text-sm text-white font-semibold">
            {trade_data.asset}
          </span>
          <span
            className={`${
              trade_data.trade_type === "buy" ? "bg-lime-500" : "bg-red-700"
            } text-[10px] font-semibold text-white px-3 py-1 flex items-center justify-center h-fit rounded-full`}
          >
            {trade_data.trade_type}
          </span>
          <span className="text-sm text-white">{trade_data.entry_price}</span>
          <span>{trade_data.current_price}</span>
          <span className="flex gap-x-2">
            <span
              className={`${
                isNegative(trade_data.pl) ? "text-red-500" : "text-lime-400"
              }`}
            >
              {trade_data.pl} ({trade_data.pl_percent}%)
            </span>
          </span>
          <span className="text-sm text-white">{trade_data.duration}</span>
          <span className="text-sm text-white">{trade_data.trade_status}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterTable;
