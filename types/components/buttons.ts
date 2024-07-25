import { TouchableOpacityProps } from 'react-native';
import { iconType } from './icon';
import { journeyStatus } from '../features';

export type buttonTypes = 'primary' | 'secondary' | journeyStatus;

export interface IButton extends TouchableOpacityProps {
  buttonText: string;
  icon: boolean;
  iconType?: iconType;
  lightIcon?: boolean;
  iconColor?: string;
  status?: buttonTypes;
}
