import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import person from "../images/user-image.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../[lang]/firebase";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import LocaleSwitcher from "./LocaleSwitcher";
import { getDictionary } from "../../lib/dictionary";

const Header = ({ dropdownOpen, setDropdownOpen }) => {
  const pathName = usePathname();
  const lang = pathName.split("/")[1];
  const [name, setName] = useState("");
  const [dictionary, setDictionary] = useState({});

  useEffect(() => {}, []);

  getDictionary(lang)
    .then((data) => {
      setDictionary(data.header);
    })
    .catch((error) => {
      console.error(error);
    });

  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state) => state.user.user);

  const getRecentBuildCard = () => {
    const recentBuildCardId = localStorage.getItem("recentBuildCardId");

    if (
      Array.isArray(user?.buildCards) &&
      user?.buildCards.length > 0 &&
      recentBuildCardId
    ) {
      const recentBuildCard = user?.buildCards.find(
        (card) => card.id === recentBuildCardId
      );

      if (recentBuildCard) {
        console.log("Header page", recentBuildCard);
        setName(recentBuildCard.name);
      } else {
        console.log("Build card with the specified ID not found.");
      }
    } else {
      console.log(
        "No build cards available or recentBuildCardId is not set in local storage."
      );
    }
  };

  useEffect(() => {
    if (pathname.endsWith("summary")) getRecentBuildCard();
  }, [pathname, user]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-[4.5rem] bg-primary z-30 w-full fixed top-0 left-0 right-0">
      <div className="h-full flex items-center">
        <Link href={"/"} className="w-1/5 pl-5 cursor-pointer">
          <Image
            src={logo}
            alt=""
            className="pointer-events-none inset-0 h-16 w-36"
            unoptimized
          />
        </Link>
        <div className="w-4/5 h-full px-5">
          <div className="flex h-full justify-between items-center">
            <p className="text-white font-bold">
              {name !== "" ? name : dictionary.projectName}
            </p>
            <div className="flex justify-evenly gap-2 items-center">
              <LocaleSwitcher />

              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="cursor-pointer relative flex items-center gap-1 ml-3"
              >
                <div className="flex gap-2">
                  <div className="flex flex-col items-end justify-center">
                    <p className="text-white font-semibold">{user?.name}</p>
                    <p className="text-white font-medium text-xs">
                      {user?.email}
                    </p>
                  </div>
                  {/* <Image
                    src={person}
                    alt=""
                    className="rounded-full"
                    width={40}
                    height={40}
                  /> */}
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <p className="text-white font-semibold text-2xl">
                      {user?.name[0]}
                    </p>
                  </div>
                  <div className="w-[11px] h-[11px] absolute flex items-center justify-center -right-[3px] top-1 z-[4] rounded-full bg-primary">
                    <div className="w-2 h-2 rounded-full bg-[#00FF47]" />
                  </div>
                </div>
                <div
                  className={`${
                    dropdownOpen ? "block" : "hidden"
                  } absolute top-11 right-0 py-2 w-40 bg-white rounded-md shadow-xl z-50`}
                >
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dahsboard
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Setting
                  </Link>
                  <Link
                    href="#"
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
