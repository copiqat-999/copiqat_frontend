import {
    optionsTradingDataParagraph1,
    optionsTradingDataParagraph2,
    optionsTradingDataParagraph3
} from "../data";
import AuthNavbar from "../utilities/AuthNavbar";
import liveTrading from "../assets/candle.png";
import { useNavigate } from "react-router-dom";
import warning from '../assets/warning.png'

const OptionsTrading = () => {
    const navigate = useNavigate();
    return (
        <section className="container mx-auto px-2 py-2 h-full flex flex-col gap-y-8">
            <AuthNavbar />
            {/* header text */}
            <div className="flex flex-col py-4 gap-y-2 w-full md:w-[70%] lg:w-[60%]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                    Options Copy <span className="text-primary">Trading</span>
                </h1>
                <h3 className="text-lg md:text-2xl font-normal text-white">
                    Welcome to Options Trading at Copiqat
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
                            {optionsTradingDataParagraph1.header}
                        </h2>
                        <p className="text-sm text-pretty font-normal text-white">
                            {optionsTradingDataParagraph1.paragraph1}
                        </p>
                        <p className="text-sm text-pretty font-normal text-white">
                            {optionsTradingDataParagraph1.paragraph2}
                        </p>
                        <p className="text-sm text-pretty font-normal text-white">
                            {optionsTradingDataParagraph1.paragraph3}
                        </p>
                    </div>
                </div>
            </div>

            {/* second paragraph */}
            <div className="flex flex-col w-full gap-y-4 py-4">
                <h2 className="text-white text-2xl md:text-3xl font-semibold">
                    {optionsTradingDataParagraph2.header}
                </h2>

                <p className="text-sm text-pretty font-normal text-white">
                    {optionsTradingDataParagraph2.paragraph}
                </p>

                <p className="text-sm text-pretty font-normal text-white">
                    {optionsTradingDataParagraph2.paragraph1}
                </p>
                <p className="text-sm text-pretty font-normal text-white">
                    {optionsTradingDataParagraph2.paragraph2}
                </p>
                <p className="text-sm text-pretty font-normal text-white">
                    {optionsTradingDataParagraph2.paragraph3}
                </p>
            </div>

            {/* last paragraph */}
            <div className="flex flex-col w-full gap-y-8 py-4">
                <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-12">
                    <img src={warning} alt="" />
                    <div className="flex flex-col gap-8">
                        <h2 className="text-white text-2xl md:text-3xl font-semibold">
                            {optionsTradingDataParagraph3.header}
                        </h2>
                        <p className="text-sm text-pretty font-normal text-white">
                            {optionsTradingDataParagraph3.paragraph1}
                        </p>
                        <p className="text-sm text-pretty font-normal text-white">
                            {optionsTradingDataParagraph3.paragraph2}
                        </p>
                        <p className="text-sm text-pretty font-normal text-white">
                            {optionsTradingDataParagraph3.paragraph3}
                        </p>
                    </div>
                </div>
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

export default OptionsTrading;
