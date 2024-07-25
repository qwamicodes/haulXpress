import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAuth, IJourney, UserData } from '../../types';

const initialState: IAuth = {
  pending: false,
  isAuthenticated: false,
  user: {
    displayName: '',
    email: '',
    photoURL: '',
    emailVerified: false,
    userId: '',
    phoneNumber: '',
    occupation: '',
    journey: [],
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUserToState: (state, action: PayloadAction<Partial<UserData>>) => {
      const { payload } = action;

      state.isAuthenticated = true;
      state.user = { ...state.user, ...payload };
    },
    logoutUserFromState: state => {
      state.isAuthenticated = initialState.isAuthenticated;
      state.user = initialState.user;
    },
    addSecureStore: (state, action) => {},
    addUserJourney: (state, action: PayloadAction<IJourney>) => {
      const { payload } = action;

      state.user.journey = [...state.user.journey, payload];
    },
    updateUserDataInState: (
      state,
      action: PayloadAction<Partial<UserData>>,
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
  addUserJourney,
  renewStateToken,
  updateUserDataInState,
} = authSlice.actions;
