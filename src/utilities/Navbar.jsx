import logo from "../assets/logo.png";
import { GiEntryDoor } from "react-icons/gi";
import { IoIosPersonAdd } from "react-icons/io";
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // get current location
  const navigate = useNavigate();



  
  return (
    <nav className="flex items-center justify-between w-full py-3 mb-12">
      {/* logo */}
      <div className="flex">
        <img src={logo} alt="logo" className="object-cover" />
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
      <div className="flex flex-row gap-2 w-fit">
        <button
          onClick={() => navigate("auth/login")}
          className="px-3 py-2 text-sm font-semibold bg-black text-primary border border-primary rounded-full flex gap-x-1 items-center justify-center hover:transition-transform hover:scale-105 duration-300 cursor-pointer"
        >
          <span className="hidden lg:flex text-lg">
            <GiEntryDoor />
          </span>
          Login
        </button>

        <button
          onClick={() => navigate("auth/signup")}
          className="px-3 py-2 text-sm bg-primary font-semibold text-black rounded-full flex gap-x-1 items-center justify-center hover:transition-transform hover:scale-105 duration-300 cursor-pointer"
        >
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
