import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../config/firebase";
import { AppDispatch } from "../../store";
import { RootStackParamList } from "../../types";
import { togglePending } from "../../store/slices/authSlice";

const createUser =
  (
    email: string,
    password: string,
    navigate: NativeStackNavigationProp<RootStackParamList>
  ) =>
  async (dispatch: AppDispatch) => {
    dispatch(togglePending());

    await createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => console.log(error.message))
      .finally(() => dispatch(togglePending()));
  };

export default createUser;
