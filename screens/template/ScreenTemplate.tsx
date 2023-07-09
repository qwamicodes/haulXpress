import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenStyle } from "../../constants";
import { ViewStyle } from "react-native";

const ScreenTemplate = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: ViewStyle;
}) => {
  return <SafeAreaView style={[screenStyle, styles]}>{children}</SafeAreaView>;
};

export default ScreenTemplate;
