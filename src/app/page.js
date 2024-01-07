"use client";
import React, { useState } from "react";
import loginImage from "../images/login_image.png";
import google from "../images/google_logo.svg";
import facebook from "../images/facebook_logo.svg";
import linkedin from "../images/linkedin_logo.svg";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("US Dollar");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [showSignin, setShowSignin] = useState(false);
  const router = useRouter();

  const handleSignup = (event) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log("Success. The user is created in Firebase", authUser);
        router.push("/features");
      })
      .catch((error) => {
        // An error occurred. Set error message to be displayed to user
        setError(error.message);
      });
    // else setError("Password do not match");
    event.preventDefault();
  };

  const handleSignIn = (event) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log("Success. The user logged in", authUser);
        router.push("/features");
      })
      .catch((error) => {
        // An error occurred. Set error message to be displayed to user
        setError(error.message);
      });
    // else setError("Password do not match");
    event.preventDefault();
  };

  return (
    <div>
      {login && (
        <div
          // onClick={handleClose}
          className="fixed inset-0 w-full h-full z-40 bg-black/60 bg-opacity-60 top-0 left-0"
        />
      )}

      {login && (
        <div className="absolute w-4/6 h-3/4 z-50 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <div className="grid w-full h-full grid-cols-2">
            {/* <div
              className="bg-cover px-16 bg-green-200"
              style={{ backgroundImage: `url(${loginImage})`, height: "100%" }}
            ></div> */}
            <Image src={loginImage} className="bg-cover" />

            {showSignin ? (
              <div className="py-10 w-full h-full">
                <h1 className="text-black px-16 font-semibold text-2xl pb-3">
                  Sign In
                </h1>
                <div className="overflow-y-auto h-[50%] px-16 flex flex-col justify-center bg-white scrollbar-hidden">
                  <p className="text-gray-500 bg-white py-3 z-3 text-center block relative text-sm signin">
                    Sign in using
                  </p>
                  <div className="flex py-3 row justify-between ">
                    <div className="border-[1px] p-3 hover:bg-slate-100 duration-200 rounded flex justify-center items-center cursor-pointer border-gray-300">
                      <Image src={google} className="cover" />
                    </div>
                    <div className="border-[1px] p-3 hover:bg-slate-100 duration-200 rounded flex justify-center items-center cursor-pointer border-gray-300">
                      <Image src={facebook} className="cover" />
                    </div>
                    <div className="border-[1px] p-3 hover:bg-slate-100 duration-200 rounded flex justify-center items-center cursor-pointer border-gray-300">
                      <Image src={linkedin} className="cover" />
                    </div>
                  </div>
                  <p className="text-gray-500 bg-white py-3 z-3 text-center block relative text-sm email">
                    Sign in with email
                  </p>
                  {error && (
                    <div className="bg-red-200 p-3 rounded-md">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  <div className="flex flex-col gap-1 pt-3">
                    <p className="text-black font-bold text-sm">
                      Company email
                    </p>
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="text"
                      placeholder="Company email"
                      className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
                    />
                  </div>
                  <div className="flex flex-col gap-1 pt-3">
                    <p className="text-black font-bold text-sm">Password</p>
                    <input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter password"
                      className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col px-16">
                  <button
                    type="password"
                    placeholder="Enter password"
                    className="bg-purple-700 mt-5 border-gray-300 border-t-[1px] w-full rounded p-3"
                    onClick={handleSignIn}
                  >
                    Sign In
                  </button>
                  <div className="flex row gap-2 pt-2 items-center justify-center">
                    <p className="text-black font-thin">
                      Don't have and account?
                    </p>
                    <p
                      onClick={() => setShowSignin(false)}
                      className="text-purple-700 cursor-pointer text-sm"
                    >
                      Sign Up
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-10 w-full h-full">
                <h1 className="text-black px-16 font-semibold text-2xl pb-3">
                  Sign Up
                </h1>
                <div className="overflow-y-auto h-[50%] px-16 pb-5 flex flex-col bg-white scrollbar-hidden">
                  <p className="text-gray-500 bg-white py-3 z-3 text-center block relative text-sm signin">
                    Sign up using
                  </p>
                  <div className="flex py-3 row justify-between ">
                    <div className="border-[1px] p-3 hover:bg-slate-100 duration-200 rounded flex justify-center items-center cursor-pointer border-gray-300">
                      <Image src={google} className="cover" />
                    </div>
                    <div className="border-[1px] p-3 hover:bg-slate-100 duration-200 rounded flex justify-center items-center cursor-pointer border-gray-300">
                      <Image src={facebook} className="cover" />
                    </div>
                    <div className="border-[1px] p-3 hover:bg-slate-100 duration-200 rounded flex justify-center items-center cursor-pointer border-gray-300">
                      <Image src={linkedin} className="cover" />
                    </div>
                  </div>
                  <p className="text-gray-500 bg-white py-3 z-3 text-center block relative text-sm email">
                    Sign up with email
                  </p>
                  {error && (
                    <div className="bg-red-200 p-3 rounded-md">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  <div className="flex flex-col gap-1 pt-3">
                    <p className="text-black font-bold text-sm">
                      Company email
                    </p>
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="text"
                      placeholder="Company email"
                      className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
                    />
                  </div>
                  <div className="flex flex-col gap-1  pt-3">
                    <p className="text-black font-bold text-sm">Name</p>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      type="text"
                      placeholder="Name"
                      className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
                    />
                  </div>
                  <div className="flex flex-col gap-1  pt-3">
                    <p className="text-black font-bold text-sm">Currency</p>
                    <input
                      value={currency}
                      onChange={(event) => setCurrency(event.target.value)}
                      type="text"
                      readOnly
                      placeholder="Currency"
                      className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
                    />
                  </div>
                  <div className="flex flex-col gap-1 pt-3">
                    <p className="text-black font-bold text-sm">Password</p>
                    <input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter password"
                      className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col px-16 border-gray-300 border-t-[1px]">
                  <button
                    type="password"
                    placeholder="Enter password"
                    className="bg-purple-700 mt-5 border-gray-300 border-t-[1px] w-full rounded p-3"
                    onClick={handleSignup}
                  >
                    Create Account
                  </button>
                  <div className="flex row gap-2 pt-2 items-center justify-center">
                    <p className="text-black font-thin">
                      Already have and account?
                    </p>
                    <p
                      onClick={() => setShowSignin(true)}
                      className="text-purple-700 cursor-pointer text-sm"
                    >
                      Sign In
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div
              onClick={() => setLogin(false)}
              className="absolute top-5 right-5 border-[1px] flex justify-center items-center cursor-pointer rounded-full border-gray-300 w-8 h-8"
            >
              <IoCloseOutline className="text-gray-500 text-2xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
