import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

import { driversProps, vehicleProps } from "../../../types";
import { db } from "../../../config/firebase";
import { AppDispatch } from "../../../store";
import { togglePending } from "../../../store/slices/authSlice";

const createData =
  (driverData: driversProps, vehicleData: vehicleProps) =>
  async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    try {
      // Create a new document in the drivers collection
      const driverDocRef = await addDoc(collection(db, "drivers"), driverData);
      const driverId = driverDocRef.id;

      // Set the driver_id field in the driver document
      await updateDoc(doc(db, "drivers", driverId), { driver_id: driverId });

      // Create a new document in the vehicles collection
      const vehicleDocRef = await addDoc(
        collection(db, "vehicles"),
        vehicleData
      );

      // Update the driver_id field in the vehicle document
      await updateDoc(doc(db, "vehicles", vehicleDocRef.id), {
        driver_id: driverId,
      });

      alert("Driver and vehicle created successfully");
    } catch (error) {
      console.error("Error creating driver and vehicle:", error);
    } finally {
      dispatch(togglePending(false));
    }
  };

export default createData;
