import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
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
      },
    });
  };

  return (
    <View style={[screenStyle]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 32, alignItems: "center" }}
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
        <View style={[styles.vertically]}>
          <View style={[centeringStyle, { gap: 8, flexDirection: "row" }]}>
            <View>
              <Image
                style={{ width: 50, height: 50, borderRadius: 100 }}
                source={{ uri: driverPhotoUrl }}
              />
            </View>
            <View style={{ gap: 4 }}>
              <Text style={styles.profileName}>{driverName}</Text>
              <Text style={styles.profileRating}>{driverRating} ratings</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileButtonText}>View profile</Text>
            </TouchableOpacity>
          </View>
        </View>
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
      </ScrollView>
      <View
        style={{
          flex: 2,
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
  profileName: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.medium },
  profileRating: { color: DEFAULT_COLORS.gray[500], ...textStyles.xs.regular },
  profileButton: {
    backgroundColor: DEFAULT_COLORS.teal[50],
    padding: 16,
    borderRadius: 4,
    ...centeringStyle,
  },
  profileButtonText: {
    ...textStyles.xs.regular,
    color: DEFAULT_COLORS.teal[600],
  },
});
