import React from "react";
import SocialButtons from "./SocialButtons";

const Signup = ({
  handleSignup,
  error,
  name,
  setName,
  email,
  setEmail,
  currency,
  setCurrency,
  password,
  setPassword,
  setShowSignin,
  lang,
  dictionary,
}) => {
  const isButtonDisabled = !name || !email || !currency || !password;

  return (
    <div
      style={{ direction: `${lang === "en" ? "ltr" : "rtl"}` }}
      className="py-10 w-full h-full"
    >
      <h1 className="text-black px-16 font-semibold text-2xl pb-3">
        {dictionary.signupText}
      </h1>
      <div className="overflow-y-auto h-[50%] px-16 pb-5 flex flex-col bg-white scrollbar-hidden">
        <p className="text-gray-500 bg-white py-3 z-3 text-center block relative text-sm signin">
          {dictionary.signupUsing}
        </p>
        <SocialButtons />
        <p className="text-gray-500 bg-white py-2 z-3 text-center block relative text-sm email">
          {dictionary.signupWith}
        </p>
        {error && (
          <div className="bg-red-200 p-3 rounded-md">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
        <div className="flex flex-col gap-1 pt-3">
          <p className="text-black font-bold text-sm">{dictionary.email}</p>
          <input
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder={dictionary.email}
            className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
          />
        </div>
        <div className="flex flex-col gap-1  pt-3">
          <p className="text-black font-bold text-sm">{dictionary.name}</p>
          <input
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder={dictionary.name}
            className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
          />
        </div>
        <div className="flex flex-col gap-1  pt-3">
          <p className="text-black font-bold text-sm">{dictionary.currency}</p>
          <input
            value={currency}
            required
            onChange={(event) => setCurrency(event.target.value)}
            type="text"
            readOnly
            // placeholder={dictionary.currency}
            className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
          />
        </div>
        <div className="flex flex-col gap-1 pt-3">
          <p className="text-black font-bold text-sm">{dictionary.password}</p>
          <input
            type="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            placeholder={dictionary.passwordPlaceholder}
            className="border-[1px] border-gray-300 outline-none text-black rounded p-3"
          />
        </div>
      </div>
      <div className="flex flex-col px-16 border-gray-300 border-t-[1px]">
        <button
          type="password"
          disabled={isButtonDisabled}
          placeholder="Enter password"
          className={`mt-5 ${
            isButtonDisabled ? "bg-gray-300" : "bg-secondary"
          } border-gray-300 border-t-[1px] w-full rounded p-3`}
          onClick={handleSignup}
        >
          {dictionary.buttonText}
        </button>
        <div className="flex row gap-2 pt-2 items-center justify-center">
          <p className="text-black font-thin">
            {dictionary.alreadyHaveAccount}
          </p>
          <p
            onClick={() => setShowSignin(true)}
            className="text-secondary cursor-pointer text-sm"
          >
            {dictionary.signIn}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;