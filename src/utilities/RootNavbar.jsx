import logo from "../assets/logo.png";
import { GiEntryDoor } from "react-icons/gi";
import { IoIosPersonAdd } from "react-icons/io";
import { Link, useLocation, NavLink } from "react-router-dom";
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
        <NavLink to="/">
          <li className={`${location.pathname === '/' && ('text-primary')}`}>Home</li>
        </NavLink>

        <NavLink to="/mirror" state={{ backgroundLocation: location }}>
          <li className={`${location.pathname === '/mirror' && ('text-primary')}`}>Mirror</li>
        </NavLink>

        <NavLink to="/market">
          <li className={`${location.pathname === '/market' && ('text-primary')}`}>Market</li>
        </NavLink>

        <NavLink to="/category" state={{ backgroundLocation: location }}>
          <li className={`${location.pathname === '/category' && ('text-primary')}`}>Category</li>
        </NavLink>

        <NavLink to="/vault">
          <li className={`${location.pathname === '/vault' && ('text-primary')}`}>Vault</li>
        </NavLink>

        <NavLink to="/about">
          <li className={`${location.pathname === '/about' && ('text-primary')}`}>About Us</li>
        </NavLink>
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
