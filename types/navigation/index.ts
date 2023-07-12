import { NavigatorScreenParams } from "@react-navigation/native";

//screen param lists
export type RootStackParamList = {
  //authenticated
  Onboarding: undefined;
  TabsStack: NavigatorScreenParams<TabsParamList>;

  //unauthenticated
  Login: undefined;
  Register: undefined;

  //others
  // SplashScreen: undefined;
  Walkthrough: undefined;
};

//bottom tabs param lists
export type TabsParamList = {
  Map: undefined;
  Journey: undefined;
  Hauler: undefined;
};

export type HaulerParamList = {
  Profile: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  NotificationSettings: undefined;
};
