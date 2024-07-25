import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { DEFAULT_COLORS, textStyles } from '../../../constants';

import IconRenderer from '../../../components/Icon';

const EnRoute = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <IconRenderer
          light
          iconType='truck'
          color={DEFAULT_COLORS.green[600]}
        />
      </View>
      <View>
        <Text style={styles.text}>Journey en route</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EnRoute;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 8,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: DEFAULT_COLORS.gray[800],
    borderRadius: 100,
  },
  text: { color: DEFAULT_COLORS.white, ...textStyles.xs.regular },
});
