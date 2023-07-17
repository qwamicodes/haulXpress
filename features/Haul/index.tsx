import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import { useAppSelector, useNavigationParams } from "../../hooks";
import { haulSelectionData } from "../../constants";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import HaulHeader from "./components/HaulHeader";
import HaulStart from "./components/HaulStart";
import HaulDestination from "./components/HaulDestination";
import { StackActions } from "@react-navigation/native";

const Haul = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigationParams();

  const { user } = useAppSelector((state) => state.auth);
  const haulState = useAppSelector((state) => state.haul);

  const handleCheckSelection = (): boolean => {
    const { productType, vehicleType } = haulState;

    if (currentIndex === 0 && productType.length > 0) {
      return true;
    }

    if (currentIndex === 1 && vehicleType.length > 0) {
      return true;
    }

    return false;
  };

  const handleNavigateSelection = (type: "next" | "previous") => {
    if (currentIndex === 2)
      return navigation.navigate("TabsStack", {
        screen: "Haul",
        params: { screen: "AvailableTrucks" },
      });
    // return navigation.dispatch(
    //   StackActions.push("Haul", { screen: "AvailableTrucks" })
    // );

    switch (type) {
      case "next":
        setCurrentIndex(currentIndex + 1);
        break;
      case "previous":
        setCurrentIndex(currentIndex - 1);
        break;
    }
  };

  return (
    <ScreenTemplate>
      <HaulHeader />

      <View style={styles.startContainer}>
        {haulSelectionData.map((props, index) => {
          if (currentIndex === index) {
            return (
              <HaulStart
                check={handleCheckSelection()}
                key={index}
                index={index}
                setCurrentIndex={setCurrentIndex}
                handleNavigateSelection={handleNavigateSelection}
                {...props}
                {...haulState}
              />
            );
          }
          return false;
        })}
        {currentIndex === 2 ? (
          <HaulDestination
            index={currentIndex}
            buttonText="search for truck"
            percentage={100}
            handleNavigateSelection={handleNavigateSelection}
            {...haulState}
          />
        ) : (
          false
        )}
      </View>
    </ScreenTemplate>
  );
};

export default Haul;

const styles = StyleSheet.create({
  startContainer: { flex: 1 },
});
