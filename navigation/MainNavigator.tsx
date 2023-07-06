import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import SplashScreen from "../screens/splash";

const MainNavigator = () => {
  const { Navigator, Group, Screen } =
    createNativeStackNavigator<RootStackParamList>();

  return (
    <Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Group
        key="others"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="SplashScreen" component={SplashScreen} />
      </Group>
    </Navigator>
  );
};

export default MainNavigator;
