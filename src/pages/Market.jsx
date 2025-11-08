import AuthNavbar from "../utilities/AuthNavbar";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MarketTraders from "../utilities/MarketTraders";
import api from "../utils/api";
import { toast } from "react-toastify";

// Custom useDebounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: Clear the timeout if value or delay changes
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const handleTrader = () => {
  toast.success(
    "Your request has been sent to the admin and is being reviewed"
  );
};

const Market = () => {
  // const [selection, setSelection] = useState("Sort by Win Rate");
  // const [filter, setFilter] = useState("Top Performers");
  const [traders, setTraders] = useState([]);
  const [ordering, setOrdering] = useState("win_rate");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  const [loading, setLoading] = useState(null);

  const handleCopy = (index) => {
    setLoading(index);
    setTimeout(() => {
      toast.success("Copy successful");
      setLoading(null);
    }, 10000); // 10 seconds
  };

  // Debounce the search input with a 300ms delay
  const debouncedSearch = useDebounce(search, 300);

  // List of filter options

  useEffect(() => {
    setIsLoading(true); // Set loading state before API call
    setError(null); // Reset error state
    api
      .get(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/api/traders/?search=${debouncedSearch}&ordering=-${ordering}`
      )
      .then((res) => {
        setTraders(res.data.results || []); // Fallback to empty array if results are undefined
        setIsLoading(false); // Clear loading state
      })
      .catch((err) => {
        setError("Failed to fetch traders. Please try again later.");
        setIsLoading(false);
        toast.error("Error fetching traders", {
          toastId: "fetch-traders-error", // Unique ID to prevent duplicates
        });
      });
  }, [debouncedSearch, ordering]);

  return (
    <section className="container mx-auto flex flex-col py-2 gap-y-4 px-2">
      <AuthNavbar />

      <div className="py-8 mt-4 flex flex-col lg:px-12 w-full">
        {/* Search and filter div */}
        <div className="flex flex-col lg:flex-row w-full justify-normal lg:justify-between ">
          {/* Search div */}
          <div className="flex flex-row w-full lg:w-[70%] gap-x-2 lg:gap-x-8 ">
            <div className="flex justify-start items-center px-4 py-3 rounded-xl bg-whyCard gap-3 w-full lg:w-[60%]">
              <button>
                <IoSearch className="text-white text-xl" />
              </button>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search traders"
                type="text"
                className="border-none focus:ring-0 outline-0 bg-whyCard text-sm font-semibold w-full placeholder:text-sm"
              />
            </div>

            <div className="relative flex w-full lg:w-[30%]">
              <select
                value={ordering}
                onChange={(e) => setOrdering(e.target.value)}
                className="min-w-[100px] w-full border-none rounded-lg bg-whyCard flex items-start justify-start px-2 text-sm text-white font-semibold py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-8"
              >
                <option value="win_rate">Win Rate</option>
                <option value="returns">Return</option>
                <option value="copiers">Copiers</option>
              </select>
              <IoIosArrowDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
                size={20}
              />
            </div>
          </div>

          {/* Action button */}
          <div className="flex lg:justify-end justify-center w-full mt-4 lg:mt-0 lg:w-[30%] ">
            <button
              onClick={handleTrader}
              className="py-3 px-6 bg-primary rounded-lg lg:w-fit w-full text-sm text-black font-bold"
            >
              Become a Trader
            </button>
          </div>
        </div>

        {/* Filter buttons */}

        {/* Traders */}
        <div className="flex flex-col pt-8 mt-8 gap-y-4">
          {isLoading ? (
            <div className="w-full flex items-center justify-center text-sm font-light text-primary py-6">
              <span>Loading traders...</span>
            </div>
          ) : error ? (
            <div className="w-full flex items-center justify-center text-sm font-light text-red-500 py-6">
              <span>{error}</span>
            </div>
          ) : traders.length === 0 ? (
            <div className="w-full flex items-center justify-center text-sm font-light text-primary py-6">
              <span>No Traders Found....</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2.5 lg:gap-x-4 gap-y-8">
              {traders.map((trader) => (
                <MarketTraders
                  traders={trader}
                  key={trader.name}
                  handleCopy={handleCopy}
                  loading={loading}
                />
              ))}
            </div>
          )}

          {/* pagination button */}
        </div>
      </div>
    </section>
  );
};

export default Market;
