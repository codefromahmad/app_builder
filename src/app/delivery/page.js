"use client";
import React, { useCallback, useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { IoDesktop } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import {
  GoCheckCircleFill,
  GoRocket,
  GoChecklist,
  GoCircle,
} from "react-icons/go";
import { SiStyledcomponents } from "react-icons/si";
import { PiShootingStarThin } from "react-icons/pi";
import { IoCodeSlashOutline } from "react-icons/io5";

export default function Dahsboard() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [sliderValue, setSliderValue] = useState(2);
  const [sameSpeed, setSameSpeed] = useState(false);
  const [phases, setPhases] = useState([
    {
      name: "Product Roadmap",
      duration: "2 Weeks",
      delivery: "27-Dec-2023",
      icon: <GoChecklist className="text-4xl text-black" />,
      selected: true,
      advanced: {
        sliderValue: 2,
      },
    },
    {
      name: "Design",
      duration: "7 Weeks",
      delivery: "12-Feb-2024",
      icon: <SiStyledcomponents className="text-4xl text-black" />,
      selected: false,
      advanced: {
        sliderValue: 1,
      },
    },
    {
      name: "Professional Prototype",
      duration: "3 Weeks",
      delivery: "26-Feb-2024",
      icon: <PiShootingStarThin className="text-4xl text-black" />,
      selected: true,
      advanced: {
        sliderValue: 3,
      },
    },
    {
      name: "MVP",
      duration: "7 Weeks",
      delivery: "13-Apr-2024",
      icon: <IoCodeSlashOutline className="text-4xl text-black" />,
      selected: false,
      platform: ["Android", "iOS", "Web"],
      features: 32,
      advanced: {
        sliderValue: 4,
      },
    },
    {
      name: "Full Build",
      duration: "4 Weeks",
      delivery: "12-Jun-2024",
      icon: <GoRocket className="text-4xl text-black" />,
      selected: true,
      advanced: {
        sliderValue: 5,
      },
    },
  ]);

  const handleToggleSwitch = () => {
    setIsSwitchOn((prevValue) => !prevValue);
  };

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  const togglePhaseSelection = (index) => {
    console.log("Before toggle:", phases[index].selected);

    const newPhases = [...phases];
    newPhases[index].selected = !newPhases[index].selected;

    console.log("After toggle:", newPhases[index].selected);
    setPhases(newPhases);
  };

  const speedLabels = ["Relaxed", "Slow", "Standard", "Fast", "Speedy"];

  const selectedLabel = speedLabels[sliderValue - 1]; // Adjust the index based on your min value

  const calculateLabelPosition = (value) => {
    const totalSteps = 5; // Adjust based on your max value
    let position = 0;
    if (value === 4) {
      position = 68;
    } else position = ((value - 1) / (totalSteps - 1)) * 80;
    return `${position}%`;
  };

  const makeSliderValueSimilar = (newValue) => {
    if (sameSpeed) {
      setSameSpeed(false);
      return;
    } else {
      setSameSpeed(true);
      setPhases((prevPhases) =>
        prevPhases.map((phase) => ({
          ...phase,
          advanced: {
            ...phase.advanced,
            sliderValue: newValue,
          },
        }))
      );
    }
  };

  const updateSliderValue = (index, newValue) => {
    setPhases((prevPhases) => {
      const newPhases = [...prevPhases];
      newPhases[index] = {
        ...newPhases[index],
        advanced: {
          ...newPhases[index].advanced,
          sliderValue: newValue,
        },
      };
      return newPhases;
    });
  };

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-black text-2xl font-bold">
            Decide your deliverables
          </p>
          <p className="text-black font-medium">
            Select platform for your product
          </p>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <p className="text-black font-medium">Expected kick-off date</p>
          <p className="text-black text-xs">9 Dec 2023 (Today)</p>
        </div>
      </div>
      <div className="flex justify-start py-4 gap-4">
        <div className="p-5 border-[1px] rounded-md cursor-pointer border-purple-600">
          <BsAndroid2 className="text-3xl text-black" />
        </div>
        <div className="p-5 border-[1px] rounded-md cursor-pointer border-purple-600">
          <FaApple className="text-3xl text-black" />
        </div>
        <div className="p-5 border-[1px] rounded-md cursor-pointer border-purple-600">
          <IoDesktop className="text-3xl text-black" />
        </div>
        <div className="p-5 border-[1px] rounded-md cursor-pointer border-gray-300 duration-200 hover:border-purple-600">
          <FiPlus className="text-3xl text-black" />
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <p className="text-black font-medium">Select phases for your product</p>
        <div className="flex gap-2 items-center">
          <p className="text-black font-medium">Advanced</p>
          <button
            className={`relative inline-block w-12 h-6 transition-colors duration-300 ease-in-out ${
              isSwitchOn ? "bg-green-500" : "bg-gray-400"
            } rounded-full focus:outline-none`}
            onClick={handleToggleSwitch}
          >
            <span
              className={`absolute top-[2px] bottom-[2px] left-1 right-1 inline-block w-5 h-5 transition-transform transform ${
                isSwitchOn ? "translate-x-full" : "translate-x-0"
              } bg-white rounded-full shadow`}
            ></span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5 py-5">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`relative border-[1px] rounded-md h-fit ${
              phase.selected ? "border-purple-600" : "border-gray-400"
            }`}
          >
            <div
              onClick={() => togglePhaseSelection(index)}
              className="absolute top-2 right-2 cursor-pointer"
            >
              {phase.selected ? (
                <GoCheckCircleFill className="text-2xl text-purple-600" />
              ) : (
                <GoCircle className="text-2xl text-gray-400 cursor-pointer" />
              )}
            </div>
            {isSwitchOn ? (
              <div>
                <div className="rounded-md rounded-b-none p-5 bg-slate-200">
                  <div className="flex p-5 gap-1 py-1">
                    {phase.icon}
                    <p
                      className={`${
                        phase.selected ? "text-purple-600" : "text-black"
                      } font-bold text-sm max-w-[130px]`}
                    >
                      {phase.name}{" "}
                    </p>
                    <HiOutlineInformationCircle className="text-xl text-gray-400" />
                  </div>
                </div>

                <div className="flex p-5 justify-between pt-5">
                  <p className="text-black text-xs font-bold">Platform</p>
                  <p className="text-purple-500 text-xs font-normal cursor-pointer">
                    Change
                  </p>
                </div>
                <div className="flex px-5 justify-start py-4 gap-4">
                  <div className="flex flex-col items-center">
                    <BsAndroid2 className="text-3xl text-black" />
                    <p className="text-gray-400 pt-2 text-xs">Android</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaApple className="text-3xl text-black" />
                    <p className="text-gray-400 pt-2 text-xs">iOS</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <IoDesktop className="text-3xl text-black" />
                    <p className="text-gray-400 pt-2 text-xs">Web</p>
                  </div>
                </div>
                <hr />
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-black text-xs font-bold">Features</p>
                    <p className="text-purple-500 text-xs font-normal cursor-pointer">
                      Change
                    </p>
                  </div>
                  <p className="text-gray-400 pt-2 text-xs">
                    32 features selected
                  </p>
                </div>
                <hr />
                <div className="p-5 relative">
                  <div className="flex justify-between">
                    <p className="text-black text-xs font-bold">
                      Working Speed
                    </p>
                  </div>
                  <input
                    className="h-2 w-full my-4 appearance-none accent-purple-500 rounded-md cursor-pointer bg-gray-300 relative"
                    id="steps-range"
                    type="range"
                    min="1"
                    max="5"
                    value={phase.advanced.sliderValue}
                    step="1"
                    onChange={(e) =>
                      updateSliderValue(index, parseInt(e.target.value, 10))
                    }
                  />
                  <div
                    className="text-xs text-black"
                    style={{
                      paddingLeft: calculateLabelPosition(
                        phase.advanced.sliderValue
                      ),
                    }}
                  >
                    {speedLabels[phase.advanced.sliderValue - 1]}
                  </div>
                  <div
                    className="flex gap-2 py-2 items-center cursor-pointer"
                    onClick={() =>
                      makeSliderValueSimilar(phase.advanced.sliderValue)
                    }
                  >
                    {sameSpeed ? (
                      <GoCheckCircleFill className="text-2xl text-purple-600" />
                    ) : (
                      <GoCircle className="text-2xl text-gray-400 cursor-pointer" />
                    )}
                    <p className="text-black text-xs">
                      Same speed for all the phases
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5">
                <div
                  className={`flex gap-2 ${!phase.selected && "items-center"}`}
                >
                  {phase.icon}
                  <div className="w-full">
                    <div className="flex gap-1 py-1">
                      <p
                        className={`${
                          phase.selected ? "text-purple-600" : "text-black"
                        } font-bold text-sm max-w-[100px]`}
                      >
                        {phase.name}{" "}
                      </p>
                      <HiOutlineInformationCircle className="text-xl text-gray-400" />
                    </div>
                    {phase.selected && (
                      <>
                        <p className="text-black text-xs font-bold pb-1">
                          Estimated Duration:{" "}
                          <span className="text-black text-xs font-normal">
                            {phase.duration}
                          </span>
                        </p>
                        <p className="text-black text-xs font-bold">
                          Estimated Delivery Date:{" "}
                          <span className="text-black text-xs font-normal">
                            {phase.delivery}
                          </span>
                        </p>
                      </>
                    )}
                  </div>
                </div>
                {phase.selected && phase.platform && (
                  <>
                    <div className="flex justify-between pt-5">
                      <p className="text-black text-xs font-bold">Platform</p>
                      <p className="text-purple-500 text-xs font-normal cursor-pointer">
                        Change
                      </p>
                    </div>
                    <div className="flex justify-start py-4 gap-4">
                      <div className="flex flex-col items-center">
                        <BsAndroid2 className="text-3xl text-black" />
                        <p className="text-gray-400 pt-2 text-xs">Android</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaApple className="text-3xl text-black" />
                        <p className="text-gray-400 pt-2 text-xs">iOS</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <IoDesktop className="text-3xl text-black" />
                        <p className="text-gray-400 pt-2 text-xs">Web</p>
                      </div>
                    </div>
                  </>
                )}
                {phase.selected && phase.features && (
                  <>
                    <div className="flex justify-between py-2 border-t-[1px] border-gray-300">
                      <p className="text-black text-xs font-bold">Features</p>
                      <p className="text-purple-500 text-xs font-normal cursor-pointer">
                        Change
                      </p>
                    </div>
                    <p className="text-gray-400 pt-1 text-xs">
                      32 features selected
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <div class="relative w-full">
        <input
          id="steps-range"
          type="range"
          min="1"
          max="5"
          value={sliderValue}
          step="1"
          className="w-full h-1 absolute z-10 accent-purple-400 appearance-none cursor-pointer bg-gray-300"
          onChange={handleSliderChange}
        />
        <div class="flex justify-between -mt-3 -z-1">
          <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div> */}
    </div>
  );
}
