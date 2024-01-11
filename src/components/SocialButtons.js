import React from "react";
import google from "../images/google_logo.svg";
import facebook from "../images/facebook_logo.svg";
import linkedin from "../images/linkedin_logo.svg";
import Image from "next/image";

const SocialButtons = () => {
  return (
    <div className="flex py-2 row justify-between ">
      <div className="border-[1px] p-3 hover:bg-slate-100 duration-200 rounded flex justify-center items-center cursor-pointer border-gray-300">
        <Image src={google} className="cover" alt="google" />
      </div>
      <div className="border-[1px] p-3 hover:bg-slate-100 duration-200 rounded flex justify-center items-center cursor-pointer border-gray-300">
        <Image src={facebook} className="cover" alt="facebook" />
      </div>
      <div className="border-[1px] p-3 hover:bg-slate-100 duration-200 rounded flex justify-center items-center cursor-pointer border-gray-300">
        <Image src={linkedin} className="cover" alt="linkedin" />
      </div>
    </div>
  );
};

export default SocialButtons;
