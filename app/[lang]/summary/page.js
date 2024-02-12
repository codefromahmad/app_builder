"use client";
import HeaderLayout from "../../components/HeaderLayout";
import VerticalTabs from "../../components/VerticalTabs";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { getDictionary } from "../../../lib/dictionary";
import { sidebarData, sidebarDataArabic } from "../data";
import { setUser } from "../../store/reducers/user";

export default function Summary({ params }) {
  const db = getFirestore();
  const user = useSelector((state) => state.user.user);
  const [summary, setSummary] = useState();
  const [dictionary, setDictionary] = useState({});
  const featuresIds = useSelector((state) => state.features.features);
  const [featuresData, setFeaturesData] = useState([]);
  const dispatch = useDispatch();
  const recentBuildCardId = localStorage.getItem("recentBuildCardId");
  const [cloudService, setCloudService] = useState();
  const [cloudServiceSelected, setCloudServiceSelected] = useState();

  const sidebarDataToUse =
    params.lang === "en" ? sidebarData : sidebarDataArabic;

  const handleSave = () => {
    const userRef = doc(db, "users", user.uid);

    getDoc(userRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          userData.buildCards = Array.isArray(userData.buildCards)
            ? userData.buildCards
            : [];

          const currentBuildCard = userData.buildCards.findIndex(
            (buildCard) => buildCard.id === recentBuildCardId
          );

          if (currentBuildCard !== -1) {
            // localStorage.setItem("recentBuildCardId", null);
            userData.buildCards[currentBuildCard].updatedAt =
              new Date().toISOString();
            userData.buildCards[currentBuildCard].cloudServiceCost =
              cloudService;
          }

          updateDoc(userRef, userData)
            .then(() => {
              console.log("Build card added/updated successfully");
              dispatch(setUser(userData));
              // setName("");
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

  useEffect(() => {
    // setSelectedFeature(features[0]);
    const results = [];

    sidebarDataToUse.forEach((category) => {
      const matchingItems = category.dropDown?.filter((item) =>
        featuresIds.includes(item.id)
      );

      if (matchingItems?.length > 0) {
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

        // Assuming 'buildCards' is an array in your user data
        const buildCards = userData?.buildCards || [];
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
            setSummary(recentBuildCard);
            setCloudService(recentBuildCard.cloudServiceCost);
            setCloudServiceSelected(
              recentBuildCard.cloudServiceCost ? true : false
            );
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
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = inputDate.toLocaleDateString("en-US", options);

  const handleCloudSelection = () => {
    console.log("handleCloudSelection", cloudServiceSelected);
    // setCloudServiceSelected((prev) => !prev);
    if (cloudServiceSelected) {
      console.log("inside if");
      setCloudServiceSelected(false);
      setCloudService(0);
    } else {
      console.log("inside else");
      setCloudServiceSelected(true);
      setCloudService(
        summary?.cloudServiceCost != 0 ? summary?.cloudServiceCost : 12841
      );
    }
    // console.log(
    //   "cloudService:",
    //   cloudService,
    //   summary?.cloudServiceCost,
    //   cloudServiceSelected
    // );
  };

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
                  ${summary?.customizationCost.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm">{dictionary.fixedCost}</p>
                <p className="text-black text-sm">
                  ${summary?.fixedCost.toLocaleString()}
                </p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm font-bold">
                  {dictionary.totalCost}
                </p>
                <p className="text-black text-sm">
                  ${summary?.totalCost.toLocaleString()}
                </p>
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
                {/* <div className="flex items-center gap-3 py-1">
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
                </div> */}
                <div className="flex items-center gap-3 py-1">
                  <div
                    onClick={handleCloudSelection}
                    className="cursor-pointer"
                  >
                    {cloudServiceSelected > 0 ? (
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
                      {(cloudService > 0 && cloudService?.toLocaleString()) ||
                        `12,841-19,261`}
                      /{dictionary.month}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              disabled={cloudService === summary?.cloudServiceCost}
              onClick={handleSave}
              className={`${
                cloudService === summary?.cloudServiceCost
                  ? "bg-slate-300"
                  : "text-white bg-secondary"
              } p-3 my-2 rounded-md text-sm`}
            >
              {dictionary.save}
            </button>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}
