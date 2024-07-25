import { collection, getDocs, query, where } from 'firebase/firestore';

import { AppDispatch } from '../../../store';
import { togglePending } from '../../../store/slices/authSlice';
import { db } from '../../../config/firebase';
import { addVehicles } from '../../../store/slices/vehiclesSlice';
import { vehicleProps } from '../../../types';
import { vehicleType } from '../../../types/features/haul';
import { Dispatch, SetStateAction } from 'react';

const getVehiclesType =
  (
    vehicleTypes: vehicleType[],
    setLoading: Dispatch<SetStateAction<boolean>>,
  ) =>
  async (dispatch: AppDispatch) => {
    setLoading(true);

    try {
      const availableTrucks: vehicleProps[] = [];

      // Loop through each vehicle type and perform a query for each type
      for (const vehicleType of vehicleTypes) {
        const vehiclesCollectionRef = collection(db, 'vehicles');
        const q = query(
          vehiclesCollectionRef,
          where('vehicleType', '==', vehicleType),
        );

        // Fetch the documents that match the query
        const querySnapshot = await getDocs(q);

        // Process the documents and add them to the result array
        querySnapshot.forEach(doc => {
          availableTrucks.push(doc.data() as vehicleProps);
        });
      }

      dispatch(addVehicles(availableTrucks));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

export default getVehiclesType;
