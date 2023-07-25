import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { HomeParamList } from "../../../types";
import {
  DEFAULT_COLORS,
  screenStyle,
  textStyles,
  centeringStyle,
} from "../../../constants";
import Trucks from "../components/Trucks";
import { useAppSelector, useNavigationParams } from "../../../hooks";
import Button from "../../../components/Button";
import DriverBadge from "../components/DriverBadge";

type props = NativeStackScreenProps<HomeParamList, "HaulInformation">;

const HaulInformation = ({ route }: props) => {
  const navigation = useNavigationParams();

  const { distance } = useAppSelector((state) => state.locations);

  const { vehicleDetails } = route.params;
  const { departure, driver, price, vehicleCapacity, vehicleNo, vehicleType } =
    vehicleDetails;
  const { driverName, driverPhotoUrl, driverRating } = driver;

  const handleConfirmHaul = () => {
    navigation.navigate("TabsStack", {
      screen: "Haul",
      params: {
        screen: "ConfirmHauling",
        //@ts-ignore
        params: { driver },
      },
    });
  };

  return (
    <View style={[screenStyle]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 32, alignItems: "center" }}
        style={{ flex: 1 }}
      >
        <View style={[styles.vertically, { alignItems: "center" }]}>
          <View style={{ gap: 8 }}>
            <Text style={styles.vehicleName}>{vehicleType}</Text>
            <Text style={styles.vehicleNo}>{vehicleNo}</Text>
          </View>
          <View>
            <Trucks size="large" type={vehicleType} />
          </View>
        </View>
        <DriverBadge driver={driver} showButton />
        <View
          style={{
            width: "100%",
            gap: 32,
            borderTopColor: DEFAULT_COLORS.gray[200],
            borderTopWidth: 1,
            paddingVertical: 16,
          }}
        >
          <View style={styles.detailHolder}>
            <Text style={styles.header}>Vehicle details</Text>
            <View style={styles.valuesHolder}>
              <Text style={styles.value}>vehicle</Text>
              <Text style={styles.value}>{vehicleType}</Text>
            </View>
            <View style={styles.valuesHolder}>
              <Text style={styles.value}>capacity</Text>
              <Text style={styles.value}>{vehicleCapacity}</Text>
            </View>
          </View>
          <View style={styles.detailHolder}>
            <Text style={styles.header}>Trip details</Text>
            <View style={styles.valuesHolder}>
              <Text style={styles.value}>pick availablity</Text>
              <Text style={styles.value}>yes</Text>
            </View>
            <View style={styles.valuesHolder}>
              <Text style={styles.value}>departure</Text>
              <Text style={styles.value}>{departure} days</Text>
            </View>
            <View style={styles.valuesHolder}>
              <Text style={styles.value}>distance</Text>
              <Text style={styles.value}>{distance}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[centeringStyle, { gap: 8 }]}>
        <View>
          <Text
            style={[
              textStyles.xs.regular,
              { color: DEFAULT_COLORS.gray[400], fontSize: 10 },
            ]}
          >
            Payment of 60% has to be made to commence the hauling process. Read
            our&nbsp;
            <Text style={[{ color: DEFAULT_COLORS.teal[500] }]}>
              Terms and Conditions
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View style={[centeringStyle, { flex: 1 }]}>
            <Text
              style={{
                textTransform: "uppercase",
                color: DEFAULT_COLORS.gray[700],
                ...textStyles["2xl"].medium,
              }}
            >
              ghc {price}
            </Text>
          </View>
          <View>
            <Button
              onPress={handleConfirmHaul}
              iconType="truck"
              icon
              buttonText="Haul"
              lightIcon
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HaulInformation;

const styles = StyleSheet.create({
  detailHolder: { flex: 1, width: "100%", gap: 8 },
  valuesHolder: { flexDirection: "row", justifyContent: "space-between" },
  vertically: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vehicleName: {
    color: DEFAULT_COLORS.gray[700],
    ...textStyles["2xl"].medium,
    textTransform: "capitalize",
  },
  vehicleNo: {},
  header: { color: DEFAULT_COLORS.gray[800], ...textStyles.xs.medium },
  value: {
    color: DEFAULT_COLORS.gray[500],
    ...textStyles.xs.regular,
    textTransform: "capitalize",
  },
});
