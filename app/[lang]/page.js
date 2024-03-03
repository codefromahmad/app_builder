"use client";
import React, { useEffect, useState } from "react";
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
import hero from "../images/screenshots/hero.png";
import popup from "../images/popupImage.png";
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
            <h3>How much does it cost to build an app?</h3>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="acc-ctn p2">
            <p>
              App development is charged depending on features offered by
              application designers and the duration taken in designing such
              applications hence the confusion surrounding its cost. We prefer
              simple pricing which is why we have two options:
            </p>
            <br />
            <p>
              <b>Launch Swift Studio:</b> Affordable pre-built apps for common
              needs like online sales, appointments, and reservations.
            </p>
            <br />
            <p>
              Customized app development for unique needs or larger projects.
              Pricing is based on your specific features ensuring you know the
              cost upfront.
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
              No more complex coding! Launch Swift is an innovative app builder
              that lets you create powerful apps without writing a single line
              of code! Unlike other builders with limited customization, it
              offers both ease of use and full control – just perfect! It’s like
              having an app-builder’s rapidity and flexibility of a tailored
              build at once, but all cheaply.
            </p>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div className="acc-ctn m3-h">
            <h3>Can you create an app for free?</h3>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="acc-ctn p2">
            <p>
              Nevertheless, free apps are systematically bound by various
              limitations often rendering basic functionalities only available
              to users.
            </p>
            <br />
            <p>
              If you need something simple like a ticketing system or project
              tracking go for low-cost options such as Google Appsheet.
            </p>
            <br />
            <p>
              Starting from scratch is more cost-effective, although it requires
              expertise in coding.
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
              An example of a no-code/low-code platform is Launch Swift. These
              platforms have simple interfaces and pre-built components that
              allow users to create applications without coding skills.
            </p>
            <br />
            <p>
              Coding from scratch will take much longer and require advanced
              programming knowledge. This means you must write the entire code
              for your application.
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
              When using Launch Swift, making an app is just like personalizing
              delectable meals. Choose the base, then select toppings (login,
              shopping cart, etc.) – pre-built and ready! Absolutely no coding
              is needed like joining Lego blocks together. Need assistance? Our
              team is at your disposal!
            </p>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}>
          <div className="acc-ctn m3-h">
            <h3>How do I start an app business?</h3>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="acc-ctn p2">
            <p>
              Launching apps usually involves charges including $25 for Google
              Play Store and $99 per year for Apple App Store.
            </p>
            <br />
            <p>
              Throughout your new project, Launch Swift guides you in every path
              you choose concerning your application development needs.
            </p>
            <br />
            <p>Where do I start with my application business venture?</p>
            <ol type="1">
              <br />
              <li>
                1. Discover a point of discontinuity in the market and apply a
                sense check to your app’s value proposition.
              </li>
              <li>
                2. Concept Testing: Experiment with a free tool for prototyping
                making it possible for users and investors to give their
                thoughts about the idea.
              </li>
              <li>
                3. Opt for an App Development Partner: Make any developer choice
                from a thorough understanding of their competence,
                cost-reliability, or time-constraint guarantees.
              </li>
            </ol>
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
    if (error) {
      const timeoutId = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

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
    setError(null);
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
            setError("Email or password is incorrect.");
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
            <Image src={popup} className="bg-cover" alt="login image" />

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
            <h1>Developing Apps Made Effortless</h1>
            <p>No Code. No Delays. Launch Swift.</p>
            <ul className="blist">
              <li>
                <Link onClick={clickSignin} className="btn-b" href={""}>
                  Get a free demo
                </Link>
              </li>
              <li>
                <Link onClick={clickSignin} href={""} className="btn-c">
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
            <Image className="img w-[80%]" src={hero} />
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
              <h3>Launch Swift Studio</h3>
              <p>
                Collaborate seamlessly with our product experts throughout the
                app development journey, ensuring a tailor-made solution for
                your business needs.
              </p>
              {/* <Link href={""}>Learn more</Link> */}
            </div>
            <div className="n-box m3-h p2 ">
              <h3>Studio Store</h3>
              <p>
                Find ready-to-go components for your e-commerce store with
                Launch Swift Store. Enjoy all the essential features for your
                business, including apps and a website, without profit-sharing
                commitments.
              </p>
              {/* <Link href={""}>Learn more</Link> */}
            </div>
            <div className="n-box m3-h p2 ">
              <h3>Launch Swift Enterprise</h3>
              <p>
                Accelerate app development without relying on internal teams.
                Launch Swift Enterprise offers AI-powered building solutions
                with upfront pricing, eliminating concerns about escalating
                costs.
              </p>
              {/* <Link href={""}>Learn more</Link> */}
            </div>
            <div className="n-box m3-h p2 ">
              <h3>Launch Swift Cloud</h3>
              <p>
                Maximize monthly savings on cloud hosting with Launch Swift
                Cloud. Benefit from intelligent usage recommendations that
                enhance efficiency and optimize your hosting expenses.
              </p>
              {/* <Link href={""}>Learn more</Link> */}
            </div>
            {/* <div className="n-box m3-h p2 ">
              <h3>Launch Swift Now</h3>
              <p>
                Transform your app concept into a functional prototype within
                days using LaunchSwift Now. Share it effortlessly with internal
                teams and investors, quickly turning your ideas into tangible
                solutions.
              </p>
              <Link href={""}>Learn more</Link>
            </div> */}
          </div>
        </div>
      </section>
      <section className="cta py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-1 xl:grid-cols-3 gap-4 items-center">
            <div className="lg:col-span-1 xl:col-span-2">
              <div className="cta-ctn m2-h m3-h p1">
                <h3>Need Help Building Your Vision?</h3>
                <h2>
                  Break it into smaller tasks and make your vision come to life
                </h2>
                <p>In just a few minutes</p>
              </div>
            </div>
            <div className="cta-ct">
              <Link onClick={clickSignin} href={""} className="btn-b">
                Help me find a plan
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="work py-20  px-14 ">
        <div className="text-center  m2-h ">
          <h2>{`Here's How It Works`}</h2>
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
                  We connect you with a dedicated Launch Swift specialist to
                  guide you through the app creation process.
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
                  Describe your vision, and our team will help translate it into
                  a real-world application.
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
                  We automate the development processes using AI, saving you
                  valuable time and resources.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="val">
                <h1>4</h1>
              </div>
              <div className="w-ctn p2 m3-h">
                <h3>Specialists customize your app</h3>
                <p>
                  A team of experienced developers further customize it to make
                  it unique, polished, personalized, and ready for launch.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="blist">
          <li>
            <Link onClick={clickSignin} className="btn-b" href={""}>
              Speak to an expert
            </Link>
          </li>
          <li>
            <Link onClick={clickSignin} href={""} className="btn-c">
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
              <h2>Build Your Dream App, No Coding Required</h2>
              <p>
                Without being a programmer, Launch Swift will help you design
                your custom apps smoothly. Combining the simplicity of a no-code
                app builder with the technical sophistication of a development
                studio, Launch Swift ensures your app vision becomes a reality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="no-sec py-20">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 items-center">
            <div className="ai-ctn m2-h p2">
              <h2>AI at Your Fingertips</h2>
              <p>
                We bring in AI with Launch Swift for fast and affordable app
                development. AI provides reusable capabilities from the selected
                template while allowing developers to personalize it for their
                own businesses. Enjoy transparent pricing with fixed costs and
                clear timelines based on features chosen.
              </p>
              <Link onClick={clickSignin} href={""}>
                How we use AI
              </Link>
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
              <h3>Your Dream App, Made Real</h3>
              <p>
                It takes weeks, not months to turn your idea into reality using
                Launch Swift. No code is required.
              </p>
              <Link onClick={clickSignin} href={""}>
                Learn More
              </Link>
            </div>
            <div className="app-img">
              <Image className="img" src={app} />
            </div>
            <div className="an-ctn m3-h p2">
              <p>
                Our team will help throughout the process of customization so
                that the app meets your vision. You now own everything including
                code, and you finally have that dream app.
              </p>
              <h3>Dr Hassan Yasin Moodit</h3>
              <Link onClick={clickSignin} href={""}>
                Read moodit case study
              </Link>
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
              <h2>Don’t Be Shy - Say Hi!</h2>
              <p>Head to our FAQ page for in-depth answers</p>
              <Link onClick={clickSignin} href={""} className="btn-b">
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
