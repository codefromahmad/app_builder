import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { TbApps } from "react-icons/tb";

const FeatureHeader = ({ platform, setPlatform, setShow }) => {
  return (
    <div className="h-16 w-full flex items-center">
      <div className={`px-7 w-full flex justify-between items-center`}>
        <div className={`flex rounded border-gray-200 border items-center`}>
          <div
            onClick={() => setPlatform("mobile")}
            className={`flex justify-center items-center gap-2 rounded-bl rounded-tl ${
              platform === "mobile" && "bg-slate-200"
            } px-4 py-3 cursor-pointer`}
          >
            <FaMobileAlt className={`text-black`} />
            {/* <p
              className={`${
                platform === "mobile" ? "text-white" : "text-black"
              } text-sm`}
            >
              Mobile
            </p> */}
          </div>
          <div
            onClick={() => setPlatform("desktop")}
            className={`flex justify-center items-center gap-2 rounded-br rounded-tr ${
              platform === "desktop" && "bg-slate-200"
            } px-4 py-3 cursor-pointer`}
          >
            <IoDesktopOutline className={`text-black`} />
            {/* <p
              className={`${
                platform === "desktop" ? "text-white" : "text-black"
              } text-sm`}
            >
              Web
            </p> */}
          </div>
        </div>
        <div
          onClick={() => setShow(true)}
          className={`flex justify-center cursor-pointer rounded-md items-center gap-2 bg-[#00191D] px-3 py-2 rounded-m`}
        >
          <TbApps className="text-white" />
          <p className="text-white text-sm">Custom Feature</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureHeader;
