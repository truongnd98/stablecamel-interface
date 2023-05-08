import { createSlice } from '@reduxjs/toolkit';
import {
	Curve,
	CurveEcosystemFraxBPRes,
	CurveEcosystemFraxRes,
	CurvePrice,
	CurveSupply,
	CurveSwapVolume,
	frxETHSupply,
	fxsLeaderboard,
	fxsLocked
} from '../../pages/curve-ecosystem/types';
import {
	getDataCurve,
	getDataCurveRevenue,
	getDataFrax,
	getDataFraxBP,
	getDatafrxETH
} from './thunks';

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
	curve: Curve;
}

const initialState: CurveEcosystemState = {
	frax: undefined,
	fraxBP: undefined,
	frxETH: undefined,
	fxs: undefined,
	curve: {
		curve_volume: [],
		curve_pool_volume: [],
		total_volume: undefined,
		total_fee_revenue: [],
		admin_fee_revenue_per_vecrv: undefined,
		fee_revenue_by_pool_type: [],
		fee_revenue_by_pool_cumulative: [],
		fee_revenue_by_pool_daily: []
	}
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
		builder.addCase(getDataCurve.fulfilled, (state, action) => {
			state.curve.curve_volume = action.payload.volume;
			state.curve.curve_pool_volume = action.payload.pool_volume;
		});
		builder.addCase(getDataCurveRevenue.fulfilled, (state, action) => {
			state.curve.total_volume = action.payload.total_volume;
			state.curve.total_fee_revenue = action.payload.total_fee_revenue;
			state.curve.admin_fee_revenue_per_vecrv =
				action.payload.admin_fee_revenue_per_vecrv;
			state.curve.fee_revenue_by_pool_cumulative =
				action.payload.fee_revenue_by_pool_cumulative;
			state.curve.fee_revenue_by_pool_type =
				action.payload.fee_revenue_by_pool_type;
			state.curve.fee_revenue_by_pool_daily =
				action.payload.fee_revenue_by_pool_daily;
		});
	}
});

export const {} = curveSlice.actions;
export default curveSlice.reducer;
