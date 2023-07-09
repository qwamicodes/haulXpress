import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { IWalkThroughItem } from "../../../types";
import Button from "../../../components/Button";
import { DEFAULT_COLORS, centeringStyle, textStyles } from "../../../constants";

interface Props extends IWalkThroughItem {
  index: number;
}

const WalkthroughItem = ({
  buttonText,
  description,
  image,
  title,
  index,
}: Props) => {
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
        {/* <View style={[centeringStyle, styles.dotsContainer]}>
          <View style={[styles.dots, index === 0 && styles.activeDot]} />
          <View style={[styles.dots, index === 1 && styles.activeDot]} />
          <View style={[styles.dots, index === 2 && styles.activeDot]} />
        </View> */}
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
        {/* <View>
          <Button icon={false} buttonText={buttonText} />
        </View> */}
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
  dotsContainer: { flex: 1, flexDirection: "row", gap: 10 },
  dots: {
    backgroundColor: DEFAULT_COLORS.gray[200],
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  activeDot: { width: 40, backgroundColor: DEFAULT_COLORS.gray[700] },
  descriptionContainer: {},
  walkthroughDescription: {
    color: DEFAULT_COLORS.gray[600],
    ...textStyles.sm.regular,
  },
});
