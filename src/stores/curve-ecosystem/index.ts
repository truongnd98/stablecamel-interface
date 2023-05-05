import { createSlice } from '@reduxjs/toolkit';
import {
	CurveEcosystemFraxRes,
	CurvePrice,
	CurveSupply,
	CurveSwapVolume
} from '../../pages/curve-ecosystem/types';
import { getDataFrax } from './thunks';

interface CurveEcosystemState {
	frax: CurveEcosystemFraxRes | undefined;
}

const initialState: CurveEcosystemState = {
	frax: undefined
};

const curveSlice = createSlice({
	name: 'curve-ecosystem',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataFrax.fulfilled, (state, action) => {
			state.frax = action.payload;
		});
	}
});

export const {} = curveSlice.actions;
export default curveSlice.reducer;
