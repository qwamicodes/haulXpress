import { ScrollView, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { HomeParamList, IJourney } from "../../../types";
import { useAppSelector, useNavigationParams } from "../../../hooks";
import {
  DEFAULT_COLORS,
  screenStyle,
  textStyles,
  centeringStyle,
} from "../../../constants";

import Button from "../../../components/Button";
import DriverBadge from "../components/DriverBadge";
import VehicleDetails from "../components/HaulInformation/VehicleDetails";
import HaulDetails from "../components/HaulInformation/HaulDetails";
import PaymentTerms from "../components/HaulInformation/PaymentTerms";

type props = NativeStackScreenProps<HomeParamList, "HaulInformation">;

const HaulInformation = ({ route }: props) => {
  const navigation = useNavigationParams();

  const location = useAppSelector((state) => state.locations);

  const { journey } = route.params;
  const { departure, price, vehicle } = journey;
  const { driver } = vehicle;

  const handleConfirmHaul = () => {
    const journey: IJourney = {
      location,
      departure,
      price,
      vehicle,
      status: "in-progress",
    };

    navigation.navigate("TabsStack", {
      screen: "Haul",
      params: {
        screen: "ConfirmHauling",
        //@ts-ignore
        params: { journey },
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
        <VehicleDetails {...vehicle} />
        <DriverBadge driver={driver} showButton />
        <HaulDetails {...journey} />
      </ScrollView>
      <View style={[centeringStyle, { gap: 8 }]}>
        <PaymentTerms />
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
