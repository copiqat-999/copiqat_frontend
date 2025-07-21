import React from "react";

const Action = () => {
  return (
    <section className="container mx-auto px-2 py-6 flex items-center justify-center mt-4">
      <div className="flex flex-col w-full gap-y-4 items-center justify-center text-center md:w-[400px]">
        <h1 className="text-2xl text-primary font-bold">
          Ready to start Copy Trading ?
        </h1>
        <span className="text-sm text-white font-normal tracking-loose">
          Join thousands of investors who are already earning consistent profits
          by copying professional traders.
        </span>
        <button className="text-black bg-primary rounded-xl px-8 py-3 w-fit text-sm font-semibold">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Action;
