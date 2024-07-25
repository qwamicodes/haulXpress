import { Text, View } from 'react-native';
import React from 'react';

import { DEFAULT_COLORS, textStyles } from '../../../../constants';

const PaymentTerms = () => {
  return (
    <View>
      <Text
        style={[
          textStyles.xs.regular,
          { color: DEFAULT_COLORS.gray[400], fontSize: 10 },
        ]}
      >
        Payment of 60% has to be made to commence the hauling process. Read
        our&nbsp;
        <Text style={[{ color: DEFAULT_COLORS.teal[500] }]}>
          Terms and Conditions
        </Text>
      </Text>
    </View>
  );
};

export default PaymentTerms;
