import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { DEFAULT_COLORS, centeringStyle, textStyles } from "../../../constants";
import IconRenderer from "../../../components/Icon";
import OccupationBadge from "./OccupationBadge";
import { pickImage } from "../../../utils/helpers";
import { uploadPhoto } from "../../../services";

const HaulerHeader = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const [image, setImage] = useState<string>("");

  const handleUploadProfileImage = (image: string) => {
    setImage(image);

    if (!!image) {
      dispatch(uploadPhoto(user.userId, image));
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        {user.photoURL || image ? (
          <Image
            style={styles.image}
            source={{ uri: user.photoURL ? user.photoURL : image }}
          />
        ) : (
          <Image
            style={styles.image}
            source={require("../../../assets/images/avatar.png")}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.editContainer}
          onPress={() => pickImage(handleUploadProfileImage)}
        >
          <View style={styles.edit}>
            <IconRenderer
              color={DEFAULT_COLORS.gray[500]}
              iconType="edit"
              light={false}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.namesContainer}>
        <Text style={styles.displayName}>{user.displayName}</Text>
        <Text style={styles.text}>{user.email}</Text>
        <Text style={styles.text}>{user.phoneNumber}</Text>
        <OccupationBadge />
      </View>
    </View>
  );
};

export default HaulerHeader;

const styles = StyleSheet.create({
  headerContainer: {
    gap: 16,
    ...centeringStyle,
    flex: 0.35,
    borderBottomWidth: 1.5,
    borderBottomColor: DEFAULT_COLORS.gray[200],
  },
  imageContainer: { position: "relative" },
  image: { width: 100, height: 100, resizeMode: "cover", borderRadius: 100 },
  editContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: DEFAULT_COLORS.white,
    width: 35,
    height: 35,
    zIndex: 10,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: DEFAULT_COLORS.gray[200],
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  edit: {
    flex: 1,
    ...centeringStyle,
  },
  namesContainer: { gap: 4, ...centeringStyle },
  displayName: { color: DEFAULT_COLORS.gray[700], ...textStyles["2xl"].medium },
  text: { color: DEFAULT_COLORS.gray[500], ...textStyles.base.regular },
});
