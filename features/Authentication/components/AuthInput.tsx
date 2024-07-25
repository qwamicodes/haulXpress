import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

import { IAuthInput } from '../../../types';
import { DEFAULT_COLORS, textStyles } from '../../../constants';

const AuthInput = ({ label, ...rest }: IAuthInput) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.labelText]}>{label}</Text>
      <View style={[styles.inputContainer]}>
        <TextInput
          placeholderTextColor={DEFAULT_COLORS.gray[400]}
          style={[styles.input]}
          {...rest}
        />
      </View>
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  container: { gap: 8 },
  labelText: {
    ...textStyles.base.regular,
    textTransform: 'capitalize',
    color: DEFAULT_COLORS.gray[800],
  },
  inputContainer: {},
  input: {
    ...textStyles.xs.regular,
    padding: 16,
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.gray[300],
  },
});
