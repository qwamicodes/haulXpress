import { TouchableOpacityProps } from "react-native";
import { iconType } from "./icon";

type buttonTypes = "primary" | "secondary" | "success";

export interface IButton extends TouchableOpacityProps {
  buttonText: string;
  icon: boolean;
  iconType?: iconType;
  lightIcon?: boolean;
  iconColor?: string;
  type?: buttonTypes;
}
