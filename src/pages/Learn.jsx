import AuthNavbar from "../utilities/AuthNavbar";
import learn from "../assets/learn.png";
import { learnData } from "../data";
import { toast } from "react-toastify";
import { useState } from "react";
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Learn = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        if (loading) return;

        if (!email || email.trim() === "") {
            toast.error("Please enter your email");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            toast.success("Subscription successful");
            setLoading(false);
        }, 1000);
    };

    return (
        <section className="container mx-auto px-2 py-2 flex flex-col gap-y-4 h-full">
            <AuthNavbar />
            <div className="flex flex-col w-full gap-y-4">
                {/* header text */}
                <div className="flex flex-col gap-3">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                        Welcome to{" "}
                        <span className="text-primary">Copiqat Learn</span>
                    </h1>
                    <span className="text-sm sm:text-lg font-semibold text-white">
                        Learn some basic trading types
                    </span>
                </div>

                <div className="w-full flex items-center justify-center py-4">
                    <img src={learn} className=" object-cover" alt="" />
                </div>

                {learnData.map((data) => (
                    <div key={data.id} className="flex flex-col pb-6 gap-4">
                        <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                            {data.header}
                        </h1>
                        <p className="text-pretty text-white text-sm font-normal">
                            {data.paragraph}
                        </p>
                    </div>
                ))}

                {/* last paragraph */}
                <span className="text-sm font-semibold text-white text-pretty py-2">
                    Join our trading school by subscribing below with your
                    email, once you do, further updates and instructions will be
                    e-mailed to you 👇
                </span>

                {/* subscribe form */}

                <div className="flex flex-col gap-4 sm:gap-8 sm:flex-row py-4">
                    <input
                        placeholder="Enter your email"
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-3 px-4 w-full sm:w-[70%] bg-whyCard hover:border-1 hover:border-primary  focus focus:ring-0 focus:outline-0 rounded-xl"
                        type="email"
                        name="email"
                        id=""
                    />

                    {loading ? (
                        <Spinner color="warning" size="xl" />
                    ) : (
                        <button
                            onClick={handleClick}
                            className="text-lg font-bold text-black w-full sm:w-[30%] py-3 rounded-lg bg-primary cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            Subscribe
                        </button>
                    )}
                </div>
                <button onClick={() => navigate('/vault')} className="text-lg font-bold text-black w-full  py-3 rounded-lg bg-primary cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                    Start Trading
                </button>
            </div>
        </section>
    );
};

export default Learn;
