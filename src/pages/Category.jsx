import RootNavbar from "../utilities/RootNavbar";
import logo from "../assets/logo.png";
import { FaCircle } from "react-icons/fa";

const Category = () => {
  return (
    <section className="container mx-auto flex flex-col py-2 px-2 gap-y-6 ">
      <RootNavbar />

      {/* content div */}
      <div className="flex flex-col w-full gap-y-2 py-4 px-12">
        <h1 className="text-3xl font-bold text-primary ">Trading Categories</h1>
        <span className="text-sm font-normal text-white">
          Make use of these tools to help with investments.
        </span>

        {/* types */}
        <div className="flex flex-col gap-y-6 py-4 mt-2 text-lg font-semibold text-white ">
          <span className="text-primary w-fit">Futures Trading</span>
          <span className="hover:text-primary transition-colors duration-300 w-fit">
            Stock Trading
          </span>
          <span className="hover:text-primary transition-colors duration-300 w-fit">
            Oil and Gas Trading
          </span>
          <span className="hover:text-primary transition-colors duration-300 w-fit">
            Forex Trading
          </span>
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

export default Category;
