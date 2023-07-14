import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import haulSlice from "./slices/haulSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    haul: haulSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
