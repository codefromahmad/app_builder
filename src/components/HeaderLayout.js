import React, { useEffect, useState } from "react";
import Header from "./Header";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";

const HeaderLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const db = getFirestore();
  const dispatch = useDispatch();
  // const recentBuildCardId = localStorage.getItem("recentBuildCardId");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const userDocRef = doc(db, "users", authUser.uid);

        getDoc(userDocRef)
          .then(async (docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              console.log("User data:", userData);
              setUser(userData);
              dispatch({ type: "setUser", payload: userData });
              const incompleteItem = await userData.buildCards.find(
                (item) => item.status === "incomplete"
              );
              console.log("incompleteItem", incompleteItem);
              if (incompleteItem) {
                console.log("incomplete build card found");
                dispatch({
                  type: "setFeatures",
                  payload: incompleteItem.features,
                });
              } else console.log("No incomplete build card");
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

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <p className="text-black">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Header
        user={user}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />
      <div onClick={() => setDropdownOpen(false)}>{children}</div>
    </div>
  );
};

export default HeaderLayout;
