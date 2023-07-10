import { ERRORS, authPasswordLength, emailRegex } from "../../constants";
import { authProps } from "../../features/Authentication/reducer/authReducer";

export const checkAuthValues = ({
  email,
  password,
}: authProps): { message: string; valid: boolean } => {
  //check if email and password are valid
  if (!(email && password))
    return { valid: false, message: ERRORS.invalidEmailAndPassword };

  if (!emailRegex.test(email))
    return { valid: false, message: ERRORS.invalidEmail };

  //check if password length is greater or equal than max length of authPasswordLength
  if (password.length <= authPasswordLength)
    return { valid: false, message: ERRORS.invalidPasswordLength };

  return { message: "", valid: true };
};
