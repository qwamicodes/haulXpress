import { StyleSheet, View } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";

import { haulStyles } from "../../../constants";
import { IHaulType } from "../../../types/features/haul";

import ProgressBar from "./ProgressBar";
import HaulHistory from "./History";
import Button from "../../../components/Button";
import HaulLocation from "./HaulLocation";

interface Props {
  index: number;
  buttonText: string;
  percentage: number;
  productType: IHaulType[];
  vehicleType: IHaulType[];
  handleNavigateSelection: (type: "next" | "previous") => void;
}

const HaulDestination = ({
  handleNavigateSelection,
  index,
  productType,
  vehicleType,
  percentage,
  buttonText,
}: Props) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");

  const valid = pickupLocation && destinationLocation;

  return (
    <View style={haulStyles.container}>
      <View style={haulStyles.progress}>
        <ProgressBar percentage={percentage} />
      </View>
      <View style={[haulStyles.holder, { flex: 0.1 }]}>
        {productType.length > 0 || vehicleType.length > 0 ? (
          <HaulHistory
            productType={productType}
            vehicleType={vehicleType}
            index={index}
            handleNavigateSelection={handleNavigateSelection}
          />
        ) : (
          false
        )}
      </View>
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, width: "100%" }}
      >
        <HaulLocation
          destinationLocation={destinationLocation}
          pickupLocation={pickupLocation}
          setPickupLocation={setPickupLocation}
          setDestinationLocation={setDestinationLocation}
        />
        <View style={{ width: "100%", marginTop: 16 }}>
          <Button
            style={{ opacity: valid ? 1 : 0.5 }}
            onPress={valid ? () => handleNavigateSelection("next") : undefined}
            buttonText={buttonText}
            icon={false}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default HaulDestination;

const styles = StyleSheet.create({});
