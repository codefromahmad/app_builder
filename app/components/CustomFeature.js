"use client";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const CustomFeature = ({
  name,
  setName,
  details,
  setDetails,
  setShow,
  dictionary,
  lang,
  handleSubmit,
}) => {
  const isButtonDisabled = !name || !details;

  return (
    <div className="absolute w-[450px] h-[300px] z-50 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
      <div
        style={{ direction: `${lang === "en" ? "ltr" : "rtl"}` }}
        className="p-5 w-full h-full"
      >
        <h1 className="text-black px-8 font-semibold text-lg">
          {dictionary.heading}
        </h1>
        <div className="px-8 flex flex-col justify-center bg-white scrollbar-hidden">
          <div className="flex flex-col gap-1 pt-2">
            <p className="text-black font-bold text-xs">{dictionary.name}</p>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder={dictionary.namePlaceholder}
              className="border-[1px] text-sm border-gray-300 outline-none text-black rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-1 pt-3">
            <p className="text-black font-bold text-xs">{dictionary.details}</p>
            <textarea
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder={dictionary.detailsPlaceholder}
              className="border-[1px] text-sm border-gray-300 outline-none text-black rounded p-2"
            />
          </div>
        </div>
        <div className="flex flex-col px-8 pt-4">
          <button
            disabled={isButtonDisabled}
            className={`${
              isButtonDisabled ? "bg-gray-300" : "bg-secondary"
            } border-gray-300 border-t-[1px] w-full rounded p-3`}
            onClick={handleSubmit}
          >
            {dictionary.save}
          </button>
        </div>
      </div>
      <div
        onClick={() => setShow(false)}
        className={`absolute top-5 ${
          lang === "en" ? "right-5" : "left-5"
        } border-[1px] flex justify-center items-center cursor-pointer rounded-full border-gray-300 w-8 h-8`}
      >
        <IoCloseOutline className="text-gray-500 text-2xl" />
      </div>
    </div>
  );
};

export default CustomFeature;
