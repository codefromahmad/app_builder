import React, { useState } from "react";
import { PhoneFrame } from "./PhoneFrame";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import placheholderImage from "../images/builderlogo.svg";

const ShowFeature = ({
  selectedFeature,
  handleFeaturesSelection,
  isFeatureSelected,
  platform,
  sidebar,
  lang,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const imageLoader = ({ src, width, quality }) => {
    return `https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png`;
  };

  return (
    <div
      className={`flex justify-center ${
        platform === "mobile" ? "flex-row" : "flex-col"
      } items-center bg-slate-100 h-[calc(100vh-14.5rem)] mb-6 mx-6 rounded-lg gap-x-6`}
    >
      {platform === "mobile" ? (
        <div className="border-2 border-[#A6A6A6] p-2 w-48 rounded-xl">
          {/* <div className="w-48 h-96">
          <PhoneFrame> */}
          <Image
            width={200}
            height={100}
            src={selectedFeature?.mobile}
            alt="icon"
            className="object-fill rounded-xl"
          />
          {/* </PhoneFrame>
        </div> */}
        </div>
      ) : (
        <div className="border-2 border-[#A6A6A6] p-2 w-[500px] h-[300px] rounded-xl">
          <Image
            width={1024}
            height={100}
            src={selectedFeature?.web}
            alt="icon"
            className=" object-fill w-full h-full rounded-xl"
          />
        </div>
      )}

      {platform === "mobile" ? (
        <div className="w-1/3">
          <div className="flex items-center gap-2">
            <p className="text-black font-semibold text-2xl">
              {selectedFeature.name}
            </p>
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
          <p className="text-text py-1 duration-300">
            {selectedFeature.category}
          </p>
          <div className="py-2">
            <p className="text-text text-lg py-1">${selectedFeature.price}</p>
            <p className="text-text text-lg py-[1px]">
              {selectedFeature.timeline} {sidebar.days}
            </p>
          </div>
          <p className={`text-black py-1 ${lang === "ar" && "leading-10"}`}>
            {selectedFeature.description}
          </p>
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
            <p className="text-text py-1 duration-300">
              {selectedFeature.category}
            </p>
            <p className={`text-black py-1 ${lang === "ar" && "leading-10"}`}>
              {selectedFeature.description}
            </p>
          </div>
          <div className="py-2 w-1/4">
            <p className="text-text text-lg py-1">${selectedFeature.price}</p>
            <p className="text-text text-lg py-[1px]">
              {selectedFeature.timeline} {sidebar.days}
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
