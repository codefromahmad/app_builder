import Link from "next/link";
import React, { useState } from "react";
import { getDictionary } from "../../lib/dictionary";
import { usePathname } from "next/navigation";
import Image from "next/image";
import spinner from "../images/dots-loading.gif";

const BottomBar = ({
  lang,
  customizationCost,
  fixedCost,
  totalCost,
  durationLocal,
  buttonText,
  showBuildCardPopUp,
  handlePlanDelivery,
  cloudService,
  cloudServicePrice,
  loading,
}) => {
  const [sidebar, setSidebar] = useState({});
  const pathname = usePathname();
  const page = pathname.split("/")[2];

  getDictionary(lang)
    .then((lang) => {
      setSidebar(lang.sidebar);
    })
    .catch((error) => {
      console.error(error);
    });

  const handleClick = () => {
    page === "delivery" ? showBuildCardPopUp : handlePlanDelivery;
  };

  return (
    <div className="h-16 items-end w-full bg-white">
      <div className="flex flex-row justify-between items-center h-full">
        <div
          className={`flex ${
            buttonText === "Done" ? "px-20" : "px-5"
          } items-center justify-between w-3/4 gap-4`}
        >
          <div className="flex flex-col px-2 gap-2 items-start">
            <p className="text-black text-xs">{sidebar.customizationCost}</p>
            <p className="text-black font-extrabold text-xl">
              ${customizationCost.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-[#A6A6A6] text-2xl">+</p>
          </div>
          <div className="flex flex-col px-2 gap-2 items-start">
            <p className="text-black text-xs">{sidebar.fixedCost}</p>
            <p className="text-black font-extrabold text-xl">
              ${fixedCost.toLocaleString()}
            </p>
          </div>
          {cloudService && (
            <>
              <div>
                <p className="text-[#A6A6A6] text-2xl">+</p>
              </div>
              <div className="flex flex-col px-2 gap-2 items-start">
                <p className="text-black text-xs">{sidebar.cloudServiceCost}</p>
                <p className="text-black font-extrabold text-xl">
                  ${cloudServicePrice.toLocaleString()}
                </p>
              </div>
            </>
          )}
          <div>
            <p className="text-[#A6A6A6] text-2xl">=</p>
          </div>
          <div className="flex flex-col px-2 gap-2 items-start">
            <p className="text-black text-xs font-arabic">
              {sidebar.totalCost}
            </p>
            <p className="text-black font-extrabold text-xl">
              ${totalCost.toLocaleString()}
            </p>
          </div>
          <div
            className={`flex ${
              lang === "en" ? "border-l-[3px] pl-10" : "border-r-[3px] pr-10"
            } border-[#A6A6A6] flex-col px-2 gap-2 items-start`}
          >
            <p className="text-black text-xs">{sidebar.indicativeDuration}</p>
            <p className="text-black font-extrabold text-xl">
              {durationLocal} {sidebar.weeks}
            </p>
          </div>
        </div>
        {loading ? (
          <div className="bg-secondary border border-gray-500 w-1/4 h-full cursor-pointer flex items-center justify-center">
            <Image
              priority
              src={spinner}
              alt="loading..."
              className="w-20 h-12"
            />
          </div>
        ) : (
          <div
            onClick={
              page === "delivery" ? showBuildCardPopUp : handlePlanDelivery
            }
            className="bg-secondary border border-gray-500 w-1/4 h-full cursor-pointer flex items-center justify-center"
          >
            <p className="text-black font-semibold">{buttonText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomBar;
