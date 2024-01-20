"use client";
import React, { useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { useSelector } from "react-redux";

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const user = useSelector((state) => state.user.user);

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
              <LuPencil className="text-secondary text-sm" />
            </div>
            <p className="text-black py-2 font-bold">
              {user.buildCards[0].name}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-black text-sm pb-2 font-thin">Description</p>
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

  const tabs = [
    {
      id: 1,
      name: "Launch Swift info",
      content: <LaunchSwiftInfo />,
    },
    {
      id: 2,
      name: "Similar Apps (1)",
    },
    {
      id: 3,
      name: "Features (35)",
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
};

export default VerticalTabs;
