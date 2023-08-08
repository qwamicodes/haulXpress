import { StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

import {
  DEFAULT_COLORS,
  divider,
  paymentMethods,
  textStyles,
} from "../../../../constants";
import { paymentType } from "../../../../types";

import IconRenderer from "../../../../components/Icon";
import PaymentSelector from "../PaymentSelector";

type props = {
  paymentType: paymentType;
  setPaymentType: Dispatch<SetStateAction<paymentType>>;
};

const HaulPayment = ({ paymentType, setPaymentType }: props) => {
  return (
    <View style={[divider]}>
      <View style={styles.header}>
        <IconRenderer iconType="payment" light={false} />
        <Text style={styles.headerText}>Payment method</Text>
      </View>
      <View style={{ gap: 8, flexDirection: "row" }}>
        {paymentMethods.map((props, index) => (
          <PaymentSelector
            setPaymentType={setPaymentType}
            selected={paymentType === props.value}
            key={index}
            {...props}
          />
        ))}
      </View>
    </View>
  );
};

export default HaulPayment;

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 16 },
  headerText: { color: DEFAULT_COLORS.gray[700], ...textStyles.base.regular },
});
