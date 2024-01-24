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
import { v4 as uuidv4 } from "uuid";
import { speedLabels, initialPhases, numOfUsers, sidebarData } from "../data";
import BuildCardPopup from "@/components/BuildCardPopup";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/reducers/user";
import { auth } from "../firebase";

export default function Dahsboard() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [sliderValue, setSliderValue] = useState(3);
  const [rangeSliderValue, setRangeSliderValue] = useState(2);
  const [cloudService, setCloudService] = useState(false);
  const [sameSpeed, setSameSpeed] = useState(false);
  const [infoPopup, setInfoPopup] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const features = useSelector((state) => state.features.features);
  const [weeks, setWeeks] = useState(20);
  const [buildCard, setBuildCard] = useState(false);
  const [buildCardDetails, setBuildCardDetails] = useState();
  const [name, setName] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const db = getFirestore();
  const user = useSelector((state) => state.user.user);
  const [phases, setPhases] = useState(initialPhases);
  const router = useRouter();

  const getRecentBuildCard = async (userId) => {
    const db = getFirestore();
    const userDocRef = doc(db, "users", userId);

    try {
      const docSnapshot = await getDoc(userDocRef);

      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        console.log("User data:", userData);

        // Assuming 'buildCards' is an array in your user data
        const buildCards = userData?.buildCards || [];

        // Get the build card ID from local storage
        const recentBuildCardId = localStorage.getItem("recentBuildCardId");
        console.log("recentBuildCardId in summary", recentBuildCardId);

        if (
          Array.isArray(buildCards) &&
          buildCards.length > 0 &&
          recentBuildCardId
        ) {
          // Find the build card with the matching ID
          const recentBuildCard = buildCards.find(
            (card) => card.id === recentBuildCardId
          );

          if (recentBuildCard) {
            // Return the found build card
            console.log("summary in summary page", recentBuildCard);
            setBuildCardDetails(recentBuildCard);
          } else {
            console.log("Build card with the specified ID not found.");
          }
        } else {
          console.log(
            "No build cards available or recentBuildCardId is not set in local storage."
          );
        }
      } else {
        console.log("User data not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        getRecentBuildCard(authUser.uid);
      } else {
        console.log("Nothing found");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const priceDuration = [
    {
      name: "Relaxed",
      duration: buildCardDetails?.duration - 2,
      price: Math.round(
        buildCardDetails?.totalCost - buildCardDetails?.totalCost * 0.2
      ),
      details: `Our most budget-friendly option for those who aren't in a hurry`,
    },
    {
      name: "Slow",
      duration: buildCardDetails?.duration - 1,
      price: Math.round(
        buildCardDetails?.totalCost - buildCardDetails?.totalCost * 0.12
      ),
      details: `For those with a fixed long-term plan who want to keep costs down`,
    },
    {
      name: "Standard",
      duration: buildCardDetails?.duration,
      price: Math.round(buildCardDetails?.totalCost),
      details: `The perfect middle ground for anyone with a modest budget and medium-term deadlines`,
    },
    {
      name: "Fast",
      duration: buildCardDetails?.duration + 1,
      price: Math.round(buildCardDetails?.totalCost * 0.12),
      details: `We put your app build on turbo charge for a few extra bucks`,
    },
    {
      name: "Speedy",
      duration: buildCardDetails?.duration + 2,
      price: Math.round(buildCardDetails?.totalCost * 0.2),
      details: `We build your app at the speed of light for a premium price`,
    },
  ];

  const fixedCost = buildCardDetails?.fixedCost || 0;
  const customizationCost = buildCardDetails?.customizationCost || 0;
  const maxPrice = numOfUsers[rangeSliderValue - 1]?.maxPrice || 0;

  console.log(fixedCost, customizationCost, maxPrice);
  const calculateTotalCost = cloudService
    ? Math.round(fixedCost + customizationCost + maxPrice)
    : Math.round(fixedCost + customizationCost);

  const selectedPhases = phases.filter((phase) => phase.selected);

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

    getDoc(userRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          console.log("User document data:", userData);

          userData.buildCards = Array.isArray(userData.buildCards)
            ? userData.buildCards
            : [];

          const incompleteBuildCardIndex = userData.buildCards.findIndex(
            (buildCard) => buildCard.status === "incomplete"
          );

          if (incompleteBuildCardIndex !== -1) {
            // localStorage.setItem("recentBuildCardId", null);
            userData.buildCards[incompleteBuildCardIndex].status = "complete";
            userData.buildCards[incompleteBuildCardIndex].features = features;
            userData.buildCards[incompleteBuildCardIndex].name = name;
            userData.buildCards[incompleteBuildCardIndex].duration = 30;
            userData.buildCards[incompleteBuildCardIndex].deliveryDate =
              deliveryDate.format("DD-MMM-YYYY");
            userData.buildCards[incompleteBuildCardIndex].updatedAt =
              new Date().toISOString();
            userData.buildCards[incompleteBuildCardIndex].cloudServiceCost =
              cloudService ? numOfUsers[rangeSliderValue - 1].maxPrice : 0;
            userData.buildCards[incompleteBuildCardIndex].phases =
              selectedPhases.map((phase) => phase.name);
          }

          updateDoc(userRef, userData)
            .then(() => {
              console.log("Build card added/updated successfully");
              router.push("/summary");
              dispatch(setUser(userData));
              setName("");
              setBuildCard(false);
            })
            .catch((error) => {
              console.error("Error updating document: ", error);
              setBuildCard(false);
            });
        } else {
          console.error("User document does not exist");
          setBuildCard(false);
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
        setBuildCard(false);
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
        {/* Build Card */}
        <BuildCardPopup
          name={name}
          setName={setName}
          addBuildCard={addBuildCard}
          buildCard={buildCard}
        />
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
                </div>
              </div>
            ))}
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
            <div className="p-10 w-2/3">
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
                              ${label.price}
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
                <div className="bg-white p-5 rounded-md">
                  <p className="text-black font-bold">
                    If you kick-off on{" "}
                    <span className="font-bold text-secondary">
                      {moment().format("DD-MMM-YYYY")}
                    </span>
                  </p>
                  <p className="text-gray-400 text-sm pt-2">
                    Estimated Final delivery:{" "}
                    <span className="font-bold text-black">
                      {deliveryDate.format("DD-MMM-YYYY")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`m-10 w-1/3 flex flex-col border-[1px] ${
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
                <div className="bg-slate-200 mt-3 p-5 h-30 w-full rounded-md relative">
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
                        ${numOfUsers[rangeSliderValue - 1].maxPrice} + *
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
          <div className="h-16 border-t-2 flex-1 items-end border-gray-300 w-full z-10 bg-white sticky bottom-0">
            <BottomBar
              customizationCost={buildCardDetails?.customizationCost}
              fixedCost={buildCardDetails?.fixedCost}
              totalCost={calculateTotalCost}
              durationLocal={buildCardDetails?.duration}
              buttonText="Done"
              setBuildCard={setBuildCard}
              cloudService={cloudService}
              cloudServicePrice={numOfUsers[rangeSliderValue - 1].maxPrice}
            />
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}
