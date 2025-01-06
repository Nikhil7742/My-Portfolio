import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <header className="w-full bg-[#171d32] z-10 fixed top-0 shadow-lg">
      <nav className="flex justify-between items-center text-white px-6 py-4 md:px-20">
        {/* Logo */}
        <span className="text-xl font-bold tracking-wide">Nikhil</span>

        {/* Navigation Links */}
        <ul
          className={`${
            menu ? "flex" : "hidden"
          } flex-col md:flex-row md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-[#171d32] md:bg-transparent bg-opacity-95 md:bg-opacity-100 p-6 md:p-0 rounded-md md:rounded-none shadow-lg md:shadow-none transition-all duration-300 gap-4 md:gap-8 justify-center items-center`}
        >
          <li className="text-md font-semibold">
            <a
              href="#Home"
              className="hover:text-[#4F85E4] transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li className="text-md font-semibold">
            <a
              href="#About"
              className="hover:text-[#4F85E4] transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li className="text-md font-semibold">
            <a
              href="#Projects"
              className="hover:text-[#4F85E4] transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li className="text-md font-semibold">
            <a
              href="#Footer"
              className="hover:text-[#4F85E4] transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          {menu ? (
            <RiCloseLine
              size={30}
              className="cursor-pointer"
              onClick={() => openMenu(false)}
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="cursor-pointer"
              onClick={() => openMenu(true)}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
