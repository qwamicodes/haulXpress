import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { IHaulType, haulSelection } from "../../../types";

import HaulSelect from "./HaulSelect";
import { DEFAULT_COLORS, textStyles } from "../../../constants";

interface Props extends Pick<haulSelection, "subHeaderText" | "type"> {
  data: IHaulType[];
  state: IHaulType[];
}

const HaulSelection = ({ data, state, subHeaderText, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.selectionHeader}>
        <Text style={styles.selectionHeaderText}>
          Find the perfect truck for your goods!
        </Text>
      </View>
      <View style={styles.selectionContainer}>
        <View style={styles.selectionContainerHeader}>
          <Text style={styles.selectionContainerHeaderText}>
            {subHeaderText}
          </Text>
          <View style={styles.selection}>
            {data.map((props, index) => (
              <HaulSelect {...rest} select={props} key={index} state={state} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default HaulSelection;

const styles = StyleSheet.create({
  container: { flex: 1, gap: 32 },
  selectionHeader: { width: "75%" },
  selectionHeaderText: {
    color: DEFAULT_COLORS.gray[700],
    ...textStyles["2xl"].medium,
  },
  selectionContainer: {},
  selectionContainerHeader: { gap: 16 },
  selectionContainerHeaderText: {
    color: DEFAULT_COLORS.gray[500],
    ...textStyles.sm.regular,
  },
  selection: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
    flexDirection: "row",
  },
});
