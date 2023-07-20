import { addDoc, collection } from "firebase/firestore";

import { db } from "../../../config/firebase";
import { AppDispatch } from "../../../store";
import { vehicleProps } from "../../../types";
import { togglePending } from "../../../store/slices/authSlice";

const createVehicle =
  (vehicleData: vehicleProps) => async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    try {
      const vehiclesCollectionRef = collection(db, "vehicles");
      await addDoc(vehiclesCollectionRef, vehicleData);

      console.log("Vehicle added successfully");
    } catch (error) {
      console.error("Error adding vehicle:", error);
    } finally {
      dispatch(togglePending(false));
    }
  };

export default createVehicle;
