import { FaLock, FaCheck } from "react-icons/fa6";
import { MdInfo } from "react-icons/md";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";



const Withdraw = () => {
    const [selection, setSelection] = useState('Choose Network')



  return (
    <section className="container mx-auto min-h-screen py-8 mt-4 flex flex-col items-center justify-center px-2">
      <div className="w-full lg:w-[60%] flex flex-col py-2">
        {/* main */}
        <div className="flex flex-col gap-y-4">
            {/* header text */}
            <h1 className="lg:text-3xl text-xl font-bold text-primary mb-8">Funds Withdrawal</h1>
            {/* locked */}
            <div className="flex flex-col w-full  gap-y-6 items-center justify-center text-center py-8 mt-2 ">
                <span><FaLock className="text-5xl text-primary"/></span>
                <span className="text-red-700 text-lg font-bold">Withdrawal locked</span>
                <div className="w-full lg:w-[400px]">
                    <span className="text-sm font-normal text-white">You need a minimum of two active referrals to unlock withdrawal and currently you have none</span>
                </div>
            </div>

            {/* Referral progress */}
            <div className="w-full p-4 md:p-8 rounded-lg bg-whyCard flex flex-col gap-y-4">
                <h2 className="md:text-xl text-lg font-semibold text-white py-1">Referral progress</h2>
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-between">
                        <h3 className="text-sm font-semibold text-white">Active referral</h3>
                        
                    </div>
                    <div className="w-full rounded-xl bg-deposit/55 py-1">
                        {/* <div className="w-[50%] rounded-xl bg-primary py-1.5"></div> */}
                    </div>
                    
                </div>

                

            </div>
            {/* info */}
            <div className="w-full flex flex-col p-4 lg:p-8 rounded-lg gap-y-2 bg-primary/20 mt-2">
                <div className="flex gap-x-2 items-center text-sm font-semibold text-primary">
                    <MdInfo className="text-xl"/>
                    <span className="text-lg">How to get more referrals</span>
                </div>
                <div className="px-3 md:px-6 w-full flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-full p-1 bg-primary"></div>
                        <span className="text-sm font-semibold text-primary">Share your referral link with friends</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-full p-1 bg-primary"></div>
                        <span className="text-sm font-semibold text-primary">Referred users must complete verification</span>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-full p-1 bg-primary"></div>
                        <span className="text-sm font-semibold text-primary">They need to fund their account and make at least one transaction</span>
                    </div>
                </div>
            </div>

            {/* form */}
            <div className="flex flex-col w-full py-6 gap-y-6">
                <div className="flex flex-col gap-y-4 w-full">
                    <label className="text-sm font-semibold text-white" htmlFor="amount">Withdrawal Amount</label>
                    <input placeholder="Enter Amount" type="number" className="py-2 w-full px-6 text-sm font-normal border-1 border-gray-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"/>
                </div>
                <div className="flex flex-col gap-y-4 w-full">
                    <label className="text-sm font-semibold text-white" htmlFor="amount">Withdrawal Address</label>
                    <input type="text" placeholder="Enter Address" className="py-2 w-full px-6 text-sm font-normal border-1 border-gray-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"/>
                </div>
                <div className="relative flex flex-col   w-full">
                    <select
                        value={selection}
                        onChange={(e) => setSelection(e.target.value)}
                        className="w-full border-1 border-gray-600 rounded-xl bg-black  flex items-start justify-start px-6 text-sm text-white font-semibold py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
                    >
                        <option className="w-full  bg-primary text-black " value="Choose Network">Choose Network</option>
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
                <button disabled className="w-full py-3 rounded-lg bg-primary/65 text-lg font-bold text-primary disabled:cursor-not-allowed">Withdrawal Locked</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Withdraw;
