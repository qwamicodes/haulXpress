import { View } from "react-native";
import React from "react";

import { registerAuth, authInputContainer } from "../../constants";
import { useNavigationParams } from "../../hooks";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import AuthInput from "./components/AuthInput";
import AuthHeader from "./components/AuthHeader";
import Button from "../../components/Button";
import AuthLink from "./components/AuthLink";
import ThirdPartyButton from "./components/ThirdPartyButton";

const Register = () => {
  const navigate = useNavigationParams();

  const { inputs, ...rest } = registerAuth;

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
            text="Have an account? Login"
            onPress={() => navigate("Login")}
          />
        </View>
        <View>
          <ThirdPartyButton buttonText="continue with google" />
        </View>
        <View>
          <Button icon={false} buttonText="create account" />
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default Register;
