"use client";
import HeaderLayout from "../../components/HeaderLayout";
import VerticalTabs from "../../components/VerticalTabs";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { getDictionary } from "../../../lib/dictionary";
import { sidebarData, sidebarDataArabic } from "../data";
import { setUser } from "../../store/reducers/user";
import { IoClose } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";

export default function Summary({ params }) {
  const user = useSelector((state) => state.user.user);
  const summary = useSelector((state) => state.buildcard.recentBuildCard);
  // const [summary, setSummary] = useState();
  const [dictionary, setDictionary] = useState({});

  const [featuresData, setFeaturesData] = useState([]);
  const dispatch = useDispatch();
  const recentBuildCardId = localStorage.getItem("recentBuildCardId");
  const [cloudServiceSelected, setCloudServiceSelected] = useState();
  const [enterPromoCode, setEnterPromoCode] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoCodeValid, setPromoCodeValid] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const promoRef = useRef(null);
  const db = getFirestore();

  const checkPromoCode = async () => {
    console.log("inside checkPromoCode");
    setLoading(true);
    try {
      const promoCodesCollectionRef = collection(db, "promoCodes");
      const q = query(promoCodesCollectionRef, where("code", "==", promoCode));
      const promoCodesSnapshot = await getDocs(q);

      if (!promoCodesSnapshot.empty) {
        const currentDate = new Date();
        const validPromoCodes = [];

        promoCodesSnapshot.forEach((doc) => {
          const promoCodeData = doc.data();
          const validTillDate = new Date(
            promoCodeData.validTill.seconds * 1000 +
              promoCodeData.validTill.nanoseconds / 1000000
          );

          if (currentDate <= validTillDate) {
            validPromoCodes.push(promoCodeData);
          }

          if (validPromoCodes.length > 0) {
            console.log("validPromoCodes", validPromoCodes);
            setMessage("valid");
            setPromoCodeValid(validPromoCodes[0]);
          } else {
            console.log("inside else");
            setPromoCode("");
            setMessage("invalid");
          }
        });
      } else {
        setPromoCode("");
        setMessage("invalid");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setPromoCode("");
      console.error("Error fetching promo codes:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (message) {
      const timeoutId = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [message]);

  const hanldeCancelPromoCode = () => {
    setPromoCodeValid(null);
    setMessage("");
    setPromoCode("");
  };

  useEffect(() => {
    promoRef?.current?.focus();
  }, [promoCode, enterPromoCode]);

  const sidebarDataToUse =
    params.lang === "en" ? sidebarData : sidebarDataArabic;

  const handleSave = () => {
    const userRef = doc(db, "users", user.uid);

    console.log("userREf", userRef);

    getDoc(userRef)
      .then((docSnapshot) => {
        console.log("docSnapshot", docSnapshot);
        if (docSnapshot.exists()) {
          console.log("inside if");
          const userData = docSnapshot.data();
          console.log("userData", userData);
          userData.buildCards = Array.isArray(userData.buildCards)
            ? userData.buildCards
            : [];

          const currentBuildCard = userData.buildCards.findIndex(
            (buildCard) => buildCard.id === recentBuildCardId
          );

          if (currentBuildCard !== -1) {
            console.log("currentBuildCard updating");
            userData.buildCards[currentBuildCard].updatedAt =
              new Date().toISOString();
            // userData.buildCards[currentBuildCard].cloudServiceCost = {
            //   ...userData.buildCards[currentBuildCard].cloudServiceCost,
            //   selected: cloudServiceSelected,
            // };
            userData.buildCards[currentBuildCard].status = "complete";
          }

          updateDoc(userRef, userData)
            .then(() => {
              console.log("Build card added/updated successfully");
              localStorage.removeItem("recentBuildCardId");
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

  useEffect(() => {
    setCloudServiceSelected(summary?.cloudServiceCost.selected);
  }, [summary]);

  useEffect(() => {
    // setSelectedFeature(features[0]);
    const results = [];
    sidebarDataToUse.forEach((category) => {
      const matchingItems = category.dropDown?.filter((item) =>
        summary?.features.includes(item.id)
      );

      console.log("matchingItems", matchingItems);

      if (matchingItems?.length > 0) {
        results.push(...matchingItems);
      }

      setFeaturesData(results);
    });
  }, [summary?.features]);

  getDictionary(params.lang)
    .then((lang) => {
      setDictionary(lang.summary);
    })
    .catch((error) => {
      console.error(error);
    });

  const inputDate = new Date(summary?.updatedAt);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = inputDate.toLocaleDateString("en-US", options);

  const handleCloudSelection = () => {
    console.log("handleCloudSelection", cloudServiceSelected);
    if (cloudServiceSelected) {
      console.log("inside if");
      setCloudServiceSelected(false);
    } else {
      console.log("inside else");
      setCloudServiceSelected(true);
    }
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
              <p className="text-gray-900 text-sm">
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
                <div className="flex flex-col">
                  <p
                    className={`text-black text-right text-sm ${
                      promoCodeValid && "line-through"
                    }`}
                  >
                    ${summary?.totalCost.toLocaleString()}
                  </p>
                  {promoCodeValid?.discountAmount && (
                    <p className="text-black text-right font-bold">
                      $
                      {(
                        summary?.totalCost *
                        (1 - promoCodeValid.discountAmount / 100)
                      ).toLocaleString()}
                    </p>
                  )}
                </div>
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
                {!enterPromoCode && (
                  <button
                    onClick={() => setEnterPromoCode(true)}
                    className="text-white p-2 rounded-md bg-secondary text-sm"
                  >
                    {dictionary.applyPromotion}
                  </button>
                )}
              </div>
              {enterPromoCode && (
                <>
                  {message && (
                    <div
                      className={`${
                        message === "valid" ? "bg-green-300" : "bg-red-300"
                      } px-4 py-2 rounded-md my-3`}
                    >
                      <p className="text-white text-sm">
                        {message === "valid"
                          ? "Promo code is valid!"
                          : "Promo code is invalid"}
                      </p>
                    </div>
                  )}
                  {promoCodeValid ? (
                    <div className="flex w-fit px-3 items-center gap-1 bg-slate-200 rounded-md">
                      <div className="flex items-center gap-1">
                        <IoMdPricetags className="text-black" />
                        <p className="p-2 text-gray-500 rounded-md font-bold">
                          {promoCode}
                        </p>
                      </div>
                      <IoClose
                        onClick={hanldeCancelPromoCode}
                        className="text-black cursor-pointer font-extrabold "
                      />
                    </div>
                  ) : (
                    <div className="my-1 w-full gap-2 flex items-center">
                      <div className="border-gray-300 w-full border rounded-md my-1">
                        <input
                          ref={promoRef}
                          disabled={loading}
                          className="p-2 w-full text-black rounded-md font-medium outline-none"
                          type="text"
                          placeholder={dictionary.enterPromoCode}
                          value={promoCode}
                          onChange={(e) =>
                            setPromoCode(e.target.value.toUpperCase())
                          }
                        />
                      </div>
                      {loading ? (
                        <div className="bg-slate-300 w-[90px] flex items-center justify-center py-2 rounded-md">
                          <div className="loading-spinner"></div>
                        </div>
                      ) : (
                        <p
                          onClick={checkPromoCode}
                          className={`${
                            promoCode.length > 0
                              ? "bg-secondary"
                              : "bg-slate-300"
                          } py-2 w-[90px] text-center text-white rounded-md text-sm cursor-pointer`}
                        >
                          {dictionary.apply}
                        </p>
                      )}
                    </div>
                  )}
                </>
              )}
              <hr className="my-2" />
              {/* <div className="flex justify-between items-center py-1">
                <p className="text-black text-sm font-bold">
                  {dictionary.additional}
                </p>
              </div> */}
              {/* <div className="grid grid-cols-2">
                <div className="flex items-center gap-3 py-1">
                  <div
                    onClick={() => setCloudServiceSelected((prev) => !prev)}
                    className="cursor-pointer"
                  >
                    {cloudServiceSelected ? (
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
                      ${summary?.cloudServiceCost.cost}/{dictionary.month}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <button
              // disabled={
              //   cloudServiceSelected === summary?.cloudServiceCost.selected
              // }
              onClick={handleSave}
              className={` p-3 my-2text-white bg-secondary rounded-md text-sm`}
            >
              {dictionary.save}
            </button>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}
