import React from "react";
import logo from "../images/builderlogo.svg";
import person from "../images/person.jpeg";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <div className="h-16 bg-white z-50 w-full fixed top-0 left-0 right-0 border-b-2 border-b-gray-200">
      <div className="px-10 h-full flex">
        <div className="w-1/5 border-r-2 border-r-gray-200">
          <Image
            src={logo}
            alt=""
            className="pointer-events-none inset-0 h-16 w-36"
            unoptimized
          />
        </div>
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
              <div className="cursor-pointer">
                <Avatar
                  name={`Wim Mostmans`}
                  size="35"
                  round={true}
                  //   textSizeRatio={3}
                  color="#7e22ce"
                  fgColor="#ffffff"
                  text={"AA"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
