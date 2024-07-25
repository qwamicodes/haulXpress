import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { DEFAULT_COLORS, divider, textStyles } from '../../../../constants';
import { useAppSelector } from '../../../../hooks';

import IconRenderer from '../../../../components/Icon';

const HaulJourney = () => {
  const { destination, pickup, distance } = useAppSelector(
    state => state.locations,
  );

  return (
    <View style={[divider]}>
      <View style={styles.header}>
        <IconRenderer iconType='destination' light={false} />
        <Text style={styles.headerText}>Journey</Text>
      </View>
      <View style={{ gap: 8 }}>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>pickup</Text>
          <Text style={[styles.value, styles.locationShorter]}>
            {pickup.name}
          </Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>destination</Text>
          <Text style={[styles.value, styles.locationShorter]}>
            {destination.name}
          </Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>distance</Text>
          <Text style={styles.value}>{distance}</Text>
        </View>
      </View>
    </View>
  );
};

export default HaulJourney;

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  headerText: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.regular },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  value: {
    color: DEFAULT_COLORS.gray[500],
    ...textStyles.xs.regular,
    textTransform: 'capitalize',
    textAlign: 'right',
  },
  locationShorter: {
    width: '40%',
  },
});
