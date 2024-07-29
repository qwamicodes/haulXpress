import { StyleSheet, Text, View } from 'react-native';

import {
  DEFAULT_COLORS,
  centeringStyle,
  textStyles,
} from '../../../../constants';
import { journeyStatus } from '../../../../types';

type props = {
  status: 'available' | journeyStatus;
};

const StatusBtn = ({ status }: props) => {
  const btnType = {
    available: styles.availableBtn,
    arrived: styles.successBtn,
    'in-progress': styles.pendingBtn,
    cancelled: styles.cancelledBtn,
  }[status];

  return (
    <View style={[styles.btn, btnType]}>
      <Text style={[styles.text]}>{status}</Text>
    </View>
  );
};

export default StatusBtn;

const styles = StyleSheet.create({
  btn: {
    ...centeringStyle,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  availableBtn: {
    backgroundColor: DEFAULT_COLORS.teal[400],
  },
  successBtn: {
    backgroundColor: DEFAULT_COLORS.green[500],
  },
  cancelledBtn: {
    backgroundColor: DEFAULT_COLORS.red[500],
  },
  pendingBtn: {
    backgroundColor: DEFAULT_COLORS.gray[300],
  },
  text: {
    color: DEFAULT_COLORS.white,
    ...textStyles.xs.medium,
    textTransform: 'capitalize',
  },
});
