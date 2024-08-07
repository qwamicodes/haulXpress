import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeParamList } from '../types/navigation';

import ScreenHeaderTitle from '../components/header/ScreenHeaderTitle';

import Haul from '../features/Haul';
import AvailableTrucks from '../features/Haul/screens/AvailableTrucks';
import HaulInformation from '../features/Haul/screens/HaulInformation';
import ConfirmedHauling from '../features/Haul/screens/ConfirmedHauling';
import ConfirmHauling from '../features/Haul/screens/ConfirmHauling';
import MapViewComponent from '../features/Map';

const HaulNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator<HomeParamList>();

  return (
    <Navigator
      initialRouteName='Start'
      screenOptions={{
        header: props => <ScreenHeaderTitle {...props} />,
      }}
    >
      <Screen name='Start' options={{ headerShown: false }} component={Haul} />
      <Screen
        name='AvailableTrucks'
        options={{ headerTitle: 'Available trucks' }}
        component={AvailableTrucks}
      />
      <Screen
        name='HaulInformation'
        options={{ headerTitle: 'Haul information' }}
        component={HaulInformation}
      />
      <Screen
        name='ConfirmHauling'
        options={{ headerTitle: 'Confirming hauling' }}
        component={ConfirmHauling}
      />
      <Screen
        name='ConfirmedHauling'
        options={{
          headerTitle: 'Hauling confirmed',
          header: props => (
            <ScreenHeaderTitle showBackButton={false} {...props} />
          ),
        }}
        component={ConfirmedHauling}
      />
      <Screen
        name='MapView'
        options={{ headerShown: false }}
        component={MapViewComponent}
      />
    </Navigator>
  );
};

export default HaulNavigation;
