import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { AppDispatch } from '../../../store';
import { updateUserDataInState } from '../../../store/slices/authSlice';

const auth = getAuth();

const getUserData = () => (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, userCredential => {
    if (userCredential) {
      const user = {
        email: userCredential.email as string,
        emailVerified: userCredential.emailVerified,
        phoneNumber: userCredential.phoneNumber,
        photoURL: userCredential.photoURL,
        userId: userCredential.uid,
        displayName: userCredential.displayName,
      };
      dispatch(updateUserDataInState(user));
    }
  });
};

export default getUserData;
