import { View } from "react-native";
import React, { useReducer } from "react";
import { omit } from "lodash";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";

import {
  useAppDispatch,
  useNavigationParams,
  useOauthentication,
} from "../../hooks";
import { DEFAULT_COLORS, loginAuth, authInputContainer } from "../../constants";
import { authReducer, initialAuthState } from "./reducer";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import AuthInput from "./components/AuthInput";
import AuthHeader from "./components/AuthHeader";
import Button from "../../components/Button";
import AuthLink from "./components/AuthLink";
import ThirdPartyButton from "./components/ThirdPartyButton";
import { checkAuthValues } from "../../utils/helpers";
import signinUser from "../../services/users/actions/post.signinUser";

const Login = () => {
  const navigate = useNavigationParams();
  const dispatch = useAppDispatch();
  const [promptAsync] = useOauthentication();
  const [authValues, authDispatch] = useReducer(authReducer, initialAuthState);

  const { inputs, ...rest } = loginAuth;

  const handleSubmitLogin = () => {
    const { email, password } = authValues;
    const { message, valid } = checkAuthValues(omit(authValues, "password"));

    if (valid) {
      dispatch(signinUser(email, password, navigate));
    } else {
      alert(message);
    }
  };

  return (
    <ScreenTemplate styles={{ paddingHorizontal: 0 }}>
      <AuthHeader {...rest} />
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
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
              onPress={() => navigate.navigate("Register")}
              text="Don’t have an account? Create one"
            />
            <AuthLink
              activeOpacity={0.8}
              textColor={DEFAULT_COLORS.gray[500]}
              text="Forgot password?"
            />
          </View>
          <View>
            <ThirdPartyButton
              onPress={() => promptAsync()}
              buttonText="continue with google"
            />
          </View>
          <View>
            <Button
              icon={false}
              buttonText="sign in"
              onPress={handleSubmitLogin}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenTemplate>
  );
};

export default Login;
