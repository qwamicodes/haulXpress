import { ScrollView, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { screenStyle } from '../../../constants';
import { JourneyParamList } from '../../../types';
import VehicleDetails from '../../Haul/components/HaulInformation/VehicleDetails';
import DriverBadge from '../../Haul/components/DriverBadge';
import HaulDetails from '../../Haul/components/HaulInformation/HaulDetails';
import MiniMap from '../../Haul/components/ConfirmHauling/MiniMap';
import Button from '../../../components/Button';

type Props = NativeStackScreenProps<JourneyParamList, 'JourneyDetails'>;

const JourneyDetails = ({ route }: Props) => {
  const { journey } = route.params;

  const { location, status, vehicle } = journey;
  const { driver } = vehicle;

  return (
    <View style={[screenStyle]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 32, alignItems: 'center' }}
        style={{ flex: 1 }}
      >
        <VehicleDetails {...vehicle} />
        <DriverBadge driver={driver} showButton />
        <HaulDetails {...journey} />
        <MiniMap {...location} />
      </ScrollView>
      <View>
        <Button icon={false} status={status} buttonText={status} />
      </View>
    </View>
  );
};

export default JourneyDetails;
