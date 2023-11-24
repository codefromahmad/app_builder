// Filename: src/pages/app.js
"use client";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./custom-scroll.css";
import { AiOutlineEye } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  const sidebarData = [
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
      dropDown: [
        {
          name: "Activity Log",
          cost: "$150",
          time: "4.0 days",
          icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd145e88f3ac61106b2fa0/Activity_20Log.png",
        },
        {
          name: "Admin Console",
          cost: "$160",
          time: "3.0 days",
          icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/icon/59fd164788f3ac61106b3545/Admin_Console.svg",
        },
        {
          name: "Analytics",
          cost: "$120",
          time: "4.0 days",
          icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/57e0aff95cba2a27d6af2784/Analytics.png",
        },
      ],
    },
    {
      name: "Essentials",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd274188f3ac56ef461c73/Essentials.svg",
    },
    {
      name: "Content",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd271588f3ac56ef461c64/Content.svg",
    },
    {
      name: "Social",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd272f88f3ac56ef461c6d/Social.svg",
    },
    {
      name: "Admin",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd273e88f3ac56ef461c72/Admin_Console.svg",
    },
    {
      name: "Ecommerce",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd272488f3ac56ef461c69/Ecommerce.svg",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
    {
      name: "Healthcare compliance",
      img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-white max-h-screen overflow-y-hidden custom-scrollbar hover:overflow-y-auto focus:custom-scroll duration-300">
        {sidebarData.map((item, index) => (
          <>
            <div
              key={index}
              className="group hover:bg-slate-200 border-b-2 p-4 cursor-pointer transition duration-500 ease-in-out"
            >
              <div className="flex justify-between items-center text-black">
                <div className="flex items-center gap-3">
                  <img
                    className="w-5 h-5 opacity-50 group-hover:opacity-100"
                    src={item.img}
                    alt="Healthcare Icon"
                  />
                  <p className="text-sm">{item.name}</p>
                </div>
                <MdKeyboardArrowDown className="group-hover:text-black text-white" />
              </div>
            </div>
            <div className="">
              {item.dropDown &&
                item.dropDown.map((item, index) => (
                  <div
                    key={index}
                    className="flex  cursor-pointer hover:border-l-gray-500 border-l-4 border-l-white hover:border-l-4 justify-between items-center p-4 border-b-[1px] hover:bg-slate-200 text-black"
                  >
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-5 h-5 opacity-50"
                        src={item.icon}
                        alt="Healthcare Icon"
                      />
                      <div>
                        <p className="text-sm">{item.name}</p>
                        <p className="text-gray-500 text-xs">
                          from {item.cost}
                        </p>
                        <p className="text-gray-500 text-xs">
                          from {item.time}
                        </p>
                      </div>
                      <div className="flex gap-1 flex-grow">
                        <div className="bg-blue-700 p-2 rounded-md">
                          <AiOutlineEye className="text-white" />
                        </div>
                        <div className="bg-blue-700 p-2 rounded-md">
                          <FiPlus className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        ))}
      </div>

      {/* Playground Area */}
      <div className="flex-1 p-8">
        <p>Selected Option</p>
      </div>
    </div>
  );
}
