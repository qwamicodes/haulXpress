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
  style,
  type = "primary",
  ...rest
}: IButton) => {
  const backgroundColor =
    type === "secondary" ? DEFAULT_COLORS.gray[100] : DEFAULT_COLORS.green[100];
  const color =
    type === "secondary" ? DEFAULT_COLORS.gray[500] : DEFAULT_COLORS.green[500];

  if (type === "primary") {
    return (
      <TouchableOpacity
        activeOpacity={1}
        {...rest}
        style={[styles.button, style]}
      >
        <Text style={[styles.buttonText]}>{buttonText}</Text>
        {icon && lightIcon && iconType ? (
          <IconRenderer
            iconType={iconType}
            light={lightIcon}
            color={iconColor}
          />
        ) : (
          false
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      {...rest}
      style={[styles.button, style, { backgroundColor, borderRadius: 100 }]}
    >
      <Text style={[styles.buttonText, textStyles.base.regular, { color }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: DEFAULT_COLORS.gray[800],
    paddingVertical: 16,
    flexDirection: "row",
    gap: 16,
    ...centeringStyle,
  },
  buttonText: {
    color: DEFAULT_COLORS.gray[50],
    textTransform: "capitalize",
    ...textStyles.lg.regular,
  },
});
