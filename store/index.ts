import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import haulSlice from './slices/haulSlice';
import locationsSlice from './slices/locationsSlice';
import vehiclesSlice from './slices/vehiclesSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    haul: haulSlice,
    locations: locationsSlice,
    vehicles: vehiclesSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
