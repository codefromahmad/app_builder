import React from "react";
import { PhoneFrame } from "./PhoneFrame";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

const ShowFeature = ({
  selectedFeature,
  handleFeaturesSelection,
  isFeatureSelected,
  features,
  platform,
}) => {
  return (
    <div
      className={`flex justify-center ${
        features?.length > 0 && "animate-moveUp duration-300"
      } ${
        platform === "mobile" ? "flex-row" : "flex-col"
      } items-center bg-slate-100 h-[calc(100vh-14.5rem)] mb-6 mx-6 rounded-lg gap-x-6`}
    >
      {platform === "mobile" ? (
        <div className="w-48 h-96">
          <PhoneFrame>
            <Image
              width={100}
              height={100}
              src={selectedFeature?.mobile}
              alt="icon"
              className=" object-fill w-full h-full"
            />
          </PhoneFrame>
        </div>
      ) : (
        <div className="border-2 border-[#A6A6A6] w-1/2 h-1/2 p-5 rounded-lg">
          <Image
            width={100}
            height={100}
            src={selectedFeature?.web}
            alt="icon"
            className=" object-fill w-full h-full"
          />
        </div>
      )}

      {platform === "mobile" ? (
        <div className="w-1/3">
          <div className="flex items-center gap-2">
            <p className="text-black text-lg">{selectedFeature.name}</p>
            <div
              onClick={() => handleFeaturesSelection(selectedFeature)}
              className="bg-white hover:bg-slate-50 duration-300 w-7 h-7 rounded-md items-center justify-center flex border-[1px] cursor-pointer"
            >
              {isFeatureSelected(selectedFeature) ? (
                <MdDeleteOutline className="text-black" />
              ) : (
                <FiPlus className="text-black" />
              )}
            </div>
          </div>
          <p className="text-gray-500 py-1 duration-300 text-xs">
            {selectedFeature.category}
          </p>
          <div className="py-2">
            <p className="text-gray-400 text-xs py-1">
              from ${selectedFeature.cost}
            </p>
            <p className="text-gray-400 text-xs py-[1px]">
              {selectedFeature.time} days
            </p>
          </div>
          <p className="text-black text-sm py-2">{selectedFeature.details}</p>
          {/* <div className="bg-secondary duration-300 w-24 h-8 items-center rounded-md justify-center flex border-[1px] cursor-pointer">
          <p className="text-white text-xs">Add note</p>
        </div> */}
        </div>
      ) : (
        <div className="flex gap-20 px-10 py-10">
          <div className="w-3/4 flex flex-col gap-2">
            <p className="text-black font-semibold text-2xl">
              {selectedFeature.name}
            </p>
            <p className="text-text py-1 duration-300 text-xl">
              {selectedFeature.category}
            </p>
            <p className="text-black py-1">{selectedFeature.details}</p>
          </div>
          <div className="py-2 w-1/4">
            <p className="text-black text-xl py-1">${selectedFeature.cost}</p>
            <p className="text-black text-xl py-[1px]">
              {selectedFeature.time} days
            </p>
            {/* <div className="bg-secondary duration-300 w-24 h-8 items-center rounded-md justify-center flex border-[1px] cursor-pointer">
              <p className="text-white text-xs">Add note</p>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowFeature;
