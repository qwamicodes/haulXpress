import { View } from "react-native";
import React, { useReducer } from "react";
import { isMatch } from "lodash";

import {
  useAppDispatch,
  useAppSelector,
  useNavigationParams,
} from "../../hooks";
import { onboardingReducer } from "../../features/Authentication/reducer";
import { onboardingAuth, screenStyle } from "../../constants";
import AuthInput from "../../features/Authentication/components/AuthInput";
import Button from "../../components/Button";
import { checkOnboardingValues } from "../../utils/helpers";
import { updateUser } from "../../services";

const EditProfile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigationParams();
  const { user } = useAppSelector((state) => state.auth);
  const onboardInitialState = {
    displayName: user.displayName ?? "",
    phoneNumber: user.phoneNumber ?? "",
    occupation: user.occupation ?? "",
  };
  const [profileValues, profileDispatch] = useReducer(
    onboardingReducer,
    onboardInitialState
  );

  const { inputs } = onboardingAuth;

  const sameProfileData = isMatch(user, profileValues);

  const handleEditProfile = () => {
    const { valid, message } = checkOnboardingValues(profileValues);
    const { userId } = user;

    if (valid) {
      dispatch(updateUser({ ...profileValues, userId }, navigate));
    } else {
      alert(message);
    }
  };

  return (
    <View style={[screenStyle]}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={{ gap: 16 }}>
          {inputs.map(({ name, ...rest }, index) => {
            return (
              <AuthInput
                key={index}
                //@ts-ignore
                defaultValue={profileValues[name]}
                name={name}
                {...rest}
                onChangeText={(text) => {
                  profileDispatch({
                    type: "SET_VALUES",
                    payload: {
                      [name]: text,
                    },
                  });
                }}
              />
            );
          })}
        </View>
        <View>
          <Button
            icon={false}
            buttonText="save changes"
            style={{ opacity: sameProfileData ? 0.5 : 1 }}
            onPress={sameProfileData ? undefined : handleEditProfile}
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
