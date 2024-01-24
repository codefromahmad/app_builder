"use client";
import HeaderLayout from "@/components/HeaderLayout";
import VerticalTabs from "@/components/VerticalTabs";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import { useSelector } from "react-redux";

export default function Summary() {
  const [studio, setStudio] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [summary, setSummary] = useState();

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
            setSummary(recentBuildCard);
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

  const inputDate = new Date(summary?.updatedAt);

  // Define options for formatting
  const options = { day: "2-digit", month: "short", year: "numeric" };

  // Format the date
  const formattedDate = inputDate.toLocaleDateString("en-US", options);

  return (
    <HeaderLayout>
      <div className="w-full flex h-[calc(100vh-4.5rem)] mt-[4.5rem]">
        <div className="w-2/3">
          <div className="m-5 flex flex-col px-5">
            <p className="text-black font-medium">Hi, {user?.name}</p>
            <div className="flex justify-between items-center py-2">
              <p className="text-black font-semibold">
                Here is your Launch Swift
              </p>
              <p className="text-gray-500 text-sm">
                Last edited: {formattedDate}
              </p>
            </div>
            <VerticalTabs summary={summary} />
          </div>
        </div>
        <div className="w-1/3">
          <div
            className={`m-5 flex flex-col border-[1px] border-gray-300 rounded-md p-5`}
          >
            <p className="text-black font-semibold">Payment Summary</p>
            <div className="py-5">
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">Customisation Cost</p>
                <p className="text-black text-sm">
                  ${summary?.customizationCost}
                </p>
              </div>
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">Fixed Cost</p>
                <p className="text-black text-sm">${summary?.fixedCost}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm font-bold">Total Cost</p>
                <p className="text-black text-sm">${summary?.totalCost}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">
                  Indicative Development Duration
                </p>
                <p className="text-black text-sm font-bold">
                  {summary?.duration} weeks
                </p>
              </div>
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">Estimated Delivery Date</p>
                <p className="text-black text-sm font-bold">
                  {summary?.deliveryDate}
                </p>
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
}
