import logo from "../assets/logo.png";
import { GiEntryDoor } from "react-icons/gi";
import { IoIosPersonAdd } from "react-icons/io";
import { Link, useLocation, NavLink } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // get current location

  return (
    <nav className="flex items-center justify-between w-full py-3 mb-12">
      {/* logo */}
      <div className="flex">
        
        <img src={logo} alt="logo" className="object-cover" />
      </div>

      {/* navlinks */}
      <ul className="hidden sm:hidden lg:flex items-center justify-center gap-x-6 text-sm font-semibold text-white">
        <NavLink to="/">
          <li className="text-primary">Home</li>
        </NavLink>

        <NavLink to="/mirror" state={{ backgroundLocation: location }}>
          <li>Mirror</li>
        </NavLink>

        <NavLink to="/market">
          <li>Market</li>
        </NavLink>

        <NavLink to="/category" state={{ backgroundLocation: location }}>
          <li>Category</li>
        </NavLink>

        <NavLink to="/vault">
          <li>Vault</li>
        </NavLink>

        <NavLink to="/about">
          <li>About Us</li>
        </NavLink>
      </ul>

      {/* buttons */}
      <div className="flex flex-row gap-2 w-fit">
        <button className="px-3 py-2 text-sm font-semibold bg-black text-primary border border-primary rounded-full flex gap-x-1 items-center justify-center">
          <span className="hidden lg:flex text-lg">
            <GiEntryDoor />
          </span>
          Login
        </button>

        <button className="px-3 py-2 text-sm bg-primary font-semibold text-black rounded-full flex gap-x-1 items-center justify-center">
          <span className="hidden lg:flex text-lg">
            <IoIosPersonAdd />
          </span>
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
