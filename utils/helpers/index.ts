import * as ImagePicker from "expo-image-picker";

import {
  STRINGS,
  authPasswordLength,
  emailRegex,
  phoneNumberRegex,
} from "../../constants";
import { UserData, validationType } from "../../types";
import { IHaulType } from "../../types/features/haul";

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

export const pickImage = async (setImage: (image: string) => void) => {
  let galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (galleryStatus.status === "granted") {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  } else {
    alert(STRINGS.permissionDenied);
  }
};

export const checkPassword = (
  password: string,
  confirmPassword: string
): validationType => {
  if (!(password && confirmPassword))
    return { valid: false, message: STRINGS.fillfields };

  if (!(password === confirmPassword))
    return { valid: false, message: STRINGS.passwordNotMatch };

  if (password.length <= authPasswordLength)
    return { valid: false, message: STRINGS.invalidPasswordLength };

  return { valid: true, message: "" };
};

export const haulExistsInState = (collection: IHaulType[], item: IHaulType) => {
  return (
    collection.reduce((acc: number, { value }) => {
      if (value === item.value) {
        return acc + 1;
      }

      return acc;
    }, 0) !== 0
  );
};

export const convertMetresToKm = (meters: string | number) => {
  if (typeof meters === "string") {
    meters = parseInt(meters);
  }

  const km = meters / 1000;

  return km;
};

export const kmToMiles = (km: number): string => {
  // 1 kilometer is approximately equal to 0.621371 miles
  const miles = ((km / 1000) * 0.621371).toFixed(1);
  return `${miles} mi`;
};

export const secondsToDuration = (seconds: number): string => {
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes} mins`;

  const hours = Math.round(minutes / 60);
  return `${hours} hr(s)`;
};
