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
import ShowFeature from "@/components/ShowFeature";
import FeatureHeader from "@/components/FeatureHeader";
import NoFeature from "@/components/NoFeature";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function Features() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expand, setExpand] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [platform, setPlatform] = useState("mobile");
  const features = useSelector((state) => state.features.features);
  const [selectedFeature, setSelectedFeature] = useState(
    features?.length > 0 ? features[0] : null
  );
  const [searchFeatures, setSearchFeatures] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const db = getFirestore();

  useEffect(() => {
    setSelectedFeature(features[0]);
  }, [features]);

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

  const addIncompleteBuildCard = () => {
    const userRef = doc(db, "users", user.uid);
    const newBuildCard = {
      id: uuidv4(),
      name: "My Project Name",
      status: "incomplete",
      cost: totalCost,
      duration: durationLocal,
      deliveryDate: "",
      features: features,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    getDoc(userRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          console.log("User document data:", userData);

          userData.buildCards = Array.isArray(userData.buildCards)
            ? userData.buildCards
            : [];

          const incompleteBuildCardIndex = userData.buildCards.findIndex(
            (card) => card.status === "incomplete"
          );

          console.log("incompleteBuildCardIndex", incompleteBuildCardIndex);
          if (incompleteBuildCardIndex !== -1) {
            console.log("updating existing...");
            // Update existing incomplete build card
            userData.buildCards[incompleteBuildCardIndex] = {
              ...userData.buildCards[incompleteBuildCardIndex],
              features: features,
              duration: durationLocal,
              cost: totalCost,
            };

            // Save the id of the updated build card to local storage
            localStorage.setItem(
              "recentBuildCardId",
              userData.buildCards[incompleteBuildCardIndex].id
            );
          } else {
            // Add a new incomplete build card
            userData.buildCards.push(newBuildCard);

            // Save the id of the newly added build card to local storage
            localStorage.setItem("recentBuildCardId", newBuildCard.id);
          }

          updateDoc(userRef, userData)
            .then(() => {
              console.log("Build card added/updated successfully");
              router.push("/delivery");
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

  const isFeatureSelected = (feature) => {
    return features.some((selected) => selected.name === feature.name);
  };

  const handleFeaturesSelection = (feature) => {
    console.log("handleFeaturesSelection", feature.name);

    if (isFeatureSelected(feature)) {
      const updatedFeatures = features.filter(
        (selected) => selected.name !== feature.name
      );
      dispatch({
        type: "setFeatures",
        payload: updatedFeatures,
      });
      setSelectedFeature(updatedFeatures[0]);
    } else {
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

  const countSelectedFeatures = (items) => {
    const selectedFeaturesCount = items.filter((feature) =>
      features.some((selected) => selected.name === feature.name)
    ).length;

    return selectedFeaturesCount;
  };

  const handleAddMultipleFeatures = (newFeatures, index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));

    const filteredNewFeatures = newFeatures.filter(
      (newFeature) =>
        !features.some(
          (selectedFeature) => selectedFeature.name === newFeature.name
        )
    );

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

    dispatch({
      type: "setFeatures",
      payload: updatedSelectedFeatures,
    });

    setSelectedFeature(updatedSelectedFeatures[0]);
  };

  const searchItems = (searchText) => {
    const results = [];

    sidebarData.forEach((category) => {
      console.log("category", category);
      const matchingItems = category.dropDown?.filter((item) =>
        item.name.toLowerCase().startsWith(searchText.toLowerCase())
      );

      if (matchingItems?.length > 0) {
        console.log("matchingItems", matchingItems);
        results.push(...matchingItems);
      }
    });

    console.log("results", results);
    setSearchFeatures(results);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      searchItems(searchTerm);
    } else {
      setSearchFeatures([]);
    }
  }, [searchTerm]);

  return (
    <HeaderLayout>
      <div className="flex h-[calc(100vh-4.5rem)] mt-[4.5rem]">
        <RemoveAllPopup
          confirm={confirm}
          setConfirm={setConfirm}
          handleRemoveAll={handleRemoveAll}
        />

        <div className="w-1/5 bg-slate-100 max-h-screen relative custom-scrollbar overflow-y-hidden hover:overflow-y-auto duration-300">
          <div className="flex bg-white my-2 border-[#C7C7C7] border p-2">
            <IoMdSearch className="text-gray-600 mr-2 text-xl" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a feature"
              className="w-full bg-transparent text-sm text-gray-700 outline-none"
            />
          </div>
          {!searchTerm.length > 0 ? (
            sidebarData.map((item, index) => (
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
                                  ? "bg-secondary border-[1px] border-secondary"
                                  : "border-[1px] border-gray-600"
                              } p-1 rounded-full group hover:border-secondary hover:bg-secondary duration-300`}
                            >
                              <AiOutlineEye
                                className={`group-hover:text-white ${
                                  selectedFeature?.name === item.name
                                    ? "text-white"
                                    : "text-black"
                                }`}
                              />
                            </div>
                            <div
                              onClick={() => handleFeaturesSelection(item)}
                              className={`border-[1px] hover:bg-secondary group hover:border-secondary border-gray-600 p-1 rounded-full`}
                            >
                              {isFeatureSelected(item) ? (
                                <MdDeleteOutline className="text-black group-hover:text-white" />
                              ) : (
                                <FiPlus className="text-black group-hover:text-white" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))
          ) : searchFeatures.length > 0 ? (
            searchFeatures?.map((item, index) => (
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
                      <p className="text-gray-500 text-xs">from ${item.cost}</p>
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
                          ? "bg-secondary border-[1px] border-secondary"
                          : "border-[1px] border-gray-600"
                      } p-1 rounded-full group hover:border-secondary hover:bg-secondary duration-300`}
                    >
                      <AiOutlineEye
                        className={`group-hover:text-white ${
                          selectedFeature?.name === item.name
                            ? "text-white"
                            : "text-black"
                        }`}
                      />
                    </div>
                    <div
                      onClick={() => handleFeaturesSelection(item)}
                      className={`border-[1px] hover:bg-secondary group hover:border-secondary border-gray-600 p-1 rounded-full`}
                    >
                      {isFeatureSelected(item) ? (
                        <MdDeleteOutline className="text-black group-hover:text-white" />
                      ) : (
                        <FiPlus className="text-black group-hover:text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center py-5 items-center w-full">
              <p className="text-black">No result.</p>
            </div>
          )}
        </div>
        {/* Playground Area */}
        <div className="w-4/5 h-[calc(100vh-8.5rem)] bg-white">
          <div className={`flex w-full h-full`}>
            <div
              className={`${
                features?.length > 0 ? "w-3/4" : "w-full"
              } h-[calc(100vh-10.5rem)]`}
            >
              {selectedFeature ? (
                <>
                  <FeatureHeader
                    platform={platform}
                    setPlatform={setPlatform}
                  />
                  <ShowFeature
                    platform={platform}
                    features={features}
                    selectedFeature={selectedFeature}
                    handleFeaturesSelection={(feature) =>
                      handleFeaturesSelection(feature)
                    }
                    isFeatureSelected={(feature) => isFeatureSelected(feature)}
                  />
                </>
              ) : (
                <NoFeature />
              )}
            </div>
            {features?.length > 0 && (
              <div className="w-1/4 bg-white relative h-[calc(100vh-8.5rem)] overflow-y-auto custom-scrollbar">
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
                    <div key={index} className="relative group h-38">
                      <div
                        onClick={() => handleFeaturesSelection(item)}
                        className="top-2 group-hover:flex hidden z-10 absolute hover:bg-slate-200 group right-2 bg-white w-7 h-7 items-center rounded-full justify-center border-[1px] cursor-pointer"
                      >
                        <MdDeleteOutline className="text-black duration-300" />
                      </div>
                      <div
                        onClick={() => handleFeatureSelection(item)}
                        key={index}
                        className={`duration-300 cursor-pointer relative p-2 rounded-lg h-full w-full flex items-center gap-3`}
                      >
                        {platform === "mobile" ? (
                          <div
                            className={`w-12 ${
                              selectedFeature?.name === item.name
                                ? "border-secondary"
                                : "border-transparent"
                            } group border-2 rounded-lg`}
                          >
                            <PhoneFrame>
                              <Image
                                width={100}
                                height={100}
                                src={item?.mobile}
                                alt="icon"
                                className="object-fill w-full h-full"
                              />
                            </PhoneFrame>
                          </div>
                        ) : (
                          <div
                            className={`w-20 h-12 ${
                              selectedFeature?.name === item.name
                                ? "border-secondary"
                                : "border-gray-300"
                            } group border-2 rounded-lg`}
                          >
                            <Image
                              width={100}
                              height={100}
                              src={item?.web}
                              alt="icon"
                              className="object-fill rounded-lg w-full h-full"
                            />
                          </div>
                        )}
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
              handlePlanDelivery={addIncompleteBuildCard}
            />
          )}
        </div>
      </div>
    </HeaderLayout>
  );
}
