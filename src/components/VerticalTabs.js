"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { useSelector } from "react-redux";

const VerticalTabs = React.memo(({ summary }) => {
  const inputRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [buildCardName, setBuildCardName] = useState(summary?.name);
  const [enterName, setEnterName] = useState(false);
  console.log("summary in verticalTabs:", summary);

  // const updateBuildCardName = (buildCardId, newName) => {
  //   const userRef = doc(db, "users", user.uid);

  //   getDoc(userRef)
  //     .then((docSnapshot) => {
  //       if (docSnapshot.exists()) {
  //         const userData = docSnapshot.data();
  //         console.log("User document data:", userData);

  //         userData.buildCards = Array.isArray(userData.buildCards)
  //           ? userData.buildCards
  //           : [];

  //         const buildCardToUpdate = userData.buildCards.find(
  //           (buildCard) => buildCard.id === buildCardId
  //         );

  //         if (buildCardToUpdate) {
  //           // Update only the name of the build card
  //           buildCardToUpdate.name = newName;
  //           buildCardToUpdate.updatedAt = new Date().toISOString();
  //         } else {
  //           console.error("Build card with the specified ID not found");
  //           return Promise.reject("Build card not found");
  //         }

  //         // Update the user document in Firestore
  //         return updateDoc(userRef, userData);
  //       } else {
  //         console.error("User document does not exist");
  //         return Promise.reject("User document not found");
  //       }
  //     })
  //     .then(() => {
  //       console.log("Build card name updated successfully");
  //       // Optionally handle success, e.g., display a message
  //     })
  //     .catch((error) => {
  //       console.error("Error updating build card name:", error);
  //       // Optionally handle the error, e.g., display an error message
  //     });
  // };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [buildCardName]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const LaunchSwiftInfo = () => {
    return (
      <div>
        <p className="text-black font-semibold text-sm">
          Launch Swift basic details
        </p>
        <div className="flex gap-5 py-2">
          <div className="text-black text-xl">
            <IoBookmarkOutline />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="text-black text-sm font-thin">Name</p>
              {!enterName && (
                <LuPencil
                  onClick={() => setEnterName(!enterName)}
                  className="text-secondary cursor-pointer text-sm"
                />
              )}
            </div>
            {enterName ? (
              <div className="my-1 flex items-center">
                <input
                  ref={inputRef}
                  className="py-1 w-full text-black font-bold outline-none"
                  type="text"
                  placeholder=""
                  value={buildCardName}
                  onChange={(e) => setBuildCardName(e.target.value)}
                />
                <p
                  onClick={
                    () => setEnterName(false)
                    // updateBuildCardName(buildCardIdToUpdate, newBuildCardName)}
                  }
                  className="text-secondary text-sm cursor-pointer"
                >
                  Save
                </p>
              </div>
            ) : (
              <p className="text-black py-2 font-bold">{summary?.name}</p>
            )}
            <div className="flex items-center gap-2">
              <p className="text-black text-sm font-thin">Description</p>
              <LuPencil className="text-secondary text-sm" />
            </div>
            <p className="text-black text-sm py-2 font-medium">
              Enter Launch Swift Description
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Features = () => {
    return (
      <div className="py-2">
        <p className="text-black font-semibold text-sm">Selected Features</p>
        <ol className="grid grid-cols-2 gap-2 py-2">
          {summary.features.map((item, index) => (
            <li key={index} className="text-black text-sm font-medium py-1">
              {item.name}
            </li>
          ))}
        </ol>
      </div>
    );
  };

  const tabs = [
    {
      id: 1,
      name: "Launch Swift info",
      content: <LaunchSwiftInfo />,
    },
    // {
    //   id: 2,
    //   name: "Similar Apps (1)",
    // },
    {
      id: 3,
      name: `Features (${summary?.features.length})`,
      content: <Features />,
    },
    {
      id: 4,
      name: "Phases (3)",
    },
  ];

  return (
    <div className="flex gap-10 py-5">
      <div className="w-1/3">
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
      <div className="w-2/3">
        <div className="py-2">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
});

export default VerticalTabs;
