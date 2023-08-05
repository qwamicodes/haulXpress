import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { vehicleProps } from "../../../../types";
import {
  DEFAULT_COLORS,
  textStyles,
  centeringStyle,
} from "../../../../constants";

import DriverBadge from "../DriverBadge";
import Trucks from "../Trucks";
import { useNavigationParams } from "../../../../hooks";

const AvailableTruck = ({ vehicleNo, vehicleType, ...rest }: vehicleProps) => {
  const navigation = useNavigationParams();
  const price = 500;
  const departure = "3 days";

  const handleGoToHaulDetails = () => {
    navigation.navigate("TabsStack", {
      screen: "Haul",
      params: {
        screen: "HaulInformation",
        //@ts-ignore
        params: {
          vehicleDetails: { ...rest, vehicleNo, vehicleType, price, departure },
        },
      },
    });
  };

  return (
    <TouchableOpacity
      onPress={handleGoToHaulDetails}
      activeOpacity={0.8}
      style={styles.container}
    >
      <View style={styles.item}>
        <View>
          <Text style={styles.truckName}>{vehicleType}</Text>
          <Text style={styles.truckNo}>{vehicleNo}</Text>
        </View>
        <View>
          <Trucks type={vehicleType} />
        </View>
        <View>
          <Text style={styles.haulDetails}>
            Price: &nbsp;
            <Text style={styles.haulDetailsPrimary}>GHC {price}</Text>
          </Text>
          <Text style={styles.haulDetails}>
            Departure:&nbsp;
            <Text style={styles.haulDetailsPrimary}>{departure}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.item}>
        <DriverBadge {...rest} />
        <View>
          <View style={styles.availableBtn}>
            <Text style={styles.availableBtnText}>available</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AvailableTruck;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 16,
    borderBottomColor: DEFAULT_COLORS.gray[200],
    borderBottomWidth: 1,
  },
  item: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  truckName: {
    color: DEFAULT_COLORS.gray[700],
    textTransform: "capitalize",
    ...textStyles.sm.regular,
  },
  truckNo: {
    color: DEFAULT_COLORS.gray[500],
    textTransform: "uppercase",
    ...textStyles.xs.regular,
  },
  haulDetails: { ...textStyles.xs.regular, color: DEFAULT_COLORS.gray[400] },
  haulDetailsPrimary: { color: DEFAULT_COLORS.gray[700] },
  availableBtn: {
    backgroundColor: DEFAULT_COLORS.teal[400],
    ...centeringStyle,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  availableBtnText: {
    color: DEFAULT_COLORS.white,
    ...textStyles.xs.medium,
    textTransform: "capitalize",
  },
});
