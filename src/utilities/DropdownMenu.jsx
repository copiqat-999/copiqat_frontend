import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useLocation} from "react-router-dom";

export default function DropdownMenu() {
    const location = useLocation(); 
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
            <div className="p-2 flex flex-col gap-y-4 text-sm text-white">
              <MenuItem>
                <Link to="/">
                  <li className="text-primary">Home</li>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/mirror" state={{ backgroundLocation: location }}>
                  <li>Mirror</li>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/market">
                  <li>Market</li>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/category" state={{ backgroundLocation: location }}>
                  <li>Category</li>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/vault">
                  <li>Vault</li>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/about">
                  <li>About Us</li>
                </Link>
              </MenuItem>
              <div className="p-2">
                <button className="px-4 py-2 bg-primary text-black  text-sm cursor-pointer rounded-full">
                  Logout
                </button>
              </div>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
