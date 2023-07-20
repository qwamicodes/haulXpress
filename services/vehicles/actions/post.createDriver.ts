import { addDoc, collection } from "firebase/firestore";

import { db } from "../../../config/firebase";
import { AppDispatch } from "../../../store";
import { driversProps } from "../../../types";
import { togglePending } from "../../../store/slices/authSlice";

const createDriver =
  (driverData: driversProps) => async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    try {
      const vehiclesCollectionRef = collection(db, "drivers");
      await addDoc(vehiclesCollectionRef, driverData);

      console.log("Vehicle added successfully");
    } catch (error) {
      console.error("Error adding vehicle:", error);
    } finally {
      dispatch(togglePending(false));
    }
  };

export default createDriver;
