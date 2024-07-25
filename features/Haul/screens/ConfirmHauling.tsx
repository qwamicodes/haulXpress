import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { screenStyle } from '../../../constants';
import {
  useAppDispatch,
  useAppSelector,
  useNavigationParams,
} from '../../../hooks';
import { HomeParamList, paymentType } from '../../../types';

import Button from '../../../components/Button';
import { createJourney } from '../../../services';
import HaulJourney from '../components/ConfirmHauling/HaulJourney';
import HaulDriver from '../components/ConfirmHauling/HaulDriver';
import HaulPayment from '../components/ConfirmHauling/HaulPayment';

type props = NativeStackScreenProps<HomeParamList, 'ConfirmHauling'>;

const ConfirmHauling = ({ route }: props) => {
  const [paymentType, setPaymentType] = useState<paymentType>('cash');
  const dispatch = useAppDispatch();

  const navigation = useNavigationParams();
  const location = useAppSelector(state => state.locations);
  const { user } = useAppSelector(state => state.auth);

  const { journey } = route.params;
  const { vehicle } = journey;

  const handleConfirmHaul = () => {
    dispatch(
      createJourney(
        { ...journey, location, status: 'in-progress' },
        user.userId,
        navigation,
      ),
    );
  };

  return (
    <View style={[screenStyle, { justifyContent: 'space-between' }]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
      >
        <HaulJourney />
        <HaulDriver {...vehicle} />
        <HaulPayment
          setPaymentType={setPaymentType}
          paymentType={paymentType}
        />
      </ScrollView>
      <View>
        <Button onPress={handleConfirmHaul} buttonText='confirm haul' icon />
      </View>
    </View>
  );
};

export default ConfirmHauling;
