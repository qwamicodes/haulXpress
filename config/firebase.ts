import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBwijOiYr2D8jjoYRqDgJ8y1iUMvISXa3k",
  authDomain: "haulxpress-c3ab7.firebaseapp.com",
  projectId: "haulxpress-c3ab7",
  storageBucket: "haulxpress-c3ab7.appspot.com",
  messagingSenderId: "977322094900",
  appId: "1:977322094900:web:c78c8ad8cd46b74ab3f561",
  measurementId: "G-L9G7C141E4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
