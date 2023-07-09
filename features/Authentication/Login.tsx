import { View } from "react-native";
import React from "react";

import { useNavigationParams } from "../../hooks";
import { DEFAULT_COLORS, loginAuth, authInputContainer } from "../../constants";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import AuthInput from "./components/AuthInput";
import AuthHeader from "./components/AuthHeader";
import Button from "../../components/Button";
import AuthLink from "./components/AuthLink";
import ThirdPartyButton from "./components/ThirdPartyButton";

const Login = () => {
  const navigate = useNavigationParams();

  const { inputs, ...rest } = loginAuth;

  return (
    <ScreenTemplate styles={{ paddingHorizontal: 0 }}>
      <AuthHeader {...rest} />
      <View style={authInputContainer}>
        {inputs.map(({ ...rest }, index) => (
          <AuthInput key={index} {...rest} />
        ))}
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <AuthLink
            activeOpacity={0.8}
            onPress={() => navigate("Register")}
            text="Don’t have an account? Create one"
          />
          <AuthLink
            activeOpacity={0.8}
            textColor={DEFAULT_COLORS.gray[500]}
            text="Forgot password?"
          />
        </View>
        <View>
          <ThirdPartyButton buttonText="continue with google" />
        </View>
        <View>
          <Button icon={false} buttonText="sign in" />
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default Login;
