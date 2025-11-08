import heroImage from "../assets/Hero.jpg";
import Navbar from "../utilities/Navbar";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../utilities/AuthNavbar";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className="container mx-auto flex flex-col min-h-[100vh] md:min-h-[80vh] items-center justify-start py-2 px-2 md:px-6 lg:px-8 ">
      <AuthNavbar />

      {/* Hero text section */}
      <div className="flex flex-col w-full gap-y-2 py-4 text-center items-center justify-center md:w-[80%] lg:w-[80%] ">
        <h1 className="text-3xl text-white font-bold md:text-4xl lg:text-[55px]">
          The <span className="text-primary">Auto Intelligence Platform</span>{" "}
          that helps you Trade in a smart way
        </h1>
        <div className="w-full md:w-[80%] xl:w-[70%] py-2">
          <p className="text-white text-sm  font-normal tracking-wide">
            Copiqat brings copy trading to your finger tips! copy the actions of
            experienced leaders and begin your trading journey.
          </p>
        </div>
      </div>

      {/* hero image */}
      <div className="w-[80%] md:w-[60%] lg:w-[50%] overflow-hidden ">
        <img src={heroImage} className="w-full h-full object-cover" alt="" />
      </div>

      {/* Call to action button */}
      <div className="flex items-center justify-center py-3">
        <button onClick={() => navigate('/vault')} className="text-black bg-primary rounded-xl px-8 py-3 w-fit text-sm font-semibold hover:transition-transform hover:scale-105 duration-300 cursor-pointer">
          Start Trading
        </button>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap items-center justify-center mt-6 py-6 gap-3 md:w-[80%] lg:w-[70%] md:justify-between md:gap-0">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-primary text-2xl font-semibold md:text-4xl">
            50K +
          </h3>
          <span className="text-white text-sm font-normal">Active Traders</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-primary text-2xl font-semibold md:text-4xl">
            100M +
          </h3>
          <span className="text-white text-sm font-normal">Trading Volume</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center ">
          <h3 className="text-primary text-2xl font-semibold md:text-4xl">
            95%
          </h3>
          <span className="text-white text-sm font-normal">Success Rate</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center ">
          <h3 className="text-primary text-2xl font-semibold md:text-4xl">
            24/7
          </h3>
          <span className="text-white text-sm font-normal">Support</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
