import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { IJourney, journeyStatus } from '../../../../types';
import { DEFAULT_COLORS, textStyles } from '../../../../constants';

import DriverBadge from '../DriverBadge';
import Trucks from '../Trucks';
import { useNavigationParams } from '../../../../hooks';
import StatusBtn from './StatusBtn';

interface Props extends Omit<IJourney, 'status'> {
  type: 'available' | 'journey';
  status: 'available' | journeyStatus;
}

const AvailableTruck = ({
  type,
  vehicle,
  price,
  departure,
  status,
  location,
}: Props) => {
  const navigation = useNavigationParams();

  const { vehicleType, vehicleNo } = vehicle;

  const handleGoToHaulDetails = () => {
    type === 'available'
      ? navigation.navigate('TabsStack', {
          screen: 'Haul',
          params: {
            screen: 'HaulInformation',
            //@ts-ignore
            params: {
              journey: {
                location,
                vehicle,
                departure,
                price,
              },
            },
          },
        })
      : navigation.navigate('TabsStack', {
          screen: 'Journey',
          params: {
            screen: 'JourneyDetails',
            //@ts-ignore
            params: {
              journey: {
                location,
                vehicle,
                departure,
                price,
                status,
              },
            },
          },
        });
  };

  return (
    <TouchableOpacity
      onPress={handleGoToHaulDetails}
      activeOpacity={0.8}
      style={styles.container}
    >
      <View style={styles.item}>
        <View>
          <Text style={styles.truckName}>{vehicleType}</Text>
          <Text style={styles.truckNo}>{vehicleNo}</Text>
        </View>
        <View>
          <Trucks type={vehicleType} />
        </View>
        <View>
          <Text style={styles.haulDetails}>
            Price: &nbsp;
            <Text style={styles.haulDetailsPrimary}>GHC {price}</Text>
          </Text>
          <Text style={styles.haulDetails}>
            Departure:&nbsp;
            <Text style={styles.haulDetailsPrimary}>{departure}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.item}>
        <DriverBadge driver={vehicle.driver} />
        <StatusBtn status={status ?? 'available'} />
      </View>
    </TouchableOpacity>
  );
};

export default AvailableTruck;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 16,
    borderBottomColor: DEFAULT_COLORS.gray[200],
    borderBottomWidth: 1,
  },
  item: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  truckName: {
    color: DEFAULT_COLORS.gray[700],
    textTransform: 'capitalize',
    ...textStyles.sm.regular,
  },
  truckNo: {
    color: DEFAULT_COLORS.gray[500],
    textTransform: 'uppercase',
    ...textStyles.xs.regular,
  },
  haulDetails: { ...textStyles.xs.regular, color: DEFAULT_COLORS.gray[400] },
  haulDetailsPrimary: { color: DEFAULT_COLORS.gray[700] },
});
