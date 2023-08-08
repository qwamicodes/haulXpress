import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { DEFAULT_COLORS, divider, textStyles } from "../../../../constants";
import { vehicleProps } from "../../../../types";

import IconRenderer from "../../../../components/Icon";
import DriverBadge from "../DriverBadge";

const HaulDriver = ({ driver }: vehicleProps) => {
  return (
    <View style={[divider, styles.dividerWithBorder]}>
      <View style={styles.header}>
        <IconRenderer light={false} iconType="driver" />
        <Text style={styles.headerText}>Driver</Text>
      </View>
      <DriverBadge showButton driver={driver} />
    </View>
  );
};

export default HaulDriver;

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 16 },
  headerText: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.regular },
  dividerWithBorder: {
    borderTopColor: DEFAULT_COLORS.gray[200],
    borderBottomColor: DEFAULT_COLORS.gray[200],
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
  },
});
