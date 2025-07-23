import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsMegaphoneFill } from "react-icons/bs";

const assets = [
  { name: "BTC" },
  { name: "ETH" },
  { name: "USDT" },
  { name: "BNB" },
  { name: "USDC" },
  { name: "TRX" },
];

const network = [{ name: "Bitcoin - BTC" }, { name: "Ethereum - ETH" }];

const Deposit = () => {
  const [selectAsset, setSelectAsset] = useState("BTC");
  const [selectNetwork, setSelectNetwork] = useState("Bitcoin - BTC");

  const [copied, setCopied] = useState(false);
  const textToCopy = "bc1q6njv4ft9sf5uy84vy897m2g0cclfkcv74gllx4";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied after 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <section className="container mx-auto min-h-screen py-8 mt-4 flex flex-col items-center justify-center px-2">
      <div className="w-full lg:w-[60%] flex flex-col py-2 ">
        {/* header text */}
        <div className="flex flex-col gap-y-1.5 py-8">
          <h1 className="text-3xl font-bold text-primary">Fund Your Vault</h1>
          <span className="text-sm font-normal text-white">
            Start Trading by funding your vault
          </span>
        </div>

        {/* main */}
        <div className="w-full border-1 border-primary flex flex-col gap-y-2 rounded-lg px-6 py-6">
          {/* assets */}
          <div className="flex flex-col pt-2">
            <h2 className="text-xl font-bold text-primary py-2">
              Select Asset
            </h2>
            <div className="py-2 grid grid-cols-3 gap-4">
              {assets.map((asset) => (
                <button
                  onClick={() => setSelectAsset(asset.name)}
                  className={`w-full text-sm py-4 font-semibold ${
                    selectAsset === asset.name
                      ? "text-black bg-primary"
                      : "bg-deposit/10 text-white border-1 border-gray-600"
                  }  rounded-lg`}
                >
                  {asset.name}
                </button>
              ))}
            </div>
          </div>

          {/* network */}
          <div className="flex flex-col pt-2">
            <h2 className="text-xl font-bold text-primary py-2">Network</h2>

            <div className="relative flex w-full border-1 border-gray-600 rounded-lg p-0">
              <select
                value={selectNetwork}
                onChange={(e) => setSelectNetwork(e.target.value)}
                className="w-full border-none rounded-lg bg-deposit/10 flex items-start justify-start px-6 text-sm  text-gray-400 font-light py-4 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
              >
                {network.map((items) => (
                  <option value={items.name}>{items.name}</option>
                ))}
              </select>

              <div className="absolute right-10 flex gap-1.5 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
                <span className="text-sm font-semibold text-primary">
                  Fee: $2.50
                </span>
                <IoIosArrowDown size={20} />
              </div>
            </div>
          </div>

          {/* Amount */}
          <div className="flex flex-col pt-2">
            <h2 className="text-xl font-bold text-primary py-2">
              Deposit Amount
            </h2>

            <div className="relative flex w-full border-1  border-gray-600 rounded-lg p-0">
              <input
                type="text"
                placeholder="0.00"
                className="w-full border-none rounded-lg bg-deposit/10 flex items-start justify-start px-6 text-sm  text-gray-400 font-light py-4 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
              />

              <span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                {selectAsset}
              </span>
            </div>
            <div>
              <span className="text-[12px] font-light text-gray-300">
                Minimum deposit: 0.001 {selectAsset}
              </span>
            </div>
          </div>

          {/* vault address */}
          <div className="w-full flex flex-col p-3 rounded-lg border-1 bg-deposit/10 border-gray-600 gap-y-3 mt-4">
            <h2 className="text-sm font-bold text-white/85 py-2">
              Your vault address
            </h2>
            <span className="text-[10px]  sm:text-sm font-bold text-primary w-full h-full text-pretty   ">
              bc1q6njv4ft9sf5uy84vy897m2g0cclfkcv74gllx4
            </span>
            <button
              onClick={handleCopy}
              className="w-full text-center py-3 rounded-lg text-sm font-bold text-black bg-primary"
            >
              {copied ? "Copied!" : "Copy address"}
            </button>
          </div>

          {/* Disclaimer */}

          <div className="w-full flex flex-col p-6 rounded-lg border-1 bg-primary/20 border-primary/20 gap-y-3 mt-4">
            <div className="md:w-[70%] w-full flex flex-col">
              <span className="flex gap-2 items-center pb-4 text-sm font-bold text-primary">
                {/* <BsMegaphoneFill />  */}
                Important
              </span>
              <h3 className="text-sm font-semibold text-primary">
                Only send BTC to this address on Bitcoin network. Sending other
                coins may result in permanent loss.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deposit;
