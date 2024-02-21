import { GoChecklist, GoRocket } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import { PiShootingStarThin } from "react-icons/pi";
import { SiStyledcomponents } from "react-icons/si";

export const sidebarData = [
  {
    name: "Essentials",
    img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    dropDown: [
      {
        id: 1,
        name: "Account Creation",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Faccount-creation.png?alt=media&token=da158207-0402-4df7-bdf7-e0c71d3f09ea",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Faccount-creation-web.png?alt=media&token=e7a7db95-d2ec-45e3-b621-9d529bf824cb",
        price: "520",
        timeline: "1.0",
        description:
          "Create an account on behalf of users. Provides authentication for the user to use the application before granting users access.",
      },
      {
        id: 2,
        name: "Facebook Login",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Ffacebook-login.png?alt=media&token=a8e30e28-a257-49a4-9adf-11610f879da8",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Ffacebook-login-web.png?alt=media&token=78922110-6467-4d55-9aac-097da46ddbd9",
        price: "450.15",
        timeline: "3.0",
        description:
          "Facebook login creates an account on behalf of users. Providing them secure and automated authentication to allow the users to gain access to the app.",
      },
      {
        id: 3,
        name: "Free Trial",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Ffree-trial.png?alt=media&token=b6dca1f3-47b0-4d76-bdd4-9f131d071a47",
        price: "1,200",
        timeline: "3.0",
        description:
          "Offer a risk-free opportunity for users to explore a free trial version of the product. It helps attract potential customers and increase conversion rates.",
      },
      {
        id: 4,
        name: "Search",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fsearch-4.png?alt=media&token=87db3216-7c4e-4887-9579-a39dd0f5e80c",
        price: "850.87",
        timeline: "2.0",
        description:
          "Allowing users the ability to find specific information or content quickly and easily. Once searched, users can select the result that best meets their requirements.",
      },
      {
        id: 5,
        name: "Settings",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fsettings.png?alt=media&token=0497a250-5aa5-4c52-8a1d-77554d0071dd",
        price: "768.06",
        timeline: "3.0",
        description:
          "Allowing users to access and interact with a list of settings of the application. These could include personal settings or settings for how they interact with the product.",
      },
      {
        id: 6,
        name: "Signup/Login",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "412.84",
        timeline: "3.0",
        description:
          "Allowing the user to sign up for your product using their name, email, and password. These details can be used for logging in to the application as well. Users can also reset passwords through the forgot password function.",
      },
      {
        id: 7,
        name: "Sorting",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "143.13",
        timeline: "3.0",
        description:
          "Sorting content based on a character user chooses. It helps users quickly access what they are looking for. Example: Sorting from 'low' to 'high' rating, A-Z, price.",
      },
      {
        id: 8,
        name: "Splash Screen",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fsplash-screen-8.png?alt=media&token=ce07f307-96cf-4c70-88bb-e78daf54647e",
        price: "369.62",
        timeline: "3.0",
        description:
          "The first screen a user sees when opening the product. It reassures them that it's launching. In most cases, this would be a company logo and loading symbol.",
      },
      {
        id: 9,
        name: "Terms And Conditions",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "237.44",
        timeline: "2.0",
        description:
          "Asking the user to confirm they agree with terms and conditions before using the product. This feature is often used for age verification or to explain what is done with user data.",
      },
      {
        id: 10,
        name: "Apple Login",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fapple-login-10.png?alt=media&token=a2a2f86d-fd9c-40d3-a550-05f97056fbd3",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fapple-login-web-10.png?alt=media&token=6f6cdfc8-6a01-46ea-821c-112425df45c7",
        price: "154.54",
        timeline: "3.0",
        description:
          "Apple login creates an account on behalf of users. Providing them secure and automated authentication to allow the users to gain access to the app.",
      },
      {
        id: 11,
        name: "Authentication in Wear",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "1,559.16",
        timeline: "3.0",
        description: "",
      },
      {
        id: 12,
        name: "Calendar",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcalender-12.png?alt=media&token=cde1fb80-5810-48fe-82e4-0aaeefb2065b",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcalender-web-12.png?alt=media&token=ad3c7cf8-9918-48ac-b4cb-869a9f7c2174",
        price: "366.47",
        timeline: "3.0",
        description:
          "Calendar module interacts with the device's system calendars helping create and edit events, reminders, and records.",
      },
      {
        id: 13,
        name: "Contacts Integration",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcontact-integration-13.png?alt=media&token=144e6076-eec1-4876-b29f-c6b51163a61b",
        price: "1,141.00",
        timeline: "3.0",
        description: "Providing access to the phone's system contacts.",
      },
      {
        id: 14,
        name: "Contacts List",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcontact-list-14.png?alt=media&token=9324450e-d877-48ed-a86c-2478b8aeb863",
        price: "455.44",
        timeline: "3.0",
        description:
          "Providing the user access to the phone's system contacts within the product.",
      },
      {
        id: 15,
        name: "Custom Favicon",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "901.11",
        timeline: "3.0",
        description: "",
      },
      {
        id: 16,
        name: "Data Saver",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fdata-saver-16.png?alt=media&token=02517fbc-1eaa-4db2-bc6c-51a6dfed991e",
        price: "1,580.88",
        timeline: "3.0",
        description:
          "Ensures users only upload/download files and media on metered networks, such as WiFi. Prevents the product from using large amounts of users' data allowance.",
      },
      {
        id: 17,
        name: "Discovery Settings",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "2,339.00",
        timeline: "2.0",
        description: "",
      },
      {
        id: 18,
        name: "Display & Theme",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fdisplay-theme-18.png?alt=media&token=32350370-20a1-4584-a55d-44b79bd9f6d3",
        price: "123.99",
        timeline: "3.0",
        description: "",
      },
      {
        id: 19,
        name: "Employee Login",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Femployee-login-19.png?alt=media&token=4704545c-6f00-4228-a722-c0e7f62adb3a",
        price: "1,705.53",
        timeline: "3.0",
        description: "",
      },
      {
        id: 20,
        name: "Feature Settings",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "937.98",
        timeline: "3.0",
        description: "",
      },
      {
        id: 21,
        name: "File Compression",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Ffile-compression-21.png?alt=media&token=ce265248-b5c1-4664-bb1a-2a301cddabbe",
        price: "941.69",
        timeline: "2.0",
        description: "",
      },
      {
        id: 22,
        name: "Google Assistant Integration",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "468.21",
        timeline: "3.0",
        description: "",
      },
      {
        id: 23,
        name: "Google Contacts Import",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fgoogle-contacts-import-23.png?alt=media&token=afcf4613-7566-4276-8dfd-33f377c21aeb",
        price: "583.33",
        timeline: "3.0",
        description: "",
      },
      {
        id: 24,
        name: "Hamburger Menu",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fhamburger-menu-24.png?alt=media&token=11b7654b-9033-4358-a3a5-2492a6450d75",
        price: "2,076.83",
        timeline: "2.0",
        description: "",
      },
      {
        id: 25,
        name: "Background Fetch",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbackground-fetch-25.png?alt=media&token=0e517e05-5b6d-40af-87aa-6ae91f59ef47",
        price: "100",
        timeline: "2.0",
        description:
          "Utilising task manager we fetch background activities from within the app even when it is not in use at an interval the team would decide.",
      },
      {
        id: 26,
        name: "Barcode Scanning",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbarcode-scanning-26.png?alt=media&token=2e156e1a-1333-4932-aa8c-ef334e9b02be",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbarcode-scanning-web-26.png?alt=media&token=be978848-8d9b-4f8b-97ce-bf9b87dd0250",
        price: "100",
        timeline: "3.0",
        description:
          "Allows scanning a variety of supported barcodes both as a standalone module and as an extension for the camera.",
      },
      {
        id: 27,
        name: "Contacts Integration",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcontact-integration-13.png?alt=media&token=144e6076-eec1-4876-b29f-c6b51163a61b",
        price: "1,141.00",
        timeline: "3.0",
        description: "Providing access to the phone's system contacts.",
      },
      {
        id: 28,
        name: "Contacts List",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcontact-list-14.png?alt=media&token=9324450e-d877-48ed-a86c-2478b8aeb863",
        price: "455.44",
        timeline: "3.0",
        description:
          "Providing the user access to the phone's system contacts within the product.",
      },
      {
        id: 29,
        name: "Custom Favicon",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "901.11",
        timeline: "3.0",
        description: "",
      },
      {
        id: 30,
        name: "Data Saver",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fdata-saver-16.png?alt=media&token=02517fbc-1eaa-4db2-bc6c-51a6dfed991e",
        price: "1,580.88",
        timeline: "3.0",
        description:
          "Ensures users only upload/download files and media on metered networks, such as WiFi. Prevents the product from using large amounts of users' data allowance.",
      },
      {
        id: 31,
        name: "Discovery Settings",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "2,339.00",
        timeline: "2.0",
        description: "",
      },
      {
        id: 32,
        name: "Display & Theme",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fdisplay-theme-18.png?alt=media&token=32350370-20a1-4584-a55d-44b79bd9f6d3",
        price: "123.99",
        timeline: "3.0",
        description: "",
      },
      {
        id: 33,
        name: "Employee Login",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Femployee-login-19.png?alt=media&token=4704545c-6f00-4228-a722-c0e7f62adb3a",
        price: "1,705.53",
        timeline: "3.0",
        description: "",
      },
      {
        id: 34,
        name: "Feature Settings",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "937.98",
        timeline: "3.0",
        description: "",
      },
      {
        id: 35,
        name: "File Compression",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Ffile-compression-21.png?alt=media&token=ce265248-b5c1-4664-bb1a-2a301cddabbe",
        price: "941.69",
        timeline: "2.0",
        description: "",
      },
      {
        id: 36,
        name: "Google Assistant Integration",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "468.21",
        timeline: "3.0",
        description: "",
      },
      {
        id: 37,
        name: "Google Contacts Import",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fgoogle-contacts-import-23.png?alt=media&token=afcf4613-7566-4276-8dfd-33f377c21aeb",
        price: "583.33",
        timeline: "3.0",
        description: "",
      },
      {
        id: 38,
        name: "Hamburger Menu",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fhamburger-menu-24.png?alt=media&token=11b7654b-9033-4358-a3a5-2492a6450d75",
        price: "2,076.83",
        timeline: "2.0",
        description: "",
      },
      {
        id: 39,
        name: "Background Fetch",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbackground-fetch-25.png?alt=media&token=0e517e05-5b6d-40af-87aa-6ae91f59ef47",
        price: "200",
        timeline: "2.0",
        description:
          "Utilising task manager we fetch background activities from within the app even when it is not in use at an interval the team would decide.",
      },
      {
        id: 40,
        name: "Barcode Scanning",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbarcode-scanning-26.png?alt=media&token=2e156e1a-1333-4932-aa8c-ef334e9b02be",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbarcode-scanning-web-26.png?alt=media&token=be978848-8d9b-4f8b-97ce-bf9b87dd0250",
        price: "100",
        timeline: "3.0",
        description:
          "Allows scanning a variety of supported barcodes both as a standalone module and as an extension for the camera.",
      },
    ],
  },
  // {
  //   name: "Essentials",
  //   img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd274188f3ac56ef461c73/Essentials.svg",
  //   dropDown: [
  //     {
  //       name: "Online backup",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
  //       mobile:
  //         "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
  //       price: "45,045.94",
  //       timeline: "3.0",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Request Management",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd154688f3ac61106b30ca/Request_20Management.png",
  //       price: "59,951.90",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/289/edd1e5da-35df-447c-b94d-72e49c5a9739.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Specific Settings",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd175f88f3ac61106b391f/Service-specific_20Settings_20_Admin_.png",
  //       price: "18,195.26",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/1769/911fae96-bb10-4af5-9725-76865f694f78.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "SMS",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/583e6fd65cba2a4656829ce9/SMS.png",
  //       price: "16,806.06",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/573/0b452c91-aac8-4c30-b24e-231604b25ad7.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Task List",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/583e6d2d5cba2a4656829ce0/Task_20Groups.png",
  //       price: "48,057.92",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/585/f1a9d692-600b-4ae2-be97-e6f9799ec0a8.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Text Comparison",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd173b88f3ac61106b38a8/Text_20Comparison.png",
  //       price: "47,491.92",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/939/cd971e0d-3126-441d-b921-a3a7d0e27c7c.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //   ],
  // },
  // {
  //   name: "Content",
  //   img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd271588f3ac56ef461c64/Content.svg",
  // },
  // {
  //   name: "Social",
  //   img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd272f88f3ac56ef461c6d/Social.svg",
  //   dropDown: [
  //     {
  //       name: "Ad-hoc Reporting",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd179088f3ac61106b39bd/Ad_20Hoc_20Reporting.png",
  //       price: "7,160.36",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/999/41346089-8f8b-4066-86a8-9c87b7627870.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Archive",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd15d288f3ac61106b31c0/Archive.png",
  //       price: "24,789.61",
  //       timeline: "3.0",
  //       mobile:
  //         "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd15d288f3ac61106b31c0/Archive.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Content Approval",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd178c88f3ac61106b39b3/Review_20and_20approval.png",
  //       price: "20,155.72",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/329/c2d782cd-5144-44b8-8982-3023172902d9.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Data Encryption",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd15e488f3ac61106b324c/Data_20Encryption.png",
  //       price: "32,587.71",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/1785/f5ae9781-3266-42bb-9587-84b5bfc789a9.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Email Notifications",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/583e707d5cba2a4656829cf0/Email_20Notifications.png",
  //       price: "21,229.12",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/1747/084e1683-97de-416e-8402-4cc61b632eaf.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Multi-Level Approval",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd179388f3ac61106b39cb/Multi-Level_20Approval.png",
  //       price: "31,030.54",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/1781/9a2cd66d-bfb8-49c7-af85-c800da6b1c50.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Notification Settings",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/5c5000ba1f0c64172a7f77ec/Notification_20Settings.png",
  //       price: "10,104.98",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/579/6c42b92a-e8be-49c9-a207-684937f95fe6.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //   ],
  // },
  // {
  //   name: "Admin",
  //   img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd273e88f3ac56ef461c72/Admin_Console.svg",
  //   dropDown: [
  //     {
  //       name: "In-App Notifications",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/57e0aff95cba2a27d6af2785/Notifications.png",
  //       price: "34,921.71",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/33/e30a0f9d-cdd0-4d9d-832c-bfa837b81329.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Roles and Permissions",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd155488f3ac61106b30d7/Roles_20_26_20Permissions.png",
  //       price: "53,376.80",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/1743/142812b1-23fe-4250-a795-e0feb5a4775d.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Settings",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/583e6f7a5cba2a4656829ce8/Settings.png",
  //       price: "38,394.73",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/35/614aab62-e983-4870-b3ed-4ff29a57d32f.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Terms And Conditions",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/5c5000bc1f0c64172a7f7890/Team_20Builder.png",
  //       price: "11,869.48",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/571/339f3f33-81e8-45bf-ab82-ac5eadb7a10c.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //   ],
  // },
  // {
  //   name: "Ecommerce",
  //   dropDown: [],
  //   img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd272488f3ac56ef461c69/Ecommerce.svg",
  // },
];

export const sidebarDataArabic = [
  {
    name: "أساسيات",
    img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/24/medical-folder.png",
    dropDown: [
      {
        id: 1,
        name: "إنشاء حساب",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Faccount-creation.png?alt=media&token=da158207-0402-4df7-bdf7-e0c71d3f09ea",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Faccount-creation-web.png?alt=media&token=e7a7db95-d2ec-45e3-b621-9d529bf824cb",
        price: "520",
        timeline: "1.0",
        description:
          "إنشاء حساب نيابة عن المستخدمين. يوفر المصادقة للمستخدم لاستخدام التطبيق قبل منح المستخدمين الوصول.",
      },
      {
        id: 2,
        name: "تسجيل الدخول باستخدام فيسبوك",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Ffacebook-login.png?alt=media&token=a8e30e28-a257-49a4-9adf-11610f879da8",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Ffacebook-login-web.png?alt=media&token=78922110-6467-4d55-9aac-097da46ddbd9",
        price: "450.15",
        timeline: "3.0",
        description:
          "تسجيل الدخول باستخدام فيسبوك يقوم بإنشاء حساب نيابة عن المستخدمين، مما يوفر لهم مصادقة آمنة وتلقائية للوصول إلى التطبيق.",
      },
      {
        id: 3,
        name: "تجربة مجانية",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Ffree-trial.png?alt=media&token=b6dca1f3-47b0-4d76-bdd4-9f131d071a47",
        price: "1,200",
        timeline: "3.0",
        description:
          "تقديم فرصة خالية من المخاطر للمستخدمين لاستكشاف نسخة تجريبية مجانية من المنتج. يساعد في جذب العملاء المحتملين وزيادة معدل التحويل.",
      },
      {
        id: 4,
        name: "البحث",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fsearch-4.png?alt=media&token=87db3216-7c4e-4887-9579-a39dd0f5e80c",
        price: "850.87",
        timeline: "2.0",
        description:
          "السماح للمستخدمين بالبحث عن معلومات أو محتوى معين بسرعة وسهولة. بمجرد البحث، يمكن للمستخدمين اختيار النتيجة التي تلبي احتياجاتهم بشكل أفضل.",
      },
      {
        id: 5,
        name: "الإعدادات",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fsettings.png?alt=media&token=0497a250-5aa5-4c52-8a1d-77554d0071dd",
        price: "768.06",
        timeline: "3.0",
        description:
          "السماح للمستخدمين بالوصول والتفاعل مع قائمة الإعدادات للتطبيق. يمكن أن تشمل هذه الإعدادات الشخصية أو الإعدادات المتعلقة بكيفية تفاعلهم مع المنتج.",
      },
      {
        id: 6,
        name: "تسجيل الدخول/التسجيل",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "412.84",
        timeline: "3.0",
        description:
          "السماح للمستخدم بالتسجيل في المنتج باستخدام اسمهم وبريدهم الإلكتروني وكلمة المرور. يمكن استخدام هذه التفاصيل لتسجيل الدخول إلى التطبيق أيضًا. يمكن للمستخدمين أيضًا إعادة تعيين كلمات المرور من خلال وظيفة نسيت كلمة المرور.",
      },
      {
        id: 7,
        name: "الفرز",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "143.13",
        timeline: "3.0",
        description:
          "فرز المحتوى استنادًا إلى الحرف الذي يختاره المستخدم. يساعد المستخدمين في الوصول بسرعة إلى ما يبحثون عنه. على سبيل المثال: الفرز من 'منخفض' إلى 'مرتفع' تقييمًا، A-Z، السعر.",
      },
      {
        id: 8,
        name: "شاشة البداية",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fsplash-screen-8.png?alt=media&token=ce07f307-96cf-4c70-88bb-e78daf54647e",
        price: "369.62",
        timeline: "3.0",
        description:
          "أول شاشة يراها المستخدم عند فتح المنتج. يطمئنهم بأنه يتم الإطلاق. في معظم الحالات، سيكون هذا شعار الشركة ورمز التحميل.",
      },
      {
        id: 9,
        name: "الشروط والأحكام",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "237.44",
        timeline: "2.0",
        description:
          "طلب من المستخدم تأكيد موافقته على الشروط والأحكام قبل استخدام المنتج. يستخدم هذا الميزة غالبًا للتحقق من العمر أو شرح ما يتم فعله ببيانات المستخدم.",
      },
      {
        id: 10,
        name: "تسجيل الدخول باستخدام Apple",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fapple-login-10.png?alt=media&token=a2a2f86d-fd9c-40d3-a550-05f97056fbd3",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fapple-login-web-10.png?alt=media&token=6f6cdfc8-6a01-46ea-821c-112425df45c7",
        price: "154.54",
        timeline: "3.0",
        description:
          "تسجيل الدخول باستخدام Apple يقوم بإنشاء حساب نيابة عن المستخدمين، مما يوفر لهم مصادقة آمنة وتلقائية للوصول إلى التطبيق.",
      },
      {
        id: 11,
        name: "المصادقة في الساعة",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "1,559.16",
        timeline: "3.0",
        description: "",
      },
      {
        id: 12,
        name: "التقويم",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcalender-12.png?alt=media&token=cde1fb80-5810-48fe-82e4-0aaeefb2065b",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcalender-web-12.png?alt=media&token=ad3c7cf8-9918-48ac-b4cb-869a9f7c2174",
        price: "366.47",
        timeline: "3.0",
        description:
          "يتفاعل وحدة التقويم مع تقاويم النظام في الجهاز مساعدة في إنشاء وتحرير الفعاليات والتذكيرات والسجلات.",
      },
      {
        id: 13,
        name: "تكامل جهات الاتصال",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcontact-integration-13.png?alt=media&token=144e6076-eec1-4876-b29f-c6b51163a61b",
        price: "1,141.00",
        timeline: "3.0",
        description: "توفير الوصول إلى جهات اتصال نظام الهاتف.",
      },
      {
        id: 14,
        name: "قائمة جهات الاتصال",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcontact-list-14.png?alt=media&token=9324450e-d877-48ed-a86c-2478b8aeb863",
        price: "455.44",
        timeline: "3.0",
        description:
          "توفير الوصول لمستخدم إلى جهات اتصال نظام الهاتف ضمن المنتج.",
      },
      {
        id: 15,
        name: "شعار مخصص",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "901.11",
        timeline: "3.0",
        description: "",
      },
      {
        id: 16,
        name: "موفر البيانات",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fdata-saver-16.png?alt=media&token=02517fbc-1eaa-4db2-bc6c-51a6dfed991e",
        price: "1,580.88",
        timeline: "3.0",
        description:
          "يضمن للمستخدمين تحميل وتنزيل الملفات ووسائط الإعلام فقط على شبكات الأمترة، مثل شبكات الواي فاي. يمنع المنتج من استخدام كميات كبيرة من حصة بيانات المستخدمين.",
      },
      {
        id: 17,
        name: "إعدادات الاكتشاف",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "2,339.00",
        timeline: "2.0",
        description: "",
      },
      {
        id: 18,
        name: "عرض وسمة",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fdisplay-theme-18.png?alt=media&token=32350370-20a1-4584-a55d-44b79bd9f6d3",
        price: "123.99",
        timeline: "3.0",
        description: "",
      },
      {
        id: 19,
        name: "تسجيل الدخول للموظفين",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Femployee-login-19.png?alt=media&token=4704545c-6f00-4228-a722-c0e7f62adb3a",
        price: "1,705.53",
        timeline: "3.0",
        description: "",
      },
      {
        id: 20,
        name: "إعدادات الميزة",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "937.98",
        timeline: "3.0",
        description: "",
      },
      {
        id: 21,
        name: "ضغط الملف",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Ffile-compression-21.png?alt=media&token=ce265248-b5c1-4664-bb1a-2a301cddabbe",
        price: "941.69",
        timeline: "2.0",
        description: "",
      },
      {
        id: 22,
        name: "تكامل Google Assistant",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "468.21",
        timeline: "3.0",
        description: "",
      },
      {
        id: 23,
        name: "استيراد جهات اتصال Google",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fgoogle-contacts-import-23.png?alt=media&token=afcf4613-7566-4276-8dfd-33f377c21aeb",
        price: "583.33",
        timeline: "3.0",
        description: "",
      },
      {
        id: 24,
        name: "قائمة الهمبرغر",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fhamburger-menu-24.png?alt=media&token=11b7654b-9033-4358-a3a5-2492a6450d75",
        price: "2,076.83",
        timeline: "2.0",
        description: "",
      },
      {
        id: 25,
        name: "استرجاع الخلفية",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbackground-fetch-25.png?alt=media&token=0e517e05-5b6d-40af-87aa-6ae91f59ef47",
        price: "100",
        timeline: "2.0",
        description:
          "استخدام مدير المهام لاسترجاع الأنشطة الخلفية من داخل التطبيق حتى عندما لا يكون قيد الاستخدام بانتظام بفاصل زمني يحدده الفريق.",
      },
      {
        id: 26,
        name: "فحص الباركود",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbarcode-scanning-26.png?alt=media&token=2e156e1a-1333-4932-aa8c-ef334e9b02be",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbarcode-scanning-web-26.png?alt=media&token=be978848-8d9b-4f8b-97ce-bf9b87dd0250",
        price: "100",
        timeline: "3.0",
        description:
          "يسمح بفحص مجموعة متنوعة من الباركود المدعومة سواء كوحدة مستقلة أو كامتداد للكاميرا.",
      },
      {
        id: 27,
        name: "تكامل جهات الاتصال",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcontact-integration-13.png?alt=media&token=144e6076-eec1-4876-b29f-c6b51163a61b",
        price: "1,141.00",
        timeline: "3.0",
        description: "توفير الوصول إلى جهات اتصال نظام الهاتف.",
      },
      {
        id: 28,
        name: "قائمة جهات الاتصال",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fcontact-list-14.png?alt=media&token=9324450e-d877-48ed-a86c-2478b8aeb863",
        price: "455.44",
        timeline: "3.0",
        description:
          "توفير وصول المستخدم إلى جهات اتصال نظام الهاتف داخل المنتج.",
      },
      {
        id: 29,
        name: "رمز مخصص",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "901.11",
        timeline: "3.0",
        description: "",
      },
      {
        id: 30,
        name: "حافظ على البيانات",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fdata-saver-16.png?alt=media&token=02517fbc-1eaa-4db2-bc6c-51a6dfed991e",
        price: "1,580.88",
        timeline: "3.0",
        description:
          "يضمن للمستخدمين تحميل وتنزيل الملفات ووسائط الإعلام فقط على الشبكات المتداولة، مثل WiFi. يمنع المنتج من استخدام كميات كبيرة من حصة بيانات المستخدم.",
      },
      {
        id: 31,
        name: "إعدادات الاكتشاف",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "2,339.00",
        timeline: "2.0",
        description: "",
      },
      {
        id: 32,
        name: "عرض وسمة",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fdisplay-theme-18.png?alt=media&token=32350370-20a1-4584-a55d-44b79bd9f6d3",
        price: "123.99",
        timeline: "3.0",
        description: "",
      },
      {
        id: 33,
        name: "تسجيل الدخول للموظفين",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Femployee-login-19.png?alt=media&token=4704545c-6f00-4228-a722-c0e7f62adb3a",
        price: "1,705.53",
        timeline: "3.0",
        description: "",
      },
      {
        id: 34,
        name: "إعدادات الميزات",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "937.98",
        timeline: "3.0",
        description: "",
      },
      {
        id: 35,
        name: "ضغط الملفات",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Ffile-compression-21.png?alt=media&token=ce265248-b5c1-4664-bb1a-2a301cddabbe",
        price: "941.69",
        timeline: "2.0",
        description: "",
      },
      {
        id: 36,
        name: "تكامل مساعد Google",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
        price: "468.21",
        timeline: "3.0",
        description: "",
      },
      {
        id: 37,
        name: "استيراد جهات الاتصال من Google",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fgoogle-contacts-import-23.png?alt=media&token=afcf4613-7566-4276-8dfd-33f377c21aeb",
        price: "583.33",
        timeline: "3.0",
        description: "",
      },
      {
        id: 38,
        name: "قائمة هامبورجر",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fhamburger-menu-24.png?alt=media&token=11b7654b-9033-4358-a3a5-2492a6450d75",
        price: "2,076.83",
        timeline: "2.0",
        description: "",
      },
      {
        id: 39,
        name: "استحضار الخلفية",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbackground-fetch-25.png?alt=media&token=0e517e05-5b6d-40af-87aa-6ae91f59ef47",
        price: "200",
        timeline: "2.0",
        description:
          "استخدام مدير المهام لاستحضار الأنشطة في الخلفية من داخل التطبيق حتى عندما لا يكون في الاستخدام في فاصل زمني يحدده الفريق.",
      },
      {
        id: 40,
        name: "فحص الباركود",
        icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
        mobile:
          "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbarcode-scanning-26.png?alt=media&token=2e156e1a-1333-4932-aa8c-ef334e9b02be",
        web: "https://firebasestorage.googleapis.com/v0/b/app-builder-c776a.appspot.com/o/features%2Fbarcode-scanning-web-26.png?alt=media&token=be978848-8d9b-4f8b-97ce-bf9b87dd0250",
        price: "100",
        timeline: "3.0",
        description:
          "يسمح بفحص مجموعة متنوعة من رموز الباركود المدعومة كوحدة مستقلة وكاملة للكاميرا.",
      },
    ],
  },
  // {
  //   name: "أساسيات",
  //   img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd274188f3ac56ef461c73/Essentials.svg",
  //   dropDown: [
  //     {
  //       name: "Online backup",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd150a88f3ac61106b3074/Online_20backup.png",
  //       mobile:
  //         "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd150a88f3ac61106b3074/Online_20backup.png",
  //       price: "45,045.94",
  //       timeline: "3.0",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Request Management",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd154688f3ac61106b30ca/Request_20Management.png",
  //       price: "59,951.90",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/289/edd1e5da-35df-447c-b94d-72e49c5a9739.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Specific Settings",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd175f88f3ac61106b391f/Service-specific_20Settings_20_Admin_.png",
  //       price: "18,195.26",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/1769/911fae96-bb10-4af5-9725-76865f694f78.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "SMS",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/583e6fd65cba2a4656829ce9/SMS.png",
  //       price: "16,806.06",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/573/0b452c91-aac8-4c30-b24e-231604b25ad7.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Task List",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/583e6d2d5cba2a4656829ce0/Task_20Groups.png",
  //       price: "48,057.92",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/585/f1a9d692-600b-4ae2-be97-e6f9799ec0a8.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Text Comparison",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd173b88f3ac61106b38a8/Text_20Comparison.png",
  //       price: "47,491.92",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/939/cd971e0d-3126-441d-b921-a3a7d0e27c7c.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //   ],
  // },
  // {
  //   name: "محتوى",
  //   img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd271588f3ac56ef461c64/Content.svg",
  // },
  // {
  //   name: "اجتماعي",
  //   img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd272f88f3ac56ef461c6d/Social.svg",
  //   dropDown: [
  //     {
  //       name: "Ad-hoc Reporting",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd179088f3ac61106b39bd/Ad_20Hoc_20Reporting.png",
  //       price: "7,160.36",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/999/41346089-8f8b-4066-86a8-9c87b7627870.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Archive",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd15d288f3ac61106b31c0/Archive.png",
  //       price: "24,789.61",
  //       timeline: "3.0",
  //       mobile:
  //         "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_android_image/59fd15d288f3ac61106b31c0/Archive.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Content Approval",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd178c88f3ac61106b39b3/Review_20and_20approval.png",
  //       price: "20,155.72",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/329/c2d782cd-5144-44b8-8982-3023172902d9.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Data Encryption",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd15e488f3ac61106b324c/Data_20Encryption.png",
  //       price: "32,587.71",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/1785/f5ae9781-3266-42bb-9587-84b5bfc789a9.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Email Notifications",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/583e707d5cba2a4656829cf0/Email_20Notifications.png",
  //       price: "21,229.12",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/1747/084e1683-97de-416e-8402-4cc61b632eaf.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Multi-Level Approval",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd179388f3ac61106b39cb/Multi-Level_20Approval.png",
  //       price: "31,030.54",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/1781/9a2cd66d-bfb8-49c7-af85-c800da6b1c50.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Notification Settings",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/5c5000ba1f0c64172a7f77ec/Notification_20Settings.png",
  //       price: "10,104.98",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/579/6c42b92a-e8be-49c9-a207-684937f95fe6.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //   ],
  // },
  // {
  //   name: "مسؤل",
  //   img: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature_bundle/background/59fd273e88f3ac56ef461c72/Admin_Console.svg",
  //   dropDown: [
  //     {
  //       name: "In-App Notifications",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/57e0aff95cba2a27d6af2785/Notifications.png",
  //       price: "34,921.71",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/33/e30a0f9d-cdd0-4d9d-832c-bfa837b81329.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Roles and Permissions",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/59fd155488f3ac61106b30d7/Roles_20_26_20Permissions.png",
  //       price: "53,376.80",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/1743/142812b1-23fe-4250-a795-e0feb5a4775d.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Settings",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/583e6f7a5cba2a4656829ce8/Settings.png",
  //       price: "38,394.73",
  //       timeline: "3.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/35/614aab62-e983-4870-b3ed-4ff29a57d32f.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //     {
  //       name: "Terms And Conditions",
  //       icon: "https://bstudio-assets.azureedge.net/assets-builder/uploads/feature/new_icon/5c5000bc1f0c64172a7f7890/Team_20Builder.png",
  //       price: "11,869.48",
  //       timeline: "2.0",
  //       mobile:
  //         "https://builderbuckets.blob.core.windows.net/builder-now-production/uploads/production/feature_figma/image/571/339f3f33-81e8-45bf-ab82-ac5eadb7a10c.png",
  //       category: "Healthcare compliance",
  //       description:
  //         "Capture actions performed by users inside the product, storing the raw data to use in product analytics. This helps to get a better insight into how users use the product.",
  //     },
  //   ],
  // },
];

export const speedLabels = ["Relaxed", "Slow", "Standard", "Fast", "Speedy"];

export const priceDuration = [
  {
    name: "Relaxed",
    duration: 20,
    price: "$ 20,000",
    description: `Our most budget-friendly option for those who aren't in a hurry`,
  },
  {
    name: "Slow",
    duration: 18,
    price: "$ 20,000",
    description: `For those with a fixed long-term plan who want to keep costs down`,
  },
  {
    name: "Standard",
    duration: 16,
    price: "$ 20,000",
    description: `The perfect middle ground for anyone with a modest budget and medium-term deadlines`,
  },
  {
    name: "Fast",
    duration: 14,
    price: "$ 20,000",
    description: `We put your app build on turbo charge for a few extra bucks`,
  },
  {
    name: "Speedy",
    duration: 12,
    price: "$ 20,000",
    description: `We build your app at the speed of light for a premium price`,
  },
];

export const initialPhases = [
  {
    name: "Product Roadmap",
    duration: "2 Weeks",
    delivery: "27-Dec-2023",
    icon: <GoChecklist className="text-4xl text-black" />,
    selected: true,
    description:
      "Why do you need a product roadmap? Add it and we help you define the use cases for every feature in your Buildcard. If you skip it, you’ll need to know exactly what you expect each feature to do before we can start building your app.It also gives you an in-depth view of where your product is going. Includes a product timeline so everyone can see all the key dates on the way to get you there.",
    more: "Can help you secure funding, improve collaboration and streamline the whole app building process. Also useful for making long-term strategic decisions and planning a successful launch.",
    platform: ["ios"],
    advanced: {
      sliderValue: 2,
    },
  },
  {
    name: "Design",
    duration: "7 Weeks",
    delivery: "12-Feb-2024",
    icon: <SiStyledcomponents className="text-4xl text-black" />,
    selected: false,
    description:
      "Trust us to do the wireframing of your concept and design a seamless experience. Get a fully scalable UI/UX",
    more: "We combine visual principles, data, color psychology, and decades worth of experience to create aesthetic interfaces that will drive the growth of your product. We are experts in creating human-centric designs that allow customers to intuitively use your product and have a great product experience.",
    platform: ["ios"],
    advanced: {
      sliderValue: 1,
    },
  },
  {
    name: "Professional Prototype",
    duration: "3 Weeks",
    delivery: "26-Feb-2024",
    icon: <PiShootingStarThin className="text-4xl text-black" />,
    selected: false,
    description:
      "Get a fully functional design prototype to test the design hypothesis and end-user journey. This includes designs for prototypes.",
    more: "Prototypes are realistic design representations of your ideas. We design interactive prototypes for iPhone, iPad, Android, and Web. Creation of prototypes is more specific, measurable, quick, and intensive than just describing the design. Test how the user will interact with an environment comparable to the final product.",
    platform: ["ios"],
    advanced: {
      sliderValue: 3,
    },
  },
  {
    name: "MVP",
    duration: "7 Weeks",
    delivery: "13-Apr-2024",
    icon: <IoCodeSlashOutline className="text-4xl text-black" />,
    selected: true,
    description:
      "Ship the first build of your idea and get early adopters to try out your product",
    more: "We help design a Minimum Viable Product as a proof of concept to satisfy early customers and provide feedback for future development. It’s an easy way to build a product with a minimum set of features to test the market. Collect the maximum amount of validated learning about your customers with the least effort.",
    platform: ["ios"],
    showPlatform: true,
    features: 32,
    advanced: {
      sliderValue: 4,
    },
  },
  {
    name: "Full Build",
    duration: "4 Weeks",
    delivery: "12-Jun-2024",
    icon: <GoRocket className="text-4xl text-black" />,
    selected: false,
    description:
      "We will do end to end designing and development of your idea. Get a market-ready product",
    more: "We build a full-fledged product based on the product roadmap and the features laid out in the specification document. We will also perfect the product based on user feedback received on the Minimum Viable Product. We will ship a fully mature, responsive, scalable, business-ready and a user-friendly product.",
    platform: ["ios"],
    advanced: {
      sliderValue: 5,
    },
  },
];

export const numOfUsers = [
  { users: "0-500", minPrice: 150, maxPrice: 230 },
  { users: "500-5k", minPrice: 225, maxPrice: 340 },
  { users: "5k-50k", minPrice: 490, maxPrice: 735 },
  { users: "50k+", maxPrice: 1000 },
];
