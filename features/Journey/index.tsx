import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { screenStyle } from "../../constants";
import { useAppSelector } from "../../hooks";
import AvailableTruck from "../Haul/components/AvailableTrucks";

const Journey = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { journey } = user;

  return (
    <View style={[screenStyle]}>
      {journey.map((props, index) => (
        <AvailableTruck key={index} {...props} />
      ))}
    </View>
  );
};

export default Journey;

const styles = StyleSheet.create({});
