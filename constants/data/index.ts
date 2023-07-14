import {
  IAuthInput,
  IAuthentiation,
  IHaulerLinks,
  IWalkThroughItem,
} from "../../types";
import { IHaulType, haulSelection } from "../../types/features/haul";

//walkthrough dummy data
export const walkthroughItems: IWalkThroughItem[] = [
  {
    title: "Find and Book Trucks with Ease",
    description:
      "We simplify the process of finding and booking trucks by providing comprehensive truck listings that includes capacity, availability, and pricing. You can avoid the hassle of manual searches and communicate directly with the truck owners.",
    image:
      "https://images.unsplash.com/photo-1590079105886-f0f884bf4437?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80",
  },
  {
    title: "Convenient Pickup Rides for Goods Collection",
    description:
      "Want a ride to pick up some items? Easily request a pickup ride. For a hassle-free pickup experience, select the option during search or booking, and we'll put you in touch with a local driver.",
    image:
      "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1Y2slMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Seamless Tracking and Reliable Transportation",
    description:
      "Track your cargo and take advantage of safe shipping. For trucks that have been scheduled, our app offers real-time tracking, ensuring prompt delivery by vetted drivers. You may relax knowing that your belongings are in good hands.",
    image:
      "https://images.unsplash.com/photo-1612716078587-26640de8c52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRydWNrJTIwZHJpdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

//login dummy data
const loginInput: IAuthInput[] = [
  {
    label: "email",
    placeholder: "enter your email",
    name: "email",
    keyboardType: "email-address",
  },
  {
    label: "password",
    name: "password",
    placeholder: "enter your password",
    secureTextEntry: true,
  },
];
export const loginAuth: IAuthentiation = {
  image:
    "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJ1Y2slMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  title: "Sign in to your account",
  description: "Continue into your account and get your goods to a safe place.",
  inputs: loginInput,
};

//register dummy data
const registerInput: IAuthInput[] = [
  {
    label: "email",
    placeholder: "enter your email",
    name: "email",
    keyboardType: "email-address",
  },
  {
    label: "password",
    name: "password",
    placeholder: "enter your password",
    secureTextEntry: true,
  },
];
export const registerAuth: IAuthentiation = {
  image:
    "https://images.unsplash.com/photo-1541747277704-ef7fb8e1a31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRydWNrJTIwZHJpdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  title: "Create an account to get started",
  description:
    "Get started with a new experience with getting your goods from your comfort homes.",
  inputs: registerInput,
};

//onboarding dummy data
const onboardingInput: IAuthInput[] = [
  {
    label: "fullname",
    placeholder: "enter your fullname",
    name: "displayName",
  },
  {
    label: "phonenumber",
    name: "phoneNumber",
    placeholder: "enter your phone number",
    maxLength: 10,
  },
  {
    name: "occupation",
    placeholder: "enter your occupation",
    label: "occupation",
  },
];
export const onboardingAuth: IAuthentiation = {
  image:
    "https://images.unsplash.com/photo-1541747277704-ef7fb8e1a31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRydWNrJTIwZHJpdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  title: "Let’s get to know you better",
  description:
    "Enter your information to get you sign up and ready in a second.",
  inputs: onboardingInput,
};

//hauler links for profile
const haulerAccountLinks: IHaulerLinks = {
  header: "Account manangement",
  links: [
    {
      iconType: "editBox",
      name: "Edit profile",
      path: "EditProfile",
      link: false,
    },
    {
      iconType: "security",
      name: "Change password",
      path: "ChangePassword",
      link: false,
    },
    {
      iconType: "notification",
      name: "Notifications",
      path: "NotificationSettings",
      link: false,
    },
  ],
};
const haulerHelpsLinks: IHaulerLinks = {
  header: "Help",
  links: [
    {
      iconType: "book",
      name: "Terms of service",
      path: "terms_of_service",
      link: true,
    },
    {
      iconType: "help",
      name: "Privacy policy",
      path: "privacy_policy",
      link: true,
    },
  ],
};
export const haulerLinks: IHaulerLinks[] = [
  haulerAccountLinks,
  haulerHelpsLinks,
];

//haul product type
const productTypes: IHaulType[] = [
  { name: "agriculture", value: "agriculture" },
  { name: "construction", value: "construction" },
  { name: "logistics", value: "logistics" },
  { name: "waste management", value: "waste-management" },
  { name: "others...", value: "others" },
];

//hault vehicle type
const vehicleTypes: IHaulType[] = [
  { name: "commercial", value: "commercial" },
  { name: "truck", value: "truck" },
  { name: "container", value: "container" },
  { name: "construction", value: "construction" },
  { name: "tow", value: "tow" },
  { name: "dump", value: "dump" },
  { name: "others...", value: "others" },
];

const haulProductSelectionData: haulSelection = {
  buttonText: "select truck type",
  data: productTypes,
  subHeaderText: "Select product type",
  type: "product",
  percentage: 0.3 * 100,
};
const haulVehicleSelectionData: haulSelection = {
  buttonText: "set location",
  data: vehicleTypes,
  subHeaderText: "Select vehicle type",
  type: "vehicle",
  percentage: 0.6 * 100,
};

export const haulSelectionData = [
  haulProductSelectionData,
  haulVehicleSelectionData,
];
