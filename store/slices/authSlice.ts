import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserToState: (state, action) => {},
    logoutUserFromState: (state) => {},
    addSecureStore: (state, action) => {},
    updateUserDataInState: (state, action) => {},
    renewStateToken: (state, action) => {},
    togglePending: (state) => {},
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
