import { useState, useEffect } from "react";
import axios from "axios";

const StockCards = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiKey = import.meta.env.VITE_FMP_API_KEY;

    // useEffect(() => {
    //     axios
    //         .get(
    //             `https://financialmodelingprep.com/api/v3/stock/actives?apikey=${apiKey}`
    //         )
    //         .then((res) => {
    //             setStocks(res.data.mostActiveStock || []);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.error("Failed to fetch stocks", err);
    //             setLoading(false);
    //         });
    // }, []);

    if (loading) return <p className="text-center mt-10">Loading stocks...</p>;

    return (
        <div className="mt-8 overflow-x-auto w-full px-2 md:px-3 lg:px-8 xl:px-12  scrollbar-thin scrollbar-thumb-primary scrollbar-track-whyCard">
            {/*  Stock Cards */}
            <div className="flex w-full py-4 gap-6">
                {stocks.map((stock) => (
                    <div
                        key={stock.ticker}
                        className="min-w-[250px] flex items-start justify-start gap-x-4 w-64 p-4 border border-primary rounded-lg shadow hover:shadow-md transition bg-black flex-shrink-0"
                    >
                        <div className="flex flex-col gap-y-3">
                            <h2 className="text-sm font-semibold">
                                {stock.companyName}
                            </h2>
                            <p className="text-gray-600">{stock.ticker}</p>
                            <p className=" text-sm">
                                Price:{" "}
                                <span className="font-bold">
                                    ${stock.price}
                                </span>
                            </p>
                        </div>
                        <p
                            className={` text-sm ${
                                stock.changes >= 0
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {stock.changes >= 0 ? "+" : ""}
                            {stock.changes.toFixed(2)} (
                            {stock.changesPercentage})
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StockCards;
