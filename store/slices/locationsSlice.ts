import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILocation, ILocations, locationType } from '../../types';

const initialState: ILocation = {
  pickup: {
    name: '',
    description: '',
    lat: 0,
    lng: 0,
  },
  destination: {
    name: '',
    description: '',
    lat: 0,
    lng: 0,
  },
  distance: '',
  duration: '',
};

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    addLocation: (
      state,
      action: PayloadAction<{
        type: locationType;
        location: Partial<ILocations>;
      }>,
    ) => {
      const { payload } = action;
      const { location, type } = payload;

      if (type === 'pickup') {
        state.pickup = { ...state.pickup, ...location };
      } else {
        state.destination = { ...state.destination, ...location };
      }
    },
    addDistance: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.distance = payload;
    },
    addDuration: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.duration = payload;
    },
    resetLocation: state => {
      state.destination = initialState.destination;
      state.pickup = initialState.pickup;
      state.distance = initialState.distance;
    },
  },
});

export default locationSlice.reducer;
export const { addLocation, addDistance, addDuration, resetLocation } =
  locationSlice.actions;
