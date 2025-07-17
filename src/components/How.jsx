import React from "react";

const How = () => {
  return (
    <section className="w-full bg-primary">
      <div className="container mx-auto flex flex-col  items-center justify-center w-full py-8 px-2">
        {/* header text */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-black">How it Works</h1>
          <span className="text-sm font-normal text-black">
            Get started in just 3 steps
          </span>
        </div>

        {/* cards */}
        <div className="flex flex-wrap gap-6 items-center justify-center px-8 py-6 w-full 2xl:w-[80%]">
          {/* first */}
          <div className="flex flex-col gap-y-3 w-full md:w-[300px] items-center justify-center text-center py-3">
            <h2 className="px-6 py-3 rounded-full text-3xl flex justify-center items-center bg-black">
              1
            </h2>
            <h2 className="text-xl font-bold text-black">Sign up and verify</h2>
            <span className="text-sm font-normal text-black">
              Create an account and verify to be able to acquire a vault for
              your assets
            </span>
          </div>
          {/* second */}
          <div className="flex flex-col gap-y-3 w-full md:w-[300px] items-center justify-center text-center py-3">
            <h2 className="px-6 py-3 rounded-full text-3xl flex justify-center items-center bg-black">
              2
            </h2>
            <h2 className="text-xl font-bold text-black">Choose a trader</h2>
            <span className="text-sm font-normal text-black">
              Explore our curated top traders and choose one aligned with your
              risk and goals.
            </span>
          </div>
          {/* third */}
          <div className="flex flex-col gap-y-3 w-full md:w-[300px] items-center justify-center text-center py-3">
            <h2 className="px-6 py-3 rounded-full text-3xl flex justify-center items-center bg-black">
              3
            </h2>
            <h2 className="text-xl font-bold text-black">
              Set your parameters
            </h2>
            <span className="text-sm font-normal text-black">
              Set your investment, risk level, and preferences—our system
              auto-copies their trades for you.
            </span>
          </div>
          {/* fourth */}
          <div className="flex flex-col gap-y-3 w-full md:w-[300px] items-center justify-center text-center pt-3">
            <h2 className="px-6 py-3 rounded-full text-3xl flex justify-center items-center bg-black">
              4
            </h2>
            <h2 className="text-xl font-bold text-black">Start earning</h2>
            <span className="text-sm font-normal text-black">
              Relax and watch your portfolio grow as our platform auto-executes
              profitable trades for you.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
