import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { DEFAULT_COLORS, screenStyle, textStyles } from "../../constants";

const NotificationSettings = () => {
  const notificationSettings = [
    { title: "New truck listing" },
    { title: "Journey updates" },
    { title: "Promotions" },
  ];

  return (
    <View style={[screenStyle]}>
      <View style={styles.container}>
        {notificationSettings.map(({ title }, index) => (
          <View style={styles.content} key={index}>
            <Text style={styles.title}>{title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  container: { gap: 12 },
  content: { paddingVertical: 8 },
  title: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.medium },
});
