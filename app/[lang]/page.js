"use client";
import React, { useEffect, useState } from "react";
import loginImage from "../images/login_image.png";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import { getDictionary } from "../../lib/dictionary";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import builder from "../images/builder.jpg";
import dep from "../images/dep.png";
import dep1 from "../images/dep1.png";
import dep2 from "../images/dep2.png";
import dep3 from "../images/dep3.png";
import dep4 from "../images/dep4.png";
import n from "../images/n.png";
import a from "../images/a.png";
import app from "../images/app.png";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="acc-ctn m3-h">
            <h3> How much does it cost to build an app?</h3>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="acc-ctn p2">
            <p>
              This depends on how complicated your app is and who you choose to
              build it. Our ecommerce app is free and the order management
              system we built Makro cost thousands but compared to what they
              were using before – it was 98% cheaper! Unlike other app builders,
              we give you an accurate delivery time and price before you start.
              Our AI, Natasha, calculates this instantly and we’re so confident
              in her, that we guarantee your price.
            </p>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="acc-ctn m3-h">
            <h3>How do you create an app without any coding?</h3>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="acc-ctn p2">
            <p>
              This depends on how complicated your app is and who you choose to
              build it. Our ecommerce app is free and the order management
              system we built Makro cost thousands but compared to what they
              were using before – it was 98% cheaper! Unlike other app builders,
              we give you an accurate delivery time and price before you start.
              Our AI, Natasha, calculates this instantly and we’re so confident
              in her, that we guarantee your price.
            </p>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div className="acc-ctn m3-h">
            <h3> Can you create an app for free?</h3>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="acc-ctn p2">
            <p>
              This depends on how complicated your app is and who you choose to
              build it. Our ecommerce app is free and the order management
              system we built Makro cost thousands but compared to what they
              were using before – it was 98% cheaper! Unlike other app builders,
              we give you an accurate delivery time and price before you start.
              Our AI, Natasha, calculates this instantly and we’re so confident
              in her, that we guarantee your price.
            </p>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          <div className="acc-ctn m3-h">
            <h3>How can I create my own app?</h3>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="acc-ctn p2">
            <p>
              This depends on how complicated your app is and who you choose to
              build it. Our ecommerce app is free and the order management
              system we built Makro cost thousands but compared to what they
              were using before – it was 98% cheaper! Unlike other app builders,
              we give you an accurate delivery time and price before you start.
              Our AI, Natasha, calculates this instantly and we’re so confident
              in her, that we guarantee your price.
            </p>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          <div className="acc-ctn m3-h">
            <h3>Is it hard to create an app?</h3>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="acc-ctn p2">
            <p>
              This depends on how complicated your app is and who you choose to
              build it. Our ecommerce app is free and the order management
              system we built Makro cost thousands but compared to what they
              were using before – it was 98% cheaper! Unlike other app builders,
              we give you an accurate delivery time and price before you start.
              Our AI, Natasha, calculates this instantly and we’re so confident
              in her, that we guarantee your price.
            </p>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default function App({ params }) {
  const [login, setLogin] = useState(false);
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [showSignin, setShowSignin] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const db = getFirestore();
  const [landing, setLanding] = useState({});

  useEffect(() => {
    if (login && pathname === `/${params.lang}`) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [login]);

  getDictionary(params.lang)
    .then((lang) => {
      setLanding(lang.landing);
    })
    .catch((error) => {
      console.error(error);
    });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (user) {
    router.push(`/${params.lang}/features`);
  }

  const createUser = (user) => {
    const userData = {
      uid: user.uid,
      name: name,
      email: email,
      buildCards: [],
    };

    setDoc(doc(db, "users", user.uid), userData)
      .then(() => {
        console.log("Success");
        dispatch(setUser(userData));
        router.push(`/${params.lang}/features`);
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
        router.push(`/${params.lang}/features`);
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clickSignin = () => {
    setLogin(true);
    setShowSignin(true);
  };

  return (
    <main>
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
                lang={params.lang}
                dictionary={landing.signIn}
                handleSignIn={handleSignIn}
                error={error}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                setShowSignin={setShowSignin}
                clearAllFields={clearAllFields}
              />
            ) : (
              <Signup
                lang={params.lang}
                dictionary={landing.signUp}
                handleSignup={handleSignup}
                error={error}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                setShowSignin={setShowSignin}
                clearAllFields={clearAllFields}
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
      <MainHeader clickSignin={clickSignin} />

      {/* <div className="flex justify-center items-center h-screen">
        {landing && (
          <div
            onClick={() => {
              setLogin(true);
              setShowSignin(true);
            }}
            className="cursor-pointer bg-secondary px-5 py-4 rounded-md"
          >
            <p className="text-white">{landing.loginText}</p>
          </div>
        )}
      </div> */}
      <section className="Bannner">
        <div className="container mx-auto">
          <div className="ban-ctn m1-h p1">
            <h1>
              We make building an app so <br />
              easy, anyone can do it
            </h1>
            <p>Your vision. Your software. We just build it.</p>
            <ul className="blist">
              <li>
                <Link className="btn-b" href={""}>
                  Get a free demo
                </Link>
              </li>
              <li>
                <Link href={""} className="btn-c">
                  See solutions and pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="builder">
        <div className="container mx-auto">
          <div className="bui-img">
            <Image className="img" src={builder} />
          </div>
        </div>
      </section>
      <section className="need py-20">
        <div className="container mx-auto">
          <div className="c-h text-center  m2-h pb-20">
            <h2>My business needs</h2>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4  lg:gap-3 2xl:gap-10 items-center">
            <div className="n-box m3-h p2 ">
              <h3>Launch Studio</h3>
              <p>
                Our product experts work with you every step of the way to build
                the custom app your business needs.
              </p>
              <Link href={""}>Learn more</Link>
            </div>
            <div className="n-box m3-h p2 ">
              <h3>Studio Store</h3>
              <p>
                Get all the features you need to sell online in a ready-to-go
                package. Includes apps and website, plus we never take a cut of
              </p>
              <Link href={""}>Learn more</Link>
            </div>
            <div className="n-box m3-h p2 ">
              <h3>Launch Enterprise</h3>
              <p>
                Our product experts work with you every step of the way to build
                the custom app your business needs.
              </p>
              <Link href={""}>Learn more</Link>
            </div>
            <div className="n-box m3-h p2 ">
              <h3>Launch Cloud</h3>
              <p>
                Our product experts work with you every step of the way to build
                the custom app your business needs.
              </p>
              <Link href={""}>Learn more</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="cta py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-1 xl:grid-cols-3 gap-4 items-center">
            <div className="lg:col-span-1 xl:col-span-2">
              <div className="cta-ctn m2-h m3-h p1">
                <h3>Need help to decide?</h3>
                <h2>Find out which plan is right for you</h2>
                <p>In less than 60 seconds</p>
              </div>
            </div>
            <div className="cta-ct">
              <Link href={""} className="btn-b">
                Help me find a plan
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="work py-20  px-14 ">
        <div className="text-center  m2-h ">
          <h2>Here's how it works</h2>
        </div>
        <div className="workgrid">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-3 2xl:gap-20   items-center">
            <div className="flex gap-2 items-center">
              <div className="val">
                <h1>1</h1>
              </div>
              <div className="w-ctn p2 m3-h">
                <h3>Match with an expert</h3>
                <p>
                  They'll project manage
                  <br />
                  everything – from kick-off to delivery.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="val">
                <h1>2</h1>
              </div>
              <div className="w-ctn p2 m3-h">
                <h3>Share your app idea</h3>
                <p>
                  Spec out your app with your expert – we'll give you a fixed
                  price and clear timelines for your project.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="val">
                <h1>3</h1>
              </div>
              <div className="w-ctn p2 m3-h">
                <h3>AI assembles your app</h3>
                <p>
                  We select the template and you choose the features – then AI
                  fits them together.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="val">
                <h1>4</h1>
              </div>
              <div className="w-ctn p2 m3-h">
                <h3>Specialists customise your app</h3>
                <p>
                  Designers and developers tailor your features – making your
                  app uniquely yours.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="blist">
          <li>
            <Link className="btn-b" href={""}>
              Speak to an expert
            </Link>
          </li>
          <li>
            <Link href={""} className="btn-c">
              Learn how we build software
            </Link>
          </li>
        </ul>
      </section>
      <section className="dep-sec">
        <div className="cir cir1"></div>
        <div className="cir cir2"></div>
        <div className="cir cir3"></div>
        <div className="cir cir4"></div>
        <div className="gep-img">
          <Image className="img" src={dep} />
        </div>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-20 items-center">
            <div>
              <div className="dep-ctn m3-h p2 pd1">
                <h3>Create and submit app store-ready builds</h3>
                <p>
                  Kick off a build. Then we’ll submit it to te App Store and
                  <br />
                  Play Store automatically if you like.
                </p>
                <Image className="img" src={dep1} />
              </div>
              <div className="dep-ctn m3-h p2 ">
                <h3>Dashboards to keep your team on track</h3>
                <p>
                  We keep track of all of your builds, submissions, and
                  deployments,
                  <br /> organized on web dashboards for your whole team.
                </p>
                <Image className="img" src={dep2} />
              </div>
            </div>
            <div>
              <div className="dep-ctn m3-h p2 pd1">
                <h3>Publish bug fixes in minutes</h3>
                <p>
                  Found a typo on your home screen? Don’t sweat: fix it, then
                  publish an update that your users will receive the next time
                  they launch your app.
                </p>
                <Image className="img" src={dep3} />
              </div>
              <div className="dep-ctn m3-h p2 ">
                <h3>Iterate with confidence</h3>
                <p>
                  With flexible deployment patterns and the ability to rollback
                  in seconds, you can iterate faster than ever before..
                </p>
                <Image className="img" src={dep4} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="no-sec py-20">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-20 items-center">
            <div className="n-img">
              <Image className="img" src={n} />
            </div>
            <div className="n-ctn m2-h p2">
              <h2>No tech knowledge needed</h2>
              <p>
                Need the speed and simplicity of a no-code app builder, but
                the technical sophistication a dev shop can deliver? We’ve got
                you covered. Builder.ai can create any app you can imagine, to
                your exact specifications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="no-sec py-20">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 items-center">
            <div className="ai-ctn m2-h p2">
              <h2>
                AI helps build your project quicker and more cost-effectively
              </h2>
              <p>
                Need the speed and simplicity of a no-code app builder, but
                the technical sophistication a dev shop can deliver? We’ve got
                you covered. Builder.ai can create any app you can imagine, to
                your exact specifications.
              </p>
              <Link href={""}>How we use AI</Link>
            </div>
            <div className="a-img">
              <Image className="img" src={a} />
            </div>
          </div>
        </div>
      </section>
      <section className="app ">
        <div className="container mx-auto">
          <div className="text-center  m2-h pb-12">
            <h2>An app platform for every type of business</h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 items-center">
            <div className=" an-ctn m3-h p2">
              <h3>Make your dream business app a reality</h3>
              <p>
                Our product experts are with you every step of the way to
                project manage your custom app build. Zero tech knowledge needed
                and you own everything, including your code.
              </p>
              <Link href={""}>Learn More</Link>
            </div>
            <div className="app-img">
              <Image className="img" src={app} />
            </div>
            <div className="an-ctn m3-h p2">
              <p>
                The project has felt like it is in excellent hands. The team has
                been thoroughly responsive, engaged and genuinely interested and
                motivated to make the project the absolute best it can be.
              </p>
              <h3>Dr Hassan Yasin Moodit</h3>
              <Link href={""}>Read moodit case study</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="test-sec">
        <div className="tet-h text-center  m2-h m3-h pb-12">
          <h3>Testimonials</h3>
          <h2>What Customer Say</h2>
        </div>
        <div className="container mx-auto">
          <Slider {...settings}>
            <div className="test-box p2">
              <div className="tet-c">
                <div className="tet-ci">
                  <Image className="img" src={c1} />
                  <div className="tet-ctn">
                    <h4>Charles Patterson</h4>
                    <p>One Year With Us</p>
                  </div>
                </div>
                <span>
                  <FaQuoteRight />
                </span>
              </div>
              <p>
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </p>
            </div>
            <div className="test-box p2">
              <div className="tet-c">
                <div className="tet-ci">
                  <Image className="img" src={c2} />
                  <div className="tet-ctn">
                    <h4>Charles Patterson</h4>
                    <p>One Year With Us</p>
                  </div>
                </div>
                <span>
                  <FaQuoteRight />
                </span>
              </div>
              <p>
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </p>
            </div>
            <div className="test-box p2">
              <div className="tet-c">
                <div className="tet-ci">
                  <Image className="img" src={c3} />
                  <div className="tet-ctn">
                    <h4>Charles Patterson</h4>
                    <p>One Year With Us</p>
                  </div>
                </div>
                <span>
                  <FaQuoteRight />
                </span>
              </div>
              <p>
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </p>
            </div>
            <div className="test-box p2">
              <div className="tet-c">
                <div className="tet-ci">
                  <Image className="img" src={c1} />
                  <div className="tet-ctn">
                    <h4>Charles Patterson</h4>
                    <p>One Year With Us</p>
                  </div>
                </div>
                <span>
                  <FaQuoteRight />
                </span>
              </div>
              <p>
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
              </p>
            </div>
          </Slider>
        </div>
      </section>
      <section className="faqs py-20">
        <div className="container mx-auto ">
          <div className="cta-ctn m2-h m3-h p1 pb-10">
            <h3>BASIC KNOWLEDGE</h3>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="acc-bx">
            <AccordionCustomIcon />
          </div>
        </div>
      </section>
      <section className="get-sec">
        <div className="container mx-auto">
          <div className="get-bx m2-h p1">
            <div>
              <h2>Got questions?</h2>
              <p>Head to our FAQ page for in-depth answers</p>
              <Link href={""} className="btn-b">
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </main>
  );
}
