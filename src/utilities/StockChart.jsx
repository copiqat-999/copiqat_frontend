// components/StockChart.jsx
import { AdvancedChart } from "react-tradingview-embed";

const StockChart = ({ symbol = "AAPL" }) => {
  return (
    <div className="w-full h-full mt-6 ">
      <AdvancedChart
        widgetProps={{
          symbol: symbol, // e.g. "AAPL", "GOOGL", "MSFT", etc.
          theme: "dark", // or "light"
          interval: "D",
          timezone: "Etc/UTC",
          style: "1", // 1 = candle, 9 = bar, 3 = line, etc.
          locale: "en",
          width: "100%",
          height: "100%",
          hide_top_toolbar: true,

          hide_side_toolbar: true, // 👈 hides the left tools
          withdateranges: true,
          save_image: false,
        }}
      />
    </div>
  );
};

export default StockChart;
