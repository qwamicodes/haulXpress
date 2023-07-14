import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

import ProgressBar from "./ProgressBar";
import { centeringStyle } from "../../../constants";
import { IHaulType, haulSelection } from "../../../types/features/haul";

import IconRenderer from "../../../components/Icon";
import Button from "../../../components/Button";
import HaulSelection from "./HaulSelection";
import HaulHistory from "./HaulHistory";

interface Props extends haulSelection {
  productType: IHaulType[];
  vehicleType: IHaulType[];
}

const HaulStart = ({
  productType,
  vehicleType,
  data,
  percentage,
  buttonText,
  type,
  ...rest
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <ProgressBar percentage={percentage} />
      </View>
      <View style={{ flex: 1, gap: 32 }}>
        {productType.length > 0 || vehicleType.length > 0 ? (
          <View style={styles.historyContainer}>
            <TouchableOpacity style={styles.backButton}>
              <IconRenderer light={false} iconType="arrorBack" />
            </TouchableOpacity>
            <ScrollView
              contentContainerStyle={{
                // justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
              }}
              style={styles.history}
            >
              <View style={[styles.historyItem, { flex: 0.5 }]}>
                {productType.map((props, index) => (
                  <HaulHistory {...props} key={index} />
                ))}
              </View>
              <View style={styles.historyItem}>
                {vehicleType.map((props, index) => (
                  <HaulHistory {...props} key={index} />
                ))}
              </View>
            </ScrollView>
          </View>
        ) : (
          false
        )}
        <HaulSelection
          type={type}
          {...rest}
          state={type === "product" ? productType : vehicleType}
          data={data}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Button buttonText={buttonText} icon={false} />
      </View>
    </View>
  );
};

export default HaulStart;

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    width: width - 48,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 32,
  },
  progress: { flexBasis: "5%", ...centeringStyle },
  backButton: { paddingVertical: 8 },
  historyContainer: { flexDirection: "row", gap: 16, overflow: "hidden" },
  history: {
    flex: 1,
  },
  historyItem: { flex: 1, gap: -16, flexDirection: "row" },
});
