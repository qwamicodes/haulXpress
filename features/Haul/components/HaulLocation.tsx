import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

import { DEFAULT_COLORS, textStyles } from "../../../constants";
import IconRenderer from "../../../components/Icon";

type props = {
  pickupLocation: string;
  destinationLocation: string;
  setPickupLocation: Dispatch<SetStateAction<string>>;
  setDestinationLocation: Dispatch<SetStateAction<string>>;
};

const HaulLocation = ({
  destinationLocation,
  pickupLocation,
  setDestinationLocation,
  setPickupLocation,
}: props) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 32, marginBottom: 16 }}>
        <View style={styles.selectionHeader}>
          <Text style={styles.selectionHeaderText}>
            Let our drivers get a hold of you
          </Text>
        </View>
        <View style={styles.inputHolder}>
          <Text style={styles.selectionContainerHeaderText}>
            Where are you?
          </Text>
          <View style={styles.inputContainer}>
            <IconRenderer
              iconType="location"
              color={DEFAULT_COLORS.gray[500]}
              light={false}
            />
            <TextInput
              defaultValue={pickupLocation}
              onChangeText={(e) => setPickupLocation(e)}
              style={styles.input}
              placeholder="Pickup location"
            />
          </View>
        </View>
        <View style={styles.inputHolder}>
          <Text style={styles.selectionContainerHeaderText}>
            Where to drop of your goods?
          </Text>
          <View style={styles.inputContainer}>
            <IconRenderer
              iconType="location"
              color={DEFAULT_COLORS.gray[500]}
              light={false}
            />
            <TextInput
              defaultValue={destinationLocation}
              onChangeText={(e) => setDestinationLocation(e)}
              style={styles.input}
              placeholder="Destination location"
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.selectionContainerHeaderText}>Distance</Text>
          <Text style={styles.distanceText}>0.88km</Text>
        </View>
      </View>
    </View>
  );
};

export default HaulLocation;

const styles = StyleSheet.create({
  container: { flex: 1, gap: 32 },
  selectionHeader: { width: "75%" },
  selectionHeaderText: {
    color: DEFAULT_COLORS.gray[700],
    ...textStyles["2xl"].medium,
  },
  selectionContainer: {},
  selectionContainerHeader: { gap: 16 },
  selectionContainerHeaderText: {
    color: DEFAULT_COLORS.gray[500],
    ...textStyles.sm.regular,
  },
  inputHolder: { gap: 16 },
  inputContainer: {
    flexDirection: "row",
    gap: 12,
    padding: 12,
    borderRadius: 32,
    backgroundColor: DEFAULT_COLORS.white,
    shadowColor: DEFAULT_COLORS.gray[100],
    shadowOffset: { width: 0, height: 5 },
    alignItems: "center",
  },
  input: { width: "100%" },
  distanceText: { color: DEFAULT_COLORS.gray[700], ...textStyles["xl"].medium },
});
