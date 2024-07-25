import { onAuthStateChanged } from 'firebase/auth';

import { AppDispatch } from '../../../store';
import { auth } from '../../../config/firebase';
import {
  loginUserToState,
  togglePending,
} from '../../../store/slices/authSlice';
import getUserDataFromStore from './get.userDataFromStore';
import { Dispatch, SetStateAction } from 'react';

const getUserAuthenticated =
  (setIsRequestCompleted: Dispatch<SetStateAction<boolean>>) =>
  async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    try {
      onAuthStateChanged(auth, async userCredential => {
        if (userCredential) {
          const user = {
            email: userCredential.email as string,
            emailVerified: userCredential.emailVerified,
            userId: userCredential.uid,
          };

          const userData = await dispatch(
            getUserDataFromStore(user.userId),
          ).finally(() => setIsRequestCompleted(true));

          if (userData) {
            dispatch(loginUserToState({ ...user, ...userData }));
          }
        } else {
          setIsRequestCompleted(true);
        }
      });
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(togglePending(false));
    }
  };

export default getUserAuthenticated;
