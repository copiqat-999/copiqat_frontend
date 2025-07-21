import logo from "../assets/logo.png";
import { GiEntryDoor } from "react-icons/gi";
import { IoIosPersonAdd } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import DropdownMenu from "./DropdownMenu";

const RootNavbar = () => {
  const location = useLocation(); // get current location

  return (
    <nav className="flex items-center justify-between w-full py-3 mb-4 ">
      {/* logo */}
      <div className="flex justify-start items-start">
        <img src={logo} alt="logo" className="object-cover " />
      </div>

      {/* navlinks */}
      <ul className="hidden sm:hidden lg:flex items-center justify-center gap-x-6 text-sm font-semibold text-white">
        <Link to="/">
          <li className="text-primary">Home</li>
        </Link>

        <Link to="/mirror" state={{ backgroundLocation: location }}>
          <li>Mirror</li>
        </Link>

        <Link to="/market">
          <li>Market</li>
        </Link>

        <Link to="/category" state={{ backgroundLocation: location }}>
          <li>Category</li>
        </Link>

        <Link to="/vault">
          <li>Vault</li>
        </Link>

        <Link to="/about">
          <li>About Us</li>
        </Link>
      </ul>

      {/* buttons */}
      <div className="flex flex-row gap-1 w-fit">
        <button className="px-3 py-2 text-sm font-semibold  text-primary ">
          <span className=" lg:flex text-2xl">
            <IoMdNotifications />
          </span>
        </button>

        <button className="hidden md:hidden lg:flex px-2.5 py-1.5 text-sm bg-primary font-semibold text-black rounded-full  items-center justify-end ">
          <span className="hidden lg:flex text-lg">
            <GoPerson className="text-2xl" />
          </span>
        </button>

        <DropdownMenu />
      </div>
    </nav>
  );
};

export default RootNavbar;
