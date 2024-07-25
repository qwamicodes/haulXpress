import { IAuthInput } from './authInput';
import { IJourney } from './journeys';

export type validationType = { message: string; valid: boolean };
export interface IAuthentiation {
  image: string;
  title: string;
  description: string;
  inputs: IAuthInput[];
}

export type UserData = {
  displayName: string | null;
  email: string;
  photoURL: string | null;
  phoneNumber: string | null;
  emailVerified: boolean;
  userId: string;
  occupation: string | null;
  journey: IJourney[];
};

export interface IAuth {
  isAuthenticated: boolean;
  pending: boolean;
  user: UserData;
}
