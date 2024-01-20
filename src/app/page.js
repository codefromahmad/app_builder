"use client";
import React, { useEffect, useState } from "react";
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
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { setUser } from "@/store/reducers/user";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "@/components/Signin";
import Signup from "@/components/Signup";

export default function App() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("US Dollar");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [showSignin, setShowSignin] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("authUser", authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  if (user) {
    router.push("/features");
  }

  const createUser = (user) => {
    const userData = {
      uid: user.uid,
      name: name,
      email: email,
      currency: currency,
      buildCards: [],
    };

    setDoc(doc(db, "users", user.uid), userData) // Use setDoc for setting a document
      .then(() => {
        console.log("Success");
        // dispatch(setUser(userData));
        dispatch({ type: "setUser", payload: userData });
        router.push("/features");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearAllFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSignup = (event) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (authUser) => {
        clearAllFields();
        createUser({ uid: authUser.user.uid });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            setError("Invalid email address");
            break;

          case "auth/weak-password":
            setError("Weak password");
            break;

          default:
            setError("Error creating user:", error.message);
        }
        s;
      });
    event.preventDefault();
  };

  const handleSignIn = (event) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log("Success. The user logged in", authUser);
        clearAllFields();
        router.push("/features");
      })
      .catch((error) => {
        console.log(error);
        switch (error.code) {
          case "auth/user-not-found":
            setError("User not found");
            // Show user-friendly error message for user not found
            break;

          case "auth/invalid-email":
            setError("Please enter valid email");
            // Show user-friendly error message for incorrect password
            break;

          case "auth/wrong-password":
            setError("Please enter correct password");
            // Show user-friendly error message for incorrect password
            break;

          // Add more cases for other error codes as needed

          default:
            setError("Error signing in");
          // Show a generic error message for other cases
        }
      });
    event.preventDefault();
  };

  return (
    <div>
      {login && (
        <div
          onClick={() => setLogin(false)}
          className="fixed inset-0 w-full h-full z-40 bg-black/60 bg-opacity-60 top-0 left-0"
        />
      )}

      {login && (
        <div className="absolute w-4/6 h-3/4 z-50 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <div className="grid w-full h-full grid-cols-2">
            <Image src={loginImage} className="bg-cover" alt="login image" />

            {showSignin ? (
              <Signin
                handleSignIn={handleSignIn}
                error={error}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                setShowSignin={setShowSignin}
              />
            ) : (
              <Signup
                handleSignup={handleSignup}
                error={error}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                currency={currency}
                setCurrency={setCurrency}
                password={password}
                setPassword={setPassword}
                setShowSignin={setShowSignin}
              />
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
      <div className="flex justify-center items-center h-screen">
        <div
          onClick={() => {
            setLogin(true);
            setShowSignin(true);
          }}
          className="cursor-pointer bg-secondary px-5 py-4 rounded-md"
        >
          <p className="text-white">Sign in</p>
        </div>
      </div>
    </div>
  );
}
