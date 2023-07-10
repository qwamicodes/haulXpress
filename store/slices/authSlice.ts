import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../../types";

const initialState: IAuth = { pending: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserToState: (state, action) => {},
    logoutUserFromState: (state) => {},
    addSecureStore: (state, action) => {},
    updateUserDataInState: (state, action) => {},
    renewStateToken: (state, action) => {},
    togglePending: (state) => {
      state.pending = !state.pending;
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
