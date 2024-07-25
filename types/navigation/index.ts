import { NavigatorScreenParams } from '@react-navigation/native';
import { IJourney } from '..';

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
    journey: Omit<IJourney, 'status' | 'location'>;
  };
  ConfirmHauling: {
    journey: Omit<IJourney, 'status' | 'location'>;
  };
  ConfirmedHauling: {
    journey: Omit<IJourney, 'status' | 'location'>;
  };
  MapView: undefined;
};

export type JourneyParamList = {
  Journeys: undefined;
  JourneyDetails: { journey: IJourney };
};

export type HaulerParamList = {
  Profile: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  NotificationSettings: undefined;
};
