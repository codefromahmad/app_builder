import Link from "next/link";
import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";

export default function MainHeader({ clickSignin }) {
  return (
    <header className="header py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:gap-1 xl:gap-4 items-center">
          <div className="logo">
            <Image alt="launch swift logo" src={logo} />
          </div>
          <div className="menu">
            <ul className="tlist">
              <li onClick={clickSignin} className="cursor-pointer">
                <p>Sign in</p>
              </li>
              <li>
                <Link onClick={clickSignin} className="btn-a" href={""}>
                  Get free demo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
