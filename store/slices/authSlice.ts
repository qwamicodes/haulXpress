import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IAuth, UserData } from "../../types";

const initialState: IAuth = {
  pending: false,
  isAuthenticated: true,
  user: {
    displayName: "",
    email: "",
    photoURL: "",
    emailVerified: false,
    userId: "",
    phoneNumber: "",
    occupation: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserToState: (state, action: PayloadAction<Partial<UserData>>) => {
      const { payload } = action;

      state.isAuthenticated = true;
      state.user = { ...state.user, ...payload };
    },
    logoutUserFromState: (state) => {
      state.isAuthenticated = initialState.isAuthenticated;
      state.user = initialState.user;
    },
    addSecureStore: (state, action) => {},
    updateUserDataInState: (
      state,
      action: PayloadAction<Partial<UserData>>
    ) => {
      const { payload } = action;

      state.user = { ...state.user, ...payload };
    },
    renewStateToken: (state, action) => {},
    togglePending: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.pending = payload;
    },
  },
});

export default authSlice.reducer;

export const {
  togglePending,
  loginUserToState,
  logoutUserFromState,
  addSecureStore,
  renewStateToken,
  updateUserDataInState,
} = authSlice.actions;
