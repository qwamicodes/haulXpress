import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { auth } from "../../../config/firebase";
import { RootStackParamList } from "../../../types";
import { AppDispatch } from "../../../store";
import {
  loginUserToState,
  togglePending,
} from "../../../store/slices/authSlice";
import { STRINGS } from "../../../constants";

import ErrorHandler from "../../../features/ErrorHandler";
import getUserDataFromStore from "./get.UserDataFromStore";

const signinUser =
  (
    email: string,
    password: string,
    navigate: NativeStackNavigationProp<RootStackParamList>
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(togglePending(true));

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert(STRINGS.successLogin);

      const user = {
        email: userCredential.user.email as string,
        emailVerified: userCredential.user.emailVerified,
        userId: userCredential.user.uid,
      };

      const userData = await dispatch(getUserDataFromStore(user.userId));

      if (userData) {
        dispatch(loginUserToState({ ...user, ...userData }));

        navigate.navigate("Hauler");
      } else {
        navigate.navigate("Onboarding");
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        const { code } = error;
        ErrorHandler(code);
      }
    } finally {
      dispatch(togglePending(false));
    }
  };

export default signinUser;
