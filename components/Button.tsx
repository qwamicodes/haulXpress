import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import { IButton } from "../types";
import { DEFAULT_COLORS, centeringStyle, textStyles } from "../constants";
import IconRenderer from "./Icon";

const Button = ({
  buttonText,
  icon,
  iconType,
  iconColor,
  lightIcon,
  ...rest
}: IButton) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.9} style={styles.button}>
      <Text style={[styles.buttonText]}>{buttonText}</Text>
      {icon && lightIcon && iconType ? (
        <IconRenderer iconType={iconType} light={lightIcon} color={iconColor} />
      ) : (
        false
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: DEFAULT_COLORS.gray[800],
    paddingVertical: 16,
    ...centeringStyle,
  },
  buttonText: {
    color: DEFAULT_COLORS.gray[50],
    textTransform: "capitalize",
    ...textStyles.lg.regular,
  },
});
