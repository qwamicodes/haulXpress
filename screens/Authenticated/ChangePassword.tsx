import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import { checkPassword } from '../../utils/helpers';
import { useAppDispatch } from '../../hooks';
import { changePassword } from '../../services';

import Button from '../../components/Button';
import AuthInput from '../../features/Authentication/components/AuthInput';
import { screenStyle } from '../../constants';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useAppDispatch();

  const { valid, message } = checkPassword(password, confirmPassword);
  const validPasswords = password && confirmPassword;

  const handleChangePassword = () => {
    if (valid) {
      dispatch(changePassword(confirmPassword));
    } else {
      alert(message);
    }
  };

  return (
    <View style={[screenStyle]}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ gap: 16 }}>
          <AuthInput
            name='password'
            label='new password'
            placeholder='***************'
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <AuthInput
            name='password'
            label='confirm new password'
            placeholder='***************'
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
        <View>
          <Button
            icon={false}
            buttonText='save changes'
            style={{ opacity: validPasswords ? 1 : 0.5 }}
            onPress={validPasswords ? handleChangePassword : undefined}
          />
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
