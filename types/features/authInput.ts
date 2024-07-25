import { TextInputProps } from 'react-native';
import { UserData } from './authentication';

export type inputNames = keyof UserData | 'password' | 'pickup' | 'destination';

export interface IAuthInput extends TextInputProps {
  label: string;
  name: inputNames;
}
