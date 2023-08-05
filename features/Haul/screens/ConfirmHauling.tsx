import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  DEFAULT_COLORS,
  paymentMethods,
  screenStyle,
  textStyles,
} from "../../../constants";
import { useAppSelector, useNavigationParams } from "../../../hooks";
import { HomeParamList, paymentType } from "../../../types";

import Button from "../../../components/Button";
import IconRenderer from "../../../components/Icon";
import DriverBadge from "../components/DriverBadge";
import PaymentSelector from "../components/PaymentSelector";

type props = NativeStackScreenProps<HomeParamList, "ConfirmHauling">;

const ConfirmHauling = ({ route }: props) => {
  const [paymentType, setPaymentType] = useState<paymentType>("cash");

  const navigation = useNavigationParams();
  const { destination, distance, pickup } = useAppSelector(
    (state) => state.locations
  );

  const { driver } = route.params;

  const handleConfirmHaul = () => {
    navigation.navigate("TabsStack", {
      screen: "Haul",
      params: {
        screen: "ConfirmedHauling",
        //@ts-ignore
        params: { driver },
      },
    });
  };

  return (
    <View style={[screenStyle, { justifyContent: "space-between" }]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
      >
        <View style={[styles.divider]}>
          <View style={styles.header}>
            <IconRenderer iconType="destination" light={false} />
            <Text style={styles.headerText}>Journey</Text>
          </View>
          <View style={{ gap: 8 }}>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>pickup</Text>
              <Text style={[styles.value, styles.locationShorter]}>
                {pickup.name}
              </Text>
            </View>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>destination</Text>
              <Text style={[styles.value, styles.locationShorter]}>
                {destination.name}
              </Text>
            </View>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>distance</Text>
              <Text style={styles.value}>{distance}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.divider, styles.dividerWithBorder]}>
          <View style={styles.header}>
            <IconRenderer light={false} iconType="driver" />
            <Text style={styles.headerText}>Driver</Text>
          </View>
          <DriverBadge showButton driver={driver} />
        </View>
        <View style={[styles.divider, styles.dividerWithBorder]}>
          <View style={styles.header}>
            <IconRenderer iconType="payment" light={false} />
            <Text style={styles.headerText}>Payment method</Text>
          </View>
          <View style={{ gap: 8, flexDirection: "row" }}>
            {paymentMethods.map((props, index) => (
              <PaymentSelector
                setPaymentType={setPaymentType}
                selected={paymentType === props.value}
                key={index}
                {...props}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <View>
        <Button onPress={handleConfirmHaul} buttonText="confirm haul" icon />
      </View>
    </View>
  );
};

export default ConfirmHauling;

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 16 },
  headerText: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.regular },
  divider: { paddingVertical: 24, gap: 24 },
  dividerWithBorder: {
    borderTopColor: DEFAULT_COLORS.gray[200],
    borderTopWidth: 1.5,
  },
  valueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  value: {
    color: DEFAULT_COLORS.gray[500],
    ...textStyles.xs.regular,
    textTransform: "capitalize",
    textAlign: "right",
  },
  locationShorter: {
    width: "40%",
  },
});
