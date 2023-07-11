import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useAppSelector } from "../../../hooks";

const HaulerHeader = () => {
  const {} = useAppSelector((state) => state.auth);

  return (
    <View>
      <Text>HaulerHeader</Text>
    </View>
  );
};

export default HaulerHeader;

const styles = StyleSheet.create({ headerContainer: {} });
