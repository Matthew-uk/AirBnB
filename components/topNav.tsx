import React, { useState } from "react";
import { SiAirbnb } from "react-icons/si";
import { IoGlobeOutline, IoMenuOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const TopNav = () => {
  const [active, setActive] = useState<number>(1);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navMidStyles = `cursor-pointer duration-300 ease-in-out p-2 hover:bg-gray-200 hover:text-black hover:rounded-full`;
  const dropDownStyles = `hover:bg-gray-400 hover:text-black transition-all font-light p-2`;
  return (
    <div className="flex flex-row w-full justify-between">
      {/* Left */}
      <div className="flex flex-row items-center justify-start text-pink">
        <SiAirbnb size={32} className="text-pink" />
        <h2 className="text-xl font-bold ml-1 hidden lg:block">airbnb</h2>
      </div>
      {/* Center */}
      <div
        className=" hidden lg:flex flex-row gap-8 text-gray-500"
        style={{ fontSize: "0.9em" }}
      >
        <h2
          onClick={() => setActive(1)}
          className={`${active === 1 && "text-black"} ${navMidStyles} `}
        >
          Stays
        </h2>
        <h2
          onClick={() => setActive(2)}
          className={`${active === 2 && "text-black"} ${navMidStyles} `}
        >
          Experiences
        </h2>
        <h2
          onClick={() => setActive(3)}
          className={`${active === 3 && "text-black"} ${navMidStyles} `}
        >
          Online Exeperiences
        </h2>
      </div>
      {/* Right */}
      <div className="flex flex-row items-center justify-between gap-4">
        <h2 className={`${navMidStyles} text-sm hidden md:block`}>
          Airbnb your home
        </h2>
        <IoGlobeOutline size={32} className={`${navMidStyles} text-black`} />
        <div className="relative rounded-full border border-gray-300 flex flex-row items-center gap-4 p-2">
          <IoMenuOutline
            onClick={() => setShowMenu(!showMenu)}
            size={20}
            className="cursor-pointer"
          />
          {/* Popup Menu */}
          {showMenu && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg py-2 w-60 text-sm justify-between">
              <div className="flex flex-col gap-1">
                <Link className={`${dropDownStyles}`} href={"/signup"}>
                  Sign Up
                </Link>
                <Link className={`${dropDownStyles}`} href={"/login"}>
                  Login
                </Link>
                <hr />
                <Link className={`${dropDownStyles}`} href={"/signup"}>
                  Gift Cards
                </Link>
                <Link className={`${dropDownStyles}`} href={"/signup"}>
                  Airbnb your Home
                </Link>
                <Link className={`${dropDownStyles}`} href={"/signup"}>
                  Help
                </Link>
              </div>
            </div>
          )}
          <FaUserCircle size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
