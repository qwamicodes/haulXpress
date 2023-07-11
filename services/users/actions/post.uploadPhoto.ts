import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FirebaseError } from "firebase/app";

import { AppDispatch } from "../../../store";
import { db, storage } from "../../../config/firebase";
import ErrorHandler from "../../../features/ErrorHandler";
import { STRINGS } from "../../../constants";
import { togglePending } from "../../../store/slices/authSlice";

const uploadPhoto =
  (userId: string, photoFile: string) => async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    try {
      // Convert the selected image URI to a Blob
      const response = await fetch(photoFile);
      const blob = await response.blob();

      // Upload the image file to Firebase Storage
      const storageRef = ref(storage, `profileImages/${userId}`);
      await uploadBytes(storageRef, blob);

      // Get the download URL of the uploaded image
      const photoURL = await getDownloadURL(storageRef);

      // Update the user document with the photoURL
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, {
        photoURL: photoURL,
      });

      alert(STRINGS.successProfileUpload);
    } catch (error) {
      if (error instanceof FirebaseError) {
        ErrorHandler(error.code);
      }
    } finally {
      dispatch(togglePending(false));
    }
  };
export default uploadPhoto;
