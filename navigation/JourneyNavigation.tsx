import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { JourneyParamList } from '../types/navigation';

import ScreenHeaderTitle from '../components/header/ScreenHeaderTitle';
import Journey from '../features/Journey';
import JourneyDetails from '../features/Journey/screens/JourneyDetails';

const JourneyNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator<JourneyParamList>();

  return (
    <Navigator
      initialRouteName='Journeys'
      screenOptions={{
        header: props => <ScreenHeaderTitle {...props} />,
      }}
    >
      <Screen
        name='Journeys'
        options={{
          header: props => (
            <ScreenHeaderTitle showBackButton={false} {...props} />
          ),
        }}
        component={Journey}
      />
      <Screen
        name='JourneyDetails'
        options={{
          headerTitle: 'Journey details',
        }}
        component={JourneyDetails}
      />
    </Navigator>
  );
};

export default JourneyNavigation;
