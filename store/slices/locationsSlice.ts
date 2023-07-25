import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ILocationSlice,
  ILocations,
  locationType,
} from "../../types/features/haul";

const initialState: ILocationSlice = {
  pickup: {
    name: "",
    lat: "",
    long: "",
  },
  destination: {
    name: "",
    lat: "",
    long: "",
  },
  distance: "",
};

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation: (
      state,
      action: PayloadAction<{
        type: locationType;
        location: Partial<ILocations>;
      }>
    ) => {
      const { payload } = action;
      const { location, type } = payload;

      if (type === "pickup") {
        state.pickup = { ...state.pickup, ...location };
      } else {
        state.destination = { ...state.destination, ...location };
      }
    },
    addDistance: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.distance = payload;
    },
    resetLocation: (state) => {
      state.destination = initialState.destination;
      state.pickup = initialState.pickup;
      state.distance = initialState.distance;
    },
  },
});

export default locationSlice.reducer;
export const { addLocation, addDistance, resetLocation } =
  locationSlice.actions;
