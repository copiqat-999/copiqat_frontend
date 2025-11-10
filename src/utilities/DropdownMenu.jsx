import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { VscMirror } from "react-icons/vsc";
import { CiVault } from "react-icons/ci";
import { BsPatchQuestionFill } from "react-icons/bs";
import { useAuth } from "../utils/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import { ImExit } from "react-icons/im";
import { TbLockPassword } from "react-icons/tb";
import { SiSemanticscholar } from "react-icons/si";


export default function DropdownMenu() {
    const location = useLocation();

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
            console.log(error.response);
        } finally {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            setAuth({ isAuthenticated: false, user: null });
            navigate("/auth/login");
        }
    };

    return (
        <div className="relative inline-block text-left z-50 lg:hidden">
            <Menu as="div" className="relative">
                <div>
                    <MenuButton className="flex items-center justify-center p-2 rounded-lg hover:bg-whyCard transition focus:outline-0 border-none data-active:bg-primary">
                        <HiOutlineMenuAlt3 className="text-3xl text-white data-active:text-black" />
                    </MenuButton>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-whyCard shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-2 flex flex-col gap-y-4 text-sm text-white list-none">
                            <MenuItem>
                                <Link to="/">
                                    <div
                                        className={`${
                                            location.pathname === "/" &&
                                            "text-primary"
                                        } flex w-full gap-2 items-center`}
                                    >
                                        <ImHome />
                                        <li>Home</li>
                                    </div>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    to="/mirror"
                                    state={{ backgroundLocation: location }}
                                >
                                    <div
                                        className={`${
                                            location.pathname === "/mirror" &&
                                            "text-primary"
                                        } flex flex-row w-full items-center gap-2`}
                                    >
                                        <VscMirror />
                                        <li>Mirror</li>
                                    </div>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/market">
                                    <div
                                        className={`${
                                            location.pathname === "/market" &&
                                            "text-primary"
                                        } flex w-full items-center gap-2`}
                                    >
                                        <FaCartShopping />
                                        <li>Market</li>
                                    </div>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/learn">
                                    <div
                                        className={`${
                                            location.pathname === "/learn" &&
                                            "text-primary"
                                        } flex w-full items-center gap-2`}
                                    >
                                        <SiSemanticscholar />
                                        <li>Learn</li>
                                    </div>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/vault">
                                    <div
                                        className={`${
                                            location.pathname === "/vault" &&
                                            "text-primary"
                                        } flex w-full gap-2 items-center`}
                                    >
                                        <CiVault />
                                        <li>Vault</li>
                                    </div>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/about">
                                    <div
                                        className={`${
                                            location.pathname === "/about" &&
                                            "text-primary"
                                        } flex w-full items-center gap-2`}
                                    >
                                        <BsPatchQuestionFill />
                                        <li>About Us</li>
                                    </div>
                                </Link>
                            </MenuItem>
                            <div className="">
                                <button
                                    onClick={() =>
                                        navigate("/auth/password-reset")
                                    }
                                    className="text-sm flex gap-2 items-center font-normal text-primary w-fit pb-1 cursor-pointer hover:border-b transition-all duration-200"
                                >
                                    <TbLockPassword className="text-lg" />
                                    Reset Password
                                </button>
                            </div>
                            <div className="">
                                <button
                                    onClick={handleLogout}
                                    className="w-fit items-center flex gap-2 text-sm font-normal text-primary hover:border-b transition-all duration-200 pb-1 cursor-pointer"
                                >
                                    <ImExit className="text-lg" />
                                    Log out
                                </button>
                            </div>
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    );
}
