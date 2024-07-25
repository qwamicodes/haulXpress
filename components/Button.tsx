import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { IButton } from '../types';
import { DEFAULT_COLORS, centeringStyle, textStyles } from '../constants';

import IconRenderer from './Icon';

const Button = ({
  buttonText,
  icon,
  iconType,
  iconColor,
  lightIcon,
  style,
  status = 'primary',
  ...rest
}: IButton) => {
  const backgroundColor = {
    primary: DEFAULT_COLORS.gray[800],
    secondary: DEFAULT_COLORS.gray[100],
    'in-progress': DEFAULT_COLORS.gray[100],
    arrived: DEFAULT_COLORS.green[100],
    cancelled: DEFAULT_COLORS.red[100],
  }[status];

  const color = {
    primary: DEFAULT_COLORS.white,
    secondary: DEFAULT_COLORS.gray[500],
    'in-progress': DEFAULT_COLORS.gray[500],
    arrived: DEFAULT_COLORS.green[500],
    cancelled: DEFAULT_COLORS.red[500],
  }[status];

  if (status === 'primary') {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.button, style, { backgroundColor }]}
        {...rest}
      >
        <Text style={[styles.buttonText, { color }]}>{buttonText}</Text>
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
    width: '100%',
    paddingVertical: 16,
    flexDirection: 'row',
    gap: 16,
    ...centeringStyle,
  },
  buttonText: {
    textTransform: 'capitalize',
    ...textStyles.lg.regular,
  },
});
