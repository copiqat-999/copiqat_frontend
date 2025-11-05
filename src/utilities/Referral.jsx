import { Spinner } from "flowbite-react";
import { useState } from "react";
import { FaLink } from "react-icons/fa6";

const Referral = ({ dashboardData }) => {
  // const referralLink = dashboardData.referralLink;
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
  
  return (
    <div className="flex flex-col items-start justify-start gap-y-4 w-full lg:w-[30%] mt-3 md:mt-0 bg-whyCard py-4 rounded-lg px-4">
      <h1 className="text-3xl text-white font-bold">Referral Program</h1>
      <div className="flex flex-row lg:flex-col gap-y-4 items-center justify-between lg:items-start w-full">
        <div className="flex gap-4 items-center justify-start">
          <h2 className="text-xl lg:text-2xl text-white font-bold">
            Total Referrals
          </h2>
          <span className="text-3xl lg:text-5xl font-bold text-primary">
            {/* {dashboardData.referral_count} */}
            {!dashboardData ? <Spinner size="sm" color="warning" /> : `${dashboardData.referral_count}`}
          </span>
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
          <span className="text-sm font-bold text-white">Earnings</span>
          <span className="text-green-400 text-lg font-semibold">
            {/* ${dashboardData.earning} */}
            {!dashboardData ? <Spinner size="sm" color="warning" /> : `$${dashboardData.earning}`}
          </span>
        </div>
      </div>

      {/* <button className="flex gap-1 text-lg lg:text-xl font-semibold bg-primary rounded-2xl py-3 w-full  text-black md:mt-8 justify-center  items-center">
        
       
      </button> */}
      <button
        // href={dashboardData.referral_link}
        onClick={(e) => {
          e.preventDefault();
          handleCopy(dashboardData.referral_link);
        }}
        className="flex gap-1 text-lg lg:text-xl font-semibold bg-primary rounded-2xl py-3 w-full  text-black md:mt-8 justify-center  items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        {copied ? (
          "Copied!"
        ) : (
          <span className="flex items-center justify-center gap-2">
            <FaLink className="text-2xl" /> Copy referral link
          </span>
        )}
      </button>
    </div>
  );
};

export default Referral;
