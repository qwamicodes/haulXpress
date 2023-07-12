import { User, getAuth, signOut } from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { AppDispatch } from "../../../store";
import { STRINGS } from "../../../constants";
import {
  logoutUserFromState,
  togglePending,
} from "../../../store/slices/authSlice";

import ErrorHandler from "../../../features/ErrorHandler";

const auth = getAuth();

const logoutUser = () => async (dispatch: AppDispatch) => {
  dispatch(togglePending(true));

  await signOut(auth)
    .then(() => {
      alert(STRINGS.successLogout);
      dispatch(logoutUserFromState());
    })
    .catch(({ code }: FirebaseError) => ErrorHandler(code))
    .finally(() => dispatch(togglePending(false)));
};

export default logoutUser;
