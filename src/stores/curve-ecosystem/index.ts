import { createSlice } from '@reduxjs/toolkit';
import {
  CurvePrice,
  CurveSupply,
  CurveSwapVolume,
} from '../../pages/curve-ecosystem/types';
import { getDataFrax } from './thunks';

interface CurveEcosystemFraxState {
  price: CurvePrice[];
  current_price: CurvePrice;
  supply: CurveSupply[];
  current_supply: CurveSupply;
  swap_volume: CurveSwapVolume[];
  current_swap_volume: CurveSwapVolume;
}

interface CurveEcosystemState {
  frax: CurveEcosystemFraxState | undefined;
}

const initialState: CurveEcosystemState = {
  frax: undefined,
};

const curveSlice = createSlice({
  name: 'curve-ecosystem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataFrax.fulfilled, (state, action) => {
      state.frax = action.payload;
    });
  },
});

export const {} = curveSlice.actions;
export default curveSlice.reducer;
