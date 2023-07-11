import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import { useAppSelector } from "../hooks";

import Walkthrough from "../features/Walkthrough";
import Login from "../features/Authentication/Login";
import Register from "../features/Authentication/Register";
import Onboarding from "../features/Authentication/Onboarding";
import TabsNavigator from "./TabsNavigator";

const RootNavigator = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const { Navigator, Group, Screen } =
    createNativeStackNavigator<RootStackParamList>();

  return (
    <Navigator
      initialRouteName={isAuthenticated ? "TabsStack" : "Walkthrough"}
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <Group
          key="authenticated"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="TabsStack" component={TabsNavigator} />
          <Screen name="Onboarding" component={Onboarding} />
        </Group>
      ) : (
        <Group
          key="unathenticated"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="Login" component={Login} />
          <Screen name="Register" component={Register} />
        </Group>
      )}
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

export default RootNavigator;
