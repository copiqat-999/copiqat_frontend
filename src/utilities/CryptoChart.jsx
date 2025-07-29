import { AdvancedChart } from "react-tradingview-embed";

const CryptoChart = ({symbol}) => {
  return (
    <div className="w-full h-screen">
      <AdvancedChart
        widgetProps={{
          symbol: symbol, // ← Crypto pair symbol here
          theme: "dark",
          locale: "en",
          autosize: true,
          interval: "60",
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

export default CryptoChart;
