"use client";
import { setUser } from "../store/reducers/user";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { BsAndroid2 } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

const VerticalTabs = ({ dictionary, features }) => {
  const user = useSelector((state) => state.user.user);
  const recentBuildCardId = localStorage.getItem("recentBuildCardId");
  const currentBuildCard = user.buildCards.find(
    (item) => item.id === recentBuildCardId
  );

  const inputRef = useRef(null);
  const detailsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [buildCardName, setBuildCardName] = useState(currentBuildCard?.name);
  const [buildCardDetails, setBuildCardDetails] = useState(
    currentBuildCard?.details || ""
  );
  const [enterName, setEnterName] = useState(false);
  const [enterDetails, setEnterDetails] = useState(false);
  const db = getFirestore();
  const dispatch = useDispatch();

  const updateBuildCard = (type, value) => {
    if (type === "name") {
      setEnterName(!enterName);
    } else if (type === "details") {
      setEnterDetails(!enterDetails);
    }
    const userRef = doc(db, "users", user.uid);

    getDoc(userRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          console.log("User document data:", userData);

          userData.buildCards = Array.isArray(userData.buildCards)
            ? userData.buildCards
            : [];

          const buildCardToUpdate = userData.buildCards.find(
            (buildCard) => buildCard.id === currentBuildCard?.id
          );

          if (buildCardToUpdate) {
            // Update only the name of the build card
            if (type === "name") {
              buildCardToUpdate.name = value;
            } else if (type === "details") {
              buildCardToUpdate.details = value;
            }
            buildCardToUpdate.updatedAt = new Date().toISOString();
          } else {
            console.error("Build card with the specified ID not found");
            return Promise.reject("Build card not found");
          }

          // Update the user document in Firestore
          return updateDoc(userRef, userData).then(dispatch(setUser(userData)));
        } else {
          console.error("User document does not exist");
          return Promise.reject("User document not found");
        }
      })
      .then(() => {
        console.log("Build card name ]updated successfully");
        // Optionally handle success, e.g., display a message
      })
      .catch((error) => {
        console.error("Error updating build card name:", error);
        // Optionally handle the error, e.g., display an error message
      });
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [buildCardName, enterName]);

  useEffect(() => {
    if (enterDetails) {
      detailsRef?.current?.focus();
      detailsRef?.current?.setSelectionRange(
        buildCardDetails.length,
        buildCardDetails.length
      );
    }
  }, [buildCardDetails, enterDetails]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const LaunchSwiftInfo = () => {
    return (
      <div>
        <p className="text-secondary pb-5 font-semibold">
          {dictionary.launchSwiftHeading}
        </p>
        <div className="flex gap-5">
          <div className="text-black text-xl">
            <IoBookmarkOutline />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="text-black text-sm font-thin">{dictionary.name}</p>
              {!enterName && (
                <LuPencil
                  onClick={() => setEnterName(!enterName)}
                  className="text-secondary cursor-pointer text-sm"
                />
              )}
            </div>
            {enterName ? (
              <div className="my-1 gap-2 flex items-center">
                <div className="border-gray-300 border rounded-md my-1">
                  <input
                    ref={inputRef}
                    className="p-2 w-full text-black rounded-md font-medium outline-none"
                    type="text"
                    placeholder=""
                    value={buildCardName}
                    onChange={(e) => setBuildCardName(e.target.value)}
                  />
                </div>
                <p
                  onClick={() => updateBuildCard("name", buildCardName)}
                  className="bg-secondary p-1 text-white rounded-md text-sm cursor-pointer"
                >
                  {dictionary.save}
                </p>
              </div>
            ) : (
              <p className="text-black py-2 font-bold">
                {currentBuildCard?.name}
              </p>
            )}
            <div className="flex items-center gap-2">
              <p className="text-black text-sm font-thin">
                {dictionary.details}
              </p>
              {!enterDetails && (
                <LuPencil
                  onClick={() => setEnterDetails(!enterDetails)}
                  className="text-secondary cursor-pointer text-sm"
                />
              )}
            </div>
            {enterDetails ? (
              <div className="my-1 gap-2 flex flex-col items-start">
                <div className="border-gray-300 border rounded-md my-1">
                  <textarea
                    ref={detailsRef}
                    rows={4}
                    cols={30}
                    placeholder="Enter Launch Swift Description"
                    className="p-2 w-full text-black rounded-md font-medium outline-none"
                    type="text"
                    value={buildCardDetails}
                    onChange={(e) => setBuildCardDetails(e.target.value)}
                  />
                </div>
                <p
                  onClick={() => updateBuildCard("details", buildCardDetails)}
                  className="bg-secondary py-1 px-3 text-white rounded-md text-sm cursor-pointer"
                >
                  {dictionary.save}
                </p>
              </div>
            ) : (
              <p className="text-black py-2 font-bold">
                {currentBuildCard?.details.length > 0
                  ? currentBuildCard?.details
                  : `${dictionary.enterDetail}`}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const Features = () => {
    return (
      <div className="py-2">
        <p className="text-secondary pb-5 font-semibold">
          {dictionary.selectedFeatures}
        </p>
        <ol className="grid grid-cols-2 gap-2">
          {features.map((item, index) => (
            <li key={index} className="text-black text-sm font-medium py-1">
              {item.name}
            </li>
          ))}
        </ol>
      </div>
    );
  };

  const Phases = () => {
    return (
      <div className="py-2">
        {console.log(currentBuildCard.phases)}
        <p className="text-secondary pb-5 font-semibold">
          {dictionary.phasesHeading}
        </p>

        <div className="grid grid-cols-2 gap-5">
          {currentBuildCard.phases.map((item, index) => (
            <div className="border border-gray-300 rounded-md" key={index}>
              <div className="rounded-md rounded-b-none p-5 bg-slate-200">
                <div className="flex p-5 gap-1 py-1">
                  <p className="text-black font-bold text-sm">{item}</p>
                </div>
              </div>
              {currentBuildCard.phases.length > 0 && (
                <>
                  <div className="flex p-5 justify-between pt-5">
                    <p className="text-black text-xs font-bold">
                      {dictionary.platform}
                    </p>
                  </div>
                  <div className="flex px-5 justify-start py-4 gap-4">
                    <div className="flex flex-col items-center">
                      <BsAndroid2 className="text-2xl text-black" />
                      <p className="text-gray-400 pt-2 text-xs">Android</p>
                    </div>
                  </div>
                </>
              )}
              <hr />
              {/* {currentBuildCard.features.length > 0 && (
                <div className="p-5">
                  <div className="flex justify-between">
                    <p className="text-black text-xs font-bold">Features</p>
                  </div>
                  <p className="text-gray-400 pt-2 text-xs">
                    {currentBuildCard.features.length} features selected
                  </p>
                </div>
              )}
              <hr /> */}
              <div className="py-10 px-5 relative">
                <div className="flex justify-between">
                  <p className="text-black text-xs font-bold">
                    {dictionary.workingSpeed}
                  </p>
                </div>
                <input
                  className="h-[2px] !accent-secondary w-full outline-none border-none mt-4 rounded-md cursor-pointer bg-gray-300 relative"
                  id="steps-range"
                  type="range"
                  readOnly
                  min="1"
                  max="5"
                  value={3}
                  step="1"
                  onChange={(e) =>
                    updateSliderValue(index, parseInt(e.target.value, 10))
                  }
                  style={{
                    background: `linear-gradient(to right, #7e22ce 0%, #7e22ce ${
                      (3 - 1) * 25
                    }%, #E5E7EB ${(3 - 1) * 25}%, #E5E7EB 100%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const tabs = [
    {
      id: 1,
      name: `${dictionary.launchSwift}`,
      content: <LaunchSwiftInfo />,
    },
    {
      id: 3,
      name: `${dictionary.features} (${currentBuildCard?.features.length})`,
      content: <Features />,
    },
    {
      id: 4,
      name: `${dictionary.phases} (${currentBuildCard?.phases.length})`,
      content: <Phases />,
    },
  ];

  return (
    <div className="flex gap-10 py-5">
      <div className="w-1/4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer`}
            onClick={() => handleTabClick(index)}
          >
            <p
              className={`rounded-md p-2 my-2 ${
                activeTab === index
                  ? "bg-secondary text-white overflow-hidden"
                  : "text-black"
              }`}
            >
              {tab.name}
            </p>
          </div>
        ))}
      </div>
      <div className="w-3/4">
        <div className="py-2">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default VerticalTabs;
