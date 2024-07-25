import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { vehicleProps } from '../../../../types';
import {
  DEFAULT_COLORS,
  textStyles,
  verticalBottomBorder,
  vertically,
} from '../../../../constants';

import Trucks from '../Trucks';

const VehicleDetails = ({ vehicleNo, vehicleType }: vehicleProps) => {
  return (
    <View style={[vertically, verticalBottomBorder, { alignItems: 'center' }]}>
      <View style={{ gap: 8 }}>
        <Text style={styles.vehicleName}>{vehicleType}</Text>
        <Text style={styles.vehicleNo}>{vehicleNo}</Text>
      </View>
      <View>
        <Trucks size='large' type={vehicleType} />
      </View>
    </View>
  );
};

export default VehicleDetails;

const styles = StyleSheet.create({
  vehicleName: {
    color: DEFAULT_COLORS.gray[700],
    textTransform: 'capitalize',
    ...textStyles['2xl'].medium,
  },
  vehicleNo: { ...textStyles.base.regular, color: DEFAULT_COLORS.gray[500] },
});
