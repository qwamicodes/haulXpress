import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const {
  RN_APP_API_KEY,
  RN_APP_AUTH_DOMAIN,
  RN_APP_PROJECT_ID,
  RN_APP_STORAGE_BUCKET,
  RN_APP_MESSAGING_SENDER_ID,
  RN_APP_APP_ID,
  RN_APP_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: RN_APP_API_KEY,
  authDomain: RN_APP_AUTH_DOMAIN,
  projectId: RN_APP_PROJECT_ID,
  storageBucket: RN_APP_STORAGE_BUCKET,
  messagingSenderId: RN_APP_MEASUREMENT_ID,
  appId: RN_APP_APP_ID,
  measurementId: RN_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
