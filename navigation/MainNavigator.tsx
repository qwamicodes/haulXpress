import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";

import Walkthrough from "../features/Walkthrough";
import Login from "../features/Authentication/Login";
import Register from "../features/Authentication/Register";

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
      {/* <Group
        key="authenticated"
        screenOptions={{
          headerShown: false,
        }}
      ></Group> */}
      <Group
        key="unathenticated"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
      </Group>
      <Group
        key="others"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Walkthrough" component={Walkthrough} />
      </Group>
    </Navigator>
  );
};

export default MainNavigator;
