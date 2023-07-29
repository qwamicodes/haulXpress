import { View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

import { IHaulType, haulSelection } from "../../../types";
import { haulStyles } from "../../../constants";

import Button from "../../../components/Button";
import HaulHistory from "./History";
import ProgressBar from "./ProgressBar";
import HaulSelection from "./HaulSelection";

interface Props extends haulSelection {
  index: number;
  check: boolean;
  productType: IHaulType[];
  vehicleType: IHaulType[];
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  handleNavigateSelection: (type: "next" | "previous") => void;
}

const HaulStart = ({
  productType,
  vehicleType,
  data,
  percentage,
  buttonText,
  type,
  index,
  setCurrentIndex,
  handleNavigateSelection,
  check,
  ...rest
}: Props) => {
  return (
    <View style={haulStyles.container}>
      <View style={haulStyles.progress}>
        <ProgressBar percentage={percentage} />
      </View>
      <View style={haulStyles.holder}>
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
        <HaulSelection
          type={type}
          state={type === "product" ? productType : vehicleType}
          data={data}
          {...rest}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Button
          activeOpacity={check ? 1 : 0.5}
          style={{ opacity: check ? 1 : 0.5 }}
          onPress={check ? () => handleNavigateSelection("next") : undefined}
          buttonText={buttonText}
          icon={false}
        />
      </View>
    </View>
  );
};

export default HaulStart;
