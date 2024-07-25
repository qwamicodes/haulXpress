import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { IHaulerLink } from '../../../../types';
import {
  centeringStyle,
  textStyles,
  DEFAULT_COLORS,
} from '../../../../constants';
import { useNavigationParams } from '../../../../hooks';

import IconRenderer from '../../../../components/Icon';

const HaulerLink = ({ iconType, name, path, link }: IHaulerLink) => {
  const navigate = useNavigationParams();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={
        link
          ? undefined
          : //@ts-ignore
            () => navigate.navigate(path)
      }
    >
      <View style={styles.leftContainer}>
        <View style={styles.iconContainer}>
          <IconRenderer iconType={iconType} light={false} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <IconRenderer
          iconType={link ? 'openLink' : 'chevronRight'}
          light={false}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HaulerLink;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  leftContainer: {
    flex: 1,
    gap: 12,
    paddingVertical: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightContainer: {},
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: DEFAULT_COLORS.gray[200],
    ...centeringStyle,
  },
  text: { ...textStyles.base.medium, color: DEFAULT_COLORS.gray[600] },
});
