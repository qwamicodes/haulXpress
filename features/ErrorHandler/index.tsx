import { STRINGS } from '../../constants';

const ErrorHandler = (code: string) => {
  switch (code) {
    case 'auth/user-not-found':
      alert(STRINGS.userNotFound);
      break;
    case 'auth/wrong-password':
      alert(STRINGS.wrongPassword);
      break;
    case 'auth/invalid-email':
      alert(STRINGS.invalidEmail);
      break;
    case 'auth/invalid-password':
      alert(STRINGS.invalidPassword);
      break;
    case 'auth/user-disabled':
      alert(STRINGS.userDisabled);
      break;
    case 'auth/invalid-phone-number':
      alert(STRINGS.invalidPhoneNumber);
      break;
    default:
      alert(STRINGS.somethingHappened);
  }
};

export default ErrorHandler;
