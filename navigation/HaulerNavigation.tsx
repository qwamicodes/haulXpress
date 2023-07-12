import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HaulerParamList } from "../types/navigation";

import EditProfile from "../screens/Authenticated/EditProfile";
import ChangePassword from "../screens/Authenticated/ChangePassword";
import NotificationSettings from "../screens/Authenticated/NotificationSettings";
import ScreenHeaderTitle from "../components/header/ScreenHeaderTitle";
import Hauler from "../features/Hauler";

const HaulerNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator<HaulerParamList>();

  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{
        header: (props) => <ScreenHeaderTitle {...props} />,
      }}
    >
      <Screen
        name="Profile"
        options={{
          headerShown: false,
        }}
        component={Hauler}
      />
      <Screen
        name="EditProfile"
        options={{ headerTitle: "Edit profile" }}
        component={EditProfile}
      />
      <Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerTitle: "Change password" }}
      />
      <Screen
        name="NotificationSettings"
        options={{ headerTitle: "Notification settings" }}
        component={NotificationSettings}
      />
    </Navigator>
  );
};

export default HaulerNavigation;
