import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { vehicleProps } from '../../../types';
import {
  DEFAULT_COLORS,
  textStyles,
  centeringStyle,
  vertically,
} from '../../../constants';

interface Props extends Pick<vehicleProps, 'driver'> {
  showButton?: boolean;
}

const DriverBadge = ({ driver, showButton = false }: Props) => {
  const { driverName, driverPhotoUrl, driverRating } = driver;

  if (showButton) {
    return (
      <View style={vertically}>
        <View style={[centeringStyle, { gap: 8, flexDirection: 'row' }]}>
          <View>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={{ uri: driverPhotoUrl }}
            />
          </View>
          <View style={{ gap: 4 }}>
            <Text style={styles.profileName}>{driverName}</Text>
            <Text style={styles.profileRating}>{driverRating} ratings</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileButtonText}>View profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.badge}>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: driverPhotoUrl }} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.name}>{driverName}</Text>
        <Text style={styles.ratings}>{driverRating} ratings</Text>
      </View>
    </View>
  );
};

export default DriverBadge;

const styles = StyleSheet.create({
  badge: { flexDirection: 'row', gap: 4, ...centeringStyle },
  leftContainer: {},
  rightContainer: { gap: 4 },
  image: { width: 35, height: 35, borderRadius: 100 },
  name: { color: DEFAULT_COLORS.gray[700], ...textStyles.xs.medium },
  ratings: {
    color: DEFAULT_COLORS.gray[500],
    ...textStyles.xs.regular,
  },
  profileName: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.medium },
  profileRating: { color: DEFAULT_COLORS.gray[500], ...textStyles.xs.regular },
  profileButton: {
    backgroundColor: DEFAULT_COLORS.teal[50],
    padding: 16,
    borderRadius: 4,
    ...centeringStyle,
  },
  profileButtonText: {
    ...textStyles.xs.regular,
    color: DEFAULT_COLORS.teal[600],
  },
});
