import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeParamList } from "../types/navigation";

import ScreenHeaderTitle from "../components/header/ScreenHeaderTitle";

import Haul from "../features/Haul";
import AvailableTrucks from "../screens/Authenticated/AvailableTrucks";

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
      <Screen name="AvailableTrucks" component={AvailableTrucks} />
    </Navigator>
  );
};

export default HaulNavigation;
