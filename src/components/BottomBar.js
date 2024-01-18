import Link from "next/link";
import React from "react";

const BottomBar = ({
  customizationCost,
  fixedCost,
  totalCost,
  durationLocal,
}) => {
  return (
    <div className="h-16 border-t-2 items-end border-gray-300 w-full bg-white">
      <div className="flex flex-row justify-between items-center h-full">
        <div className="grid grid-cols-5 gap-4">
          <div className="flex justify-center">
            <p className="text-2xl font-bold text-black">Plan</p>
          </div>
          <div className="flex flex-col px-2 gap-2 items-start">
            <p className="text-black text-xs">Customization Cost</p>
            <p className="text-black font-extrabold text-xl">
              ${customizationCost}
            </p>
          </div>
          <div className="flex flex-col px-2 gap-2 items-start">
            <p className="text-black text-xs">Fixed Cost</p>
            <p className="text-black font-extrabold text-xl">${fixedCost}</p>
          </div>
          <div className="flex flex-col px-2 gap-2 items-start">
            <p className="text-black text-xs">Total Cost</p>
            <p className="text-black font-extrabold text-xl">${totalCost}</p>
          </div>
          <div className="flex flex-col px-2 gap-2 items-start">
            <p className="text-black text-xs">Indicative Duration</p>
            <p className="text-black font-extrabold text-xl">
              {durationLocal} weeks
            </p>
          </div>
        </div>
        <Link
          href={"/delivery"}
          className="bg-green-500 h-full cursor-pointer w-48 flex items-center justify-center"
        >
          <p className="text-black font-semibold">Plan Delivery</p>
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
