import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordionTable = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 lg:hidden">
      {data.map((item, index) => (
        <div key={index} className=" rounded-lg overflow-hidden shadow">
          {/* Header */}
          <div
            className="flex justify-between items-center px-4 py-3 bg-whyCard cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex w-full justify-between items-start py-2">
              <div className="flex w-[60%] justify-between">
                <p className="font-semibold text-lg text-white">{item.asset}</p>
                <span
                  className={`${
                    item.type === "Buy" ? "bg-green-400" : "bg-red-500"
                  } text-sm font-semibold text-white px-3 py-1 rounded-full`}
                >
                  {item.type}
                </span>
              </div>

              <div className="text-white">
                {openIndex === index ? <IoIosArrowDown className="text-2xl" /> : <IoIosArrowUp className="text-2xl"/>}
              </div>
            </div>
          </div>

          {/* Body */}
          {openIndex === index && (
            <div className="px-4 py-4 bg-whyCard text-sm text-white font-semibold flex flex-col gap-y-3">
             <div className="w-full flex flex-col gap-y-2">
                <span>
                   Entry price:  {item.entry_price}
                </span>
                <span>
                  Current price:  {item.current_price}
                </span>
             </div>
             <div className="w-full flex flex-col gap-y-2">
                <span className="flex gap-x-2">
                   P/L:  <span className="text-green-400">{item.pl}</span>
                </span>
                <span>
                  Duration:  {item.duration}
                </span>
                <button className="text-sm font-semibold text-white px-2 py-1 rounded-lg bg-red-600 w-fit mt-2">
                    Close
                </button>
             </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionTable;
