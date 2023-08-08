import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { DEFAULT_COLORS, divider, textStyles } from "../../../../constants";
import { useAppSelector } from "../../../../hooks";

import IconRenderer from "../../../../components/Icon";

const DriverEnRoute = () => {
  const { duration } = useAppSelector((state) => state.locations);

  return (
    <View style={[divider]}>
      <View style={styles.header}>
        <IconRenderer light={false} iconType="route" />
        <Text style={styles.headerText}>Driver en route</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Text style={styles.key}>estimated time of arrival/pickup</Text>
        <Text style={styles.value}>{duration}</Text>
      </View>
    </View>
  );
};

export default DriverEnRoute;

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 16 },
  headerText: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.regular },
  key: {
    color: DEFAULT_COLORS.gray[400],
    ...textStyles.xs.regular,
  },
  value: {
    color: DEFAULT_COLORS.gray[700],
    ...textStyles["4xl"].bold,
  },
});
