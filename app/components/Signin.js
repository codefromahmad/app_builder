"use client";
import React, { useEffect, useState } from "react";
import SocialButtons from "./SocialButtons";

const Signin = ({
  handleSignIn,
  error,
  email,
  setEmail,
  password,
  setPassword,
  setShowSignin,
  lang,
  dictionary,
}) => {
  return (
    <div
      style={{ direction: `${lang === "en" ? "ltr" : "rtl"}` }}
      className="py-10 w-full h-full"
    >
      <h1 className="text-black px-16 font-semibold text-2xl pb-3">
        {dictionary.signinText}
      </h1>
      <div className="overflow-y-auto h-[50%] px-16 flex flex-col justify-center bg-white scrollbar-hidden">
        <p className="text-gray-500 bg-white py-3 z-3 text-center block relative text-sm signin">
          {dictionary.signinUsing}
        </p>
        <SocialButtons />
        <p className="text-gray-500 bg-white py-2 z-3 text-center block relative text-sm email">
          {dictionary.signinWith}
        </p>
        {error && (
          <div className="bg-red-200 p-2 rounded-md">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
        <div className="flex flex-col gap-1 pt-2">
          <p className="text-black font-bold text-sm">{dictionary.email}</p>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder={dictionary.email}
            className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
          />
        </div>
        <div className="flex flex-col gap-1 pt-2">
          <p className="text-black font-bold text-sm">{dictionary.password}</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder={dictionary.passwordPlaceholder}
            className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
          />
        </div>
      </div>
      <div className="flex flex-col px-16">
        <button
          className="bg-secondary mt-5 border-gray-300 border-t-[1px] w-full rounded p-3"
          onClick={handleSignIn}
        >
          {dictionary.buttonText}
        </button>
        <div className="flex row gap-2 pt-2 items-center justify-center">
          <p className="text-black font-thin">{dictionary.dontHaveAccount}</p>
          <p
            onClick={() => setShowSignin(false)}
            className="text-secondary cursor-pointer text-sm"
          >
            {dictionary.signUp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
