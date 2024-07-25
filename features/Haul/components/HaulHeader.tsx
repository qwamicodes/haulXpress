import { StyleSheet, View } from 'react-native';
import React from 'react';

import { DEFAULT_COLORS } from '../../../constants';

import ProfileBadge from './ProfileBadge';
import EnRoute from './EnRoute';

const HaulHeader = () => {
  const journeyEnRoute = false;

  return (
    <View style={styles.container}>
      {/* profile badge */}
      <ProfileBadge />
      {/* real time haul route */}
      {journeyEnRoute ? <EnRoute /> : false}
    </View>
  );
};

export default HaulHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderBottomColor: DEFAULT_COLORS.gray[200],
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
