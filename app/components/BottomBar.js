import Link from "next/link";
import React from "react";

const BottomBar = ({
  lang,
  customizationCost,
  fixedCost,
  totalCost,
  durationLocal,
  buttonText,
  setBuildCard,
  handlePlanDelivery,
  cloudService,
  cloudServicePrice,
  sidebar,
}) => {
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
              ${customizationCost}
            </p>
          </div>
          <div>
            <p className="text-[#A6A6A6] text-2xl">+</p>
          </div>
          <div className="flex flex-col px-2 gap-2 items-start">
            <p className="text-black text-xs">{sidebar.fixedCost}</p>
            <p className="text-black font-extrabold text-xl">${fixedCost}</p>
          </div>
          {cloudService && (
            <>
              <div>
                <p className="text-[#A6A6A6] text-2xl">+</p>
              </div>
              <div className="flex flex-col px-2 gap-2 items-start">
                <p className="text-black text-xs">{sidebar.cloudServiceCost}</p>
                <p className="text-black font-extrabold text-xl">
                  ${cloudServicePrice}
                </p>
              </div>
            </>
          )}
          <div>
            <p className="text-[#A6A6A6] text-2xl">=</p>
          </div>
          <div className="flex flex-col px-2 gap-2 items-start">
            <p className="text-black text-xs">{sidebar.totalCost}</p>
            <p className="text-black font-extrabold text-xl">${totalCost}</p>
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
        {buttonText != "Done" ? (
          <div
            onClick={handlePlanDelivery}
            className="bg-secondary border border-black w-1/4 h-full cursor-pointer flex items-center justify-center"
          >
            <p className="text-black font-semibold">{buttonText}</p>
          </div>
        ) : (
          <div
            onClick={() => setBuildCard(true)}
            className="bg-secondary border border-black w-1/4 h-full cursor-pointer flex items-center justify-center"
          >
            <p className="text-black font-semibold">{buttonText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomBar;
