import React, { useEffect, useState } from "react";
import Header from "./Header";
import { auth } from "../[lang]/firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import spinner from "../images/spinner.gif";
import Image from "next/image";
import { sidebarData, sidebarDataArabic } from "../[lang]/data";
import { setCurrentFeature } from "../store/reducers/features";
import { setRecentBuildCard } from "../store/reducers/buildcard";

const HeaderLayout = ({ children, lang }) => {
  // const [user, setUser] = useState(null);
  const user = useSelector((state) => state.user.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const db = getFirestore();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const sidebarDataToUse = lang === "en" ? sidebarData : sidebarDataArabic;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const userDocRef = doc(db, "users", authUser.uid);

        getDoc(userDocRef)
          .then(async (docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              const incompleteItem = await userData.buildCards.find(
                (item) => item.status === "incomplete"
              );
              if (!incompleteItem) {
                console.log("No incomplete build card");
                dispatch({ type: "setUser", payload: userData });

                if (
                  pathname.endsWith("delivery") ||
                  pathname.endsWith("summary")
                ) {
                  // router.push("/features");
                  router.push(`/features`);

                  return;
                }
              } else {
                console.log("incomplete build card found");
                dispatch(setRecentBuildCard(incompleteItem));

                const lastFeatureId =
                  incompleteItem.features[incompleteItem.features.length - 1];

                sidebarDataToUse.some((category) => {
                  const selectedItem = category.dropDown?.find(
                    (item) => item.id === lastFeatureId
                  );
                  dispatch(setCurrentFeature(selectedItem));
                  dispatch({ type: "setUser", payload: userData });
                });

                dispatch({
                  type: "setFeatures",
                  payload: incompleteItem.features,
                });
                dispatch({
                  type: "setCustomFeatures",
                  payload: incompleteItem.customFeatures,
                });

                // router.push(`/features`);
              }
              // setUser(userData);
            } else {
              console.log("User data not found");
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [db, dispatch, router]);

  return (
    <div>
      <Header
        // user={user}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />
      {user ? (
        <div onClick={() => setDropdownOpen(false)}>{children}</div>
      ) : (
        <div className="flex justify-center items-center h-screen w-screen">
          <Image src={spinner} alt="loading..." className="w-14 h-14" />
        </div>
      )}
    </div>
  );
};

export default HeaderLayout;
