import { FaLock } from "react-icons/fa6";
import { MdInfo } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import api from "../utils/api";

const Withdraw = () => {
    const [selection, setSelection] = useState("Choose Network");
    const [loading, setLoading] = useState(false);
    const [dashboardData, setDashboardData] = useState(null);

    const maxReferrals = 2;

    const [copied, setCopied] = useState(false);

    const handleCopy = async (referralLink) => {
        try {
            await navigator.clipboard.writeText(referralLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied after 2
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    // API Endpoints
    const API_BASE = import.meta.env.VITE_API_BASE_URL;
    const ENDPOINTS = {
        dashboard: `${API_BASE}/api/dashboard`,
    };

    const fetchDashboard = async () => {
        setLoading(true);
        try {
            const { data } = await api.get(ENDPOINTS.dashboard);

            setDashboardData(data);
        } catch (error) {
            console.error(error.response);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboard();
    }, []);

    // Safely calculate referral count and progress
    const tradeCount = dashboardData?.active_trade_count || 0;
    const progress = Math.min((tradeCount / maxReferrals) * 100, 100); // cap at 100%

    return (
        <section className="container mx-auto min-h-screen py-8 mt-4 flex flex-col items-center justify-center px-2">
            <div className="w-full lg:w-[60%] flex flex-col py-2">
                {/* main */}
                <div className="flex flex-col gap-y-4">
                    {/* header text */}
                    <h1 className="lg:text-3xl text-xl font-bold text-primary mb-8">
                        Funds Withdrawal
                    </h1>

                    {/* locked */}
                    <div className="flex flex-col w-full gap-y-6 items-center justify-center text-center py-8 mt-2">
                        <span>
                            <FaLock className="text-5xl text-primary" />
                        </span>
                        <span className="text-red-700 text-lg font-bold">
                            Withdrawal locked
                        </span>
                        <div className="w-full lg:w-[400px]">
                            <span className="text-sm font-normal text-white">
                                You need to make at least two trades to be able
                                to withdraw
                            </span>
                        </div>
                    </div>

                    {/* Referral progress */}
                    <div className="w-full p-4 md:p-8 rounded-lg bg-whyCard flex flex-col gap-y-4">
                        <h2 className="md:text-xl text-lg font-semibold text-white py-1">
                            Your Trades
                        </h2>
                        <div className="w-full flex flex-col">
                            <div className="w-full flex justify-between">
                                <h3 className="text-sm font-semibold text-white">
                                    Active trades
                                </h3>
                                <span className="text-sm font-semibold text-primary">
                                    {tradeCount}/{maxReferrals}
                                </span>
                            </div>
                            <div className="w-full rounded-xl bg-deposit/55 py-1">
                                <div
                                    style={{ width: `${progress}%` }}
                                    className="rounded-xl bg-primary py-1.5 transition-all duration-300"
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* info */}
                    <div className="w-full flex flex-col p-4 lg:p-8 rounded-lg gap-y-2 bg-primary/20 mt-2">
                        <div className="flex gap-x-2 items-center text-sm font-semibold text-primary">
                            <MdInfo className="text-2xl" />
                            <span className="text-sm sm:text-lg text-pretty">
                                Refer family and friends and get instant withdrawals
                            </span>
                        </div>
                        <div className="px-3 md:px-6 w-full flex flex-col gap-y-2">
                            <div className="flex items-center gap-x-3">
                                <div className="rounded-full p-1 bg-primary"></div>
                                <span className="text-sm font-semibold text-primary">
                                    Share your referral link with friends
                                </span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="rounded-full p-1 bg-primary"></div>
                                <span className="text-sm font-semibold text-primary">
                                    Referred users must complete verification
                                </span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="rounded-full p-1 bg-primary"></div>
                                <span className="text-sm font-semibold text-primary">
                                    They need to fund their account and make at
                                    least one transaction
                                </span>
                            </div>
                            <button
                                // href={dashboardData.referral_link}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCopy(dashboardData.referral_link);
                                }}
                                className="flex gap-1 text-sm lg:text-lg font-semibold bg-primary rounded-2xl py-2 my-4 cursor-pointer w-full  text-black md:mt-8 justify-center  items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {copied ? (
                                    "Copied!"
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        <FaLink className="text-2xl" /> Copy
                                        referral link
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* form */}
                    <div className="flex flex-col w-full py-6 gap-y-6">
                        <div className="flex flex-col gap-y-4 w-full">
                            <label
                                className="text-sm font-semibold text-white"
                                htmlFor="amount"
                            >
                                Withdrawal Amount
                            </label>
                            <input
                                placeholder="Enter Amount"
                                type="number"
                                className="py-2 w-full px-6 text-sm font-normal border-1 border-gray-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="flex flex-col gap-y-4 w-full">
                            <label
                                className="text-sm font-semibold text-white"
                                htmlFor="amount"
                            >
                                Withdrawal Address
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Address"
                                className="py-2 w-full px-6 text-sm font-normal border-1 border-gray-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="relative flex flex-col w-full">
                            <select
                                value={selection}
                                onChange={(e) => setSelection(e.target.value)}
                                className="w-full border-1 border-gray-600 rounded-xl bg-black flex items-start justify-start px-6 text-sm text-white font-semibold py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
                            >
                                <option
                                    className="w-full bg-primary text-black"
                                    value="Choose Network"
                                >
                                    Choose Network
                                </option>
                                <option value="Bitcoin">Bitcoin</option>
                                <option value="Ethereum">Ethereum</option>
                                <option value="Solana">Solana</option>
                            </select>
                            <IoIosArrowDown
                                className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
                                size={20}
                            />
                        </div>
                    </div>

                    {/* button */}
                    <div className="w-full flex py-4 mb-8">
                        <button
                            disabled
                            className="w-full py-3 rounded-lg bg-primary/65 text-lg font-bold text-primary disabled:cursor-not-allowed"
                        >
                            Withdrawal Locked
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Withdraw;
