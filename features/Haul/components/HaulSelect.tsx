import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import { DEFAULT_COLORS, textStyles, centeringStyle } from "../../../constants";
import { IHaulType, haulSelection } from "../../../types/features/haul";
import { useAppDispatch } from "../../../hooks";
import { addHaulingData } from "../../../store/slices/haulSlice";
import { haulExistsInState } from "../../../utils/helpers";

interface Props extends Pick<haulSelection, "type"> {
  select: IHaulType;
  state: IHaulType[];
}

const HaulSelect = ({ select, state, type }: Props) => {
  const dispatch = useAppDispatch();

  const { name } = select;
  const exists = haulExistsInState(state, select);

  const handleSelect = () => {
    // if (value === "others") {
    //   return;
    // }
    dispatch(addHaulingData({ type, select }));
  };

  return (
    <TouchableOpacity
      onPress={handleSelect}
      activeOpacity={0.6}
      style={[
        styles.button,
        exists ? styles.buttonSelected : styles.buttonUnselected,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          exists ? styles.buttonTextSelected : styles.buttonTextUnselected,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default HaulSelect;

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    padding: 16,
    borderRadius: 8,
    ...centeringStyle,
  },
  buttonText: {
    ...textStyles.sm.regular,
    textTransform: "capitalize",
  },
  buttonUnselected: {
    backgroundColor: DEFAULT_COLORS.teal[50],
  },
  buttonTextUnselected: {
    color: DEFAULT_COLORS.teal[600],
  },
  buttonSelected: {
    backgroundColor: DEFAULT_COLORS.teal[400],
  },
  buttonTextSelected: {
    color: DEFAULT_COLORS.teal[50],
  },
});
