import RootNavbar from "../utilities/RootNavbar";
import Portfolio from "../utilities/Portfolio";
import Referral from "../utilities/Referral";
import Trade from "../utilities/Trade";
import CryptoTable from "../utilities/CryptoTable";
import StockCards from "../utilities/StockCards";
import { useState, useEffect, useMemo } from "react";
import TradeForm from "../utilities/TradeForm";
import AccordionTable from "../utilities/AccordionTable";
import StockChart from "../utilities/StockChart";
import ForexChart from "../utilities/ForexChart";
import CryptoChart from "../utilities/CryptoChart";
import api from "../utils/api";
import { toast } from "react-toastify";
import Table from "../utilities/Table";
import FilterTable from "../utilities/FilterTable";
import AccordionFilter from "../utilities/AccordionFilter";

const forexPairs = ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD"];
const stockPairs = ["AAPL", "GOOGL", "TSLA", "MSFT"];
const cryptoPairs = ["BTC/ETH", "ETH/DOGE", "BNB/SOL"];

const Vault = () => {
    const [view, setView] = useState("crypto");
    const [errors, setErrors] = useState({});

    // Loading / Errors
    const [loading, setLoading] = useState({
        dashboard: false,
        trades: false,
        buy: false,
        sell: false,
    });
    const [trade, setTrade] = useState("live");
    const [activeTab, setActiveTab] = useState("stock");
    const [selectPair, setSelectPair] = useState(stockPairs[0]);
    const [dashboardData, setDashboardData] = useState(null);
    // const [selectTime, setSelectTime] = useState("1 Hour");
    const [tradeForm, setTradeForm] = useState({
        asset: stockPairs[0],
        trade_type: "",
        duration: "1 Hour",
        take_profit: "",
        stop_loss: "",
    });
    const [userTrades, setUserTrades] = useState([]);

    // API Endpoints
    const API_BASE = import.meta.env.VITE_API_BASE_URL;

    const ENDPOINTS = {
        dashboard: `${API_BASE}/api/dashboard`,
        listTrades: `${API_BASE}/api/list_trade`,
        createTrade: `${API_BASE}/api/trade/`,
        filterTrade: `${API_BASE}/api/list_trade?trade_status__iexact=open`,
        filterCloseTrade: `${API_BASE}/api/list_trade?trade_status__iexact=closed`,
    };

    const [filterUrl, setFilterUrl] = useState(`${ENDPOINTS.filterTrade}`);

    /** ===============================
     * Fetch Functions
     *
     * =============================== */

    const fetchTrades = async (url = filterUrl) => {
        console.log("i am fetching the trades");
        setLoading((prev) => ({ ...prev, trades: true }));
        try {
            const { data } = await api.get(url);
            console.log(data);
            setUserTrades(data);
        } catch (error) {
            console.error(error.response);
            setErrors(error.response?.data || {});
        } finally {
            setLoading((prev) => ({ ...prev, trades: false }));
        }
    };

    // Fetch Dashboard Data
    const fetchDashboard = async () => {
        setLoading((prev) => ({ ...prev, dashboard: true }));
        try {
            const { data } = await api.get(ENDPOINTS.dashboard);
            setDashboardData(data);
        } catch (error) {
            console.error(error.response);
            setErrors(error.response?.data || {});
        } finally {
            setLoading((prev) => ({ ...prev, dashboard: false }));
        }
    };

    // Load dashboard and fetch trades on page mount
    useEffect(() => {
        fetchDashboard();
    }, []);

    useEffect(() => {
        fetchTrades(filterUrl);
        const interval = setInterval(() => fetchTrades(filterUrl), 60000);
        return () => clearInterval(interval);
    }, [filterUrl]);

    /** ===============================
     * Create Trade
     * =============================== */
    // Create Trade
    const createTrade = async (formData) => {
        const isBuy = formData.trade_type === "buy";

        setLoading((prev) => ({
            ...prev,
            buy: isBuy,
            sell: !isBuy,
        }));

        try {
            await api.post(ENDPOINTS.createTrade, formData, {
                headers: { "Content-Type": "application/json" },
            });

            toast.success("Trade successfully initiated");
            fetchDashboard(); // fetch dashboard data so the count will be updated

            // Refresh trades immediately after creation
            fetchTrades();
        } catch (error) {
            console.error(error.response);
            setErrors(error.response?.data || {});
        } finally {
            setLoading((prev) => ({
                ...prev,
                buy: false,
                sell: false,
            }));
        }
    };

    /** ===============================
     * Effects
     * =============================== */
    useEffect(() => {
        // Change pair based on tab
        let newPair =
            activeTab === "forex"
                ? forexPairs[0]
                : activeTab === "stock"
                ? stockPairs[0]
                : cryptoPairs[0];

        setSelectPair((prev) => (prev !== newPair ? newPair : prev));
    }, [activeTab]);

    /** ===============================
     * Memoized Chart
     * =============================== */
    const ChartComponent = useMemo(() => {
        if (activeTab === "forex") return <ForexChart symbol={selectPair} />;
        if (activeTab === "stock") return <StockChart symbol={selectPair} />;
        return <CryptoChart symbol={selectPair} />;
    }, [activeTab, selectPair]);

    return (
        <section className="container mx-auto flex flex-col py-2 gap-y-4 px-2">
            <RootNavbar />

            {/* Portfolio & Referral */}
            <div className="flex flex-col w-full gap-8 items-start mb-12">
                <div className="flex flex-col lg:flex-row w-full gap-8 items-start">
                    <Portfolio dashboardData={dashboardData} />
                    <Referral dashboardData={dashboardData} />
                </div>

                <div className="flex w-full h-[700px] justify-center items-center">
                    {ChartComponent}
                </div>
            </div>

            {/* Top Trading Assets */}
            <div className="flex w-full flex-col">
                <h1 className="text-xl font-bold text-white py-4">
                    Top Trading Assets
                </h1>
                <div className="flex flex-col gap-2 w-full px-2 md:px-3 lg:px-8 xl:px-12">
                    <div className="flex">
                        <button
                            onClick={() => setView("stock")}
                            className={`w-fit ${
                                view === "stock"
                                    ? "border-b-2 border-primary"
                                    : ""
                            } bg-black text-white text-sm px-3 py-2 hover:text-primary`}
                        >
                            Stock
                        </button>
                        <button
                            onClick={() => setView("crypto")}
                            className={`w-fit ${
                                view === "crypto"
                                    ? "border-b-2 border-primary"
                                    : ""
                            } bg-black text-white text-sm px-3 py-2 hover:text-primary`}
                        >
                            Crypto
                        </button>
                    </div>
                    <hr className="bg-white border-0 h-px" />
                </div>
                {view === "crypto" ? <CryptoTable /> : <StockCards />}
            </div>

            {/* Trade */}
            <div className="py-8 mt-2 flex w-full gap-y-3 flex-col-reverse ">
                <Trade
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
                    createTrade={createTrade}
                    setTradeForm={setTradeForm}
                    buyLoading={loading.buy}
                    sellLoading={loading.sell}
                    tradeForm={tradeForm}
                />
                <TradeForm
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
                    selectPair={selectPair}
                    setSelectPair={setSelectPair}
                    setTradeForm={setTradeForm}
                    errors={errors}
                />
            </div>

            {/* Your Trades */}
            <div className="flex flex-col px-2 md:px-3 lg:px-8 xl:px-12 gap-y-4 py-8">
                <h1 className="text-xl font-bold text-white">Your Trades</h1>
                <div>
                    <button
                        onClick={() => setFilterUrl(ENDPOINTS.filterTrade)}
                        className={`w-fit ${
                            filterUrl === ENDPOINTS.filterTrade
                                ? "border-b-2 border-primary"
                                : ""
                        } bg-black text-white text-sm px-3 py-2 hover:text-primary`}
                    >
                        Live
                    </button>

                    <button
                        onClick={() => setFilterUrl(ENDPOINTS.filterCloseTrade)}
                        className={`w-fit ${
                            filterUrl === ENDPOINTS.filterCloseTrade
                                ? "border-b-2 border-primary"
                                : ""
                        } bg-black text-white text-sm px-3 py-2 hover:text-primary`}
                    >
                        Closed
                    </button>
                </div>
                <hr className="bg-white border-0 h-px" />

                {/* Desktop view */}
                <div className="w-full hidden lg:flex flex-col">
                    {filterUrl === ENDPOINTS.filterTrade ? (
                        <Table
                            refreshDashboard={fetchDashboard}
                            refreshTrades={fetchTrades}
                            trade={userTrades}
                        />
                    ) : (
                        <FilterTable trade={userTrades} />
                    )}
                </div>

                {/* Mobile View */}
                <div className="w-full lg:hidden">
                    {filterUrl === ENDPOINTS.filterTrade ? (
                        <AccordionTable
                            data={userTrades}
                            refreshDashboard={fetchDashboard}
                            refreshTrades={fetchTrades}
                        />
                    ) : (
                        <AccordionFilter data={userTrades} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Vault;
