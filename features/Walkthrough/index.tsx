import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppIntroSlider from "react-native-app-intro-slider";
import { pick, uniqueId } from "lodash";

import { useAppDispatch, useNavigationParams } from "../../hooks";
import {
  DEFAULT_COLORS,
  screenStyle,
  walkthroughItems,
  centeringStyle,
} from "../../constants";
import { IWalkThroughItem, driversProps, vehicleProps } from "../../types";

import WalkthroughItem from "./components/WalkthroughItem";
import Button from "../../components/Button";
import { createData } from "../../services";

const Walkthrough = () => {
  const navigate = useNavigationParams();
  const dispatch = useAppDispatch();

  const renderItem = ({
    item,
    index,
  }: {
    item: IWalkThroughItem;
    index: number;
  }) => <WalkthroughItem key={index} {...item} />;

  const handleCreateData = () => {
    const driverData: driversProps = {
      driverName: "Oliver Thomas",
      driverPhotoUrl:
        "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      driverRating: 4.2,
      yearOfExperience: 4,
      languageSpoken: ["Twi", "Ga"],
      driverLicense: {
        licensePhotoUrl: "https://example.com/license.jpg",
        certificationPhotoUrl: "https://example.com/certification.jpg",
      },
      vehicleInsurance: {
        insurancePolicyNumber: uniqueId("policies_"),
        insuranceCompany: "Eltsi Insurance",
        validUntil: "2023-08-31",
      },
      loadingAssistance: true,
      trackingCapabilities: true,
      driversContact: {
        phoneNumber: "+233558877447",
        email: "adebayoidowu@example.com",
      },
    };

    const vehicleData: vehicleProps = {
      vehicleType: "container",
      vehicleNo: "GS-547-22",
      vehicleCapacity: 6,
      driver: pick(driverData, [
        "driverName",
        "driverPhotoUrl",
        "driverRating",
      ]),
    };

    dispatch(createData(driverData, vehicleData));
  };

  return (
    <SafeAreaView
      style={[screenStyle, { paddingVertical: 16, paddingHorizontal: 0 }]}
    >
      <View style={{ flex: 1 }}>
        <AppIntroSlider
          bottomButton
          showPrevButton={true}
          renderPagination={(activeIndex: number) => {
            return (
              <View style={styles.paginationContainer}>
                <View style={styles.dotsContainer}>
                  {walkthroughItems.length > 1 &&
                    walkthroughItems.map((_, i) => (
                      <TouchableOpacity
                        key={i}
                        activeOpacity={0.8}
                        style={[
                          styles.dots,
                          i === activeIndex && styles.activeDot,
                        ]}
                      />
                    ))}
                </View>
                <View>
                  <Button
                    onPress={() => navigate.navigate("Login")}
                    buttonText="get started"
                    icon={false}
                  />
                </View>
              </View>
            );
          }}
          data={walkthroughItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </View>
    </SafeAreaView>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  paginationContainer: {
    flex: 1,
    height: 150,
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  dotsContainer: { flex: 1, flexDirection: "row", gap: 10, ...centeringStyle },
  dots: {
    backgroundColor: DEFAULT_COLORS.gray[200],
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  activeDot: { width: 40, backgroundColor: DEFAULT_COLORS.gray[700] },
});
