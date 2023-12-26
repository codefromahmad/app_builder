"use client";
import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { IoDesktop } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import {
  GoCheckCircleFill,
  GoRocket,
  GoChecklist,
  GoCircle,
} from "react-icons/go";
import { SiStyledcomponents } from "react-icons/si";
import { PiShootingStarThin } from "react-icons/pi";
import { IoCodeSlashOutline } from "react-icons/io5";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import "./custom-style.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import buildercloud from "../../images/buildercloud.png";
import { MdWeb } from "react-icons/md";

export default function Dahsboard() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [sliderValue, setSliderValue] = useState(2);
  const [rangeSliderValue, setRangeSliderValue] = useState(2);
  const [sameSpeed, setSameSpeed] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState(1);
  const [infoPopup, setInfoPopup] = useState(false);
  const features = useSelector((state) => state.features.features);

  const checkAllContain = (text) => {
    // Check if every phase contains "android" in its platform array
    return phases.every((phase) => phase.platform.includes(text));
  };

  const removePlatformFromPhases = (platformText) => {
    console.log("removePlatformFromPhases", platformText);
    setPhases((prevPhases) => {
      // Update all phases by removing the platformText from the platform array
      return prevPhases.map((phase) => {
        const phaseToUpdate = { ...phase };

        // Check if the platformText exists in the platform array
        const platformIndex = phaseToUpdate.platform.indexOf(platformText);

        if (platformIndex !== -1) {
          // If the platformText exists, remove it from the array
          phaseToUpdate.platform.splice(platformIndex, 1);
        }

        return phaseToUpdate;
      });
    });
  };

  const addPlatformToPhase = (platformText) => {
    setPhases((prevPhases) => {
      // Check if all phases contain the platformText
      // const allContainText = checkAllContain(platformText);

      // Update all phases based on the check result
      return prevPhases.map((phase) => {
        const phaseToUpdate = { ...phase };

        if (checkAllContain(platformText)) {
          // If all phases contain the platformText, remove it
          // const platformIndex = phaseToUpdate.platform.indexOf(platformText);
          // if (platformIndex !== -1) {
          //   console.log("Removing", platformIndex);
          //   phaseToUpdate.platform.splice(platformIndex, 1);
          // }
          removePlatformFromPhases(platformText);
        } else {
          // If not all phases contain the platformText, add it
          phaseToUpdate.platform = [...phaseToUpdate.platform, platformText];
        }

        return phaseToUpdate;
      });
    });
  };

  const [phases, setPhases] = useState([
    {
      name: "Product Roadmap",
      duration: "2 Weeks",
      delivery: "27-Dec-2023",
      icon: <GoChecklist className="text-4xl text-black" />,
      selected: true,
      details:
        "Why do you need a product roadmap? Add it and we help you define the use cases for every feature in your Buildcard. If you skip it, you’ll need to know exactly what you expect each feature to do before we can start building your app.It also gives you an in-depth view of where your product is going. Includes a product timeline so everyone can see all the key dates on the way to get you there.",
      more: "Can help you secure funding, improve collaboration and streamline the whole app building process. Also useful for making long-term strategic decisions and planning a successful launch.",
      platform: ["android"],
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
      details:
        "Trust us to do the wireframing of your concept and design a seamless experience. Get a fully scalable UI/UX",
      more: "We combine visual principles, data, color psychology, and decades worth of experience to create aesthetic interfaces that will drive the growth of your product. We are experts in creating human-centric designs that allow customers to intuitively use your product and have a great product experience.",
      platform: ["android"],
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
      details:
        "Get a fully functional design prototype to test the design hypothesis and end-user journey. This includes designs for prototypes.",
      more: "Prototypes are realistic design representations of your ideas. We design interactive prototypes for iPhone, iPad, Android, and Web. Creation of prototypes is more specific, measurable, quick, and intensive than just describing the design. Test how the user will interact with an environment comparable to the final product.",
      platform: ["android"],
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
      details:
        "Ship the first build of your idea and get early adopters to try out your product",
      more: "We help design a Minimum Viable Product as a proof of concept to satisfy early customers and provide feedback for future development. It’s an easy way to build a product with a minimum set of features to test the market. Collect the maximum amount of validated learning about your customers with the least effort.",
      platform: ["android"],
      showPlatform: true,
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
      details:
        "We will do end to end designing and development of your idea. Get a market-ready product",
      more: "We build a full-fledged product based on the product roadmap and the features laid out in the specification document. We will also perfect the product based on user feedback received on the Minimum Viable Product. We will ship a fully mature, responsive, scalable, business-ready and a user-friendly product.",
      platform: ["android"],
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

  const handleRangeSliderChange = (event) => {
    setRangeSliderValue(parseInt(event.target.value, 10));
  };

  const handleCloseInfoPopup = () => {
    setInfoPopup(null);
  };

  const togglePhaseSelection = (index) => {
    console.log("Before toggle:", phases[index].selected);

    const newPhases = [...phases];
    newPhases[index].selected = !newPhases[index].selected;

    console.log("After toggle:", newPhases[index].selected);
    setPhases(newPhases);
  };

  const speedLabels = ["Relaxed", "Slow", "Standard", "Fast", "Speedy"];
  const priceDuration = [
    {
      name: "Relaxed",
      duration: "20 weeks",
      price: "$ 20,000",
    },
    {
      name: "Slow",
      duration: "18 weeks",
      price: "$ 20,000",
    },
    {
      name: "Standard",
      duration: "16 weeks",
      price: "$ 20,000",
    },
    {
      name: "Fast",
      duration: "14 weeks",
      price: "$ 20,000",
    },
    {
      name: "Speedy",
      duration: "12 weeks",
      price: "$ 20,000",
    },
  ];

  const numOfUsers = ["0-500", "500-5k", "5k-50k", "50k+"];

  const selectedLabel = speedLabels[sliderValue - 1]; // Adjust the index based on your min value

  const calculateLabelPosition = (value) => {
    const totalSteps = 5; // Adjust based on your max value
    let position = 0;
    if (value === 4) {
      position = 68;
    } else position = ((value - 1) / (totalSteps - 1)) * 80;
    return `${position}%`;
  };
  const calculateLabelPosition1 = (value) => {
    const totalSteps = 5; // Adjust based on your max value
    let position = 0;
    // if (value === 0) return `${position}%`;
    position = ((value - 1) / (totalSteps - 1)) * 100;
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

  const platforms = [
    {
      name: "Android",
      details: "Mobile App for android",
      icon: <BsAndroid2 className="text-4xl text-black" />,
    },
    {
      name: "iOS",
      details: "Mobile App for iOS",
      icon: <FaApple className="text-4xl text-black" />,
    },
    {
      name: "Web",
      details: "Web App",
      icon: <MdWeb className="text-4xl text-black" />,
    },
    {
      name: "Desktop",
      details: "Desktop application",
      icon: <IoDesktop className="text-4xl text-black" />,
    },
  ];

  return (
    <div>
      {infoPopup === "platforms" ? (
        <div
          class={`fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            infoPopup
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } w-96 h-auto rounded-lg bg-gray-700 p-4 transition-opacity duration-1000 ease-in-out`}
        >
          <IoMdClose
            onClick={handleCloseInfoPopup}
            className="text-xl absolute cursor-pointer right-3 text-white"
          />
          <p class="font-bold text-white pt-4">Devices</p>
          <p class="text-white text-sm py-2">
            Our apps are designed for the last 3 versions of iOS & Android (at
            the time your project kicks off). We test on flagship Apple, Samsung
            & Google devices.
          </p>
          <p class="text-white text-sm py-2">
            (Need testing for a specific device? Ask your delivery team.)
          </p>
          <p class="font-bold text-white pt-4">Browsers</p>
          <p class="text-white text-sm py-2">
            For web apps, our testing process covers the last 3 major versions
            of these browsers:
          </p>
          <ul className="pl-5 list-disc">
            <li class="text-white text-sm">Chrome</li>
            <li class="text-white text-sm">Safari</li>
            <li class="text-white text-sm">Firefox</li>
            <li class="text-white text-sm">Edge</li>
          </ul>
          <p class="font-bold text-white pt-4">Responsiveness</p>
          <ul className="pl-5 list-disc py-2">
            <li class="text-white text-sm">
              Desktop displays: (1280 x 720) to (1920 x 1080)
            </li>
            <li class="text-white text-sm">
              Mobile displays: (360 x 640) to (414 x 896)
            </li>
            <li class="text-white text-sm">
              Tablet displays: (601 x 962) to (1280 x 800)
            </li>
          </ul>
        </div>
      ) : (
        infoPopup && (
          <div
            className={`fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              infoPopup
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } w-80 h-auto rounded-lg bg-gray-700 p-4 transition-opacity duration-1000 ease-in-out`}
          >
            <IoMdClose
              onClick={handleCloseInfoPopup}
              className="text-xl absolute cursor-pointer right-3 text-white"
            />
            <p class="font-bold mb-2 text-center text-white p-y-4">
              {infoPopup.name}
            </p>
            <p class="text-white text-sm py-2">{infoPopup.details}</p>
            <p class="text-gray-400 text-xs py-2">{infoPopup.more}</p>
          </div>
        )
      )}
      <div
        className={`fixed top-0 left-0 w-full inset-0 bg-gray-300/20 backdrop-blur h-full z-30 ${
          infoPopup
            ? "opacity-0 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setInfoPopup(null)}
      />
      <div className="pt-10">
        <div className="flex px-10 justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-black text-2xl font-bold">
              Decide your deliverables
            </p>
            <div className="flex items-center gap-2">
              <p className="text-black font-medium">
                Select platform for your product
              </p>
              <HiOutlineInformationCircle
                onClick={() => setInfoPopup("platforms")}
                className="text-xl cursor-pointer text-gray-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <p className="text-black font-medium">Expected kick-off date</p>
            <p className="text-black text-xs">9 Dec 2023 (Today)</p>
          </div>
        </div>
        <div className="flex px-10 justify-start py-4 gap-4">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`relative w-40 flex items-center border-[1px] rounded-md cursor-pointer ${
                checkAllContain(platform.name.toLowerCase())
                  ? "border-purple-700"
                  : "border-gray-300"
              }`}
            >
              <div
                className="flex items-center gap-3 p-3 w-full"
                onClick={() => addPlatformToPhase(platform.name.toLowerCase())}
              >
                {platform.icon}
                <div className="justify-between flex flex-col gap-1">
                  <p className="text-black text-sm font-semibold">
                    {platform.name}
                  </p>
                  <p className="text-gray-400 text-xs">{platform.details}</p>
                </div>
              </div>
              <HiOutlineInformationCircle
                onClick={() => setInfoPopup(platform)}
                className="text-base absolute top-1 right-1 cursor-pointer text-gray-400"
              />
            </div>
          ))}
          {/* <div className="p-5 border-[1px] rounded-md cursor-pointer border-gray-300 duration-200 hover:border-purple-700">
            <FiPlus className="text-3xl text-black" />
          </div> */}
        </div>
        <div className="flex px-10 justify-between pt-6">
          <p className="text-black font-medium">
            Select phases for your product
          </p>
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
        <div className="grid px-10 grid-cols-5 gap-5 py-5">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative border-[1px] rounded-md h-fit ${
                phase.selected ? "border-purple-700" : "border-gray-400"
              }`}
            >
              <div
                onClick={() => togglePhaseSelection(index)}
                className="absolute top-2 right-2 cursor-pointer"
              >
                {phase.selected ? (
                  <GoCheckCircleFill className="text-2xl text-purple-700" />
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
                          phase.selected ? "text-purple-700" : "text-black"
                        } font-bold text-sm max-w-[130px]`}
                      >
                        {phase.name}{" "}
                      </p>
                      <HiOutlineInformationCircle
                        onClick={() => setInfoPopup(phase)}
                        className="text-xl cursor-pointer text-gray-400"
                      />
                    </div>
                  </div>

                  {phase.platform.length > 0 && (
                    <>
                      <div className="flex p-5 justify-between pt-5">
                        <p className="text-black text-xs font-bold">Platform</p>
                        <p className="text-purple-700 text-xs font-normal cursor-pointer">
                          Change
                        </p>
                      </div>
                      <div className="flex px-5 justify-start py-4 gap-4">
                        {phase.platform.includes("android") && (
                          <div className="flex flex-col items-center">
                            <BsAndroid2 className="text-2xl text-black" />
                            <p className="text-gray-400 pt-2 text-xs">
                              Android
                            </p>
                          </div>
                        )}
                        {phase.platform.includes("ios") && (
                          <div className="flex flex-col items-center">
                            <FaApple className="text-2xl text-black" />
                            <p className="text-gray-400 pt-2 text-xs">iOS</p>
                          </div>
                        )}
                        {phase.platform.includes("web") && (
                          <div className="flex flex-col items-center">
                            <MdWeb className="text-2xl text-black" />
                            <p className="text-gray-400 pt-2 text-xs">Web</p>
                          </div>
                        )}
                        {phase.platform.includes("desktop") && (
                          <div className="flex flex-col items-center">
                            <IoDesktop className="text-2xl text-black" />
                            <p className="text-gray-400 pt-2 text-xs">
                              Desktop
                            </p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                  <hr />
                  <div className="p-5">
                    <div className="flex justify-between">
                      <p className="text-black text-xs font-bold">Features</p>
                      <p className="text-purple-700 text-xs font-normal cursor-pointer">
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
                    {phase.selected && (
                      <input
                        className="small-slider h-2 w-full mt-4 appearance-none accent-purple-700 rounded-md cursor-pointer bg-gray-300 relative"
                        id="steps-range"
                        type="range"
                        min="1"
                        max="5"
                        value={phase.advanced.sliderValue}
                        step="1"
                        onChange={(e) =>
                          updateSliderValue(index, parseInt(e.target.value, 10))
                        }
                        style={{
                          background: `linear-gradient(to right, #7E22CE 0%, #7E22CE ${
                            (phase.advanced.sliderValue - 1) * 25
                          }%, #E5E7EB ${
                            (phase.advanced.sliderValue - 1) * 25
                          }%, #E5E7EB 100%)`,
                        }}
                      />
                    )}
                    <div
                      className="text-xs text-black mt-4"
                      style={{
                        paddingLeft: calculateLabelPosition(
                          phase.advanced.sliderValue
                        ),
                      }}
                    >
                      {speedLabels[phase.advanced.sliderValue - 1]}
                    </div>
                    {phase.selected && (
                      <div
                        className="flex gap-2 py-2 items-center cursor-pointer"
                        onClick={() =>
                          makeSliderValueSimilar(phase.advanced.sliderValue)
                        }
                      >
                        {sameSpeed ? (
                          <GoCheckCircleFill className="text-2xl text-purple-700" />
                        ) : (
                          <GoCircle className="text-2xl text-gray-400 cursor-pointer" />
                        )}
                        <p className="text-black text-xs">
                          Same speed for all the phases
                        </p>
                      </div>
                    )}
                  </div>
                  <hr />
                  <div className="p-5">
                    <p className="text-black text-xs font-bold pb-1">
                      Estimated Duration:{" "}
                    </p>
                    <p className="text-black text-xs font-normal">
                      {phase.selected ? phase.duration : "---"}
                    </p>
                    <p className="text-black text-xs font-bold pt-2">
                      Estimated Delivery Date:{" "}
                    </p>
                    <p className="text-black text-xs font-normal">
                      {phase.selected ? phase.delivery : "---"}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-5">
                  <div
                    className={`flex gap-2 ${
                      !phase.selected && "items-center"
                    }`}
                  >
                    {phase.icon}
                    <div className="w-full">
                      <div className="flex gap-1 py-1">
                        <p
                          className={`${
                            phase.selected ? "text-purple-700" : "text-black"
                          } font-bold text-sm max-w-[100px]`}
                        >
                          {phase.name}{" "}
                        </p>
                        <HiOutlineInformationCircle
                          onClick={() => setInfoPopup(phase)}
                          className="text-xl cursor-pointer text-gray-400"
                        />
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
                  {phase.selected &&
                    phase.showPlatform &&
                    phase.platform.length > 0 && (
                      <>
                        <div className="flex justify-between pt-5">
                          <p className="text-black text-xs font-bold">
                            Platform
                          </p>
                          <p className="text-purple-700 text-xs font-normal cursor-pointer">
                            Change
                          </p>
                        </div>
                        <div className="flex px-5 justify-start pt-4 pb-2 gap-4">
                          {phase.platform.includes("android") && (
                            <div className="flex flex-col items-center">
                              <BsAndroid2 className="text-3xl text-black" />
                              <p className="text-gray-400 pt-2 text-xs">
                                Android
                              </p>
                            </div>
                          )}
                          {phase.platform.includes("ios") && (
                            <div className="flex flex-col items-center">
                              <FaApple className="text-3xl text-black" />
                              <p className="text-gray-400 pt-2 text-xs">iOS</p>
                            </div>
                          )}
                          {phase.platform.includes("web") && (
                            <div className="flex flex-col items-center">
                              <MdWeb className="text-3xl text-black" />
                              <p className="text-gray-400 pt-2 text-xs">Web</p>
                            </div>
                          )}
                          {phase.platform.includes("desktop") && (
                            <div className="flex flex-col items-center">
                              <IoDesktop className="text-3xl text-black" />
                              <p className="text-gray-400 pt-2 text-xs">
                                Desktop
                              </p>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  {phase.selected && phase.features && (
                    <>
                      <div className="flex justify-between mt-2 py-2 border-t-[1px] border-gray-300">
                        <p className="text-black text-xs font-bold">Features</p>
                        <p className="text-purple-700 text-xs font-normal cursor-pointer">
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
        <div className="bg-slate-100 mt-10">
          <div className="p-10">
            <p className="text-black text-2xl font-bold">
              When do you want the delivery?
            </p>
            <div className="pt-5 flex flex-row justify-between items-center">
              <div className="flex flex-row w-2/3 items-center gap-2">
                <div className="w-2/3">
                  <div className="bg-white p-5 h-40 rounded-md relative">
                    <div className="relative h-10 flex justify-between">
                      {priceDuration.map((label, index) => (
                        <div key={index} className="text-xs mt-4">
                          <p
                            key={index}
                            className={`${
                              sliderValue === index + 1
                                ? "text-purple-700"
                                : "text-black"
                            }`}
                          >
                            {label.name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <input
                      id="steps-range"
                      type="range"
                      min="1"
                      max="5"
                      value={sliderValue}
                      step="1"
                      className="slider my-3"
                      onChange={handleSliderChange}
                    />
                    <div className="relative h-10 flex justify-between">
                      {priceDuration.map((label, index) => (
                        <div key={index} className="text-xs mt-4 text-center">
                          <p
                            key={index}
                            className={`text-center ${
                              sliderValue === index + 1
                                ? "text-purple-700"
                                : "text-black"
                            }`}
                          >
                            {label.price}
                          </p>
                          <p
                            className={`text-center pt-1 ${
                              sliderValue === index + 1
                                ? "text-purple-700"
                                : "text-black"
                            }`}
                          >
                            {label.duration}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="transform bg-gray-300 w-48 p-2 rounded">
                    <div className="tooltip-arrow absolute w-0 h-0 border-solid border-[transparent #ffffff transparent transparent] top-1/2 -left-2 transform:translate(-50%)"></div>
                    <div className="flex flex-col items-center p-3 justify-center">
                      <p className="text-xs font-semibold text-black">
                        {priceDuration[sliderValue - 1].name}
                      </p>
                      <p className="text-xs text-black text-center pt-1">
                        We build your app at the speed of light for a premium
                        price
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <p className="text-black font-medium">
              Select platform for your product
            </p>
            <TimezoneSelect
              value={selectedTimezone}
              onChange={(timezone) => setSelectedTimezone(timezone)}
              timezones={allTimezones}
            /> */}
              <div className="bg-white p-5 rounded-md h-28">
                <p className="text-black font-medium">
                  Select platform for your product
                </p>
                <p className="text-gray-400 text-sm pt-2">
                  Estimated First delivery:{" "}
                  <span className="font-bold text-purple-700">14-Mar-2024</span>
                </p>
                <p className="text-gray-400 text-sm pt-1">
                  Estimated First delivery:{" "}
                  <span className="font-bold text-black">14-Mar-2024</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <div className="w-1/2 border-[1px] rounded-md p-5 border-purple-700">
            <Image
              src={buildercloud}
              width={100}
              height={100}
              alt="builder cloud logo"
            />
            <div>
              <p className="text-black font-medium pt-4">
                Builder Cloud helps you scale your business
              </p>
              <ul className=" list-disc pl-4">
                <li className="py-1 text-black text-xs">
                  <span className="font-bold">Commitment-free savings:</span>{" "}
                  our customers saved over $4.5m, last year.
                </li>
                <li className="py-1 text-black text-xs">
                  <span className="font-bold">World-class analytics:</span>{" "}
                  Optimise your software and infrastructure.
                </li>
                <li className="py-1 text-black text-xs">
                  <span className="font-bold">Best-in-class multi-cloud:</span>{" "}
                  Azure, AWS, and more. Just one bill (for a lot less).
                </li>
              </ul>
            </div>
            <div className="bg-slate-200 mt-3 p-5 h-30 w-80 rounded-md relative">
              <div className="relative h-8 flex justify-between">
                <p className="text-black font-bold">Number of users</p>
                <p className="text-black font-bold">
                  {numOfUsers[rangeSliderValue - 1]}
                </p>
              </div>
              <input
                id="steps-range"
                type="range"
                min="1"
                max="4"
                value={rangeSliderValue}
                step="1"
                className="slider my-3"
                onChange={handleRangeSliderChange}
              />
              <div className="relative h-8 flex justify-between">
                {numOfUsers.map((range, index) => (
                  <div key={index} className="text-xs mt-4 text-center">
                    <p
                      className={`text-center pt-1 ${
                        sliderValue === index + 1
                          ? "text-purple-700"
                          : "text-black"
                      }`}
                    >
                      {range}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-black text-2xl">
                <span className="font-bold">₹97,685.58 + *</span> /month
              </p>
              <p className="text-xs text-gray-600 pt-5 font-thin">
                *This is an estimated price for cloud hosting and will vary
                according to usage.
              </p>
            </div>
          </div>
        </div>
        <div className="h-16 border-t-2 flex-1 items-end border-gray-300 w-full z-10 bg-white sticky bottom-0">
          <div className="flex flex-row justify-between items-center h-full">
            <div className="flex pl-5">
              <div className="flex flex-col px-2 gap-2 items-center">
                <p className="text-gray-400 text-xs">CUSTOMISATION COST</p>
                <p className="text-black font-extrabold text-xl">$10000</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-gray-300 text-2xl">+</p>
              </div>
              <div className="flex flex-col px-2 gap-2 items-center">
                <p className="text-gray-400 text-xs">FIXED COST</p>
                <p className="text-black font-extrabold text-xl">$1000</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-gray-300 text-2xl">=</p>
              </div>
              <div className="flex flex-col px-2 gap-2 items-center">
                <p className="text-gray-400 text-xs">TOTAL COST</p>
                <p className="text-black font-extrabold text-xl">$10000</p>
              </div>
              <div className="flex border-l-2 border-gray-300 flex-col px-2 gap-2 items-center">
                <p className="text-gray-400 text-xs">INDICATIVE DURATION</p>
                <p className="text-black font-extrabold text-xl">20 weeks</p>
              </div>
            </div>
            <div className="bg-green-500 h-full w-48 flex items-center justify-center">
              {/* <Link href="/delivery"> */}
              <p className="text-black font-semibold">Done</p>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
