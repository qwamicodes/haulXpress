import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenStyle } from "../../constants";
import { ViewStyle } from "react-native";
import { useAppSelector } from "../../hooks";
import Loader from "../../components/loader/Loader";

const ScreenTemplate = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: ViewStyle;
}) => {
  const { pending } = useAppSelector((state) => state.auth);

  return (
    <SafeAreaView style={[screenStyle, styles]}>
      {pending ? <Loader /> : false}
      {children}
    </SafeAreaView>
  );
};

export default ScreenTemplate;
