import { createSlice } from '@reduxjs/toolkit';
import {
	CurveEcosystemFraxBPRes,
	CurveEcosystemFraxRes,
	CurvePrice,
	CurveSupply,
	CurveSwapVolume,
	frxETHSupply,
	fxsLeaderboard,
	fxsLocked
} from '../../pages/curve-ecosystem/types';
import { getDataFrax, getDataFraxBP, getDatafrxETH } from './thunks';

interface CurveEcosystemState {
	frax: CurveEcosystemFraxRes | undefined;
	fraxBP: CurveEcosystemFraxBPRes | undefined;
	frxETH:
		| { eth_supply: frxETHSupply[]; current_eth_supply: frxETHSupply }
		| undefined;
	fxs:
		| {
				locked_fxs: fxsLocked[];
				fxs_leader_board: fxsLeaderboard[];
		  }
		| undefined;
}

const initialState: CurveEcosystemState = {
	frax: undefined,
	fraxBP: undefined,
	frxETH: undefined,
	fxs: undefined
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
		builder.addCase(getDatafrxETH.fulfilled, (state, action) => {
			state.frxETH = {
				eth_supply: action.payload.eth_supply,
				current_eth_supply: action.payload.current_eth_supply
			};
			state.fxs = {
				locked_fxs: action.payload.locked_fxs,
				fxs_leader_board: action.payload.fxs_leader_board
			};
		});
	}
});

export const {} = curveSlice.actions;
export default curveSlice.reducer;
