import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DEFAULT_COLORS } from '../../../constants';

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <View style={styles.progressBar}>
      <View style={[styles.progress, { width: `${percentage}%` }]} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBar: {
    height: 5,
    width: 250,
    backgroundColor: DEFAULT_COLORS.teal[100],
    borderRadius: 16,
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: DEFAULT_COLORS.teal[400],
    height: '100%',
  },
});
