import { View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { haulStyles } from "../../../constants";
import { IHaulType, locationComponentProp } from "../../../types";

import ProgressBar from "./ProgressBar";
import HaulHistory from "./History";
import Button from "../../../components/Button";
import HaulLocation from "./HaulLocation";
import LocationSearchComponent from "./LocationSearchComponent";
import { useAppSelector, useNavigationParams } from "../../../hooks";

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
  const navigation = useNavigationParams();
  const { destination, pickup, distance } = useAppSelector(
    (state) => state.locations
  );

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
      </KeyboardAwareScrollView>
      <View style={{ width: "100%" }}>
        <Button
          activeOpacity={valid && distance ? 1 : 0.5}
          style={{ opacity: valid && distance ? 1 : 0.5 }}
          onPress={
            valid && distance
              ? () =>
                  navigation.navigate("TabsStack", {
                    screen: "Haul",
                    params: { screen: "AvailableTrucks" },
                  })
              : undefined
          }
          buttonText={buttonText}
          icon={false}
        />
      </View>
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
