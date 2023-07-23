import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { vehicleProps } from "../../../types";
import { DEFAULT_COLORS, textStyles, centeringStyle } from "../../../constants";

const DriverBadge = ({ driver }: Pick<vehicleProps, "driver">) => {
  const { driverName, driverPhotoUrl, driverRating } = driver;

  return (
    <View style={styles.badge}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: driverPhotoUrl }} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.name}>{driverName}</Text>
        <Text style={styles.ratings}>{driverRating} ratings</Text>
      </View>
    </View>
  );
};

export default DriverBadge;

const styles = StyleSheet.create({
  badge: { flexDirection: "row", gap: 4, ...centeringStyle },
  leftContainer: {},
  rightContainer: { gap: 4 },
  image: { width: 35, height: 35, borderRadius: 100 },
  name: { color: DEFAULT_COLORS.gray[700], ...textStyles.xs.medium },
  ratings: {
    color: DEFAULT_COLORS.gray[500],
    ...textStyles.xs.regular,
  },
});
