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
}) => {
  return (
    <div className="py-10 w-full h-full">
      <h1 className="text-black px-16 font-semibold text-2xl pb-3">Sign In</h1>
      <div className="overflow-y-auto h-[50%] px-16 flex flex-col justify-center bg-white scrollbar-hidden">
        <p className="text-gray-500 bg-white py-3 z-3 text-center block relative text-sm signin">
          Sign in using
        </p>
        <SocialButtons />
        <p className="text-gray-500 bg-white py-2 z-3 text-center block relative text-sm email">
          Sign in with email
        </p>
        {error && (
          <div className="bg-red-200 p-2 rounded-md">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
        <div className="flex flex-col gap-1 pt-2">
          <p className="text-black font-bold text-sm">Company email</p>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="Company email"
            className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
          />
        </div>
        <div className="flex flex-col gap-1 pt-2">
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
          <p className="text-black font-thin">{`Don't have and account?`}</p>
          <p
            onClick={() => setShowSignin(false)}
            className="text-purple-700 cursor-pointer text-sm"
          >
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
