export const authPasswordLength = 6;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ERRORS = {
  userNotFound: "User not found!",
  invalidPasswordLength: `Password length must be greater than ${authPasswordLength}`,
  invalidEmail: "Invalid Email",
  invalidEmailAndPassword: "Email and password are not valid",
};
