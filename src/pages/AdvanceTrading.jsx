import {
    advanceTradingDataParagraph1,
    advanceTradingDataParagraph2,
} from "../data";
import RootNavbar from "../utilities/RootNavbar";
import liveTrading from "../assets/advance.png";
import { useNavigate } from "react-router-dom";

const AdvanceTrading = () => {
    const navigate = useNavigate();
    return (
        <section className="container mx-auto px-2 py-2 h-full flex flex-col gap-y-8">
            <RootNavbar />
            {/* header text */}
            <div className="flex flex-col py-4 gap-y-2 w-full md:w-[70%] lg:w-[60%]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                    Advance trading <span className="text-primary">Accounts</span>
                </h1>
                <h3 className="text-lg md:text-2xl font-normal text-white">
                    Advanced Trading Account / Mechanical trading systems
                </h3>

                <span className="text-sm text-pretty text-white font-normal py-4">
                    Copiqat Trade has been sharing financial freedom with
                    traders since 2014. In a continuous effort to give traders a
                    more comfortable and safe experience, its experts have been
                    improving the platform ensuring traders can enjoy and make
                    use of that freedom to trade whenever and wherever they
                    like.
                </span>
            </div>

            {/* first paragraph */}
            <div className="flex flex-col w-full gap-y-8">
                <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-12">
                    <img src={liveTrading} alt="" />
                    <div className="flex flex-col gap-8">
                        <h2 className="text-white text-2xl md:text-3xl font-semibold">
                            {advanceTradingDataParagraph1.header}
                        </h2>
                        <p className="text-sm text-pretty font-normal text-white">
                            {advanceTradingDataParagraph1.paragraph1}
                        </p>
                        <p className="text-sm text-pretty font-normal text-white">
                            {advanceTradingDataParagraph1.paragraph2}
                        </p>
                        <p className="text-sm text-pretty font-normal text-white">
                            {advanceTradingDataParagraph1.paragraph3}
                        </p>
                    </div>
                </div>
            </div>

            {/* second paragraph */}
            <div className="flex flex-col w-full gap-y-4 py-4">
                <h2 className="text-white text-2xl md:text-3xl font-semibold">
                    {advanceTradingDataParagraph2.header}
                </h2>
                <h2 className="text-white text-xl md:text-2xl font-semibold py-2">
                    {advanceTradingDataParagraph2.subheader}
                </h2>
                <p className="text-sm text-pretty font-normal text-white">
                    {advanceTradingDataParagraph2.paragraph}
                </p>
                <h2 className="text-white text-xl md:text-2xl font-semibold py-2">
                    {advanceTradingDataParagraph2.subheader1}
                </h2>
                <p className="text-sm text-pretty font-normal text-white">
                    {advanceTradingDataParagraph2.paragraph1}
                </p>
                <p className="text-sm text-pretty font-normal text-white">
                    {advanceTradingDataParagraph2.paragraph2}
                </p>
            </div>

            {/* CAT button */}
            <div className="w-full flex items-center justify-center pb-8">
                <button
                    onClick={() => navigate("/vault")}
                    className="w-full sm:w-[70%] md:w-[60%] lg:[w-50%] py-3 text-black text-sm font-semibold bg-primary rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 ease-in"
                >
                    Start trading
                </button>
            </div>
        </section>
    );
};

export default AdvanceTrading;
