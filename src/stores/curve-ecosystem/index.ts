import { createSlice } from '@reduxjs/toolkit';
import {
	CurveEcosystemFraxBPRes,
	CurveEcosystemFraxRes,
	CurvePrice,
	CurveSupply,
	CurveSwapVolume
} from '../../pages/curve-ecosystem/types';
import { getDataFrax, getDataFraxBP } from './thunks';

interface CurveEcosystemState {
	frax: CurveEcosystemFraxRes | undefined;
	fraxBP: CurveEcosystemFraxBPRes | undefined;
}

const initialState: CurveEcosystemState = {
	frax: undefined,
	fraxBP: undefined
};

const curveSlice = createSlice({
	name: 'curve-ecosystem',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataFrax.fulfilled, (state, action) => {
			state.frax = action.payload;
		});
		builder.addCase(getDataFraxBP.fulfilled, (state, action) => {
			state.fraxBP = action.payload;
		});
	}
});

export const {} = curveSlice.actions;
export default curveSlice.reducer;
