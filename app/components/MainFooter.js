import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import Image from "next/image";
import logo from "../images/logo.png";

export default function MainFooter() {
  return (
    <>
      <section className="footer ">
        <div className="container mx-auto ">
          <div className="line">
            <div className="grid lg:grid-cols-1 xl:grid-cols-4 gap-4 items-center">
              <div className="ft-1 p2 ">
                <div className="logo">
                  <Image src={logo} alt="Launch Swift Logo" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
                <ul className="so-list">
                  <li>
                    <Link href={""}>
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href={""}>
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href={""}>
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href={""}>
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
              <div></div>
              <div></div>
              <div className="ft-2 m3-h">
                <h3>Get the Latest Information</h3>
                <div className="n-field">
                  <input type="email" placeholder="Email address" />
                  <button>
                    <BsSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="copy p2">
            <p>© 2024 Launch Swift. Developed by</p>
          </div>
        </div>
      </section>
    </>
  );
}
