import { IAuthInput, IAuthentiation, IWalkThroughItem } from "../../types";

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
  { label: "email", placeholder: "enter your email" },
  {
    label: "password",
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
  { label: "email", placeholder: "enter your email" },
  {
    label: "password",
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
