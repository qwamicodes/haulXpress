import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { DEFAULT_COLORS, textStyles } from "../../constants";

import ScreenTemplate from "../template/ScreenTemplate";

const NotificationSettings = () => {
  const notificationSettings = [
    { title: "New truck listing" },
    { title: "Journey updates" },
    { title: "Promotions" },
  ];

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        {notificationSettings.map(({ title }, index) => (
          <View style={styles.content} key={index}>
            <Text style={styles.title}>{title}</Text>
          </View>
        ))}
      </View>
    </ScreenTemplate>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  container: { gap: 12 },
  content: { paddingVertical: 8 },
  title: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.medium },
});
