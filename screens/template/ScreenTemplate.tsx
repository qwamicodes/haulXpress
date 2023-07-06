import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenTemplate = ({ children }: { children: ReactNode }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default ScreenTemplate;
