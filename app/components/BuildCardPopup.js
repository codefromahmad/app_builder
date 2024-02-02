import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const BuildCardPopup = ({ buildCard, setName, addBuildCard, name }) => {
  return (
    <>
      {buildCard && (
        <div
          className={`fixed shadow-2xl py-10 z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            buildCard
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } w-96 h-auto rounded-lg bg-white items-center justify-center flex flex-col p-4 transition-opacity duration-1000 ease-in-out`}
        >
          <div className="bg-secondary rounded-full w-20 h-20 flex items-center justify-center">
            <FaThumbsUp className="text-white text-3xl" />
          </div>
          <p className="my-2 text-center text-black py-4">
            Time to create your Launch Swift (It describes exactly what you want
            to build)
          </p>
          <p className="my-2 font-bold text-center text-black">
            First, please name your Launch Swift
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="my-2 w-full outline-none border-[1px] text-black border-gray-300 rounded-md p-2"
            placeholder="eg. Booking.com"
            type="text"
          />
          <div
            className={`px-2 py-1 ${
              name.length > 2 ? "bg-secondary" : "bg-gray-400"
            } w-full h-10 items-center flex justify-center rounded-md ${
              name.length > 2 ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={name.length > 2 ? addBuildCard : null}
          >
            <p className="text-sm text-white">SAVE</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BuildCardPopup;
