import React from "react";
import RootNavbar from "../utilities/RootNavbar";
import { FaCircle } from "react-icons/fa";
import innovationImage from "../assets/image.png";
import investImage from "../assets/invest.png";
import Navbar from "../utilities/Navbar";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../utilities/AuthNavbar";

const About = () => {
    const navigate = useNavigate();
    return (
        <section className="container mx-auto flex flex-col py-2 gap-y-4 px-2">
            <AuthNavbar />

            <div className="py-8 mt-2 flex flex-col w-full gap-y-8">
                {/* innovation */}
                <div className="flex flex-col lg:flex-row  w-full gap-4">
                    {/* text div */}
                    <div className="flex flex-col gap-y-2 w-full lg:w-[60%] ">
                        <h1 className="flex text-2xl lg:text-4xl font-bold text-white gap-x-1 items-center">
                            Innovation at it’s{" "}
                            <span className="text-primary ">peak</span>
                            <span className=" text-primary pt-2 px-1.5">
                                <FaCircle className="text-lg" />
                            </span>
                        </h1>
                        <span className="text-sm py-2 lg:text-lg font-normal text-white text-pretty tracking-wide leading-normal">
                            We didn’t just build another trading platform
                            Copiqat is for for everyone, from beginners to
                            experienced traders looking to grow their skills.
                        </span>
                        <span className="pt-4 text-sm lg:text-lg font-normal text-white text-pretty tracking-wide leading-normal">
                            With AL Copier, every user gets access to over 400
                            free tools to trade the way they prefer. Whether
                            it’s currencies, stocks, metals, oil, gas, or
                            trending crypto assets, the choice is yours.
                        </span>
                    </div>

                    {/* image  */}
                    <div className="w-full lg:w-[40%]">
                        <img
                            src={innovationImage}
                            className="object-cover w-[500px] "
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse w-full gap-8 items-center py-4">
                    {/* text */}
                    <div className="flex flex-col gap-y-2 w-full lg:w-[60%]">
                        <h1 className="text-2xl lg:text-4xl font-bold text-white  items-start">
                            We want everyone to fulfill their trading
                            <span className="text-primary "> desires</span>
                            <span className="inline-block  text-primary pt-4 px-1.5">
                                <FaCircle className="text-lg" />
                            </span>
                        </h1>
                        <span className="text-sm py-2 lg:text-lg font-normal text-white text-pretty tracking-wide leading-normal">
                            At Copiqat, we believe that everyone should have the
                            opportunity to invest in the stock market and
                            achieve financial freedom. Founded by a team of
                            passionate traders, we set out with the mission to
                            democratize stock trading and make it accessible to
                            individuals from all walks of life.
                        </span>
                        <span className="pt-4 text-sm lg:text-lg font-normal text-white text-pretty tracking-wide leading-normal">
                            With years of experience in the financial industry,
                            our experts are dedicated to empowering traders with
                            the knowledge and tools needed to navigate the
                            complex world of trading.
                        </span>
                    </div>

                    {/* image */}
                    <div className="w-full lg:w-[40%]">
                        <img
                            src={investImage}
                            className="object-cover w-[420px] "
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex flex-col py-4 w-full">
                    <h1 className="text-2xl lg:text-4xl font-bold text-white py-2">
                        What sets us apart
                    </h1>
                    <div className="flex flex-col w-full gap-y-4">
                        <div className="flex flex-col lg:flex-row justify-between items-start">
                            <span className="pt-4 text-sm lg:text-lg font-normal text-white text-pretty tracking-wide leading-normal w-full lg:w-[45%]">
                                <span className="text-primary font-bold">
                                    Expertise:
                                </span>
                                <br />
                                Our experienced team of traders and financial
                                experts provides reliable insights and in-depth
                                market analysis to help users make informed and
                                confident trading decisions.
                            </span>
                            <span className="pt-4 text-sm lg:text-lg font-normal text-white text-pretty tracking-wide leading-normal w-full lg:w-[45%]">
                                <span className="text-primary font-bold">
                                    Educational Resources:
                                </span>
                                <br />
                                We provide educational resources for all
                                traders, helping beginners learn the basics and
                                experienced users master advanced strategies.
                            </span>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-start">
                            <span className="pt-4 text-sm lg:text-lg font-normal text-white text-pretty tracking-wide leading-normal w-full lg:w-[45%]">
                                <span className="text-primary font-bold">
                                    Customer Support:{" "}
                                </span>
                                <br />
                                Your satisfaction comes first. Our 24/7 support
                                team is always ready to help, ensuring a smooth
                                and stress-free trading experience.
                            </span>
                            <span className="pt-4 text-sm lg:text-lg font-normal text-white text-pretty tracking-wide leading-normal w-full lg:w-[45%]">
                                <span className="text-primary font-bold">
                                    Cutting-edge Technology:{" "}
                                </span>
                                <br />
                                Our cutting-edge platform delivers a smooth,
                                intuitive trading experience with real-time data
                                and advanced tools for efficient, effective
                                trading.
                            </span>
                        </div>
                        <div className="flex w-full items-center justify-center py-4 mt-4">
                            <button onClick={() => navigate('/vault')} className="text-lg font-semibold text-black px-6 py-2 w-fit bg-primary rounded-xl">
                                Start Trading
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
