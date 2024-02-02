import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";

const FeatureHeader = ({ platform, setPlatform }) => {
  return (
    <div className="h-16 w-full flex items-center">
      <div className={`px-7 w-full flex justify-between items-center`}>
        <div className={` flex items-center gap-2`}>
          <div
            onClick={() => setPlatform("mobile")}
            className={`flex justify-center items-center gap-2 ${
              platform === "mobile" && "bg-[#00191D]"
            } px-3 py-2 rounded-md cursor-pointer`}
          >
            <FaMobileAlt
              className={`${
                platform === "mobile" ? "text-white" : "text-black"
              }`}
            />
            <p
              className={`${
                platform === "mobile" ? "text-white" : "text-black"
              } text-sm`}
            >
              Mobile
            </p>
          </div>
          <div
            onClick={() => setPlatform("desktop")}
            className={`flex justify-center items-center gap-2 ${
              platform === "desktop" && "bg-[#00191D]"
            } px-3 py-2 rounded-md cursor-pointer`}
          >
            <IoDesktopOutline
              className={`${
                platform === "desktop" ? "text-white" : "text-black"
              }`}
            />
            <p
              className={`${
                platform === "desktop" ? "text-white" : "text-black"
              } text-sm`}
            >
              Web
            </p>
          </div>
        </div>
        {/* <div
          className={`flex justify-center cursor-pointer rounded-md items-center gap-2 bg-[#00191D] px-3 py-2 rounded-m`}
        >
          <TbApps className="text-white" />
          <p className="text-white text-sm">Custom Feature</p>
        </div> */}
      </div>
    </div>
  );
};

export default FeatureHeader;
