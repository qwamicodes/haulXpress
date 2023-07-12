import { FirebaseError } from "firebase/app";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

import { db, storage } from "../../../config/firebase";

import ErrorHandler from "../../../features/ErrorHandler";

const clearUserData = async (userId: string) => {
  try {
    //clear date in the database
    const userDocument = doc(db, "users", userId);
    await deleteDoc(userDocument);

    //clear data in storage
    const storageRef = ref(storage, `profileImages/${userId}`);
    await deleteObject(storageRef);
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code } = error;
      ErrorHandler(code);
    }
  }
};

export default clearUserData;
