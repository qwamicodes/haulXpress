import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useAppSelector } from "../../../hooks";
import { DEFAULT_COLORS, textStyles } from "../../../constants";

const OccupationBadge = ({}) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{user.occupation}</Text>
    </View>
  );
};

export default OccupationBadge;

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: DEFAULT_COLORS.teal[100],
    borderRadius: 4,
  },
  badgeText: { color: DEFAULT_COLORS.teal[600], ...textStyles.base.regular },
});
