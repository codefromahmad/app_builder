import React, { useEffect, useState } from "react";
import Header from "./Header";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";

const HeaderLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("authUser", authUser);
        setUser(authUser);
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <p className="text-black">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Header dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
      <div onClick={() => setDropdownOpen(false)}>{children}</div>
    </div>
  );
};

export default HeaderLayout;
