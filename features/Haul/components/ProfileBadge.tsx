import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useAppSelector, useNavigationParams } from "../../../hooks";
import { DEFAULT_COLORS, textStyles } from "../../../constants";

const ProfileBadge = () => {
  const navigation = useNavigationParams();
  const { user } = useAppSelector((state) => state.auth);
  const firstName = user.displayName?.split(" ")[0];

  const handleGoToHauler = () => {
    navigation.navigate("TabsStack", { screen: "Hauler" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {user.photoURL ? (
          <Image style={styles.image} source={{ uri: user.photoURL }} />
        ) : (
          <Image
            style={styles.image}
            source={require("../../../assets/images/avatar.png")}
          />
        )}
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.displayNameContainer}>
          <Text style={styles.displayNameText}>Hello! {firstName}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleGoToHauler}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.buttonText}>View profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileBadge;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  imageContainer: { width: 50, height: 50 },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 10,
  },
  rightContainer: { gap: 4 },
  displayNameContainer: {},
  displayNameText: {
    ...textStyles.base.regular,
    color: DEFAULT_COLORS.gray[500],
  },
  buttonContainer: {},
  button: {},
  buttonText: {
    ...textStyles.sm.regular,
    color: DEFAULT_COLORS.gray[300],
    textTransform: "capitalize",
  },
});
