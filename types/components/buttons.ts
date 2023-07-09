import { TouchableOpacityProps } from "react-native";
import { iconType } from "./icon";

export interface IButton extends TouchableOpacityProps {
  buttonText: string;
  icon: boolean;
  iconType?: iconType;
  lightIcon?: boolean;
  iconColor?: string;
}
