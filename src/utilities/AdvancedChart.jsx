import { AdvancedChart } from "react-tradingview-embed";

const ForexChart = () => {
  return (
    <div className="flex h-[500px] mt-6 border border-amber-500 justify-center w-[100%] p-0">
      <AdvancedChart
        widgetProps={{
          symbol: "EURUSD", // Change to any forex pair
          theme: "dark", // or "light"
          autosize: true,
          // Explicitly set width and height to ensure full container usage
          width: "100%",
          height: "100%",
          hide_side_toolbar: true,      // hides the sidebar
          hide_top_toolbar: true,       // hides the top toolbar
        }}
      />
    </div>
  );
};

export default ForexChart;