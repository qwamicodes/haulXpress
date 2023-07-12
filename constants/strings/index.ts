export const authPasswordLength = 6;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneNumberRegex = /^\d+$/;

export const STRINGS = {
  userNotFound: "User not found!",
  invalidPasswordLength: `Password length must be greater than ${authPasswordLength}`,
  invalidEmail: "Invalid email address",
  invalidPassword: "Invalid password",
  invalidPhoneNumber: "Invalid phone number",
  invalidEmailAndPassword: "Email and password are not valid",
  successLogin: "Login successful",
  successLogout: "Logout successful",
  successRegister: "Registration successful",
  successResetPassword: "Reset password successful",
  successUpdatePassword: "Update password successful",
  successProfileUpdate: "Profile update successful",
  successProfileUpload: "Profile picture upload successful",
  successDeletion: "User account deleted successfully",
  wrongPassword: "Wrong password",
  somethingHappened: "Something unexpectedly happened",
  userDisabled: "User is disabled",
  fillfields: "Fill in all the fields",
  userDataNotFound: "User data not found",
  permissionDenied: "Permission denied",
  passwordNotMatch: "Password do not match",
};
