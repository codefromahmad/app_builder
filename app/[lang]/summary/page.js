"use client";
import HeaderLayout from "../../components/HeaderLayout";
import VerticalTabs from "../../components/VerticalTabs";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { getDictionary } from "../../../lib/dictionary";
import { sidebarData, sidebarDataArabic } from "../data";

export default function Summary({ params }) {
  const [studio, setStudio] = useState(false);
  const user = useSelector((state) => state.user.user);
  const [summary, setSummary] = useState();
  const [dictionary, setDictionary] = useState({});
  const featuresIds = useSelector((state) => state.features.features);
  const [featuresData, setFeaturesData] = useState([]);
  const dispatch = useDispatch();

  const sidebarDataToUse =
    params.lang === "en" ? sidebarData : sidebarDataArabic;

  useEffect(() => {
    // setSelectedFeature(features[0]);
    const results = [];

    sidebarDataToUse.forEach((category) => {
      const matchingItems = category.dropDown?.filter((item) =>
        featuresIds.includes(item.id)
      );

      if (matchingItems?.length > 0) {
        console.log("matchingItems in summary", matchingItems);
        results.push(...matchingItems);
      }

      setFeaturesData(results);
    });
  }, [featuresIds]);

  getDictionary(params.lang)
    .then((lang) => {
      setDictionary(lang.summary);
    })
    .catch((error) => {
      console.error(error);
    });

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
            dispatch({
              type: "setFeatures",
              payload: recentBuildCard.features,
            });
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
      <div
        style={{ direction: `${params.lang === "en" ? "ltr" : "rtl"}` }}
        className="w-full flex h-[calc(100vh-4.5rem)] mt-[4.5rem]"
      >
        <div className="w-2/3">
          <div className="m-5 flex flex-col px-5">
            <p className="text-black font-medium">
              {dictionary.hi}, {user?.name}
            </p>
            <div className="flex justify-between items-center py-2">
              <p className="text-black font-semibold">
                {dictionary.hereIsYour}
              </p>
              <p className="text-gray-500 text-sm">
                {dictionary.lastEdited}: {formattedDate}
              </p>
            </div>
            <VerticalTabs
              features={featuresData}
              dictionary={dictionary}
              summary={summary}
            />
          </div>
        </div>
        <div className="w-1/3">
          <div
            className={`m-5 flex flex-col border-[1px] border-gray-300 rounded-md p-5`}
          >
            <p className="text-black font-semibold">
              {dictionary.paymentSummary}
            </p>
            <div className="py-5">
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">
                  {dictionary.customizationCost}
                </p>
                <p className="text-black text-sm">
                  ${summary?.customizationCost}
                </p>
              </div>
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">{dictionary.fixedCost}</p>
                <p className="text-black text-sm">${summary?.fixedCost}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm font-bold">
                  {dictionary.totalCost}
                </p>
                <p className="text-black text-sm">${summary?.totalCost}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">
                  {dictionary.indicativeDuration}
                </p>
                <p className="text-black text-sm font-bold">
                  {summary?.duration} {dictionary.weeks}
                </p>
              </div>
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">
                  {dictionary.estimatedDelivery}
                </p>
                <p className="text-black text-sm font-bold">
                  {summary?.deliveryDate}
                </p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm font-bold">
                  {dictionary.promoCode}
                </p>
                <button className="text-white p-2 rounded-md bg-secondary text-sm">
                  {dictionary.apply}
                </button>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm font-bold">
                  {dictionary.additional}
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
                      {dictionary.launchStudio}
                    </p>
                    <p className="text-black text-sm">
                      $15,034.51 /{dictionary.month}
                    </p>
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
                    <p className="text-black text-sm">
                      {dictionary.launchCloud}
                    </p>
                    <p className="text-black text-sm">
                      $12,841.41 - $19,261.71/{dictionary.month}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="text-white p-3 my-2 rounded-md bg-secondary text-sm">
              {dictionary.save}
            </button>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}
