import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { iconType } from "../../types";

type props = {
  iconType: iconType;
  light: boolean;
};

const IconRenderer = ({}: props) => {
  return (
    <View>
      <Text>IconRenderer</Text>
    </View>
  );
};

export default IconRenderer;

const styles = StyleSheet.create({});
