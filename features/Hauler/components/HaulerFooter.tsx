import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';

import {
  haulerLinks,
  DEFAULT_COLORS,
  centeringStyle,
  textStyles,
} from '../../../constants';
import { useAppDispatch } from '../../../hooks';
import { deleteUserAccount } from '../../../services';

import HaulerLinks from './Link/HaulerLinks';

const HaulerFooter = () => {
  const dispatch = useAppDispatch();

  const handleDeleteAccount = () => {
    dispatch(deleteUserAccount());
  };

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 24,
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {haulerLinks.map((links, index) => (
        <HaulerLinks key={index} {...links} />
      ))}
      <View style={{ width: '100%' }}>
        <TouchableOpacity
          style={styles.deleteButton}
          activeOpacity={0.8}
          onPress={handleDeleteAccount}
        >
          <Text style={styles.deleteButtonText}>delete account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HaulerFooter;

const styles = StyleSheet.create({
  container: { flex: 2 },
  deleteButton: {
    backgroundColor: DEFAULT_COLORS.red[200],
    borderRadius: 40,
    padding: 16,
    ...centeringStyle,
  },
  deleteButtonText: {
    color: DEFAULT_COLORS.red[500],
    textTransform: 'capitalize',
    ...textStyles.sm.medium,
  },
});
