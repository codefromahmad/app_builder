"use client";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { FaArrowLeftLong, FaCircleCheck } from "react-icons/fa6";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { sidebarData } from "../data";
import { PhoneFrame } from "@/components/PhoneFrame";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import HeaderLayout from "@/components/HeaderLayout";
import BottomBar from "@/components/BottomBar";
import { FaMobileAlt } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { TbApps } from "react-icons/tb";
import RemoveAllPopup from "@/components/RemoveAllPopup";
import { IoMdSearch } from "react-icons/io";

export default function Features() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expand, setExpand] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [platform, setPlatform] = useState("mobile");
  const dispatch = useDispatch();
  const router = useRouter();
  const features = useSelector((state) => state.features.features);
  const [selectedFeature, setSelectedFeature] = useState(
    features?.length > 0 ? features[0] : null
  );

  const durationLocal = Math.ceil(
    features?.reduce(
      (acc, item) => acc + parseFloat(item.time?.replace(/,/g, "")),
      0
    ) / 7
  );

  const fixedCost = features
    ?.reduce((acc, item) => acc + parseFloat(item.cost?.replace(/,/g, "")), 0)
    .toFixed(2);

  const customizationCost = features?.length * 50;

  const totalCost = customizationCost + parseFloat(fixedCost);

  const handlePlanDelivery = () => {
    router.push("/delivery");
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
      // setSelectedFeatures(updatedFeatures);
      dispatch({
        type: "setFeatures",
        payload: updatedFeatures,
      });
      setSelectedFeature(updatedFeatures[0]);
    } else {
      // If not selected, add it to the array
      // setSelectedFeatures((prevFeatures) => [feature, ...prevFeatures]);
      dispatch({
        type: "addFeature",
        payload: feature,
      });
      setSelectedFeature(feature);
    }
  };

  const toggleDropdown = (index) => {
    if (!sidebarData[index].dropDown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const handleFeatureSelection = (feature) => {
    console.log("handleFeatureSelection", feature.name);
    setSelectedFeature(feature);
  };

  const handleRemoveAll = () => {
    setExpand(false);
    setSelectedFeature(null);
    // setSelectedFeatures([]);
    setConfirm(false);
    dispatch({
      type: "setFeatures",
      payload: [],
    });
    dispatch({
      type: "setCost",
      payload: null,
    });
    dispatch({
      type: "setDuration",
      payload: null,
    });
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  const countSelectedFeatures = (items) => {
    const selectedFeaturesCount = items.filter((feature) =>
      features.some((selected) => selected.name === feature.name)
    ).length;

    return selectedFeaturesCount;
  };

  const handleAddMultipleFeatures = (newFeatures, index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));

    // Filter out features that are already present in selectedFeatures
    const filteredNewFeatures = newFeatures.filter(
      (newFeature) =>
        !features.some(
          (selectedFeature) => selectedFeature.name === newFeature.name
        )
    );

    // Update selectedFeature state
    // setSelectedFeatures((prevFeatures) => [
    //   ...filteredNewFeatures,
    //   ...prevFeatures,
    // ]);
    dispatch({
      type: "addFeatures",
      payload: filteredNewFeatures,
    });
    setSelectedFeature(filteredNewFeatures[0]);
  };

  const handleRemoveAllFeatures = (featuresToRemove, index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));

    const updatedSelectedFeatures = features.filter(
      (selectedFeature) =>
        !featuresToRemove.some(
          (featureToRemove) => featureToRemove.name === selectedFeature.name
        )
    );

    // setSelectedFeatures(updatedSelectedFeatures);
    dispatch({
      type: "setFeatures",
      payload: updatedSelectedFeatures,
    });

    // Optionally, reset the selectedFeature state
    setSelectedFeature(updatedSelectedFeatures[0]);
  };

  return (
    <HeaderLayout>
      <div className="flex h-[calc(100vh-6rem)] mt-24">
        <RemoveAllPopup
          confirm={confirm}
          setConfirm={setConfirm}
          handleRemoveAll={handleRemoveAll}
        />

        <div className="w-1/5 bg-slate-100 max-h-screen relative custom-scrollbar overflow-y-hidden hover:overflow-y-auto duration-300">
          <div className="flex bg-white border-slate-400 border m-3 p-2 rounded-xl">
            <IoMdSearch className="text-gray-600 mr-2 text-xl" />
            <input
              placeholder="Search for a feature"
              className="w-full bg-transparent text-sm text-gray-700 outline-none"
            />
          </div>
          {sidebarData.map((item, index) => (
            <div key={index}>
              <div
                key={index}
                onClick={() => toggleDropdown(index)}
                className="group hover:bg-slate-200 p-4 cursor-pointer transition duration-500 ease-in-out"
              >
                <div className="flex justify-between items-center text-black">
                  <div className="flex items-center gap-3">
                    <Image
                      width={100}
                      height={100}
                      className="w-5 h-5 opacity-50 group-hover:opacity-100"
                      src={item?.img}
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
                    {countSelectedFeatures(item.dropDown) ===
                    item.dropDown.length ? (
                      <div
                        className="pt-3"
                        onClick={() =>
                          handleRemoveAllFeatures(item.dropDown, index)
                        }
                      >
                        <p className="text-gray-500 text-xs">Unselect All</p>
                      </div>
                    ) : (
                      <div
                        className="pt-3"
                        onClick={() =>
                          handleAddMultipleFeatures(item.dropDown, index)
                        }
                      >
                        <p className="text-gray-500 text-xs">Select All</p>
                      </div>
                    )}
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
                          ? "border-l-secondary"
                          : selectedFeature?.name === item.name
                          ? "border-l-gray-500"
                          : "hover:border-l-gray-500"
                      } border-l-4 duration-300 hover:border-l-4 justify-between items-center p-4 border-b-[1px] bg-slate-100 text-black `}
                    >
                      <div className="flex w-full justify-between items-center">
                        <div className="flex gap-2">
                          {isFeatureSelected(item) ? (
                            <FaCircleCheck className="text-secondary mt-1 text-sm" />
                          ) : (
                            <Image
                              width={100}
                              height={100}
                              className="w-5 h-5 mt-2 opacity-50"
                              src={item?.icon}
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
                                ? "bg-secondary"
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
            </div>
          ))}
        </div>
        {/* Playground Area */}
        <div className="w-4/5 h-[calc(100vh-10rem)] bg-white">
          <div className={`flex w-full h-full`}>
            <div
              className={`${
                features?.length > 0 ? "w-3/4" : "w-full"
              } h-[calc(100vh-12rem)]`}
            >
              {selectedFeature ? (
                <>
                  <div className="h-16 w-full flex items-center">
                    <div
                      className={`px-7 w-full flex justify-between items-center`}
                    >
                      <div className={` flex items-center gap-2`}>
                        <div
                          onClick={() => setPlatform("mobile")}
                          className={`flex justify-center items-center gap-2 ${
                            platform === "mobile" && "bg-[#00191D]"
                          } px-3 py-2 rounded-md cursor-pointer`}
                        >
                          <FaMobileAlt
                            className={`${
                              platform === "mobile"
                                ? "text-white"
                                : "text-black"
                            }`}
                          />
                          <p
                            className={`${
                              platform === "mobile"
                                ? "text-white"
                                : "text-black"
                            } text-sm`}
                          >
                            Mobile
                          </p>
                        </div>
                        <div
                          onClick={() => setPlatform("desktop")}
                          className={`flex justify-center items-center gap-2 ${
                            platform === "desktop" && "bg-[#00191D]"
                          } px-3 py-2 rounded-md cursor-pointer`}
                        >
                          <IoDesktopOutline
                            className={`${
                              platform === "desktop"
                                ? "text-white"
                                : "text-black"
                            }`}
                          />
                          <p
                            className={`${
                              platform === "desktop"
                                ? "text-white"
                                : "text-black"
                            } text-sm`}
                          >
                            Desktop
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex justify-center cursor-pointer rounded-md items-center gap-2 bg-[#00191D] px-3 py-2 rounded-m`}
                      >
                        <TbApps className="text-white" />
                        <p className="text-white text-sm">Custom Feature</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex justify-center ${
                      features?.length > 0 && "animate-moveUp duration-300"
                    } items-center bg-slate-100 h-[calc(100vh-16rem)] mb-6 mx-6 rounded-lg gap-x-6`}
                  >
                    <div className="w-48 h-96">
                      <PhoneFrame>
                        <Image
                          width={100}
                          height={100}
                          src={selectedFeature?.mobile}
                          alt="icon"
                          className=" object-fill w-full h-full"
                        />
                      </PhoneFrame>
                    </div>

                    <div className="w-1/3">
                      <div className="flex items-center gap-2">
                        <p className="text-black text-lg">
                          {selectedFeature.name}
                        </p>
                        <div
                          onClick={() =>
                            handleFeaturesSelection(selectedFeature)
                          }
                          className="bg-white hover:bg-slate-50 duration-300 w-7 h-7 rounded-md items-center justify-center flex border-[1px] cursor-pointer"
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
                          from ${selectedFeature.cost}
                        </p>
                        <p className="text-gray-400 text-xs py-[1px]">
                          {selectedFeature.time} days
                        </p>
                      </div>
                      <p className="text-black text-sm py-2">
                        {selectedFeature.details}
                      </p>
                      <div className="bg-secondary duration-300 w-24 h-8 items-center rounded-md justify-center flex border-[1px] cursor-pointer">
                        <p className="text-white text-xs">Add note</p>
                      </div>
                    </div>
                  </div>
                </>
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
            </div>
            {features?.length > 0 && (
              <div className="w-1/4 bg-white relative h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
                <div className="flex px-5 py-3 gap-2 items-center">
                  <p className="text-black text-xl">
                    {features.length > 1
                      ? "Selected Features"
                      : "Selected Feature"}
                  </p>
                  <p className="text-black text-xl">{features.length}</p>
                </div>
                <div className="grid grid-cols-1 gap-3 p-5">
                  {features.map((item, index) => (
                    <div key={index} className="relative h-38">
                      <div
                        onClick={() => handleFeaturesSelection(item)}
                        className="top-2 z-10 absolute hover:bg-red-400 group right-2 bg-white w-7 h-7 items-center rounded-full justify-center flex border-[1px] cursor-pointer"
                      >
                        <MdDeleteOutline className="text-black group-hover:text-white duration-300" />
                      </div>
                      <div
                        onClick={() => handleFeatureSelection(item)}
                        key={index}
                        className={`duration-300 cursor-pointer relative p-2 rounded-lg h-full w-full flex items-center gap-3`}
                      >
                        <div
                          className={`w-12 ${
                            selectedFeature?.name === item.name
                              ? "border-secondary"
                              : "border-transparent"
                          } group border-2 duration-500 rounded-lg`}
                        >
                          <PhoneFrame>
                            <Image
                              width={100}
                              height={100}
                              src={item?.mobile}
                              alt="icon"
                              className=" object-fill w-full h-full"
                            />
                          </PhoneFrame>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-black w-20 text-sm">
                              {item.name}
                            </p>
                          </div>
                          <p className="text-gray-500 py-1 text-xs">
                            {item.category}
                          </p>
                          <div className="py-1">
                            <p className="text-gray-400 text-xs">
                              from ${item.cost}
                            </p>
                            <p className="text-gray-400 text-xs py-[1px]">
                              {item.time} days
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {features.length > 0 && (
            <BottomBar
              customizationCost={customizationCost}
              fixedCost={fixedCost}
              totalCost={totalCost}
              durationLocal={durationLocal}
            />
          )}
        </div>
      </div>
    </HeaderLayout>
  );
}
