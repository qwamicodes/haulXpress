import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { setDoc, doc } from "firebase/firestore";

import { RootStackParamList, UserData } from "../../../types";
import { AppDispatch } from "../../../store";
import {
  loginUserToState,
  togglePending,
  updateUserDataInState,
} from "../../../store/slices/authSlice";
import { STRINGS } from "../../../constants";

import ErrorHandler from "../../../features/ErrorHandler";
import { db } from "../../../config/firebase";

const updateUser =
  (
    {
      userId,
      ...rest
    }: Pick<UserData, "displayName" | "phoneNumber" | "occupation" | "userId">,
    navigate: NativeStackNavigationProp<RootStackParamList>
  ) =>
  async (dispatch: AppDispatch) => {
    dispatch(togglePending(true));

    await setDoc(doc(db, "users", userId), { ...rest })
      .then(() => {
        alert(STRINGS.successProfileUpdate);

        dispatch(updateUserDataInState({ ...rest }));

        navigate.navigate("Hauler");
      })
      .catch(({ code }: { code: string }) => ErrorHandler(code))
      .finally(() => dispatch(togglePending(false)));
  };

export default updateUser;
