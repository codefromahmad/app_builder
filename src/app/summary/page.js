"use client";
import HeaderLayout from "@/components/HeaderLayout";
import VerticalTabs from "@/components/VerticalTabs";
import Image from "next/image";
import React, { useState } from "react";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import { useSelector } from "react-redux";

const page = () => {
  const [studio, setStudio] = useState(false);
  const user = useSelector((state) => state.user.user);
  return (
    <HeaderLayout>
      <div className="w-screen flex h-[calc(100vh-4.5rem)] mt-[4.5rem]">
        <div className="w-1/2">
          <div className="m-5 flex flex-col px-5">
            <p className="text-black font-medium">Hi, {user?.name}</p>
            <div className="flex justify-between items-center py-2">
              <p className="text-black font-semibold">
                Here is your Launch Swift
              </p>
              <p className="text-gray-500 text-sm">Last edited: 15-Jan-2024</p>
            </div>
            <VerticalTabs />
          </div>
        </div>
        <div className="w-1/2">
          <div
            className={`m-5 flex flex-col border-[1px] border-gray-300 rounded-md p-5`}
          >
            <p className="text-black font-semibold">Payment Summary</p>
            <div className="py-5">
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">Customisation Cost</p>
                <p className="text-black text-sm">$5,22,043.34</p>
              </div>
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">Fixed Cost</p>
                <p className="text-black text-sm">$11,91,891.27</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm font-bold">Total Cost</p>
                <p className="text-black text-sm">$17,13,934.61</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">
                  Indicative Development Duration
                </p>
                <p className="text-black text-sm font-bold">5 months</p>
              </div>
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">Estimated Delivery Date</p>
                <p className="text-black text-sm font-bold">13-May-2024</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm font-bold">Promo Code</p>
                <button className="text-white p-2 rounded-md bg-secondary text-sm">
                  Apply Promotion
                </button>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm font-bold">
                  Additional Services
                </p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center gap-3 py-1">
                  <div
                    onClick={() => setStudio((prev) => !prev)}
                    className="cursor-pointer"
                  >
                    {!studio ? (
                      <GoCheckCircleFill className="text-xl text-secondary" />
                    ) : (
                      <GoCircle className="text-xl text-gray-400 cursor-pointer" />
                    )}
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <p className="text-black text-sm">
                      Launch Swift Studio One +
                    </p>
                    <p className="text-black text-sm">$15,034.51 /month</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-1">
                  <div
                    onClick={() => setStudio((prev) => !prev)}
                    className="cursor-pointer"
                  >
                    {studio ? (
                      <GoCheckCircleFill className="text-xl text-secondary" />
                    ) : (
                      <GoCircle className="text-xl text-gray-400 cursor-pointer" />
                    )}
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <p className="text-black text-sm">Launch Swift Cloud</p>
                    <p className="text-black text-sm">
                      $12,841.41 - $19,261.71/month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="text-white p-3 my-2 rounded-md bg-secondary text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default page;
