import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { IWalkThroughItem } from "../../../types";
import { DEFAULT_COLORS, centeringStyle, textStyles } from "../../../constants";

interface Props extends IWalkThroughItem {}

const WalkthroughItem = ({ description, image, title }: Props) => {
  return (
    <View style={styles.walkthroughContainer}>
      <View style={{ flexBasis: "70%" }}>
        <View style={styles.imageContainer}>
          <View style={styles.imageColorLayer} />
          <Image source={{ uri: image }} style={styles.walkthroughImage} />
          <View style={styles.titleContainer}>
            <Text style={[styles.walkthroughTitle]}>{title}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexBasis: "30%",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={[styles.walkthroughDescription]}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default WalkthroughItem;

const styles = StyleSheet.create({
  walkthroughContainer: {
    width: "100%",
    flex: 0.85,
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: "100%",
    height: 400,
    borderRadius: 32,
    overflow: "hidden",
    position: "relative",
  },
  imageColorLayer: {
    backgroundColor: "rgba(34, 34, 34, 0.3)",
    position: "absolute",
    width: "100%",
    height: 400,
    zIndex: 10,
  },
  walkthroughImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  titleContainer: {
    position: "absolute",
    zIndex: 99,
    top: 24,
    left: 16,
    width: "80%",
  },
  walkthroughTitle: {
    color: DEFAULT_COLORS.white,
    ...textStyles["3xl"].medium,
  },
  descriptionContainer: {},
  walkthroughDescription: {
    color: DEFAULT_COLORS.gray[600],
    ...textStyles.sm.regular,
  },
});
