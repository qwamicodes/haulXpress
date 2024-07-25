import React from 'react';
import { View } from 'react-native';

import ScreenTemplate from '../../screens/template/ScreenTemplate';
import HaulerHeader from './components/HaulerHeader';
import HaulerFooter from './components/HaulerFooter';
import Button from '../../components/Button';
import { useAppDispatch } from '../../hooks';
import { logoutUser } from '../../services';

const Hauler = () => {
  const dispatch = useAppDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
  };

  return (
    <ScreenTemplate>
      <HaulerHeader />
      <HaulerFooter />
      <View
        style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <Button
          buttonText='logout'
          icon
          lightIcon
          iconType='logout'
          onPress={handleLogoutUser}
        />
      </View>
    </ScreenTemplate>
  );
};

export default Hauler;
