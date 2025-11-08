import { useState, useEffect } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Spinner } from "flowbite-react";
import api from "../utils/api";
import { toast } from "react-toastify";

const assets = [
    {
        name: "BTC",
        wallet_address: "bc1q6njv4ft9sf5uy84vy897m2g0cclfkcv74gllx4",
        network: "BTC",
    },
    {
        name: "ETH",
        wallet_address: "0x0FbE8FCD3F44d194eDeD416C4E03A19FE8880238",
        network: "ERC20 (Ethereum)",
    },
    {
        name: "USDT",
        wallet_address: "TUmjXCbp7ay3vRbe32ueEiZ92NzwAU2em6",
        network: "TRC20 (Tron)",
    },
    {
        name: "BNB",
        wallet_address: "0x0FbE8FCD3F44d194eDeD416C4E03A19FE8880238",
        network: "BEP20",
    },
    {
        name: "USDC",
        wallet_address: "TUmjXCbp7ay3vRbe32ueEiZ92NzwAU2em6",
        network: "TRC20 (Tron)",
    },
    { name: "TRX", wallet_address: "", network: "" },
];

const Deposit = () => {
    const [selectAsset, setSelectAsset] = useState(assets[0]);
    const [copied, setCopied] = useState(false);
   
    const [preview, setPreview] = useState(null);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setPreview(URL.createObjectURL(file));
            setFormData({ ...formData, reciept: file });
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(selectAsset.wallet_address);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied after 2
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    const handleSubmit = async () => {
        if (!preview) {
            setErrors((prev) => ({ ...prev, receipt: ["No file selected"] }));
            return;
        }

        setLoading(true);
        const url = `${import.meta.env.VITE_API_BASE_URL}/api/deposit/`;
        const formData = new FormData();
        formData.append(
            "receipt",
            document.getElementById("receipt-upload").files[0]
        );

        try {
            const response = await api.post(url, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setLoading(false);
            console.log(response);
            toast.success("Upload successful");
            setErrors({});
            setPreview(null);
        } catch (error) {
            console.error("API error:", error.response?.data || error.message);
            setErrors(
                error.response?.data || {
                    receipt: ["Failed to submit receipt"],
                }
            );
            setLoading(false);
        }
    };

    

    return (
        <section className="container mx-auto min-h-screen py-8 mt-4 flex flex-col items-center justify-center px-2">
            <div className="w-full lg:w-[60%] flex flex-col py-2 ">
                {/* header text */}
                <div className="flex flex-col gap-y-1.5 py-8">
                    <h1 className="text-3xl font-bold text-primary">
                        Fund Your Vault
                    </h1>
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
                                    onClick={() => setSelectAsset(asset)}
                                    key={asset.name}
                                    className={`w-full text-sm py-4 font-semibold ${
                                        selectAsset.name === asset.name
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
                        <h2 className="text-xl font-bold text-primary py-2">
                            Network
                        </h2>

                        <div className="w-full flex bg-deposit/10 border-1 border-gray-600 py-4 px-3 rounded-lg">
                            <span className="text-sm font-light text-gray-200">
                                {selectAsset.network}
                            </span>
                        </div>
                    </div>

                    {/* Amount */}
                    <div className="flex flex-col pt-2">
                        <h2 className="text-xl font-bold text-primary py-2">
                            Deposit Amount
                        </h2>

                        <div className="relative flex w-full border-1  border-gray-600 rounded-lg p-0">
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full border-none rounded-lg bg-deposit/10 flex items-start justify-start px-6 text-sm  text-gray-400 font-light py-4 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
                            />

                            <span className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                                {selectAsset.name}
                            </span>
                        </div>
                        <div>
                            <span className="text-[12px] font-light text-gray-300">
                                Minimum deposit: $500
                            </span>
                        </div>
                    </div>

                    {/* vault address */}
                    <div className="w-full flex flex-col p-3 rounded-lg border-1 bg-deposit/10 border-gray-600 gap-y-3 mt-4">
                        <h2 className="text-sm font-bold text-white/85 py-2">
                            Your vault address
                        </h2>
                        <span className="text-[10px]  sm:text-sm font-bold text-primary w-full h-full text-pretty   ">
                            {selectAsset.wallet_address}
                        </span>
                        <button
                            onClick={handleCopy}
                            className="w-full text-center py-3 rounded-lg text-sm font-bold text-black bg-primary transition-transform hover:scale-105 duration-300"
                        >
                            {copied ? "Copied!" : "Copy address"}
                        </button>
                    </div>

                    {/* upload receipt */}
                    <div className="w-full flex mt-4 py-4 justify-start gap-2 flex-col">
                        <label
                            htmlFor="receipt-upload"
                            className="mt-2 flex flex-col items-center justify-center w-full px-4 py-6 bg-deposit/25 text-white rounded-xl cursor-pointer hover:border-primary border-2 border-dashed border-gray-400 transition duration-300"
                        >
                            <FaCloudUploadAlt className="text-3xl mb-2 text-primary" />
                            <span className="text-sm font-medium text-white">
                                Click here to upload receipt
                            </span>
                            <input
                                id="receipt-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>

                        {loading ? (
                            <div className="w-full flex items-center justify-center">
                                <Spinner size="xl" color="warning" />
                            </div>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="w-full text-center py-3 rounded-lg text-sm font-bold text-black bg-primary transition-transform hover:scale-105 duration-300"
                            >
                                Upload receipt
                            </button>
                        )}

                        {errors.receipt && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.receipt[0]}
                            </p>
                        )}

                        {preview && (
                            <div className="w-[30px] h-[30px] mb-4">
                                <img
                                    src={preview}
                                    alt="Uploaded ID"
                                    className="w-full max-h-60 object-cover rounded-sm border border-gray-500"
                                />
                            </div>
                        )}
                    </div>

                    {/* Disclaimer */}

                    <div className="w-full flex flex-col p-3 md:p-6 rounded-lg border-1 bg-primary/20 border-primary/20 gap-y-3 mt-4">
                        <div className=" w-full flex flex-col gap-3">
                            <h3 className="text-lg font-semibold text-primary">
                                Why we ask for a screenshot?
                                <br />
                                <span className=" mb-2 font-normal">
                                    While most payments are tracked
                                    automatically, submitting a screenshot helps
                                    us:
                                </span>
                            </h3>
                            <div className="px-3 md:px-3 w-full flex flex-col gap-y-2">
                                <div className="flex items-center gap-x-3">
                                    <div className="rounded-full p-1 bg-primary"></div>
                                    <span className="text-sm font-semibold text-primary">
                                        Speed up transaction matching during
                                        high traffic
                                    </span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <div className="rounded-full p-1 bg-primary"></div>
                                    <span className="text-sm font-semibold text-primary">
                                        Protect against fraud or mistaken
                                        deposits
                                    </span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <div className="rounded-full p-1 bg-primary"></div>
                                    <span className="text-sm font-semibold text-primary">
                                        Resolves issues quickly if something
                                        goes wrong
                                    </span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <div className="rounded-full p-1 bg-primary"></div>
                                    <span className="text-sm font-semibold text-primary">
                                        Track third-party wallet activity more
                                        reliably
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 py-2 mt-2">
                                <span className="flex gap-2 items-center pb-2 text-sm font-bold text-red-500">
                                    {/* <BsMegaphoneFill />  */}
                                    Important
                                </span>
                                <h3 className="text-sm font-semibold text-red-500">
                                    Only send <span>{selectAsset.name} </span>to
                                    this address on{" "}
                                    <span>{selectAsset.network} </span> network.
                                    Sending other coins may result in permanent
                                    loss.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal */}
        </section>
    );
};

export default Deposit;
