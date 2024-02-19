import React, { useEffect, useState } from "react";
import Header from "./Header";
import { auth } from "../[lang]/firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import spinner from "../images/spinner.gif";
import Image from "next/image";

const HeaderLayout = ({ children, lang }) => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const db = getFirestore();
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const userDocRef = doc(db, "users", authUser.uid);

        getDoc(userDocRef)
          .then(async (docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              console.log("User data:", userData);
              dispatch({ type: "setUser", payload: userData });
              const incompleteItem = await userData.buildCards.find(
                (item) => item.status === "incomplete"
              );
              if (!incompleteItem) {
                console.log("No incomplete build card");
                if (pathname.endsWith("delivery")) {
                  // router.push("/features");
                  router.push(`/features`);

                  return;
                }
              } else {
                console.log("incomplete build card found");
                dispatch({
                  type: "setFeatures",
                  payload: incompleteItem.features,
                });
              }
              setUser(userData);
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
        user={user}
        lang={lang}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />
      {user ? (
        <div onClick={() => setDropdownOpen(false)}>{children}</div>
      ) : (
        <div className="flex justify-center items-center h-screen w-screen">
          <Image src={spinner} alt="loading..." className="w-40 h-40" />
        </div>
      )}
    </div>
  );
};

export default HeaderLayout;
