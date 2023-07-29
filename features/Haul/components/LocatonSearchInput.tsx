import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

import IconRenderer from "../../../components/Icon";
import { DEFAULT_COLORS, textStyles } from "../../../constants";
import { locationComponentProp, locationType } from "../../../types";

type props = {
  type: locationType;
  placeholder: string;
  setShowLocationComponent: Dispatch<SetStateAction<locationComponentProp>>;
  value?: string;
};

const LocatonSearchInput = ({
  placeholder,
  value,
  setShowLocationComponent,
  type,
}: props) => {
  const handleClickInput = () => {
    setShowLocationComponent({ type, show: true });
  };

  return (
    <View style={styles.inputContainer}>
      <IconRenderer
        iconType="location"
        color={DEFAULT_COLORS.gray[500]}
        light={false}
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleClickInput}
        style={styles.input}
      >
        {value ? (
          <Text style={styles.input}>{value}</Text>
        ) : (
          <Text style={[styles.input, { color: DEFAULT_COLORS.gray[400] }]}>
            {placeholder}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default LocatonSearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 12,
    padding: 12,
    borderRadius: 32,
    backgroundColor: DEFAULT_COLORS.white,
    shadowColor: DEFAULT_COLORS.gray[100],
    shadowOffset: { width: 0, height: 5 },
    alignItems: "center",
  },
  input: {
    width: "100%",
    ...textStyles.xs.regular,
    color: DEFAULT_COLORS.gray[600],
  },
});
