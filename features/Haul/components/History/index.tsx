import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';

import { IHaulType } from '../../../../types/features/haul';
import { haulStyles } from '../../../../constants';

import IconRenderer from '../../../../components/Icon';
import HaulHistoryItem from './HaulHistoryItem';

type Props = {
  index: number;
  productType: IHaulType[];
  vehicleType: IHaulType[];
  handleNavigateSelection: (type: 'previous' | 'next') => void;
};

const HaulHistory = ({
  index,
  handleNavigateSelection,
  productType,
  vehicleType,
}: Props) => {
  return (
    <View style={haulStyles.historyContainer}>
      {index !== 0 ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleNavigateSelection('previous')}
          style={haulStyles.backButton}
        >
          <IconRenderer light={false} iconType='arrowBack' />
        </TouchableOpacity>
      ) : (
        <View style={[haulStyles.backButton, { width: 24, height: 24 }]} />
      )}
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          flexDirection: 'row',
        }}
        style={haulStyles.history}
      >
        <View style={[haulStyles.historyItem, { flex: 0.5 }]}>
          {productType.map((props, index) => (
            <HaulHistoryItem {...props} key={index} />
          ))}
        </View>
        <View style={haulStyles.historyItem}>
          {vehicleType.map((props, index) => (
            <HaulHistoryItem {...props} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HaulHistory;

const styles = StyleSheet.create({});
