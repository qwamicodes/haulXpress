type authProps = {
  email: string;
  password: string;
};

type actionsProps = {
  type: "SET_VALUES";
  payload: Partial<authProps>;
};

export const initialAuthState: authProps = {
  email: "",
  password: "",
};

const authReducer = (state: authProps, action: actionsProps) => {
  const { payload, type } = action;

  if (type === "SET_VALUES") {
    return { ...state, ...payload };
  } else {
    return { ...state };
  }
};

export default authReducer;
