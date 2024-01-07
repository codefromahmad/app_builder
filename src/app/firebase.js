// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJSQQYm_siWmfz4OVukIjfR1TA4qnddCE",
  authDomain: "app-builder-c776a.firebaseapp.com",
  projectId: "app-builder-c776a",
  storageBucket: "app-builder-c776a.appspot.com",
  messagingSenderId: "193602211515",
  appId: "1:193602211515:web:41a88f4cf3759966a8a39e",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
