import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import {
  DEFAULT_COLORS,
  textStyles,
  centeringStyle,
} from "../../../../constants";

import { IHaulType } from "../../../../types/features/haul";

const HaulHistoryItem = ({ name }: IHaulType) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default HaulHistoryItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    backgroundColor: DEFAULT_COLORS.white,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.gray[200],
    ...centeringStyle,
    borderRadius: 40,
  },
  text: {
    color: DEFAULT_COLORS.gray[500],
    ...textStyles.xs.regular,
    textTransform: "capitalize",
  },
});
