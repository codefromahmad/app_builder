import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const NoFeature = ({ sidebar, lang }) => {
  return (
    <div className="flex flex-col relative justify-center items-center h-full">
      <div className={`absolute ${lang === "en" ? "left-4" : "right-4"}`}>
        {lang === "en" ? (
          <FaArrowLeftLong className="text-black text-xl" />
        ) : (
          <FaArrowRightLong className="text-black text-xl" />
        )}
      </div>

      <p className="text-black text-2xl font-bold">
        {sidebar.noFeaturesHeading}
      </p>
      <p className="text-black text-sm">{sidebar.noFeaturesText}</p>
    </div>
  );
};

export default NoFeature;
