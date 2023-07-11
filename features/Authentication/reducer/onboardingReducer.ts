import { UserData } from "../../../types";

type authProps = Pick<UserData, "displayName" | "phoneNumber" | "occupation">;

type actionsProps = {
  type: "SET_VALUES";
  payload: Partial<authProps>;
};

export const initialOnboardState: authProps = {
  displayName: "",
  phoneNumber: "",
  occupation: "",
};

const onboardingReducer = (state: authProps, action: actionsProps) => {
  const { payload, type } = action;

  if (type === "SET_VALUES") {
    return { ...state, ...payload };
  } else {
    return { ...state };
  }
};

export default onboardingReducer;
