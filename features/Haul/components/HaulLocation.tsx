import { StyleSheet, Text, View } from 'react-native';
import React, { Dispatch, SetStateAction, useEffect } from 'react';

import { DEFAULT_COLORS, textStyles } from '../../../constants';
import LocatonSearchInput from './LocatonSearchInput';
import { locationComponentProp } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getMapDistance } from '../../../services';

type props = {
  setShowLocationComponent: Dispatch<SetStateAction<locationComponentProp>>;
};

const HaulLocation = ({ ...rest }: props) => {
  const dispatch = useAppDispatch();
  const { destination, pickup, distance } = useAppSelector(
    state => state.locations,
  );

  useEffect(() => {
    if (destination.name && pickup.name) {
      dispatch(getMapDistance(pickup.description, destination.description));
    }
  }, [destination, pickup]);

  return (
    <View style={styles.container}>
      <View style={{ gap: 32, marginBottom: 16 }}>
        <View style={styles.selectionHeader}>
          <Text style={styles.selectionHeaderText}>
            Let our drivers get a hold of you
          </Text>
        </View>
        <View style={styles.inputHolder}>
          <Text style={styles.selectionContainerHeaderText}>
            Where are you?
          </Text>
          <LocatonSearchInput
            value={pickup.name}
            type='pickup'
            placeholder='Pickup address'
            {...rest}
          />
        </View>
        <View style={styles.inputHolder}>
          <Text style={styles.selectionContainerHeaderText}>
            Where to drop of your goods?
          </Text>
          <LocatonSearchInput
            value={destination.name}
            type='destination'
            placeholder='Destination address'
            {...rest}
          />
        </View>

        {distance ? (
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.selectionContainerHeaderText}>Distance</Text>
            <Text style={styles.distanceText}>{distance}</Text>
          </View>
        ) : (
          false
        )}
      </View>
    </View>
  );
};

export default HaulLocation;

const styles = StyleSheet.create({
  container: { flex: 1, gap: 32 },
  selectionHeader: { width: '75%' },
  selectionHeaderText: {
    color: DEFAULT_COLORS.gray[700],
    ...textStyles['2xl'].medium,
  },
  selectionContainer: {},
  selectionContainerHeader: { gap: 16 },
  selectionContainerHeaderText: {
    color: DEFAULT_COLORS.gray[500],
    ...textStyles.sm.regular,
  },
  inputHolder: { gap: 16 },
  distanceText: { color: DEFAULT_COLORS.gray[700], ...textStyles['xl'].medium },
});
