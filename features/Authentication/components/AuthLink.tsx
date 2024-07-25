import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

import { DEFAULT_COLORS, textStyles } from '../../../constants';

const AuthLink = ({
  text,
  textColor = DEFAULT_COLORS.gray[800],
  ...rest
}: TouchableOpacityProps & { text: string; textColor?: string }) => {
  return (
    <TouchableOpacity style={styles.link} {...rest}>
      <Text style={[styles.link, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AuthLink;

const styles = StyleSheet.create({
  link: {},
  text: { ...textStyles.xs.regular },
});
