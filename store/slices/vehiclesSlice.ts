import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { vehicleProps, vehiclesProps } from "../../types";

const initialState: vehiclesProps = {
  results: [],
};

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    addVehicles: (state, action) => {
      const { payload } = action;
      state.results = payload;
    },
    resetVehicles: (state) => {
      state.results.length = 0;
    },
  },
});

export default vehiclesSlice.reducer;
export const { addVehicles, resetVehicles } = vehiclesSlice.actions;
