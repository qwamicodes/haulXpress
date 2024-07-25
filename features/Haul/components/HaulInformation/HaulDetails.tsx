import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import {
  DEFAULT_COLORS,
  verticalTopBorder,
  textStyles,
} from '../../../../constants';
import { IJourney } from '../../../../types';
import { useAppSelector } from '../../../../hooks';

const HaulDetails = ({
  departure,
  vehicle,
}: Pick<IJourney, 'departure' | 'vehicle'>) => {
  const { distance } = useAppSelector(state => state.locations);

  const { vehicleType, vehicleCapacity } = vehicle;

  return (
    <View style={[verticalTopBorder]}>
      <View style={styles.detailHolder}>
        <Text style={styles.header}>Vehicle details</Text>
        <View style={styles.valuesHolder}>
          <Text style={styles.value}>vehicle</Text>
          <Text style={styles.value}>{vehicleType}</Text>
        </View>
        <View style={styles.valuesHolder}>
          <Text style={styles.value}>capacity</Text>
          <Text style={styles.value}>{vehicleCapacity}</Text>
        </View>
      </View>
      <View style={styles.detailHolder}>
        <Text style={styles.header}>Trip details</Text>
        <View style={styles.valuesHolder}>
          <Text style={styles.value}>pick availablity</Text>
          <Text style={styles.value}>yes</Text>
        </View>
        <View style={styles.valuesHolder}>
          <Text style={styles.value}>departure</Text>
          <Text style={styles.value}>{departure}</Text>
        </View>
        <View style={styles.valuesHolder}>
          <Text style={styles.value}>distance</Text>
          <Text style={styles.value}>{distance}</Text>
        </View>
      </View>
    </View>
  );
};

export default HaulDetails;

const styles = StyleSheet.create({
  detailHolder: { flex: 1, width: '100%', gap: 8 },
  valuesHolder: { flexDirection: 'row', justifyContent: 'space-between' },
  header: { color: DEFAULT_COLORS.gray[800], ...textStyles.xs.medium },
  value: {
    color: DEFAULT_COLORS.gray[500],
    ...textStyles.xs.regular,
    textTransform: 'capitalize',
  },
});
