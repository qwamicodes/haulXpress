import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from "rn-placeholder";

const VehiclesLoading = () => {
  return (
    <View style={styles.container}>
      <Placeholder
        style={styles.upper}
        Left={PlaceholderMedia}
        Animation={Fade}
      >
        <PlaceholderLine width={90} />
        <PlaceholderLine width={80} />
        <PlaceholderLine width={50} />
      </Placeholder>
    </View>
  );
};

export default VehiclesLoading;

const styles = StyleSheet.create({
  container: { width: 350, marginVertical: 16, overflow: "hidden" },
  upper: {
    // flexDirection: "row",
    width: 350,
    height: 80,
  },
  lower: {},
});
