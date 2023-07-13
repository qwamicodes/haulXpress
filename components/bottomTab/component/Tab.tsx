import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { DEFAULT_COLORS, textStyles } from "../../../constants";
import IconRenderer from "../../Icon";

type props = {
  isFocused: boolean;
  options: BottomTabNavigationOptions;
  name: string;
  onPress: () => void;
  onLongPress: () => void;
};

const Tab = ({ isFocused, options, onPress, onLongPress, name }: props) => {
  const renderIcon = () => {
    if (isFocused) {
      switch (name.toLocaleLowerCase()) {
        case "haul":
          return (
            <View>
              <IconRenderer iconType="mapBold" light={false} />
            </View>
          );
        case "journey":
          return (
            <View>
              <IconRenderer iconType="journeyBold" light={false} />
            </View>
          );

        case "hauler":
          return (
            <View>
              <IconRenderer iconType="haulerBold" light={false} />
            </View>
          );
      }
    } else {
      switch (name.toLocaleLowerCase()) {
        case "haul":
          return (
            <View>
              <IconRenderer iconType="map" light={false} />
            </View>
          );
        case "journey":
          return (
            <View>
              <IconRenderer iconType="journey" light={false} />
            </View>
          );

        case "hauler":
          return (
            <View>
              <IconRenderer iconType="hauler" light={false} />
            </View>
          );
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      {renderIcon()}
      <Text
        style={[
          styles.tabText,
          isFocused ? textStyles.sm.medium : textStyles.sm.regular,
          {
            color: isFocused
              ? DEFAULT_COLORS.gray[700]
              : DEFAULT_COLORS.gray[500],
          },
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 10,
  },
  tabText: {},
});
