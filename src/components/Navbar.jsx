import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

import { FaCartShopping } from "react-icons/fa6";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useCart } from "../ContextApi/CartContext";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar({ location, getLocation, openDropDown, setOpenDropDown }) {
  const { addCart } = useCart();
  const [openNav, setOpenNav] = useState(false);
  const toggleDropdown = () => {
    setOpenDropDown(!openDropDown);
  };
  return (
    <div
      className="bg-white py-3 px-4 md:px-0"
      style={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px ",
      }}
    >
      <div className="max-w-6xl flex justify-between items-center mx-auto">
        {/* logo */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold">
              <span className="text-blue-500 font-serif">S</span>hop.
            </h1>
          </Link>
          <div className="md:flex gap-1 cursor-pointer text-gray-700 items-center hidden">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? (
                <div>
                  <p>{location.country}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "add address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} />
          </div>

          {openDropDown ? (
            <div className="h-max w-[250px] shadow-2xl z-50 bg-white fixed top-15 left-30 border-2 p-5 rounded-md border-gray-100">
              <h1 className="font-semibold text-xl mb-4 flex justify-between">
                change location{" "}
                <span>
                  <CgClose onClick={toggleDropdown} />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white rounded-md py-1 px-3 cursor-pointer hover:bg-red-400"
              >
                Detect my Location
              </button>
            </div>
          ) : null}
        </div>
        {/* Menu Section */}
        <nav className="flex items-center gap-7">
          <ul className="md:flex gap-7 items-center font-semibold text-xl hidden">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-4 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <FaCartShopping className="h-7 w-7" />
            <span className="bg-red-500 rounded-full px-2 text-white absolute -top-3 -right-3">
              {addCart.length}
            </span>
          </Link>
          <div className="hidden md:block">
            <SignedOut>
              <SignInButton className="rounded-md bg-red-500 text-white px-2 py-1 cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {openNav ? (
            <HiMenuAlt3
              onClick={() => setOpenNav(false)}
              className="h-7 w-7 md:hidden"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setOpenNav(true)}
              className="h-7 w-7 md:hidden"
            />
          )}
        </nav>
      </div>
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
}

export default Navbar;
