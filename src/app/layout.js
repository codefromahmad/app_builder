"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import Header from "@/components/Header";
import { useState } from "react";

const metadata = {
  title: "App Builder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
