import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

import IconRenderer from '../../../components/Icon';
import { DEFAULT_COLORS, centeringStyle, textStyles } from '../../../constants';

interface Props extends TouchableOpacityProps {
  buttonText: string;
}

const ThirdPartyButton = ({ buttonText, ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.9} style={styles.button}>
      {<IconRenderer iconType='google' light />}
      <Text style={[styles.buttonText]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ThirdPartyButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 24,
    width: '100%',
    backgroundColor: DEFAULT_COLORS.white,
    paddingVertical: 16,
    ...centeringStyle,
  },
  buttonText: {
    color: DEFAULT_COLORS.gray[500],
    textTransform: 'capitalize',
    ...textStyles.base.regular,
  },
});
