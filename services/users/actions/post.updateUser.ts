import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { doc, updateDoc } from 'firebase/firestore';

import { RootStackParamList, UserData } from '../../../types';
import { AppDispatch } from '../../../store';
import {
  togglePending,
  updateUserDataInState,
} from '../../../store/slices/authSlice';
import { STRINGS } from '../../../constants';
import { db } from '../../../config/firebase';

import ErrorHandler from '../../../features/ErrorHandler';

const updateUser =
  (
    {
      userId,
      ...rest
    }: Pick<UserData, 'displayName' | 'phoneNumber' | 'occupation' | 'userId'>,
    navigate: NativeStackNavigationProp<RootStackParamList>,
  ) =>
  async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    await updateDoc(doc(db, 'users', userId), { ...rest })
      .then(() => {
        alert(STRINGS.successProfileUpdate);

        dispatch(updateUserDataInState({ ...rest }));

        navigate.navigate('TabsStack', { screen: 'Hauler' });
      })
      .catch(({ code }: { code: string }) => ErrorHandler(code))
      .finally(() => dispatch(togglePending(false)));
  };

export default updateUser;
