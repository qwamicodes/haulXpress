import { doc, getDoc } from 'firebase/firestore';

import { AppDispatch } from '../../../store';
import { db } from '../../../config/firebase';
import { togglePending } from '../../../store/slices/authSlice';
import { addVehicles } from '../../../store/slices/vehiclesSlice';

const getVehicles = () => async (dispatch: AppDispatch) => {
  dispatch(togglePending(true));

  const docRef = doc(db, 'vehicles');
  try {
    const docSnap = await getDoc(docRef);

    const results = docSnap.data();
    dispatch(addVehicles(results));
  } catch (error) {
  } finally {
    dispatch(togglePending(false));
  }
};

export default getVehicles;
