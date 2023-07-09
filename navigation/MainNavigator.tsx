import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import SplashScreen from "../screens/splash";
import Walkthrough from "../features/Walkthrough";

const MainNavigator = () => {
  const { Navigator, Group, Screen } =
    createNativeStackNavigator<RootStackParamList>();

  return (
    <Navigator
      initialRouteName="Walkthrough"
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
        {/* <Screen name="SplashScreen" component={SplashScreen} /> */}
        <Screen name="Walkthrough" component={Walkthrough} />
      </Group>
    </Navigator>
  );
};

export default MainNavigator;
