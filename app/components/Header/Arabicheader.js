import Link from "next/link";
import React from "react";

export default function Arabicheader() {
  return (
    <header className="header py-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 lg:gap-1 xl:gap-4 items-center">
      <div className="menu">
          <ul className="tlist">
            <li>
              <Link href={""}>تسجيل الدخول</Link>
            </li>
            <li>
              <Link className="btn-a" href={""}>احصل على عرض تجريبي مجاني</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src="/img/alogo.png" />
        </div>
       
      </div>
    </div>
  </header>
  )
}
