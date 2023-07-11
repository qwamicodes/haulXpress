import {
  STRINGS,
  authPasswordLength,
  emailRegex,
  phoneNumberRegex,
} from "../../constants";
import { UserData, validationType } from "../../types";

export const checkAuthValues = ({
  email,
  password = "password",
}: {
  email: string;
  password?: string;
}): validationType => {
  //check if email and password are valid
  if (!(email && password))
    return { valid: false, message: STRINGS.fillfields };

  //check if email is valid with the right format
  if (!emailRegex.test(email))
    return { valid: false, message: STRINGS.invalidEmail };

  //check if password length is greater or equal than max length of authPasswordLength
  if (password.length <= authPasswordLength)
    return { valid: false, message: STRINGS.invalidPasswordLength };

  return { message: "", valid: true };
};

export const checkOnboardingValues = ({
  displayName,
  occupation,
  phoneNumber,
}: Pick<
  UserData,
  "displayName" | "phoneNumber" | "occupation"
>): validationType => {
  //check if form fields are valid
  if (!(displayName && occupation && phoneNumber))
    return { valid: false, message: STRINGS.fillfields };

  //check if phone number is valid with the right format
  if (!phoneNumberRegex.test(phoneNumber))
    return { valid: false, message: STRINGS.invalidPhoneNumber };

  return { message: "", valid: true };
};
