import { GoChecklist, GoRocket } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import { PiShootingStarThin } from "react-icons/pi";
import { SiStyledcomponents } from "react-icons/si";
import essentials from "../images/icons/essentials.png";
import adminPanel from "../images/icons/admin-panel.png";
import content from "../images/icons/content.png";
import customerInsight from "../images/icons/customer-insight.png";
import financePayments from "../images/icons/finance-payments.png";
import photosVideos from "../images/icons/photos-videos.png";
import productivity from "../images/icons/productivity.png";
import projectManagement from "../images/icons/project-management.png";
import securityPrivacy from "../images/icons/security-privacy.png";
import socials from "../images/icons/socials.png";
import chat from "../images/icons/chat.png";
import share from "../images/icons/share.png";
import reviews from "../images/icons/reviews.png";
import audiovideo from "../images/icons/audiovideo.png";
import comnoti from "../images/icons/comnoti.png";
import tools from "../images/icons/tools.png";
import filemanagement from "../images/icons/filemanagement.png";
import camera from "../images/icons/camera.png";

export const sidebarData = [
  {
    name: "Essentials",
    img: essentials,
    dropDown: [
      {
        id: 1,
        name: "Signup/login with email",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "412.84",
        timeline: "2",
        description:
          "Users sign up on the application using their name, email, and password. They can then use these details to log in. Users can also reset passwords through the forgot password function.",
      },
      {
        id: 2,
        name: "Apple Login",
        icon: `http://launchswift.io/assets/icons/login-with-apple.png`,
        mobile: "http://launchswift.io/assets/mobile/login-with-apple.png",
        web: "http://launchswift.io/assets/web/",
        price: "120",
        timeline: "1.5",
        description:
          "Users can easily access the application using their Apple account. No need to create an account, with simply a click of button their account would be created using their existing Apple credentials to log in and sign up. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 3,
        name: "Google login",
        icon: `http://launchswift.io/assets/icons/login-with-google.png`,
        mobile: "http://launchswift.io/assets/mobile/login-with-google.png",
        web: "http://launchswift.io/assets/web/",
        price: "340.00",
        timeline: "2",
        description:
          "Users can easily access the application using their Google account. No need to create an account, with simply a click of button their account would be created using their existing Google credentials to log in and sign up. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 4,
        name: "Facebook login",
        icon: `http://launchswift.io/assets/icons/login-with-facebook.png`,
        mobile: "http://launchswift.io/assets/mobile/login-with-facebook.png",
        web: "http://launchswift.io/assets/web/",
        price: "720.00",
        timeline: "3",
        description:
          "Users can easily access the application using their Facebook account. No need to create an account, with simply a click of button their account would be created using their existing Facebook credentials to log in and sign up. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 5,
        name: "Signup/login with phone number",
        icon: `http://launchswift.io/assets/icons/login-with-phone.png`,
        mobile: "http://launchswift.io/assets/mobile/login-with-phone.png",
        web: "http://launchswift.io/assets/web/phone-login.png",
        price: "278.00",
        timeline: "1.5",
        description: "",
      },
      {
        id: 6,
        name: "OTP verification",
        icon: "http://launchswift.io/assets/icons/OTP-verification.png",
        mobile: "http://launchswift.io/assets/mobile/OTP-verification.png",
        web: "http://launchswift.io/assets/web/OTP-verification.png",
        price: "142.00",
        timeline: "1",
        description: "",
      },
      {
        id: 7,
        name: "Admin login",
        icon: "http://launchswift.io/assets/icons/admin-dashboard.png",
        mobile: "http://launchswift.io/assets/mobile/admin-dashboard.png",
        web: "http://launchswift.io/assets/web/admin-dashboard.png",
        price: "350.00",
        timeline: "3",
        description: "",
      },
      {
        id: 8,
        name: "Employee login",
        icon: "http://launchswift.io/assets/icons/employee-login.png",
        mobile: "http://launchswift.io/assets/mobile/employee-login.png",
        web: "http://launchswift.io/assets/web/employee-login.png",
        price: "570.00",
        timeline: "3",
        description: "",
      },
      {
        id: 9,
        name: "App feedback",
        icon: "http://launchswift.io/assets/icons/app-feedback.png",
        mobile: "http://launchswift.io/assets/mobile/app-feedback.png",
        web: "http://launchswift.io/assets/web/app-feedback.png",
        price: "240.00",
        timeline: "1",
        description:
          "Allows users to give and receive feedback on a product, service, or performance. Useful for businesses or individuals looking to improve their offerings or performance by gathering feedback from their customers or peers.",
      },
      {
        id: 10,
        name: "Account creation",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "520.00",
        timeline: "2",
        description:
          "Create an account on behalf of users. Provide this information manually or send it automatically with the email notifications feature. Allows for authentication before granting users access.",
      },
      {
        id: 11,
        name: "Splash screens",
        icon: "http://launchswift.io/assets/icons/splash-screen.png",
        mobile: "http://launchswift.io/assets/mobile/splash-screen.png",
        web: "http://launchswift.io/assets/web/",
        price: "250.00",
        timeline: "1.5",
        description: "",
      },
      {
        id: 12,
        name: "Hamburger menu and drawer",
        icon: "http://launchswift.io/assets/icons/hamburger-menu-and-drawer.png",
        mobile:
          "http://launchswift.io/assets/mobile/hamburger-menu-and-drawer.png",
        web: "http://launchswift.io/assets/web/hamburger-menu-drawer.png",
        price: "1481.00",
        timeline: "1.5",
        description: "",
      },
      {
        id: 13,
        name: "Settings",
        icon: "http://launchswift.io/assets/icons/settings.png",
        mobile: "http://launchswift.io/assets/mobile/setting.png",
        web: "http://launchswift.io/assets/web/privacy-settings.png",
        price: "768.07",
        timeline: "3",
        description:
          "Allowing users to access and interact with a list of settings of the application. These could include personal settings or settings for how they interact with the product.",
      },
      {
        id: 14,
        name: "Searchbar with fields popup",
        icon: "http://launchswift.io/assets/icons/searchbar-popup.png",
        mobile: "http://launchswift.io/assets/mobile/searchbar-popup.png",
        web: "http://launchswift.io/assets/web/searchbar-popup.png",
        price: "850.87",
        timeline: "2",
        description:
          "Allowing users the ability to find specific information or content quickly and easily. Once searched, users can select the result that best meets their requirements.",
      },
      {
        id: 15,
        name: "Terms and Conditions",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "234.44",
        timeline: "2",
        description:
          "Asking the user to confirm they agree with terms and conditions before using the product. This feature is often used for age verification or to explain what is done with user data.",
      },
    ],
  },
  {
    name: "Security",
    dropDown: [
      {
        id: 16,
        name: "OTP sending through Twilio",
        icon: "http://launchswift.io/assets/icons/OTP-verification.png",
        mobile: "http://launchswift.io/assets/mobile/OTP-verification.png",
        web: "http://launchswift.io/assets/web/OTP-verification.png",
        price: "547.00",
        timeline: "2",
        description: "",
      },
      {
        id: 17,
        name: "Two-Factor Authentication",
        icon: "http://launchswift.io/assets/icons/two-factor-auth.png",
        mobile: "http://launchswift.io/assets/mobile/two-factor-auth.png",
        web: "http://launchswift.io/assets/web/two-factor-auth.png",
        price: "288.00",
        timeline: "2",
        description: "",
      },
      {
        id: 18,
        name: "Single Device Login",
        icon: "http://launchswift.io/assets/icons/employee-login.png",
        mobile: "http://launchswift.io/assets/mobile/employee-login.png",
        web: "http://launchswift.io/assets/web/employee-login.png",
        price: "987.00",
        timeline: "2.5",
        description: "",
      },
      {
        id: 19,
        name: "Know Your Customer (KYC) Verification",
        icon: "http://launchswift.io/assets/icons/kyc-verification.png",
        mobile: "http://launchswift.io/assets/mobile/kyc-verification.png",
        web: "http://launchswift.io/assets/web/kyc-verification.png",
        price: "623.00",
        timeline: "3",
        description:
          "Allows you to carry out Know Your Customer verification on your users.",
      },
      {
        id: 20,
        name: "Passcode lock",
        icon: "http://launchswift.io/assets/icons/passcode-lock.png",
        mobile: "http://launchswift.io/assets/mobile/passcode-lock.png",
        web: "http://launchswift.io/assets/web/passcode-lock.png",
        price: "453.00",
        timeline: "2",
        description:
          "A security feature that requires users to enter a passcode or PIN to access the product. Preventing unauthorised access to their account.",
      },
      {
        id: 21,
        name: "FaceID Authentication",
        icon: "http://launchswift.io/assets/icons/face-id.png",
        mobile: "http://launchswift.io/assets/mobile/face-id.png",
        web: "http://launchswift.io/assets/web/face-id.png",
        price: "698.00",
        timeline: "2",
        description:
          "Offer FaceID authentication as a payment method. Gives users a fast and secure way to checkout without having to login to external platforms. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 22,
        name: "Fingerprint authentication",
        icon: "http://launchswift.io/assets/icons/fingerprint-auth.png",
        mobile: "http://launchswift.io/assets/mobile/fingerprint-auth.png",
        web: "http://launchswift.io/assets/web/finderprint-auth.png",
        price: "549.00",
        timeline: "2",
        description:
          "Offer fingerprint authentication as a payment method. Gives users a fast and secure way to checkout without having to login to external platforms. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 23,
        name: "Privacy Settings",
        icon: "http://launchswift.io/assets/icons/privacy-setting.png",
        mobile: "http://launchswift.io/assets/mobile/privacy-setting.png",
        web: "http://launchswift.io/assets/web/privacy-settings.png",
        price: "193.00",
        timeline: "1.5",
        description:
          "Let users control access to their personal information. They can choose who sees their profile and posts, making them feel safer when using the product.",
      },
      {
        id: 24,
        name: "Captcha",
        icon: "http://launchswift.io/assets/icons/captcha.png",
        mobile: "http://launchswift.io/assets/mobile/captcha.png",
        web: "http://launchswift.io/assets/web/captcha.png",
        price: "352.00",
        timeline: "2",
        description:
          "Request users to complete a simple verification test to prove they're human. It shows a test that's easy for humans to pass but difficult for bots, verifying it's a real person accessing the site. Needs a third-party integration, so the final cost depends on their pricing.",
      },
    ],
    img: securityPrivacy,
  },
  {
    name: "Social",
    img: socials,
    dropDown: [
      {
        id: 25,
        name: "Add friends",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/add-friend.png",
        web: "http://launchswift.io/assets/web/add-friend.png",
        price: "260.00",
        timeline: "2",
        description:
          "Users can add other users to their networks. Particularly useful for social networking and communication apps, where users want to connect and stay in touch with their friends and contacts.",
      },
      {
        id: 26,
        name: "Friends list",
        icon: "http://launchswift.io/assets/icons/friends-list.png",
        mobile: "http://launchswift.io/assets/mobile/friends-list.png",
        web: "http://launchswift.io/assets/web/firends-list.png",
        price: "320.00",
        timeline: "2",
        description:
          "Users can add other users to their friend list, allowing them to easily keep track of their connections and quickly access their profiles. They can also see recently added and mutual friends.",
      },
      {
        id: 27,
        name: "List of followers",
        icon: "http://launchswift.io/assets/icons/list-of-followers.png",
        mobile: "http://launchswift.io/assets/mobile/list-of-followers.png",
        web: "http://launchswift.io/assets/web/list-of-followers.png",
        price: "560.00",
        timeline: "2.5",
        description:
          "Show users a list of their followers and let them track their content, such as new posts or comments. It helps in making the user experiences more tailored and relevant.",
      },
      {
        id: 28,
        name: "Like a post",
        icon: "http://launchswift.io/assets/icons/like-post.png",
        mobile: "http://launchswift.io/assets/mobile/like-post.png",
        web: "http://launchswift.io/assets/web/",
        price: "175.00",
        timeline: "1.5",
        description:
          "Users can show they like a piece of content that's been shared inside the product. Helps users display their interests to others, and gives useful insight when it comes to understanding their preferences and motivations.",
      },
      {
        id: 29,
        name: "Repost",
        icon: "http://launchswift.io/assets/icons/repost.png",
        mobile: "http://launchswift.io/assets/mobile/repost.png",
        web: "http://launchswift.io/assets/web/",
        price: "358.00",
        timeline: "2",
        description:
          "Users can repost content published inside the product on their profile. The feature is commonly used on social media platforms to increase the reach of interesting or relevant content.",
      },
      {
        id: 30,
        name: "Creating a post",
        icon: "http://launchswift.io/assets/icons/create-post.png",
        mobile: "http://launchswift.io/assets/mobile/create-posts.png",
        web: "http://launchswift.io/assets/web/create-posts.png",
        price: "312.00",
        timeline: "2",
        description:
          "Users can create and publish content. They can customize the format and style of their posts and attach media. An essential tool for users to share their thoughts, ideas and stories with others.",
      },
      {
        id: 31,
        name: "Block Users",
        icon: "http://launchswift.io/assets/icons/block-user.png",
        mobile: "http://launchswift.io/assets/mobile/block-users.png",
        web: "http://launchswift.io/assets/web/block-users.png",
        price: "249.00",
        timeline: "1.5",
        description:
          "Both users and admins can block users within the product. Admins can control users' access to all content, while users can prevent specific individuals from interacting with them.",
      },
      {
        id: 32,
        name: "Invite Friends",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "542.00",
        timeline: "2",
        description:
          "Users can invite friends and contacts to join them on the product via social media, email or text message (SMS). Great for increasing the product's visibility and reach.",
      },
      {
        id: 33,
        name: "Disable ads",
        icon: "http://launchswift.io/assets/icons/disable-ads.png",
        mobile: "http://launchswift.io/assets/mobile/disable-ads.png",
        web: "http://launchswift.io/assets/web/disable-ads.png",
        price: "347.00",
        timeline: "2",
        description:
          "Users can disable ads from displaying. Use this to manage different levels of offerings inside the product, such as freemium or paid-for, or with audiences of different ages.",
      },
      {
        id: 34,
        name: "Customisable User Profile",
        icon: "http://launchswift.io/assets/icons/customise-user-profile.png",
        mobile:
          "http://launchswift.io/assets/mobile/customise-user-profile.png",
        web: "http://launchswift.io/assets/web/custom-user-profile.png",
        price: "230.00",
        timeline: "1",
        description:
          "Users can create customisable profiles with the option to add extra fields to share more information about themselves. Great for letting user share information they believe to be most relevant.",
      },
      {
        id: 35,
        name: "Mention/Tagging",
        icon: "http://launchswift.io/assets/icons/tagging.png",
        mobile: "http://launchswift.io/assets/mobile/tagging.png",
        web: "http://launchswift.io/assets/web/tagging.png",
        price: "531.00",
        timeline: "2",
        description:
          "Users can tag or mention another user's profile when they create a post or write a comment. Doing so helps to build relationships and encourage conversations within the product.",
      },
      {
        id: 36,
        name: "Advanced search",
        icon: "http://launchswift.io/assets/icons/advanced-search.png",
        mobile: "http://launchswift.io/assets/mobile/advanced-search.png",
        web: "http://launchswift.io/assets/web/advanced-search.png",
        price: "863.00",
        timeline: "2",
        description:
          "Delivers improved search experience, with filters and keywords to generate relevant results, even when the search does not find an exact match. Also, users can conveniently access their search history for easy reference.",
      },
      {
        id: 37,
        name: "Affiliate URL",
        icon: "http://launchswift.io/assets/icons/affiliate-url.png",
        mobile: "http://launchswift.io/assets/mobile/affiliate-url.png",
        web: "http://launchswift.io/assets/web/affiliate-url.png",
        price: "390.00",
        timeline: "2",
        description:
          "Monetise your platform by adding affiliate URLs to listed items to generate commission. Users are redirected to the third-party website when they click the displayed link.",
      },
      {
        id: 38,
        name: "Save Search",
        icon: "http://launchswift.io/assets/icons/save-search.png",
        mobile: "http://launchswift.io/assets/mobile/save-search.png",
        web: "http://launchswift.io/assets/web/save-search.png",
        price: "975.00",
        timeline: "2",
        description: "",
      },
    ],
  },
  {
    name: "Chat",
    img: chat,
    dropDown: [
      {
        id: 39,
        name: "Chat",
        icon: "http://launchswift.io/assets/icons/chatscreen.png",
        mobile: "http://launchswift.io/assets/mobile/chatscreen.png",
        web: "http://launchswift.io/assets/web/",
        price: "850.00",
        timeline: "2",
        description:
          "Users can live chat with each other on a 1-on-1 basis. They can write messages, share images and send and receive push notifications. Overall, an efficient way for people to communicate in real-time. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 40,
        name: "Group chat",
        icon: "http://launchswift.io/assets/icons/group-chat.png",
        mobile: "http://launchswift.io/assets/mobile/group-chat.png",
        web: "http://launchswift.io/assets/web/group-chat.png",
        price: "250.00",
        timeline: "2",
        description:
          "Users can create a group with other users, give that group a name and chat with all users within the group. Great for improving communication. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 41,
        name: "Chat Backup/Restore",
        icon: "http://launchswift.io/assets/icons/chat-backup.png",
        mobile: "http://launchswift.io/assets/mobile/chat-backup.png",
        web: "http://launchswift.io/assets/web/chat-backup.png",
        price: "670.00",
        timeline: "3",
        description:
          "Allows users to save and restore their chat history. Users can back up their chat messages to a cloud or locally-based storage service. They can then access these from any device they sign in on.",
      },
      {
        id: 42,
        name: "Chatbot",
        icon: "http://launchswift.io/assets/icons/chatbot.png",
        mobile: "http://launchswift.io/assets/mobile/chatbot.png",
        web: "http://launchswift.io/assets/web/chatbot.png",
        price: "560.00",
        timeline: "3",
        description:
          "The rule-based chatbot automates frequently asked questions, providing quick and consistent responses based on predefined questions. It's an effective tool for streamlining customer service and improving efficiency. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 43,
        name: "Group Video Call",
        icon: "http://launchswift.io/assets/icons/group-video-calls.png",
        mobile: "http://launchswift.io/assets/mobile/group-video-calls.png",
        web: "http://launchswift.io/assets/web/group-video-call.png",
        price: "431.00",
        timeline: "2",
        description:
          "Users can have a video call in groups of up to 16 others. It facilitates remote meetings, enhances teamwork, and fosters efficient group interactions. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 44,
        name: "Conversation Threading",
        icon: "http://launchswift.io/assets/icons/conversation-threading.png",
        mobile:
          "http://launchswift.io/assets/mobile/conversation-threading.png",
        web: "http://launchswift.io/assets/web/conversation-threading.png",
        price: "781.00",
        timeline: "2",
        description:
          "Structure conversations in a way where users can reply to specific messages. Responses are grouped and shown under the original message, making it easier for users to keep track of the discussion.",
      },
      {
        id: 45,
        name: "Audio/video messenger",
        icon: "http://launchswift.io/assets/icons/audio-call.png",
        mobile: "http://launchswift.io/assets/mobile/audio-video-messenger.png",
        web: "http://launchswift.io/assets/web/audio-video-messenger.png",
        price: "340.00",
        timeline: "2",
        description:
          "Users can instantly send and receive audio and video messages to each other on a 1-2-1 basis. This is often used when users can't or don't want to use text. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 46,
        name: "Webinar",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "380.00",
        timeline: "2",
        description:
          "Broadcast a presentation, lecture, workshop, or seminar to an audience from anywhere. The audience can view these live with an internet connection. Needs a third-party integration, so the final cost depends on their pricing.",
      },
    ],
  },
  {
    name: "Share",
    img: share,
    dropDown: [
      {
        id: 47,
        name: "Share contact",
        icon: "http://launchswift.io/assets/icons/share-contact.png",
        mobile: "http://launchswift.io/assets/mobile/share-contact.png",
        web: "http://launchswift.io/assets/web/share-contact.png",
        price: "541.00",
        timeline: "2",
        description:
          "Let users share their contact information quickly and easily, including phone numbers, email addresses, and social media profiles, promoting efficient communication.",
      },
      {
        id: 48,
        name: "Link share",
        icon: "http://launchswift.io/assets/icons/share-link.png",
        mobile: "http://launchswift.io/assets/mobile/share-link.png",
        web: "http://launchswift.io/assets/web/link-share.png",
        price: "562.00",
        timeline: "2.5",
        description:
          "Users can share photos, videos and documents hosted inside the product. Each share generates a unique URL for anyone to click on, making it useful for promoting content and reaching new audiences.",
      },
    ],
  },
  {
    name: "Reviews and Feedback",
    img: reviews,
    dropDown: [
      {
        id: 49,
        name: "App review prompt",
        icon: "http://launchswift.io/assets/icons/app-review-prompt.png",
        mobile: "http://launchswift.io/assets/mobile/app-review-prompt.png",
        web: "http://launchswift.io/assets/web/app-review-prompt.png",
        price: "390.00",
        timeline: "1",
        description:
          "Gather customer feedback, increase ratings and boost rankings in app stores by prompting customers to leave reviews. Customize the message that users see and the frequency of prompts displayed.",
      },
      {
        id: 50,
        name: "Surveys",
        icon: "http://launchswift.io/assets/icons/surveys.png",
        mobile: "http://launchswift.io/assets/mobile/surveys.png",
        web: "http://launchswift.io/assets/web/surveys.png",
        price: "180.00",
        timeline: "1",
        description:
          "Gather customer insights by asking for their feedback. Users can provide ratings, answer multiple-choice questions and add comments. Use the data to improve customer experience and product offerings.",
      },
      {
        id: 51,
        name: "Feedback dashboard",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "275.00",
        timeline: "2",
        description:
          "Customer-facing teams can collect and store feedback from their audiences. Use this to build up customer insight or measure overall sentiment among large segments or groups.",
      },
    ],
  },
  {
    name: "Audio and Videos",
    img: audiovideo,
    dropDown: [
      {
        id: 52,
        name: "Audio Player",
        icon: "http://launchswift.io/assets/icons/audio-player.png",
        mobile: "http://launchswift.io/assets/mobile/audio-player.png",
        web: "http://launchswift.io/assets/web/audio-player.png",
        price: "657.00",
        timeline: "3",
        description:
          "A central hub where users can manage their audio. They can easily control basic functions like playing, pausing, and controlling the volume. Advanced add-ons features like sound bass boosting and EQ can be added as well if preferred.",
      },
      {
        id: 53,
        name: "Video player",
        icon: "http://launchswift.io/assets/icons/camera-video-recordin.png",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "743.00",
        timeline: "3",
        description: "",
      },
      {
        id: 54,
        name: "Radio Stations",
        icon: "http://launchswift.io/assets/icons/radio-station.png",
        mobile: "http://launchswift.io/assets/mobile/radio-station.png",
        web: "http://launchswift.io/assets/web/radio-station.png",
        price: "980.00",
        timeline: "2.5",
        description: "",
      },
      {
        id: 55,
        name: "Download options",
        icon: "http://launchswift.io/assets/icons/download-options.png",
        mobile: "http://launchswift.io/assets/mobile/download-options.png",
        web: "http://launchswift.io/assets/web/download-options.png",
        price: "342.00",
        timeline: "2",
        description: "A feature to download documents/media/files to a device.",
      },
      {
        id: 56,
        name: "Archive",
        icon: "http://launchswift.io/assets/icons/archive.png",
        mobile: "http://launchswift.io/assets/mobile/archive.png",
        web: "http://launchswift.io/assets/web/archive.png",
        price: "287.00",
        timeline: "2",
        description:
          "Users can archive their photos, videos, and documents without deleting them. All content is recoverable for evidence and compliance reasons or if the user wants to restore it.",
      },
      {
        id: 57,
        name: "Video Management",
        icon: "http://launchswift.io/assets/icons/video-management.png",
        mobile: "http://launchswift.io/assets/mobile/video-management.png",
        web: "http://launchswift.io/assets/web/video-management.png",
        price: "760.00",
        timeline: "1.5",
        description:
          "Users can organize videos stored inside the product. Includes options to add, delete, and find related videos.",
      },
      {
        id: 58,
        name: "Video Editing Tools",
        icon: "http://launchswift.io/assets/icons/video-editing.png",
        mobile: "http://launchswift.io/assets/mobile/video-editing.png",
        web: "http://launchswift.io/assets/web/video-editing.png",
        price: "1,200.00",
        timeline: "3",
        description:
          "Offer users a video editing suite inside the product. Tools include trimming, splitting, merging clips, and adding effects, transitions, and multimedia elements. They can also reduce video quality to reduce file size. Needs a third-party integration, so the final cost depends on their pricing.",
      },
    ],
  },
  {
    name: "Communications & Notifications",
    dropDown: [
      {
        id: 59,
        name: "Audio Call",
        icon: "http://launchswift.io/assets/icons/audio-call.png",
        mobile: "http://launchswift.io/assets/mobile/audio-call.png",
        web: "http://launchswift.io/assets/web/audio-call.png",
        price: "280.00",
        timeline: "2",
        description:
          "Users can communicate with each other through voice calls while staying within the product, eliminating the need to use their traditional phone service's call allowance. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 60,
        name: "Audio Library",
        icon: "http://launchswift.io/assets/icons/audio-library.png",
        mobile: "http://launchswift.io/assets/mobile/audio-library.png",
        web: "http://launchswift.io/assets/web/audio-library.png",
        price: "930.00",
        timeline: "2",
        description:
          "Users can create a library of audio files, such as podcasts or company recordings. Store everything in one place for easy access.",
      },
      {
        id: 61,
        name: "Call Recording",
        icon: "http://launchswift.io/assets/icons/call-recording.png",
        mobile: "http://launchswift.io/assets/mobile/call-recording.png",
        web: "http://launchswift.io/assets/web/call-recording.png",
        price: "390.00",
        timeline: "1.5",
        description:
          "Provide users with the ability to record calls within the product. They can use this to record the audio from voice calls or meetings. Great for keeping records of important conversations. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 62,
        name: "Voicenotes",
        icon: "http://launchswift.io/assets/icons/voice-notes.png",
        mobile: "http://launchswift.io/assets/mobile/voice-notes.png",
        web: "http://launchswift.io/assets/web/voice-notes.png",
        price: "780.00",
        timeline: "1.5",
        description:
          "Users can make and store a voice recording inside the product. Voice notes offer a way to make quick recordings that can be accessed via a library and listened to anytime.",
      },
      {
        id: 63,
        name: "Push notifications",
        icon: "http://launchswift.io/assets/icons/push-notification.png",
        mobile: "http://launchswift.io/assets/mobile/push-notification.png",
        web: "http://launchswift.io/assets/web/push-notifications.png",
        price: "610.00",
        timeline: "2",
        description:
          "Send notifications users can see and read when they are not inside the product. Helpful when you need to send important or new information and is great for increasing engagement.",
      },
      {
        id: 64,
        name: "In app notifications",
        icon: "http://launchswift.io/assets/icons/in-app-notifcations.png",
        mobile: "http://launchswift.io/assets/mobile/in-app-notifications.png",
        web: "http://launchswift.io/assets/web/in-app-notifications.png",
        price: "540.00",
        timeline: "1.5",
        description:
          "An interface for users to view and manage notifications they receive within the product. From there, they can perform functions such as reply, mark as read and delete. Helpful for keeping users informed.",
      },
      {
        id: 65,
        name: "Automated Email Sending",
        icon: "http://launchswift.io/assets/icons/automated.png",
        mobile: "http://launchswift.io/assets/mobile/auto-email-sending.png",
        web: "http://launchswift.io/assets/web/auto-email-sending.png",
        price: "765.00",
        timeline: "2",
        description:
          "Send automated emails to users. These can be based on customized rules or actions such as reminders.",
      },
      {
        id: 66,
        name: "Notification sound and haptics",
        icon: "http://launchswift.io/assets/icons/notification-sound-haptics.png",
        mobile:
          "http://launchswift.io/assets/mobile/notification-sound-haptics.png",
        web: "http://launchswift.io/assets/web/",
        price: "189.00",
        timeline: "1.5",
        description: "",
      },
      {
        id: 67,
        name: "Schedule Notifications",
        icon: "http://launchswift.io/assets/icons/schedule-notification.png",
        mobile: "http://launchswift.io/assets/mobile/schedule-notifcation.png",
        web: "http://launchswift.io/assets/web/schedule-notification.png",
        price: "590.00",
        timeline: "2",
        description:
          "Send notifications with daily schedule details. Choose when these are sent, depending on time zone.",
      },
      {
        id: 68,
        name: "Desktop Notifications",
        icon: "http://launchswift.io/assets/icons/desktop-notifications.png",
        mobile: "http://launchswift.io/assets/mobile/desktop-notifications.png",
        web: "http://launchswift.io/assets/web/desktop-notifications.png",
        price: "741.00",
        timeline: "2.5",
        description:
          "Send push notifications to users' desktops. Useful when sending important messages that users need to see promptly or if your audience is using desktop-based screens rather than mobile.",
      },
      {
        id: 69,
        name: "Automatic Reminders",
        icon: "http://launchswift.io/assets/icons/auto-reminders.png",
        mobile: "http://launchswift.io/assets/mobile/auto-reminders.png",
        web: "http://launchswift.io/assets/web/auto-reminders.png",
        price: "420.00",
        timeline: "2",
        description:
          "Send automatic reminders to users. Set these up to send based on the required criteria, with time zones in mind. Send these to prompt payments, indicate a task is almost due and more.",
      },
      {
        id: 70,
        name: "Real-time updates",
        icon: "http://launchswift.io/assets/icons/realtime-updates.png",
        mobile: "http://launchswift.io/assets/mobile/realtime-updates.png",
        web: "http://launchswift.io/assets/web/realtime-updates.png",
        price: "960.00",
        timeline: "3",
        description:
          "Any updates to data inside the product are shown instantly. Constantly update content, ensuring users always have the latest data. This feature can improve efficiency, accuracy, and user experience.",
      },
      {
        id: 71,
        name: "Email Notifications",
        icon: "http://launchswift.io/assets/icons/email-notification.png",
        mobile: "http://launchswift.io/assets/mobile/email-notifications.png",
        web: "http://launchswift.io/assets/web/email-notifications.png",
        price: "320.00",
        timeline: "2",
        description:
          "Send email notifications to your users. Great for keeping in contact with them from outside the product. They can also unsubscribe from these emails if they wish.",
      },
      {
        id: 72,
        name: "Email Subscriptions",
        icon: "http://launchswift.io/assets/icons/email-subscription.png",
        mobile: "http://launchswift.io/assets/mobile/email-subscriptions.png",
        web: "http://launchswift.io/assets/web/email-subscriptions.png",
        price: "380.00",
        timeline: "2",
        description:
          "Make a message appear which invites a user to subscribe to your content with an email address. This can be integrated into an admin console or CRM, to manage subscriptions from one place.",
      },
    ],
    img: comnoti,
  },
  {
    name: "Utility & Tools",
    img: tools,
    dropDown: [
      {
        id: 73,
        name: "Background Fetch",
        icon: "http://launchswift.io/assets/icons/background-fetch.png",
        mobile: "http://launchswift.io/assets/mobile/background-fetch.png",
        web: "http://launchswift.io/assets/web/",
        price: "351.00",
        timeline: "2",
        description:
          "Utilising task manager we fetch background activities from within the app even when it is not in use at an interval the team would decide.",
      },
      {
        id: 74,
        name: "Document Picker",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "498.00",
        timeline: "2",
        description:
          "Provides Native UI element to browse and select document from within the device's local and cloud storage to use it within the application.",
      },
      {
        id: 75,
        name: "File access",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "143.00",
        timeline: "1",
        description:
          "A module that provides user access to local file system on the device.",
      },
      {
        id: 76,
        name: "Haptics",
        icon: "http://launchswift.io/assets/icons/haptics.png",
        mobile: "http://launchswift.io/assets/mobile/haptics.png",
        web: "http://launchswift.io/assets/web/haptics.png",
        price: "230.00",
        timeline: "1",
        description: "",
      },
      {
        id: 77,
        name: "Data Saver",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/data-saving.png",
        web: "http://launchswift.io/assets/web/data-saving.png",
        price: "980.00",
        timeline: "3",
        description: "",
      },
      {
        id: 78,
        name: "Display & Theme (light mode/dark mode)",
        icon: "http://launchswift.io/assets/icons/theme.png",
        mobile: "http://launchswift.io/assets/mobile/theme.png",
        web: "http://launchswift.io/assets/web/theme.png",
        price: "1,500.00",
        timeline: "4",
        description: "",
      },
      {
        id: 79,
        name: "Offline Work",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "435.00",
        timeline: "2",
        description:
          "Same as analytics with offline highlight at the top somewhere.",
      },
      {
        id: 80,
        name: "Switch Language",
        icon: "http://launchswift.io/assets/icons/switch-language.png",
        mobile: "http://launchswift.io/assets/mobile/switch-language.png",
        web: "http://launchswift.io/assets/web/switch-language.png",
        price: "120.00",
        timeline: "2",
        description:
          "Switch between multiple languages. Users can select from the language options provided to view the product in their preferred option. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 81,
        name: "Cache",
        icon: "http://launchswift.io/assets/icons/",
        mobile: "http://launchswift.io/assets/mobile/",
        web: "http://launchswift.io/assets/web/",
        price: "432.00",
        timeline: "2",
        description:
          "Stores and retrieves data, enhancing performance and reducing the need for repetitive processing. Some frequently accessed resources, such as pages or images, are temporarily cached (stored locally) on users' devices.",
      },
      {
        id: 82,
        name: "Google contacts import",
        icon: "http://launchswift.io/assets/icons/google-contacts-import.png",
        mobile:
          "http://launchswift.io/assets/mobile/google-contacts-import.png",
        web: "http://launchswift.io/assets/web/google-contacts-import.png",
        price: "447.00",
        timeline: "2.5",
        description: "",
      },
    ],
  },
  {
    name: "File Management",
    dropDown: [
      {
        id: 83,
        name: "File compression",
        icon: "http://launchswift.io/assets/icons/files-manager.png",
        mobile: "http://launchswift.io/assets/mobile/file-compression.png",
        web: "http://launchswift.io/assets/web/file-compression.png",
        price: "650.00",
        timeline: "1.5",
        description: "",
      },
      {
        id: 84,
        name: "Convert file",
        icon: "http://launchswift.io/assets/icons/convert-files.png",
        mobile: "http://launchswift.io/assets/mobile/convert-files.png",
        web: "http://launchswift.io/assets/web/convert-files.png",
        price: "537.00",
        timeline: "2.5",
        description:
          "Convert a file to a specific format. Needs a third-party integration, so the final cost depends on their pricing.",
      },
      {
        id: 85,
        name: "Data Storage",
        icon: "http://launchswift.io/assets/icons/data-storage.png",
        mobile: "http://launchswift.io/assets/mobile/data-storage.png",
        web: "http://launchswift.io/assets/web/data-storage.png",
        price: "458.00",
        timeline: "2",
        description:
          "Offer secure and reliable storage for users' data. Allows easy uploading, organising, and sharing of files, ensuring data integrity and accessibility. Needs a third-party integration, so the final cost depends on their pricing.",
      },
    ],
    img: filemanagement,
  },
  {
    name: "Camera Features",
    dropDown: [
      {
        id: 86,
        name: "Camera access",
        icon: "http://launchswift.io/assets/icons/camera-access.png",
        mobile: "http://launchswift.io/assets/mobile/camera-access.png",
        web: "http://launchswift.io/assets/web/camera-access.png",
        price: "312.00",
        timeline: "1",
        description: "",
      },
      {
        id: 87,
        name: "Face detection",
        icon: "http://launchswift.io/assets/icons/face-detection.png",
        mobile: "http://launchswift.io/assets/mobile/face-detection.png",
        web: "http://launchswift.io/assets/web/",
        price: "674.00",
        timeline: "3",
        description:
          "A module that uses machine learning algorithms to detect faces within the app on images (possible using camera components as well if not then we will have it be in Coming Soon section)",
      },
    ],
    img: camera,
  },
];

export const sidebarDataArabic = [
  {
    name: "أساسيات",
    img: essentials,
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
        mobile: "http://launchswift.io/assets/mobile/login-with-facebook.png",
        web: "http://launchswift.io/assets/web/facebook_login.png",
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
    ],
  },
  {
    name: "أساسيات",
    img: socials,
    dropDown: [
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
  {
    name: "الإنتاجية",
    dropDown: [],
    img: productivity,
  },
  {
    name: "الأمان والخصوصية",
    dropDown: [],
    img: securityPrivacy,
  },
  {
    name: "لوحة التحكم الإدارية",
    dropDown: [],
    img: adminPanel,
  },
  {
    name: "المحتوى",
    dropDown: [],
    img: content,
  },
  {
    name: "تحليلات العملاء",
    dropDown: [],
    img: customerInsight,
  },
  {
    name: "المالية والمدفوعات",
    dropDown: [],
    img: financePayments,
  },
  {
    name: "الصور والفيديوهات",
    dropDown: [],
    img: photosVideos,
  },
  {
    name: "إدارة المشاريع",
    dropDown: [],
    img: projectManagement,
  },
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
    duration: "---",
    fixedCost: 0,
    customizationCost: 0,
    delivery: "---",
    icon: <GoChecklist className="text-4xl text-black" />,
    selected: false,
    description:
      "Why do you need a product roadmap? Add it and we help you define the use cases for every feature in your Buildcard. If you skip it, you’ll need to know exactly what you expect each feature to do before we can start building your app.It also gives you an in-depth view of where your product is going. Includes a product timeline so everyone can see all the key dates on the way to get you there.",
    more: "Can help you secure funding, improve collaboration and streamline the whole app building process. Also useful for making long-term strategic decisions and planning a successful launch.",
    platform: ["ios"],
    sliderValue: 2,
  },
  {
    name: "Design",
    duration: "---",
    fixedCost: 0,
    customizationCost: 0,
    delivery: "---",
    icon: <SiStyledcomponents className="text-4xl text-black" />,
    selected: true,
    description:
      "Trust us to do the wireframing of your concept and design a seamless experience. Get a fully scalable UI/UX",
    more: "We combine visual principles, data, color psychology, and decades worth of experience to create aesthetic interfaces that will drive the growth of your product. We are experts in creating human-centric designs that allow customers to intuitively use your product and have a great product experience.",
    platform: ["ios"],
    sliderValue: 1,
  },
  {
    name: "Professional Prototype",
    duration: "---",
    fixedCost: 0,
    customizationCost: 0,
    delivery: "---",
    icon: <PiShootingStarThin className="text-4xl text-black" />,
    selected: false,
    description:
      "Get a fully functional design prototype to test the design hypothesis and end-user journey. This includes designs for prototypes.",
    more: "Prototypes are realistic design representations of your ideas. We design interactive prototypes for iPhone, iPad, Android, and Web. Creation of prototypes is more specific, measurable, quick, and intensive than just describing the design. Test how the user will interact with an environment comparable to the final product.",
    platform: ["ios"],
    sliderValue: 3,
  },
  {
    name: "MVP",
    duration: "---",
    fixedCost: 0,
    customizationCost: 0,
    delivery: "---",
    icon: <IoCodeSlashOutline className="text-4xl text-black" />,
    selected: true,
    description:
      "Ship the first build of your idea and get early adopters to try out your product",
    more: "We help design a Minimum Viable Product as a proof of concept to satisfy early customers and provide feedback for future development. It’s an easy way to build a product with a minimum set of features to test the market. Collect the maximum amount of validated learning about your customers with the least effort.",
    platform: ["ios"],
    showPlatform: true,
    features: 0,
    sliderValue: 4,
  },
  {
    name: "Full Build",
    duration: "---",
    fixedCost: 0,
    customizationCost: 0,
    delivery: "---",
    icon: <GoRocket className="text-4xl text-black" />,
    selected: false,
    description:
      "We will do end to end designing and development of your idea. Get a market-ready product",
    more: "We build a full-fledged product based on the product roadmap and the features laid out in the specification document. We will also perfect the product based on user feedback received on the Minimum Viable Product. We will ship a fully mature, responsive, scalable, business-ready and a user-friendly product.",
    platform: ["ios"],
    sliderValue: 5,
  },
];

export const numOfUsers = [
  { users: "0-500", minPrice: 150, maxPrice: 230 },
  { users: "500-5k", minPrice: 225, maxPrice: 340 },
  { users: "5k-50k", minPrice: 490, maxPrice: 735 },
  { users: "50k+", maxPrice: 1000 },
];
