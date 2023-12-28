import React, { useState } from "react";
import logo from "../images/builderlogo.svg";
import person from "../images/person.jpeg";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import Avatar from "react-avatar";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

const Header = ({ dropdownOpen, setDropdownOpen }) => {
  return (
    <div className="h-16 bg-white z-50 w-full fixed top-0 left-0 right-0 border-b-2 border-b-gray-200">
      <div className="h-full flex">
        <Link
          href={"/"}
          className="w-1/5 pl-5 cursor-pointer border-r-2 border-r-gray-200"
        >
          <Image
            src={logo}
            alt=""
            className="pointer-events-none inset-0 h-16 w-36"
            unoptimized
          />
        </Link>
        <div className="w-4/5 p-3">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div>
                <span className="text-gray-700 text-xs">1. Choose a base</span>
                <span className="text-gray-700 text-xs">
                  {" "}
                  2. Refine features
                </span>
                <span className="text-gray-700 text-xs"> 3. Plan delivery</span>
              </div>
              <div>
                <p className="text-gray-700 text-lg font-bold">
                  My Builder Project
                </p>
              </div>
            </div>
            <div className="flex justify-evenly gap-2 items-center">
              <div className="border-[1px] flex items-center cursor-pointer border-gray-200 rounded">
                <Image
                  src={person}
                  alt="person"
                  className="w-8 h-8 rounded-tl rounded-bl"
                  unoptimized
                />
                <p className="text-gray-700 text-xs p-2">Talk to our experts</p>
              </div>
              <div className="border-[1px] cursor-pointer border-gray-200 p-2 rounded">
                <p className="text-gray-700 text-xs">View Prototype</p>
              </div>
              <div className="border-[1px] cursor-pointer border-gray-200 p-2 rounded">
                <IoIosLink className="text-gray-700 text-base" />
              </div>
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="cursor-pointer relative flex items-center gap-1 ml-3"
              >
                <Avatar
                  name={`Wim Mostmans`}
                  size="35"
                  round={true}
                  //   textSizeRatio={3}
                  color="#7e22ce"
                  fgColor="#ffffff"
                  text={"AA"}
                />
                <FaAngleDown className="text-black text-sm" />
                <div
                  className={`${
                    dropdownOpen ? "block" : "hidden"
                  } absolute top-10 right-0 py-2 w-40 bg-white rounded-md shadow-xl z-50`}
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dahsboard
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Setting
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
