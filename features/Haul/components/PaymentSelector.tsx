import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';

import { paymentMethod, paymentType } from '../../../types';
import { DEFAULT_COLORS, textStyles, centeringStyle } from '../../../constants';

interface Props extends paymentMethod {
  selected: boolean;
  setPaymentType: Dispatch<SetStateAction<paymentType>>;
}

const PaymentSelector = ({ name, value, selected, setPaymentType }: Props) => {
  const handleSelection = () => {
    setPaymentType(value);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        selected ? styles.selectedContainer : undefined,
      ]}
      onPress={handleSelection}
    >
      <Text style={[styles.text, selected ? styles.selectedText : undefined]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default PaymentSelector;

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.gray[400],
    backgroundColor: DEFAULT_COLORS.white,
    ...centeringStyle,
  },
  selectedContainer: {
    backgroundColor: DEFAULT_COLORS.gray[700],
    borderWidth: 0,
  },
  text: {
    color: DEFAULT_COLORS.gray[700],
    textTransform: 'capitalize',
    ...textStyles.base.regular,
  },
  selectedText: { color: DEFAULT_COLORS.white },
});
