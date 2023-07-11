import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DEFAULT_COLORS, textStyles } from "../../constants";

const ScreenHeaderTitle = ({ title }: { title: string }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ScreenHeaderTitle;

const styles = StyleSheet.create({
  titleContainer: { flex: 0.1, justifyContent: "center" },
  title: {
    color: DEFAULT_COLORS.gray[700],
    textTransform: "capitalize",
    ...textStyles["3xl"].medium,
  },
});
