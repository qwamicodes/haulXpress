import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import config from "../envConfig";

// Initialize Firebase

const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  projectId: config.PROJECT_ID,
  storageBucket: config.STORAGE_BUCKET,
  messagingSenderId: config.MESSAGING_SENDER_ID,
  appId: config.APP_ID,
  measurementId: config.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

//IOS = 356837936491-u4m6vl8fpddridmedf3mfrfrochnnq7j.apps.googleusercontent.com
//Andriod = 356837936491-rsii54othd90cqt3ip5tcuii3ndjolu4.apps.googleusercontent.com
//clientID: 20454597335-9cmpoal50q6hvjm81kssb1m7ds4eq4a5.apps.googleusercontent.com
