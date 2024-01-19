"use client";
import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { IoDesktop } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import "./custom-style.css";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MdDeleteOutline, MdWeb } from "react-icons/md";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import { FaThumbsUp } from "react-icons/fa6";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import HeaderLayout from "@/components/HeaderLayout";
import logo from "../../images/logo.svg";
import BottomBar from "@/components/BottomBar";
import {
  speedLabels,
  priceDuration,
  initialPhases,
  numOfUsers,
  sidebarData,
} from "../data";

export default function Dahsboard() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [sliderValue, setSliderValue] = useState(2);
  const [rangeSliderValue, setRangeSliderValue] = useState(2);
  const [cloudService, setCloudService] = useState(false);
  const [sameSpeed, setSameSpeed] = useState(false);
  const [infoPopup, setInfoPopup] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const features = useSelector((state) => state.features.features);
  const [weeks, setWeeks] = useState(20);
  const [buildCard, setBuildCard] = useState(false);
  const [name, setName] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const db = getFirestore();
  const user = useSelector((state) => state.user.user);
  const [phases, setPhases] = useState(initialPhases);

  useEffect(() => {
    if (sidebar || buildCard) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [sidebar, buildCard]);

  const allDropDowns = sidebarData
    .filter((item) => item.dropDown)
    .flatMap((item) => item.dropDown);

  const filteredItems = allDropDowns.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const { inFeatures, notInFeatures } = filteredItems.reduce(
    (acc, item) => {
      if (features.some((feature) => feature.name === item.name)) {
        acc.inFeatures.push(item);
      } else {
        acc.notInFeatures.push(item);
      }
      return acc;
    },
    { inFeatures: [], notInFeatures: [] }
  );
  const sortedAllDropDowns = [...inFeatures, ...notInFeatures];

  const deliveryDate = moment().add(
    priceDuration[sliderValue - 1].duration,
    "weeks"
  );

  const checkAllContain = (text) => {
    return phases.every((phase) => phase?.platform.includes(text));
  };

  const platforms = [
    {
      name: "Android",
      details: "Mobile App for android",
      icon: (
        <BsAndroid2
          className={`text-4xl ${
            checkAllContain("android") ? "text-white" : "text-[#B4B6B7]"
          }`}
        />
      ),
      selected: checkAllContain("android"),
    },
    {
      name: "iOS",
      details: "Mobile App for iOS",
      icon: (
        <FaApple
          className={`text-4xl ${
            checkAllContain("ios") ? "text-white" : "text-[#B4B6B7]"
          }`}
        />
      ),
      selected: checkAllContain("ios"),
    },
    {
      name: "Web",
      details: "Web App",
      icon: (
        <MdWeb
          className={`text-4xl ${
            checkAllContain("web") ? "text-white" : "text-[#B4B6B7]"
          }`}
        />
      ),
      selected: checkAllContain("web"),
    },
    {
      name: "Desktop",
      details: "Desktop application",
      icon: (
        <IoDesktop
          className={`text-4xl ${
            checkAllContain("desktop") ? "text-white" : "text-[#B4B6B7]"
          }`}
        />
      ),
      selected: checkAllContain("desktop"),
    },
  ];

  const removePlatformFromPhases = (platformText) => {
    console.log("removePlatformFromPhases", platformText);
    const selectedPhasesCount = platforms.filter(
      (platform) => platform.selected
    ).length;

    console.log("Only one phase left", selectedPhasesCount);
    if (selectedPhasesCount === 1) {
      return phases;
    }
    setPhases((prevPhases) => {
      return prevPhases.map((phase) => {
        const phaseToUpdate = { ...phase };

        // Check if the platformText exists in the platform array
        const platformIndex = phaseToUpdate.platform?.indexOf(platformText);

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

  const handleToggleSwitch = () => {
    setIsSwitchOn((prevValue) => !prevValue);
  };

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  const handleRangeSliderChange = (event) => {
    setRangeSliderValue(parseInt(event.target.value, 10));
  };

  const handleClose = () => {
    setInfoPopup(null);
    setBuildCard(false);
    setSidebar(false);
    setName("");
    setSearch("");
  };

  const togglePhaseSelection = (index) => {
    console.log("Before toggle:", phases[index].selected);

    const newPhases = [...phases];
    newPhases[index].selected = !newPhases[index].selected;

    console.log("After toggle:", newPhases[index].selected);
    setPhases(newPhases);
  };

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

  const isFeatureSelected = (feature) => {
    return features.some((selected) => selected.name === feature.name);
  };

  const handleFeaturesSelection = (feature) => {
    console.log("handleFeaturesSelection", feature.name);

    if (isFeatureSelected(feature)) {
      // If selected, remove it from the array
      const updatedFeatures = features.filter(
        (selected) => selected.name !== feature.name
      );
      dispatch({
        type: "setFeatures",
        payload: updatedFeatures,
      });
    } else {
      // If not selected, add it to the array
      dispatch({
        type: "addFeature",
        payload: feature,
      });
    }
  };

  const addBuildCard = () => {
    const userRef = doc(db, "users", user.uid);
    const newBuildCard = {
      name: "New Card",
      features: features,
    };

    console.log("newBuildCard", newBuildCard);

    getDoc(userRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          console.log("User document data:", userData);

          // Ensure buildCards exists and is an array
          userData.buildCards = Array.isArray(userData.buildCards)
            ? userData.buildCards
            : [];

          // Assuming buildCards is an array, push the new item
          userData.buildCards.push(newBuildCard);

          // Update the document with the modified buildCards array
          updateDoc(userRef, userData)
            .then(() => {
              console.log("Build card added successfully");
              dispatch(setUser(userData));
            })
            .catch((error) => {
              console.error("Error updating document: ", error);
            });
        } else {
          console.error("User document does not exist");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  };

  return (
    <HeaderLayout>
      <div className="mt-12">
        {infoPopup === "platforms" ? (
          <div
            className={`fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              infoPopup
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } w-96 h-auto rounded-lg bg-gray-700 p-4 transition-opacity duration-1000 ease-in-out`}
          >
            <IoMdClose
              onClick={handleClose}
              className="text-xl absolute cursor-pointer right-3 text-white"
            />
            <p className="font-bold text-white pt-4">Devices</p>
            <p className="text-white text-sm py-2">
              Our apps are designed for the last 3 versions of iOS & Android (at
              the time your project kicks off). We test on flagship Apple,
              Samsung & Google devices.
            </p>
            <p className="text-white text-sm py-2">
              (Need testing for a specific device? Ask your delivery team.)
            </p>
            <p className="font-bold text-white pt-4">Browsers</p>
            <p className="text-white text-sm py-2">
              For web apps, our testing process covers the last 3 major versions
              of these browsers:
            </p>
            <ul className="pl-5 list-disc">
              <li className="text-white text-sm">Chrome</li>
              <li className="text-white text-sm">Safari</li>
              <li className="text-white text-sm">Firefox</li>
              <li className="text-white text-sm">Edge</li>
            </ul>
            <p className="font-bold text-white pt-4">Responsiveness</p>
            <ul className="pl-5 list-disc py-2">
              <li className="text-white text-sm">
                Desktop displays: (1280 x 720) to (1920 x 1080)
              </li>
              <li className="text-white text-sm">
                Mobile displays: (360 x 640) to (414 x 896)
              </li>
              <li className="text-white text-sm">
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
                onClick={handleClose}
                className="text-xl absolute cursor-pointer right-3 text-white"
              />
              <p className="font-bold mb-2 text-center text-white p-y-4">
                {infoPopup.name}
              </p>
              <p className="text-white text-sm py-2">{infoPopup.details}</p>
              <p className="text-gray-400 text-xs py-2">{infoPopup.more}</p>
            </div>
          )
        )}
        {buildCard && (
          <div
            className={`fixed shadow-2xl py-10 z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              buildCard
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } w-96 h-auto rounded-lg bg-white items-center justify-center flex flex-col p-4 transition-opacity duration-1000 ease-in-out`}
          >
            <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center">
              <FaThumbsUp className="text-white text-3xl" />
            </div>
            <p className="my-2 text-center text-black py-4">
              Time to create your Buildcard® (It describes exactly what you want
              to build)
            </p>
            <p className="my-2 font-bold text-center text-black">
              First, please name your Buildcard®
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
                name.length > 2 ? "bg-green-500" : "bg-gray-400"
              } w-full h-10 items-center flex justify-center rounded-md ${
                name.length > 2 ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              onClick={name.length > 2 ? addBuildCard : null}
            >
              <p className="text-sm text-white">SAVE</p>
            </div>
          </div>
        )}
        {/* <div
        onClick={() => setSidebar(false)}
        className={`fixed shadow-2xl py-10 z-40 top-0 left-0 w-64 h-screen ${
          sidebar
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } w-96 h-auto rounded-lg bg-white mt-10 flex-col transition-opacity duration-1000 ease-in-out`}
      /> */}
        {sidebar && (
          <div
            onClick={handleClose}
            className="fixed inset-0 w-full h-full z-40 bg-black/60 bg-opacity-60 top-0 left-0"
          />
        )}

        {sidebar && (
          <div className="flex flex-col overflow-y-auto h-full bg-white fixed top-0 left-0 z-50 w-1/5 custom-scrollbar">
            <div className="flex justify-between items-center px-4 pt-4 pb-1">
              <p className="text-gray-400">Features</p>
              <div
                onClick={handleClose}
                className="border-gray-300 group border-[1px] p-[6px] cursor-pointer hover:bg-slate-200 duration-200 rounded-full"
              >
                <IoMdClose className="text-gray-300 group-hover:text-gray-600" />
              </div>
            </div>
            <div className="mx-4 my-2 py-1 px-2 border-gray-300 flex items-center border-[1px] rounded-full">
              <IoIosSearch className="text-black text-xl mx-1" />
              <input
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-black text-xs outline-none border-none"
              />
            </div>
            {sortedAllDropDowns.map((feature, index) => (
              <div
                key={index}
                className="flex w-full px-4 py-2 items-center justify-between"
              >
                <div className="flex py-2 items-center gap-5">
                  <Image
                    width={100}
                    height={100}
                    className="w-5 h-5"
                    src={feature?.icon}
                    alt="Healthcare Icon"
                  />
                  <p className="text-black text-sm font-thin">{feature.name}</p>
                </div>
                <div
                  onClick={() => handleFeaturesSelection(feature)}
                  className="hover:bg-gray-200 group flex items-center justify-center border-[1px] border-gray-300 w-8 h-8 p-2 cursor-pointer rounded-md"
                >
                  {isFeatureSelected(feature) ? (
                    <MdDeleteOutline className="text-gray-400 group-hover:text-gray-600" />
                  ) : (
                    <FiPlus className="text-gray-400 group-hover:text-gray-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`fixed top-0 left-0 w-full inset-0 bg-gray-300/20 backdrop-blur h-full z-30 ${
            buildCard
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } transition-opacity duration-300 ease-in-out`}
          onClick={handleClose}
        />
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
              <div className="">
                {/* <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={ */}
                <div className="flex items-center gap-2">
                  <p className="text-black font-medium">
                    Expected kick-off date
                  </p>
                  <HiOutlineInformationCircle
                    onClick={() =>
                      setInfoPopup({
                        name: null,
                        details: `Essential meeting that kicks off your project. We set everyone's roles, understand your objectives and make sure the app will be exactly how you want it.`,
                      })
                    }
                    className="text-xl cursor-pointer text-gray-400"
                  />
                </div>
                {/* }
              /> */}
              </div>
              <p className="text-black text-xs">
                {moment().format("D MMM YYYY")} (Today)
              </p>
            </div>
          </div>
          <div className="flex px-10 justify-start py-4 gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`relative w-20 h-20 flex justify-center items-center border-[1px] rounded-md cursor-pointer ${
                  checkAllContain(platform.name.toLowerCase())
                    ? "border-secondary bg-primary"
                    : "border-gray-300"
                }`}
              >
                <div
                  className="flex justify-center items-center gap-3 p-3 w-full"
                  onClick={() =>
                    addPlatformToPhase(platform.name.toLowerCase())
                  }
                >
                  {platform.icon}
                  {/* <div className="justify-between flex flex-col gap-1">
                    <p className="text-black text-sm font-semibold">
                      {platform.name}
                    </p>
                    <p className="text-gray-400 text-xs">{platform.details}</p>
                  </div> */}
                </div>
                {/* <HiOutlineInformationCircle
                  onClick={() => setInfoPopup(platform)}
                  className="text-base absolute top-1 right-1 cursor-pointer text-gray-400"
                /> */}
              </div>
            ))}
            {/* <div className="p-5 border-[1px] rounded-md cursor-pointer border-gray-300 duration-200 hover:border-secondary">
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
                  phase.selected ? "border-secondary" : "border-gray-400"
                }`}
              >
                <div
                  onClick={() => togglePhaseSelection(index)}
                  className="absolute top-2 right-2 cursor-pointer"
                >
                  {phase.selected ? (
                    <GoCheckCircleFill className="text-2xl text-secondary" />
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
                            phase.selected ? "text-secondary" : "text-black"
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
                          <p className="text-black text-xs font-bold">
                            Platform
                          </p>
                          {/* <p className="text-secondary text-xs font-normal cursor-pointer">
                          Change
                        </p> */}
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
                    {features.length > 0 && (
                      <div className="p-5">
                        <div className="flex justify-between">
                          <p className="text-black text-xs font-bold">
                            Features
                          </p>
                          <p
                            onClick={() => setSidebar(true)}
                            className="text-secondary text-xs font-normal cursor-pointer"
                          >
                            Change
                          </p>
                        </div>
                        <p className="text-gray-400 pt-2 text-xs">
                          {features.length} features selected
                        </p>
                      </div>
                    )}
                    <hr />
                    <div className="p-5 relative">
                      <div className="flex justify-between">
                        <p className="text-black text-xs font-bold">
                          Working Speed
                        </p>
                      </div>
                      {phase.selected && (
                        <input
                          className="h-[2px] !accent-secondary w-full outline-none border-none mt-4 rounded-md cursor-pointer bg-gray-300 relative"
                          id="steps-range"
                          type="range"
                          min="1"
                          max="5"
                          value={phase.advanced.sliderValue}
                          step="1"
                          onChange={(e) =>
                            updateSliderValue(
                              index,
                              parseInt(e.target.value, 10)
                            )
                          }
                          style={{
                            background: `linear-gradient(to right, #7e22ce 0%, #7e22ce ${
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
                            phase?.advanced?.sliderValue
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
                            <GoCheckCircleFill className="text-2xl text-secondary" />
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
                              phase.selected ? "text-secondary" : "text-black"
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
                            {/* <p className="text-secondary text-xs font-normal cursor-pointer">
                            Change
                          </p> */}
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
                                <p className="text-gray-400 pt-2 text-xs">
                                  iOS
                                </p>
                              </div>
                            )}
                            {phase.platform.includes("web") && (
                              <div className="flex flex-col items-center">
                                <MdWeb className="text-3xl text-black" />
                                <p className="text-gray-400 pt-2 text-xs">
                                  Web
                                </p>
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
                          <p className="text-black text-xs font-bold">
                            Features
                          </p>
                          <p className="text-secondary text-xs font-normal cursor-pointer">
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
          <div className="bg-slate-100 mt-10 flex">
            <div className="p-10 w-1/2">
              <p className="text-black text-2xl font-bold">
                When do you want the delivery?
              </p>
              <div className="pt-5 flex flex-row justify-between items-center">
                <div className="flex flex-row w-full items-center gap-2">
                  <div className="w-3/4">
                    <div className="bg-white p-5 h-40 rounded-md relative">
                      <div className="relative h-10 flex justify-between">
                        {priceDuration.map((label, index) => (
                          <div key={index} className="text-xs mt-4">
                            <p
                              key={index}
                              className={`${
                                sliderValue === index + 1
                                  ? "text-secondary"
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
                        className="slider h-[2px] !accent-secondary w-full outline-none border-none mt-4 rounded-md cursor-pointer bg-gray-300 relative"
                        onChange={handleSliderChange}
                        style={{
                          background: `linear-gradient(to right, #7e22ce 0%, #7e22ce ${
                            (sliderValue - 1) * 25
                          }%, #E5E7EB ${
                            (sliderValue - 1) * 25
                          }%, #E5E7EB 100%)`,
                        }}
                      />
                      <div className="relative h-10 flex justify-between">
                        {priceDuration.map((label, index) => (
                          <div key={index} className="text-xs mt-4 text-center">
                            <p
                              key={index}
                              className={`text-center ${
                                sliderValue === index + 1
                                  ? "text-secondary"
                                  : "text-black"
                              }`}
                            >
                              {label.price}
                            </p>
                            <p
                              className={`text-center pt-1 ${
                                sliderValue === index + 1
                                  ? "text-secondary"
                                  : "text-black"
                              }`}
                            >
                              {label.duration} weeks
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <div className="transform bg-gray-300 w-48 p-2 rounded">
                      <div className="tooltip-arrow absolute w-0 h-0 border-solid border-[transparent #ffffff transparent transparent] top-1/2 -left-2 transform:translate(-50%)"></div>
                      <div className="flex flex-col items-center p-3 justify-center">
                        <p className="text-xs font-semibold text-black">
                          {priceDuration[sliderValue - 1].name}
                        </p>
                        <p className="text-xs text-black text-center pt-1">
                          {priceDuration[sliderValue - 1].details}
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
              </div>
              <div className="flex py-5">
                <div className="bg-white p-5 rounded-md h-28">
                  <p className="text-black font-medium">
                    Select platform for your product
                  </p>
                  <p className="text-gray-400 text-sm pt-2">
                    Estimated First delivery:{" "}
                    <span className="font-bold text-secondary">
                      {moment().format("DD-MMM-YYYY")}
                    </span>
                  </p>
                  <p className="text-gray-400 text-sm pt-1">
                    Estimated First delivery:{" "}
                    <span className="font-bold text-black">
                      {deliveryDate.format("DD-MMM-YYYY")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`m-10 w-1/2 flex flex-col border-[1px] ${
                cloudService ? "border-secondary" : "border-gray-300"
              } rounded-md p-5`}
            >
              <div className="relative">
                <Image
                  src={logo}
                  width={150}
                  height={100}
                  alt="builder cloud logo"
                />
                <div
                  onClick={() => setCloudService((prev) => !prev)}
                  className="absolute top-2 right-2 cursor-pointer"
                >
                  {cloudService ? (
                    <GoCheckCircleFill className="text-2xl text-secondary" />
                  ) : (
                    <GoCircle className="text-2xl text-gray-400 cursor-pointer" />
                  )}
                </div>
                <div>
                  <p className="text-black font-medium pt-4">
                    Builder Cloud helps you scale your business
                  </p>
                  <ul className=" list-disc pl-4">
                    <li className="py-1 text-black text-xs">
                      <span className="font-bold">
                        Commitment-free savings:
                      </span>{" "}
                      our customers saved over $4.5m, last year.
                    </li>
                    <li className="py-1 text-black text-xs">
                      <span className="font-bold">World-class analytics:</span>{" "}
                      Optimise your software and infrastructure.
                    </li>
                    <li className="py-1 text-black text-xs">
                      <span className="font-bold">
                        Best-in-class multi-cloud:
                      </span>{" "}
                      Azure, AWS, and more. Just one bill (for a lot less).
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="bg-slate-200 mt-3 p-5 h-30 w-96 rounded-md relative">
                  <div className="relative h-8 flex justify-between">
                    <p className="text-black font-bold">Number of users</p>
                    <p className="text-black font-bold">
                      {numOfUsers[rangeSliderValue - 1].users}
                    </p>
                  </div>
                  <input
                    id="steps-range"
                    type="range"
                    min="1"
                    max="4"
                    value={rangeSliderValue}
                    step="1"
                    className="my-3 h-[2px] !accent-secondary w-full mt-4 rounded-md cursor-pointer bg-gray-300 relative"
                    onChange={handleRangeSliderChange}
                  />
                  <div className="relative h-8 flex justify-between">
                    {numOfUsers.map((range, index) => (
                      <div key={index} className="text-xs mt-4 text-center">
                        <p
                          className={`text-center pt-1 ${
                            rangeSliderValue === index + 1
                              ? "text-secondary"
                              : "text-black"
                          }`}
                        >
                          {range.users}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-black text-2xl">
                    {rangeSliderValue != numOfUsers.length ? (
                      <span className="font-bold">
                        ${numOfUsers[rangeSliderValue - 1].minPrice} - $
                        {numOfUsers[rangeSliderValue - 1].maxPrice}
                      </span>
                    ) : (
                      <span className="font-bold">
                        ${numOfUsers[rangeSliderValue - 1].minPrice} + *
                      </span>
                    )}{" "}
                    /month
                  </p>
                  <p className="text-xs text-gray-600 pt-5 font-thin">
                    *This is an estimated price for cloud hosting and will vary
                    according to usage.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="h-16 border-t-2 flex-1 items-end border-gray-300 w-full z-10 bg-white sticky bottom-0">
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
              <div
                onClick={() => setBuildCard(true)}
                className="bg-green-500 cursor-pointer h-full w-48 flex items-center justify-center"
              >
                <Link href="/delivery">
                  <p className="text-black font-semibold">Done</p>
                </Link>
              </div>
            </div>
          </div> */}
          <div className="h-16 border-t-2 flex-1 items-end border-gray-300 w-full z-10 bg-white sticky bottom-0">
            <BottomBar
              customizationCost="1000$"
              fixedCost="1000$"
              totalCost="2000$"
              durationLocal="20 weeks"
              buttonText="Done"
            />
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}
