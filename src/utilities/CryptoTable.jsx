import { useEffect, useState } from "react";
import axios from "axios";

const CryptoTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets", {
                params: {
                    vs_currency: "usd",
                    order: "market_cap_desc",
                    per_page: 10,
                    page: 1,
                    sparkline: false,
                },
            })
            .then((res) => {
                setCoins(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching data", err);
                setLoading(false);
            });
    }, []);

    if (loading)
        return <p className="text-center mt-10">Loading crypto data...</p>;

    return (
        <div className="overflow-x-auto mt-8 w-full px-2 md:px-3 lg:px-8 xl:px-12 ">
            <table className="min-w-full bg-black ">
                <thead className="bg-primary text-left text-black">
                    <tr>
                        <th className="py-3 px-4">Coin</th>
                        <th className="py-3 px-4">Price</th>
                        <th className="py-3 px-4">24h Change</th>
                        <th className="py-3 px-4">Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <tr
                            key={coin.id}
                            className="border-t hover:bg-gray-800 text-white text-sm"
                        >
                            <td className="py-3 px-6 flex items-center gap-2 text-sm">
                                <img
                                    src={coin.image}
                                    alt={coin.name}
                                    className="w-6 h-6"
                                />
                                <span>{coin.name}</span>
                            </td>
                            <td className="py-3 px-6 text-sm">
                                ${coin.current_price.toLocaleString()}
                            </td>
                            <td
                                className={`py-3 px-6 text-sm ${
                                    coin.price_change_percentage_24h >= 0
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </td>
                            <td className="py-3 px-6 text-white text-sm">
                                ${coin.market_cap.toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
