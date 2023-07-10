import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { IAuthentiation } from "../../../types";

import { DEFAULT_COLORS, textStyles } from "../../../constants";

type props = Omit<IAuthentiation, "inputs">;

const AuthHeader = ({ image, title, description }: props) => {
  return (
    <View style={[styles.imageContainer]}>
      <Image style={[styles.image]} source={{ uri: image }} />
      <View style={[styles.imageCover]} />
      <View style={styles.titlesContainer}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.description]}>{description}</Text>
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  imageContainer: { flex: 0.8 },
  image: { width: "100%", height: "100%", resizeMode: "cover" },
  imageCover: {
    backgroundColor: "#47556940",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  titlesContainer: {
    position: "absolute",
    left: 0,
    bottom: "15%",
    paddingLeft: 24,
    paddingRight: 64,
    gap: 8,
  },
  title: { color: DEFAULT_COLORS.white, ...textStyles["3xl"].medium },
  description: { color: DEFAULT_COLORS.gray[50], ...textStyles.xs.regular },
});
