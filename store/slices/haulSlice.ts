import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { haulingStateProps, IHaulType } from '../../types';
import { haulExistsInState } from '../../utils/helpers';

const initialState: haulingStateProps = {
  productType: [],
  vehicleType: [],
};

const haulSlice = createSlice({
  name: 'haul',
  initialState,
  reducers: {
    addHaulingData: (
      state,
      action: PayloadAction<{ select: IHaulType; type: 'product' | 'vehicle' }>,
    ) => {
      const { payload } = action;

      if (payload.type === 'vehicle') {
        const exists = haulExistsInState(state.vehicleType, payload.select);

        if (!exists) {
          state.vehicleType = [...state.vehicleType, payload.select];
        } else {
          const filteredState = state.vehicleType.filter(
            ({ value }) => value !== payload.select.value,
          );
          state.vehicleType = filteredState;
        }
      } else {
        state.productType = [payload.select];
      }
    },
    resetSelection: state => {
      state.vehicleType.length = 0;
      state.productType.length = 0;
    },
  },
});

export default haulSlice.reducer;
export const { addHaulingData, resetSelection } = haulSlice.actions;
