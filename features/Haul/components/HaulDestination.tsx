import { View } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { haulStyles } from "../../../constants";
import { IHaulType, locationComponentProp } from "../../../types/features/haul";

import ProgressBar from "./ProgressBar";
import HaulHistory from "./History";
import Button from "../../../components/Button";
import HaulLocation from "./HaulLocation";
import LocationSearchComponent from "./LocationSearchComponent";
import { useAppSelector } from "../../../hooks";

interface Props {
  index: number;
  buttonText: string;
  percentage: number;
  productType: IHaulType[];
  vehicleType: IHaulType[];
  showLocationComponent: locationComponentProp;
  setShowLocationComponent: Dispatch<SetStateAction<locationComponentProp>>;
  handleNavigateSelection: (type: "next" | "previous") => void;
}

const HaulDestination = ({
  index,
  productType,
  vehicleType,
  percentage,
  buttonText,
  showLocationComponent,
  setShowLocationComponent,
  handleNavigateSelection,
}: Props) => {
  const { destination, pickup } = useAppSelector((state) => state.locations);

  const valid = pickup.name && destination.name;

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
        <HaulLocation setShowLocationComponent={setShowLocationComponent} />
        <View style={{ width: "100%", marginTop: 16 }}>
          <Button
            activeOpacity={valid ? 1 : 0.5}
            style={{ opacity: valid ? 1 : 0.5 }}
            onPress={valid ? () => handleNavigateSelection("next") : undefined}
            buttonText={buttonText}
            icon={false}
          />
        </View>
      </KeyboardAwareScrollView>
      {showLocationComponent.show ? (
        <LocationSearchComponent
          locationComponent={showLocationComponent}
          setShowLocationComponent={setShowLocationComponent}
        />
      ) : (
        false
      )}
    </View>
  );
};

export default HaulDestination;