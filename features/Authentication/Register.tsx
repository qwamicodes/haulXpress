import { View } from "react-native";
import React, { useReducer } from "react";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";

import { registerAuth, authInputContainer } from "../../constants";
import { useAppDispatch, useNavigationParams } from "../../hooks";
import { authReducer, initialAuthState } from "./reducer";
import { checkAuthValues } from "../../utils/helpers";
import { createUser } from "../../services";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import AuthInput from "./components/AuthInput";
import AuthHeader from "./components/AuthHeader";
import Button from "../../components/Button";
import AuthLink from "./components/AuthLink";
import ThirdPartyButton from "./components/ThirdPartyButton";

const Register = () => {
  const [authValues, authDispatch] = useReducer(authReducer, initialAuthState);
  const navigate = useNavigationParams();
  const dispatch = useAppDispatch();

  const { inputs, ...rest } = registerAuth;

  const handleSubmitRegistration = () => {
    const { email, password } = authValues;
    const { message, valid } = checkAuthValues(authValues);

    if (valid) {
      dispatch(createUser(email, password, navigate));
    } else {
      alert(message);
    }
  };

  return (
    <ScreenTemplate styles={{ paddingHorizontal: 0 }}>
      <AuthHeader {...rest} />
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={authInputContainer}>
          {inputs.map(({ name, ...rest }, index) => (
            <AuthInput
              name={name}
              key={index}
              {...rest}
              onChangeText={(text) => {
                authDispatch({
                  type: "SET_VALUES",
                  payload: {
                    [name]: text,
                  },
                });
              }}
            />
          ))}
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <AuthLink
              activeOpacity={0.8}
              text="Have an account? Login"
              onPress={() => navigate.navigate("Login")}
            />
          </View>
          <View>
            <ThirdPartyButton buttonText="continue with google" />
          </View>
          <View>
            <Button
              icon={false}
              buttonText="create account"
              onPress={handleSubmitRegistration}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenTemplate>
  );
};

export default Register;
