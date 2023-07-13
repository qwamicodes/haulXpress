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
  Haul: undefined;
  Journey: undefined;
  Hauler: undefined;
};

export type HomeParamList = {
  Start: undefined;
  AvailableTrucks: undefined;
  HaulInformation: {};
  ConfirmHauling: undefined;
  ConfirmedHauling: undefined;
};

export type JourneyParamList = {
  Journeys: undefined;
  JourneyDetails: {};
};

export type HaulerParamList = {
  Profile: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  NotificationSettings: undefined;
};
