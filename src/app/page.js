"use client";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./custom-scroll.css";
import { AiOutlineEye } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { FaArrowLeftLong, FaCircleCheck } from "react-icons/fa6";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { sidebarData } from "./data";
import { PhoneFrame } from "@/components/PhoneFrame";

export default function App() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expand, setExpand] = useState(false);
  console.log("selectedFeatures", selectedFeatures);

  const handleFeaturesSelection = (feature) => {
    console.log("feature", feature.name);

    // Check if the feature is already selected
    const isSelected = selectedFeatures.some(
      (selected) => selected.name === feature.name
    );

    if (isSelected) {
      // If selected, remove it from the array
      const updatedFeatures = selectedFeatures.filter(
        (selected) => selected.name !== feature.name
      );
      setSelectedFeatures(updatedFeatures);
    } else {
      // If not selected, add it to the array
      setSelectedFeatures((prevFeatures) => [feature, ...prevFeatures]);
    }

    setSelectedFeature(feature);
  };

  const toggleDropdown = (index) => {
    if (!sidebarData[index].dropDown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const handleFeatureSelection = (feature) => {
    console.log("feature", feature.name);
    setSelectedFeature(feature);
  };

  const isFeatureSelected = (feature) => {
    return selectedFeatures.some((selected) => selected.name === feature.name);
  };

  const handleRemoveAll = () => {
    setExpand(false);
    setSelectedFeature(null);
    setSelectedFeatures([]);
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  const countSelectedFeatures = (features) => {
    const selectedFeaturesCount = features.filter((feature) =>
      selectedFeatures.some((selected) => selected.name === feature.name)
    ).length;

    return selectedFeaturesCount;
  };

  const handleAddMultipleFeatures = (newFeatures) => {
    // Filter out features that are already present in selectedFeatures
    const filteredNewFeatures = newFeatures.filter(
      (newFeature) =>
        !selectedFeatures.some(
          (selectedFeature) => selectedFeature.name === newFeature.name
        )
    );

    // Update selectedFeature state
    setSelectedFeature(filteredNewFeatures[0]);
    setSelectedFeatures((prevFeatures) => [
      ...prevFeatures,
      ...filteredNewFeatures,
    ]);
  };

  const duration = Math.floor(
    selectedFeatures?.reduce(
      (acc, item) => acc + parseFloat(item.time?.replace(/,/g, "")),
      0
    ) / 7
  );

  const fixedCost = selectedFeatures
    ?.reduce((acc, item) => acc + parseFloat(item.cost?.replace(/,/g, "")), 0)
    .toFixed(2);

  const customisationCost = selectedFeatures?.length * 50;

  const totalCost = customisationCost + parseFloat(fixedCost);

  // const containerRef = useRef(null);
  // const [isScrolling, setScrolling] = useState(false);

  // const handleScroll = () => {
  //   setScrolling(true);
  //   console.log("scrolling");
  // };

  // const handleMouseEnter = () => {
  //   setScrolling(true);
  //   console.log("mouse enter");
  // };

  // const handleMouseLeave = () => {
  //   setScrolling(false);
  //   console.log("mouse leave");
  // };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <div
        className={`w-1/5 bg-white max-h-screen relative ${
          isScrolling ? "overflow-y-auto custom-scrollbar" : "overflow-y-hidden"
        } duration-300`}
        ref={containerRef}
        onScroll={handleScroll}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      > */}
      <div className="w-1/5 bg-white max-h-screen relative custom-scrollbar overflow-y-hidden hover:overflow-y-auto duration-300">
        {sidebarData.map((item, index) => (
          <>
            <div
              key={index}
              onClick={() => toggleDropdown(index)}
              className="group hover:bg-slate-100 border-b-2 p-4 cursor-pointer transition duration-500 ease-in-out"
            >
              <div className="flex justify-between items-center text-black">
                <div className="flex items-center gap-3">
                  <img
                    className="w-5 h-5 opacity-50 group-hover:opacity-100"
                    src={item.img}
                    alt="Healthcare Icon"
                  />
                  <p className="text-sm">{item.name}</p>
                </div>
                {item.dropDown && activeDropdown != index && (
                  <MdKeyboardArrowDown className="group-hover:text-black text-xl text-transparent" />
                )}
                {activeDropdown === index && (
                  <MdKeyboardArrowUp className="text-black text-xl" />
                )}
              </div>
              {activeDropdown === index && (
                <div className="flex flex-row items-center justify-between">
                  <div className="pt-3">
                    <p className="text-gray-500 text-xs">
                      {countSelectedFeatures(item.dropDown)}/
                      {item.dropDown && item.dropDown.length} features
                    </p>
                  </div>
                  <div
                    className="pt-3"
                    onClick={() => handleAddMultipleFeatures(item.dropDown)}
                  >
                    <p className="text-gray-500 text-xs">
                      {countSelectedFeatures(item.dropDown) ===
                      item.dropDown.length
                        ? "Unselect All"
                        : "Select All"}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`dropdown max-h-40 custom-scrollbar overflow-y-hidden hover:overflow-y-auto duration-300 ${
                activeDropdown === index ? "open" : ""
              }`}
            >
              {item.dropDown &&
                activeDropdown === index &&
                item.dropDown.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleFeatureSelection(item)}
                    className={`flex flex-grow w-full cursor-pointer ${
                      isFeatureSelected(item)
                        ? "border-l-blue-500"
                        : selectedFeature?.name === item.name
                        ? "border-l-gray-500"
                        : "hover:border-l-gray-500"
                    } border-l-4 duration-300 hover:border-l-4 justify-between items-center p-4 border-b-[1px] bg-slate-100 text-black `}
                  >
                    <div className="flex w-full justify-between items-center">
                      <div className="flex gap-2">
                        {isFeatureSelected(item) ? (
                          <FaCircleCheck className="text-blue-500 mt-1 text-sm" />
                        ) : (
                          <img
                            className="w-5 h-5 mt-2 opacity-50"
                            src={item.icon}
                            alt="Healthcare Icon"
                          />
                        )}
                        <div>
                          <p className="text-sm">{item.name}</p>
                          <p className="text-gray-500 text-xs">
                            from ${item.cost}
                          </p>
                          <p className="text-gray-500 text-xs">
                            from {item.time} days
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-x-2">
                        <div
                          onClick={() => handleFeatureSelection(item)}
                          className={`${
                            selectedFeature?.name === item.name
                              ? "bg-blue-500"
                              : "bg-gray-300"
                          } p-2 rounded-md duration-300`}
                        >
                          <AiOutlineEye className="text-white" />
                        </div>
                        <div
                          onClick={() => handleFeaturesSelection(item)}
                          className="bg-gray-300 p-2 rounded-md"
                        >
                          {isFeatureSelected(item) ? (
                            <MdDeleteOutline className="text-white" />
                          ) : (
                            <FiPlus className="text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        ))}
      </div>

      {/* Playground Area */}
      <div className="overflow-y-hidden h-full w-4/5 bg-slate-100">
        {/* <div
            className={`flex justify-center ${
              selectedFeatures?.length > 0
                ? "h-3/5 animate-moveUp duration-300"
                : "h-full"
            } items-center gap-x-6`}
          > */}
        {selectedFeature ? (
          <div
            className={`flex justify-center ${
              selectedFeatures?.length > 0
                ? expand
                  ? "h-0 animate-moveDown hidden"
                  : "h-4/6 animate-moveUp duration-300"
                : "h-full"
            } items-center gap-x-6`}
          >
            <div className="w-48 h-96">
              <PhoneFrame>
                <img
                  src={selectedFeature.mobile}
                  alt="icon"
                  className=" object-fill w-full h-full"
                />
              </PhoneFrame>
            </div>

            <div className="w-1/3">
              <div className="flex items-center gap-2">
                <p className="text-black text-lg">{selectedFeature.name}</p>
                <div
                  onClick={() => handleFeaturesSelection(selectedFeature)}
                  className="bg-white w-7 h-7 rounded-md items-center justify-center flex border-[1px] cursor-pointer"
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
                  {selectedFeature.cost}
                </p>
                <p className="text-gray-400 text-xs py-[1px]">
                  {selectedFeature.time}
                </p>
              </div>
              <p className="text-black text-sm py-2">
                {selectedFeature.details}
              </p>
              <div className="bg-white w-24 h-8 items-center rounded-md justify-center flex border-[1px] cursor-pointer">
                <p className="text-black text-xs">Add note</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col relative justify-center items-center h-full">
            <div className="absolute left-4">
              <FaArrowLeftLong className="text-black text-xl" />
            </div>

            <p className="text-black text-2xl font-bold">
              No features selected
            </p>
            <p className="text-black text-sm">
              Select feature to preview from left
            </p>
          </div>
        )}
        {selectedFeatures?.length > 0 && (
          <div
            className={`${
              selectedFeatures?.length > 0
                ? "animate-moveUp h-2/6"
                : "animate-moveDown h-0"
            } duration-300 relative ${expand ? "h-full animate-moveUp" : ""}`}
          >
            <div className="h-full bg-gray-100 relative custom-scrollbar overflow-y-auto">
              <div className="h-12 border-t-2 border-gray-300 sticky top-0 bg-white z-10">
                <div className="flex flex-row justify-between items-center h-full px-5">
                  <div className="flex gap-2 items-center">
                    <p className="text-gray-400 text-xs">SELECTED FEATURES</p>
                    <span className="bg-gray-300 px-3 py-1 rounded-full text-xs">
                      <p>{selectedFeatures.length}</p>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div
                      onClick={handleRemoveAll}
                      className="bg-white w-24 h-8 items-center rounded-md justify-center flex border-[1px] cursor-pointer"
                    >
                      <p className="text-black text-xs">Remove all</p>
                    </div>
                    <div
                      onClick={handleExpand}
                      className="bg-white w-8 h-8 items-center rounded-md justify-center flex border-[1px] cursor-pointer"
                    >
                      {expand ? (
                        <BsArrowsAngleContract className="text-black" />
                      ) : (
                        <BsArrowsAngleExpand className="text-black" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-10 p-5 w-full">
                {selectedFeatures.map((item, index) => (
                  <div
                    onClick={() => handleFeatureSelection(item)}
                    key={index}
                    className={`bg-slate-200 hover:bg-slate-300 duration-300 cursor-pointer relative p-2 rounded-lg h-full w-full flex justify-center items-center gap-x-3`}
                  >
                    <div
                      onClick={() => handleFeaturesSelection(item)}
                      className="z-1 absolute top-2 hover:bg-red-300 right-2 bg-white w-7 h-7 items-center rounded-full justify-center flex border-[1px] cursor-pointer"
                    >
                      {isFeatureSelected(item) && (
                        <MdDeleteOutline className="text-black" />
                      )}
                    </div>
                    <div
                      className={`w-20 h-38 ${
                        selectedFeature.name === item.name
                          ? "border-blue-500"
                          : "border-transparent"
                      } group border-2 duration-500 rounded-xl`}
                    >
                      <PhoneFrame>
                        <img
                          src={item.mobile}
                          alt="icon"
                          className=" object-fill w-full h-full"
                        />
                      </PhoneFrame>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-black text-sm">{item.name}</p>
                      </div>
                      <p className="text-gray-500 py-1 text-xs">
                        {item.category}
                      </p>
                      <div className="py-2">
                        <p className="text-gray-400 text-xs py-1">
                          {item.cost}
                        </p>
                        <p className="text-gray-400 text-xs py-[1px]">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-16 border-t-2 border-gray-300 sticky bottom-0 bg-white z-10">
                <div className="flex flex-row justify-between items-center h-full">
                  <div className="flex pl-5">
                    <div className="flex flex-col px-2 gap-2 items-center">
                      <p className="text-gray-400 text-xs">
                        CUSTOMISATION COST
                      </p>
                      <p className="text-black font-extrabold text-xl">
                        ${customisationCost}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-300 text-2xl">+</p>
                    </div>
                    <div className="flex flex-col px-2 gap-2 items-center">
                      <p className="text-gray-400 text-xs">FIXED COST</p>
                      <p className="text-black font-extrabold text-xl">
                        ${fixedCost}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-300 text-2xl">=</p>
                    </div>
                    <div className="flex flex-col px-2 gap-2 items-center">
                      <p className="text-gray-400 text-xs">TOTAL COST</p>
                      <p className="text-black font-extrabold text-xl">
                        ${totalCost}
                      </p>
                    </div>
                    <div className="flex border-l-2 border-gray-300 flex-col px-2 gap-2 items-center">
                      <p className="text-gray-400 text-xs">
                        INDICATIVE DURATION
                      </p>
                      <p className="text-black font-extrabold text-xl">
                        {duration} weeks
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-500 h-full w-40 flex items-center justify-center">
                    <p className="text-black">Plan Delievery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
