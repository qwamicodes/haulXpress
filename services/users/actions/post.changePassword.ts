import { getAuth, updatePassword, User } from "firebase/auth";

import { AppDispatch } from "../../../store";
import { togglePending } from "../../../store/slices/authSlice";
import { STRINGS } from "../../../constants";

import ErrorHandler from "../../../features/ErrorHandler";

const auth = getAuth();

const changePassword = (password: string) => async (dispatch: AppDispatch) => {
  dispatch(togglePending(true));

  await updatePassword(auth?.currentUser as User, password)
    .then(() => {
      alert(STRINGS.successUpdatePassword);
    })
    .catch(({ code }: { code: string }) => ErrorHandler(code))
    .finally(() => dispatch(togglePending(false)));
};

export default changePassword;
