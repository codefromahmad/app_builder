import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const NoFeature = () => {
  return (
    <div className="flex flex-col relative justify-center items-center h-full">
      <div className="absolute left-4">
        <FaArrowLeftLong className="text-black text-xl" />
      </div>

      <p className="text-black text-2xl font-bold">No features selected</p>
      <p className="text-black text-sm">Select feature to preview from left</p>
    </div>
  );
};

export default NoFeature;
