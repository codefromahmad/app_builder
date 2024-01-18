import React, { useState } from "react";
import logo from "../images/logo.svg";
import person from "../images/user-image.svg";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useSelector } from "react-redux";

const Header = ({ dropdownOpen, setDropdownOpen }) => {
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-24 bg-primary z-30 w-full fixed top-0 left-0 right-0 border-b-2 border-b-gray-200">
      <div className="h-full flex items-center">
        <Link href={"/"} className="w-1/5 pl-5 cursor-pointer">
          <Image
            src={logo}
            alt=""
            className="pointer-events-none inset-0 h-16 w-36"
            unoptimized
          />
        </Link>
        <div className="w-4/5 h-full px-5">
          <div className="flex h-full justify-between items-center">
            <p className="text-white text-lg font-bold">My Project Name</p>
            <div className="flex justify-evenly gap-2 items-center">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="cursor-pointer relative flex items-center gap-1 ml-3"
              >
                <div className="flex gap-2">
                  <div className="flex flex-col items-end">
                    <p className="text-white font-semibold text-lg">
                      Kristin Watson
                    </p>
                    <p className="text-white font-medium text-sm">Admin</p>
                  </div>
                  <Image
                    src={person}
                    alt=""
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                  <div className="w-[11px] h-[11px] absolute flex items-center justify-center right-0 top-[5px] z-[4] rounded-full bg-primary">
                    <div className="w-2 h-2 rounded-full bg-[#00FF47]" />
                  </div>
                </div>
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
                    onClick={handleLogout}
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
