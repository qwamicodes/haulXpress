import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeParamList } from "../types/navigation";

import ScreenHeaderTitle from "../components/header/ScreenHeaderTitle";
import Haul from "../features/Haul";

const HaulNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator<HomeParamList>();

  return (
    <Navigator
      initialRouteName="Start"
      screenOptions={{
        header: (props) => <ScreenHeaderTitle {...props} />,
      }}
    >
      <Screen name="Start" options={{ headerShown: false }} component={Haul} />
    </Navigator>
  );
};

export default HaulNavigation;
