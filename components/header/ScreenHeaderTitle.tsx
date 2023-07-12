import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getHeaderTitle } from "@react-navigation/elements";

import { DEFAULT_COLORS, textStyles, centeringStyle } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import IconRenderer from "../Icon";

type Props = NativeStackHeaderProps;

const ScreenHeaderTitle = ({ route, navigation, options }: Props) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonBackContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.buttonBack}
        >
          <IconRenderer iconType="arrorBack" light={false} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

export default ScreenHeaderTitle;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    width,
    height: 180,
    justifyContent: "flex-end",
    backgroundColor: DEFAULT_COLORS.gray[50],
    paddingHorizontal: 24,
    gap: 16,
    zIndex: 5,
  },
  buttonBackContainer: {},
  buttonBack: {
    width: 40,
    height: 40,
    ...centeringStyle,
    borderRadius: 12,
    backgroundColor: DEFAULT_COLORS.white,
    shadowColor: "#4B556310",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  titleContainer: {},
  title: {
    color: DEFAULT_COLORS.gray[700],
    ...textStyles["3xl"].medium,
  },
});
