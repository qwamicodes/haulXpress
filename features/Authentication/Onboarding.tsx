import { View } from "react-native";
import React, { useReducer } from "react";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";

import {
  useAppDispatch,
  useAppSelector,
  useNavigationParams,
} from "../../hooks";
import { setUserData } from "../../services";
import { authInputContainer, onboardingAuth } from "../../constants";
import { initialOnboardState, onboardingReducer } from "./reducer";

import ScreenTemplate from "../../screens/template/ScreenTemplate";
import AuthHeader from "./components/AuthHeader";
import Button from "../../components/Button";
import AuthInput from "./components/AuthInput";
import { checkOnboardingValues } from "../../utils/helpers";

const Onboarding = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigationParams();
  const { user } = useAppSelector((state) => state.auth);
  const [onboardValues, onboardDispatch] = useReducer(
    onboardingReducer,
    initialOnboardState
  );

  const { inputs, ...rest } = onboardingAuth;

  const handleOnboardUser = () => {
    const { message, valid } = checkOnboardingValues(onboardValues);
    const { userId } = user;

    if (valid) {
      dispatch(setUserData({ ...onboardValues, userId }, navigate));
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
                onboardDispatch({
                  type: "SET_VALUES",
                  payload: {
                    [name]: text,
                  },
                });
              }}
            />
          ))}
          <View>
            <Button
              icon={false}
              buttonText="save changes"
              onPress={handleOnboardUser}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenTemplate>
  );
};

export default Onboarding;
