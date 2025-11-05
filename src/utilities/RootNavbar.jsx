import logo from "../assets/logo.png";
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoPerson } from "react-icons/go";
import DropdownMenu from "./DropdownMenu";
import { ImExit } from "react-icons/im";
import { TbLockPassword } from "react-icons/tb";
import { useAuth } from "../utils/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const RootNavbar = () => {
    const location = useLocation(); // get current location
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const { setAuth } = useAuth();
    const url = `${import.meta.env.VITE_API_BASE_URL}/api/auth/logout/`;
    const refreshToken = localStorage.getItem("refresh_token");

    const handleLogout = async () => {
        try {
            const response = await axios.post(
                url,
                {
                    refresh: refreshToken,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );

            // Clear tokens from localStorage
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");

            //clear auth state
            setAuth({
                isAuthenticated: false,
                user: null,
            });

            //navigate to login
            navigate("/auth/login");
        } catch (error) {
            toast.error(
                "Failed to log out on server, but you are logged out locally."
            );
            console.log(error.response)
        } finally {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            setAuth({ isAuthenticated: false, user: null });
            navigate("/auth/login");
        }
    };

    return (
        <nav className="flex items-center justify-between w-full py-3 mb-4 relative ">
            {/* logo */}
            <div className="flex justify-start items-start">
                <img src={logo} alt="logo" className="object-cover " />
            </div>

            {/* navlinks */}
            <ul className="hidden sm:hidden lg:flex items-center justify-center gap-x-6 text-sm font-semibold text-white">
                <NavLink to="/">
                    <li
                        className={`${
                            location.pathname === "/" && "text-primary"
                        }`}
                    >
                        Home
                    </li>
                </NavLink>

                <NavLink to="/mirror" state={{ backgroundLocation: location }}>
                    <li
                        className={`${
                            location.pathname === "/mirror" && "text-primary"
                        }`}
                    >
                        Mirror
                    </li>
                </NavLink>

                <NavLink to="/market">
                    <li
                        className={`${
                            location.pathname === "/market" && "text-primary"
                        }`}
                    >
                        Market
                    </li>
                </NavLink>

                <NavLink
                    to="/category"
                    state={{ backgroundLocation: location }}
                >
                    <li
                        className={`${
                            location.pathname === "/category" && "text-primary"
                        }`}
                    >
                        Category
                    </li>
                </NavLink>

                <NavLink to="/vault">
                    <li
                        className={`${
                            location.pathname === "/vault" && "text-primary"
                        }`}
                    >
                        Vault
                    </li>
                </NavLink>

                <NavLink to="/about">
                    <li
                        className={`${
                            location.pathname === "/about" && "text-primary"
                        }`}
                    >
                        About Us
                    </li>
                </NavLink>
            </ul>

            {/* buttons */}
            <div className="flex flex-row gap-1 w-fit">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`hidden md:hidden lg:flex p-2 text-sm  rounded-full  items-center justify-end cursor-pointer ${
                        isOpen
                            ? "text-primary bg-whyCard"
                            : "bg-primary text-black"
                    }`}
                >
                    <span className="hidden lg:flex text-lg">
                        <GoPerson className="text-2xl" />
                    </span>
                </button>

                <DropdownMenu />
            </div>

            {/* desktop dropdown for logout */}
            <div
                className={`${
                    isOpen
                        ? "absolute hidden lg:flex top-13 right-8 bg-gray-900 w-[200px] h-[100px] rounded-xl p-4"
                        : "hidden"
                }`}
            >
                <div className="flex flex-col w-full gap-y-4">
                    <button
                        onClick={() => navigate("/auth/password-reset")}
                        className="text-sm flex gap-2 items-center font-normal text-primary w-fit pb-1 cursor-pointer hover:border-b transition-all duration-200"
                    >
                        <TbLockPassword className="text-lg" />
                        Reset Password
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-fit items-center flex gap-2 text-sm font-normal text-primary hover:border-b transition-all duration-200 pb-1 cursor-pointer"
                    >
                        <ImExit className="text-lg" />
                        Log out
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default RootNavbar;
