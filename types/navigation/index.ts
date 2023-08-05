import { NavigatorScreenParams } from "@react-navigation/native";
import { IJourney, driversProps, vehicleProps } from "..";

//screen param lists
export type RootStackParamList = {
  //authenticated
  Onboarding: undefined;
  TabsStack: NavigatorScreenParams<TabsParamList>;

  //unauthenticated
  Login: undefined;
  Register: undefined;

  //others
  Walkthrough: undefined;
};

//bottom tabs param lists
export type TabsParamList = {
  Haul: { screen: keyof HomeParamList };
  Journey: { screen: keyof JourneyParamList };
  Hauler: undefined;
};

export type HomeParamList = {
  Start: undefined;
  AvailableTrucks: undefined;
  HaulInformation: {
    vehicleDetails: vehicleProps & {
      price: number;
      departure: string;
    };
  };
  ConfirmHauling: {
    journey: IJourney;
  };
  ConfirmedHauling: {
    journey: IJourney;
  };
  MapView: undefined;
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
