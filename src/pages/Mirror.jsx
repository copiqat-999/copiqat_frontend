import AuthNavbar from "../utilities/AuthNavbar";
import logo from "../assets/logo.png";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Mirror = () => {
    return (
        <section className="container mx-auto flex flex-col py-2 px-2 gap-y-6 ">
            <AuthNavbar />

            {/* content div */}
            <div className="flex flex-col w-full gap-y-2 py-4 px-12">
                <h1 className="text-3xl font-bold text-primary ">
                    Mirror Trading
                </h1>
                <span className="text-sm font-normal text-white">
                    Explore our different types of mirror trading
                </span>

                {/* types */}
                <div className="flex flex-col gap-y-6 py-4 mt-2 text-lg font-semibold text-white ">
                    <Link to={"/mirror/options-trading"} className="">
                        <span className="hover:text-primary transition-colors duration-300 w-fit cursor-pointer">
                            Options copy trading
                        </span>
                    </Link>
                    <Link to={"/mirror/advance-trading"} className="">
                        <span className="hover:text-primary transition-colors duration-300 w-fit cursor-pointer">
                            Advanced trading accounts below PDT
                        </span>
                    </Link>
                    <Link to={"/mirror/live-trading"} className="">
                        <span className="hover:text-primary transition-colors duration-300 w-fit cursor-pointer">
                            Live trading interface
                        </span>
                    </Link>
                </div>

                {/* logo */}
                <div className="w-full mt-6 flex gap-1 py-4 items-center">
                    <img src={logo} className="object-cover w-[250px]" alt="" />

                    <span className="pt-4">
                        <FaCircle className="text-white text-xl " />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Mirror;
