import { getAuth, deleteUser, User } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { AppDispatch } from "../../../store";
import {
  logoutUserFromState,
  togglePending,
} from "../../../store/slices/authSlice";
import { STRINGS } from "../../../constants";
import ErrorHandler from "../../../features/ErrorHandler";
import clearUserData from "./post.clearUserData";

const user = getAuth()?.currentUser;

const deleteUserAccount = () => async (dispatch: AppDispatch) => {
  dispatch(togglePending(true));

  try {
    //delete user data
    await deleteUser(user as User);

    //clear user data
    await clearUserData(user?.uid as string);
    alert(STRINGS.successDeletion);

    dispatch(logoutUserFromState());
  } catch (error) {
    if (error instanceof FirebaseError) {
      const { code } = error;
      ErrorHandler(code);
    }
  } finally {
    dispatch(togglePending(false));
  }
};

export default deleteUserAccount;
