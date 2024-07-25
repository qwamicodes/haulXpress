import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../../config/firebase';
import { AppDispatch } from '../../../store';
import { RootStackParamList } from '../../../types';
import {
  loginUserToState,
  togglePending,
} from '../../../store/slices/authSlice';
import { STRINGS } from '../../../constants';

import ErrorHandler from '../../../features/ErrorHandler';

const createUser =
  (
    email: string,
    password: string,
    navigate: NativeStackNavigationProp<RootStackParamList>,
  ) =>
  async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        alert(STRINGS.successRegister);

        const user = {
          email: userCredential.user.email as string,
          emailVerified: userCredential.user.emailVerified,
          userId: userCredential.user.uid,
        };
        dispatch(loginUserToState(user));

        navigate.navigate('Onboarding');
      })
      .catch(({ code }: { code: string }) => {
        ErrorHandler(code);
      })
      .finally(() => dispatch(togglePending(false)));
  };

export default createUser;
