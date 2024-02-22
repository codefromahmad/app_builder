"use client";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { FaArrowLeftLong, FaCircleCheck } from "react-icons/fa6";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";
import { sidebarData, sidebarDataArabic } from "../data";
import { PhoneFrame } from "../../components/PhoneFrame";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import HeaderLayout from "../../components/HeaderLayout";
import BottomBar from "../../components/BottomBar";
import { FaMobileAlt } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { TbApps } from "react-icons/tb";
import RemoveAllPopup from "../../components/RemoveAllPopup";
import { IoMdSearch } from "react-icons/io";
import ShowFeature from "../../components/ShowFeature";
import FeatureHeader from "../../components/FeatureHeader";
import NoFeature from "../../components/NoFeature";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { setUser } from "../../store/reducers/user";
import { getDictionary } from "../../../lib/dictionary";

export default function Features({ params }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expand, setExpand] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [platform, setPlatform] = useState("mobile");
  const featuresIds = useSelector((state) => state.features.features);
  const [featuresData, setFeaturesData] = useState([]);
  const [dictionary, setDictionary] = useState({});
  const [selectedFeature, setSelectedFeature] = useState();
  const [searchFeatures, setSearchFeatures] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const db = getFirestore();

  const sidebarDataToUse =
    params.lang === "en" ? sidebarData : sidebarDataArabic;

  getDictionary(params.lang)
    .then((lang) => {
      setDictionary(lang.features);
    })
    .catch((error) => {
      console.error(error);
    });

  useEffect(() => {
    // setSelectedFeature(features[0]);
    if (searchTerm.length > 0) return;
    console.log("features", featuresIds);
    const results = [];

    sidebarDataToUse.forEach((category) => {
      const matchingItems = category.dropDown?.filter((item) =>
        featuresIds.includes(item.id)
      );

      if (matchingItems?.length > 0) {
        console.log("matchingItems", matchingItems);
        results.push(...matchingItems);
      }

      setFeaturesData(results);
      setSelectedFeature(results[0]);
    });

    setSearchFeatures(results);
  }, [featuresIds]);

  const durationLocal = Math.ceil(
    featuresData?.reduce(
      (acc, item) => acc + parseFloat(item.timeline?.replace(/,/g, "")),
      0
    ) / 7
  );

  const fixedCost = Math.round(
    featuresData?.reduce(
      (acc, item) => acc + parseFloat(item.price?.replace(/,/g, "")),
      0
    )
  );

  const customizationCost = featuresData?.length * 50;

  const totalCost = customizationCost + parseFloat(fixedCost);

  const addIncompleteBuildCard = () => {
    const userRef = doc(db, "users", user.uid);
    const newBuildCard = {
      id: uuidv4(),
      name: "My Project Name",
      status: "incomplete",
      fixedCost: fixedCost,
      customizationCost: customizationCost,
      totalCost: totalCost,
      cloudServiceCost: 0,
      duration: durationLocal,
      phases: null,
      deliveryDate: "",
      features: featuresIds,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      details: "",
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
              features: featuresIds,
              duration: durationLocal,
              fixedCost: fixedCost,
              customizationCost: customizationCost,
              totalCost: totalCost,
              cloudServiceCost: 0,
              details: "",
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
              router.push(`/${params.lang}/delivery`);
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
    return featuresIds.some((selectedId) => selectedId === feature.id);
  };

  const searchItems = () => {
    console.log("inside searchTerm", searchTerm);
    const results = [];

    sidebarDataToUse.forEach((category) => {
      console.log("category", category);
      const matchingItems = category.dropDown?.filter((item) =>
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      if (matchingItems?.length > 0) {
        console.log("matchingItems", matchingItems);
        results.push(...matchingItems);
      }
    });

    console.log("results", results);
    setSearchFeatures(results);
  };

  const handleFeaturesSelection = (feature) => {
    if (searchTerm.length > 0) {
      console.log("searchTerm", searchTerm);
      searchItems(searchTerm);
    }
    if (isFeatureSelected(feature)) {
      dispatch({
        type: "removeFeature",
        payload: feature.id,
      });
    } else {
      dispatch({
        type: "addFeature",
        payload: feature.id,
      });
    }
  };

  const toggleDropdown = (index, lang) => {
    if (!sidebarDataToUse[index].dropDown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const handleFeatureSelection = (feature) => {
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
      featuresIds.some((selectedId) => selectedId === feature.id)
    ).length;

    return selectedFeaturesCount;
  };

  const handleAddMultipleFeatures = (newFeatures, index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));

    const filteredNewFeatureIds = newFeatures
      .filter(
        (newFeature) =>
          !featuresIds.some(
            (selectedFeatureId) => selectedFeatureId === newFeature.id
          )
      )
      .map((newFeature) => newFeature.id);

    dispatch({
      type: "addFeatures",
      payload: filteredNewFeatureIds,
    });

    // Assuming you want to select the first feature in the filtered list
    setSelectedFeature(filteredNewFeatureIds[0]);
  };

  const handleRemoveAllFeatures = (featuresToRemove, index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));

    const updatedSelectedFeatures = featuresIds.filter(
      (selectedFeatureId) =>
        !featuresToRemove.some(
          (featureToRemove) => featureToRemove.id === selectedFeatureId
        )
    );

    dispatch({
      type: "setFeatures",
      payload: updatedSelectedFeatures,
    });

    setSelectedFeature(updatedSelectedFeatures[0]);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      console.log("here inside if");
      searchItems(searchTerm);
    } else {
      console.log("here inside else");
      setSearchFeatures([]);
    }
  }, [searchTerm]);

  return (
    <HeaderLayout lang={params.lang}>
      <div
        className={`flex  h-[calc(100vh-4.5rem)] mt-[4.5rem]`}
        style={{ direction: `${params.lang === "en" ? "ltr" : "rtl"}` }}
      >
        {/* <RemoveAllPopup
          confirm={confirm}
          setConfirm={setConfirm}
          handleRemoveAll={handleRemoveAll}
        /> */}

        <div className="w-1/5 bg-slate-100 max-h-screen relative custom-scrollbar overflow-y-hidden hover:overflow-y-auto duration-300">
          <div className="flex bg-white border-[#C7C7C7] items-center m-2 rounded-md border p-2">
            <IoMdSearch
              className={`text-gray-600 ${
                params.lang === "en" ? "mr-2" : "ml-2"
              } text-xl`}
            />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={dictionary.searchTitle}
              className="w-full bg-transparent text-sm text-gray-700 outline-none"
            />
          </div>
          {!searchTerm.length > 0 ? (
            sidebarDataToUse.map((item, index) => (
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
                          {item.dropDown && item.dropDown.length}{" "}
                          {dictionary.features}
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
                          <p className="text-gray-500 text-xs">
                            {dictionary.deselectAll}
                          </p>
                        </div>
                      ) : (
                        <div
                          className="pt-3"
                          onClick={() =>
                            handleAddMultipleFeatures(item.dropDown, index)
                          }
                        >
                          <p className="text-gray-500 text-xs">
                            {dictionary.selectAll}
                          </p>
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
                        // className={`flex flex-grow w-full cursor-pointer ${
                        //   isFeatureSelected(item)
                        //     ? "border-l-secondary"
                        //     : selectedFeature?.name === item.name
                        //     ? "border-l-gray-500"
                        //     : "hover:border-l-gray-500"
                        // } border-l-4 duration-300 hover:border-l-4 justify-between items-center p-4 border-b-[1px] bg-slate-100 text-black `}
                        className={`flex flex-grow w-full cursor-pointer 
                        ${
                          isFeatureSelected(item)
                            ? params.lang === "ar"
                              ? "border-r-secondary"
                              : "border-l-secondary"
                            : selectedFeature?.id === item.id
                            ? params.lang === "ar"
                              ? "border-r-gray-500"
                              : "border-l-gray-500"
                            : params.lang === "ar"
                            ? "hover:border-r-gray-500 "
                            : "hover:border-l-gray-500 "
                        } duration-300 ${
                          params.lang === "ar" ? "border-r-4" : "border-l-4"
                        } justify-between items-center p-4 border-b-[1px] bg-slate-100 text-black`}
                      >
                        <div
                          // style={{
                          //   direction: `${
                          //     params.lang === "en" ? "rtl" : "rtl"
                          //   }`,
                          // }}
                          className="flex w-full justify-between items-center"
                        >
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
                                {dictionary.from} ${item.price}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {dictionary.from} {item.timeline}{" "}
                                {dictionary.days}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-x-2">
                            <div
                              onClick={() => handleFeatureSelection(item)}
                              className={`${
                                selectedFeature?.id === item.id
                                  ? "bg-secondary border-[1px] border-secondary"
                                  : "border-[1px] border-gray-600"
                              } p-1 rounded-full group hover:border-secondary hover:bg-secondary duration-300`}
                            >
                              <AiOutlineEye
                                className={`group-hover:text-white ${
                                  selectedFeature?.id === item.id
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
                    : selectedFeature?.id === item.id
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
                        {dictionary.from} ${item.price}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {dictionary.from} {item.timeline} {dictionary.days}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-2">
                    <div
                      onClick={() => handleFeatureSelection(item)}
                      className={`${
                        selectedFeature?.id === item.id
                          ? "bg-secondary border-[1px] border-secondary"
                          : "border-[1px] border-gray-600"
                      } p-1 rounded-full group hover:border-secondary hover:bg-secondary duration-300`}
                    >
                      <AiOutlineEye
                        className={`group-hover:text-white ${
                          selectedFeature?.id === item.id
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
              <p className="text-black">{dictionary.noResult}</p>
            </div>
          )}
        </div>
        {/* Playground Area */}
        <div className="w-4/5 h-[calc(100vh-8.5rem)] bg-white">
          <div className={`flex w-full h-full`}>
            <div
              className={`${
                featuresIds?.length > 0 ? "w-3/4" : "w-full"
              } h-[calc(100vh-10.5rem)]`}
            >
              {selectedFeature ? (
                <>
                  <FeatureHeader
                    platform={platform}
                    setPlatform={setPlatform}
                  />
                  <ShowFeature
                    lang={params.lang}
                    sidebar={dictionary}
                    platform={platform}
                    selectedFeature={selectedFeature}
                    handleFeaturesSelection={(feature) =>
                      handleFeaturesSelection(feature)
                    }
                    isFeatureSelected={(feature) => isFeatureSelected(feature)}
                  />
                </>
              ) : (
                <NoFeature lang={params.lang} sidebar={dictionary} />
              )}
            </div>
            {featuresData?.length > 0 && (
              <div className="w-1/4 bg-white relative h-[calc(100vh-8.5rem)] overflow-y-auto custom-scrollbar">
                <div className="flex px-5 py-3 gap-2 items-center">
                  <p className="text-black text-xl">
                    {featuresData.length > 1
                      ? `${dictionary.selectedFeatures}`
                      : `${dictionary.selectedFeature}`}
                  </p>
                  <p className="text-black text-xl">{featuresData.length}</p>
                </div>
                <div className="grid grid-cols-1 gap-3 p-5">
                  {featuresData.map((item, index) => (
                    <div
                      key={index}
                      className="relative border-b-gray-[#A6A6A6] border-b pb-2 group h-38"
                    >
                      <div
                        onClick={() => handleFeaturesSelection(item)}
                        className={`top-2 group-hover:flex hidden z-10 absolute hover:bg-slate-200 group ${
                          params.lang === "en" ? "right-2" : "left-2"
                        } bg-white w-7 h-7 items-center rounded-full justify-center border-[1px] cursor-pointer`}
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
                              selectedFeature?.id === item.id
                                ? "border-secondary"
                                : "border-[#A6A6A6]"
                            } group border-2 rounded-lg`}
                          >
                            {/* <PhoneFrame> */}
                            <Image
                              width={100}
                              height={100}
                              src={item?.mobile}
                              alt="icon"
                              className="object-fill rounded-lg w-full p-1 h-full"
                            />
                            {/* </PhoneFrame> */}
                          </div>
                        ) : (
                          <div
                            className={`w-20 h-12 ${
                              selectedFeature?.id === item.id
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
                              {dictionary.from} ${item.price}
                            </p>
                            <p className="text-gray-400 text-xs py-[1px]">
                              {item.timeline} {dictionary.days}
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
          {featuresData.length > 0 && (
            <BottomBar
              lang={params.lang}
              sidebar={dictionary}
              customizationCost={customizationCost}
              fixedCost={fixedCost}
              totalCost={totalCost}
              durationLocal={durationLocal}
              buttonText={dictionary.planDelivery}
              handlePlanDelivery={addIncompleteBuildCard}
            />
          )}
        </div>
      </div>
    </HeaderLayout>
  );
}
