import Link from "next/link";
import React from "react";
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube   } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

export default function Arfooter() {
  return (
    <>
      <section className="footer ">
        <div className="container mx-auto ">
          <div className="line">
          <div className="grid lg:grid-cols-1 xl:grid-cols-4 gap-4 items-center">
            
          <div></div>
            <div className="ft-2 m3-h txt-r">
                <h3>احصل على أحدث المعلومات</h3>
                <div className="n-field">
                    <input type="email" placeholder="عنوان البريد الإلكتروني"/>
                    <button><BsSend /></button>
                </div>
            </div>
            
            <div></div>
            <div className="ft-1 p2 txt-r">
            <div className="logo">
            <img src="/img/alogo.png" />
          </div>
          <p>لقد شعر المشروع وكأنه في أيدٍ ممتازة. لقد كان الفريق مستجيبًا تمامًا ومشاركًا ومهتمًا حقًا ومتحمسًا لجعل المشروع أفضل ما يمكن أن يكون.</p>
         <ul className="so-list">
            <li><Link href={''}><FaFacebookF /></Link></li>
            <li><Link href={''}><FaInstagram /></Link></li>
            <li><Link href={''}><FaTwitter /></Link></li>
            <li><Link href={''}><FaYoutube /></Link></li>
         </ul>
            </div>
            <div></div>
          </div>
          </div>
          <div className="copy p2">
            <p>© 2024 إطلاق سويفت. طورت بواسطة</p>
          </div>
        </div>
      </section>
    </>
  );
}
