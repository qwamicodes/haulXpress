import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenStyle } from "../../constants";

const ScreenTemplate = ({ children }: { children: ReactNode }) => {
  return <SafeAreaView style={[screenStyle]}>{children}</SafeAreaView>;
};

export default ScreenTemplate;
