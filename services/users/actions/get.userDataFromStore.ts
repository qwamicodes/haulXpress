import { getDoc, doc } from 'firebase/firestore';

import { AppDispatch } from '../../../store';
import {
  togglePending,
  updateUserDataInState,
} from '../../../store/slices/authSlice';
import { db } from '../../../config/firebase';
import { STRINGS } from '../../../constants';

const getUserDataFromStore =
  (userId: string) => async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    const userDocSnapshot = await getDoc(doc(db, 'users', userId));

    dispatch(togglePending(false));

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      dispatch(updateUserDataInState(userData));
      return userData;
    } else {
      alert(STRINGS.userDataNotFound);
    }
  };

export default getUserDataFromStore;
