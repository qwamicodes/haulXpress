import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { IHaulerLinks } from '../../../../types';
import { textStyles, DEFAULT_COLORS } from '../../../../constants';

import HaulerLink from './HaulerLink';

const HaulerLinks = ({ header, links }: IHaulerLinks) => {
  return (
    <View style={styles.container}>
      <Text style={styles.linksText}>{header}</Text>
      <View style={styles.linksContainer}>
        {links.map((link, index) => (
          <HaulerLink {...link} key={index} />
        ))}
      </View>
    </View>
  );
};

export default HaulerLinks;

const styles = StyleSheet.create({
  container: { width: '100%', gap: 16, marginTop: 16 },
  linksText: { ...textStyles.xs.regular, color: DEFAULT_COLORS.gray[600] },
  linksContainer: { gap: 16 },
});
