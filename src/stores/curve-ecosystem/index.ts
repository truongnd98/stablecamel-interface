import { createSlice } from '@reduxjs/toolkit';
import {
	CLever,
	Conic,
	Convex,
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
	getDataCLever,
	getDataConic,
	getDataConvex,
	getDataCurve,
	getDataCurveRevenue,
	getDataFrax,
	getDataFraxBP,
	getDatafrxETH,
	getDataLockedCRV
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
	convex: Convex;
	conic: Conic;
	clever: CLever;
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
		fee_revenue_by_pool_daily: [],
		locked_crv_60d: [],
		locked_crv: [],
		current_locked_crv: undefined,
		crv_leader_board: [],

	},
	convex: {
		locked_cvx: [],
		current_locked_cvx: undefined,
		cvx_leaderboard: [],
		bribe_revenue: [],
		unlock_tracker_v2: [],
		cumulative_3crv: [],
		crv_farmed: [],
		fsx_farmed: [],
	},
	conic: {
		total_tvl: undefined,
		current_cnc: undefined,
		tvl_curve_pool_distribution: [],
		tvl_by_token: [],
		current_daily_cnc_net_locked: undefined,
		daily_cnc_net_locked: [],
		locked_cnc: [],
		leaderboard: [],
		unlocks_tracker_weekly: [],
	},
	clever: {
		current_locked_cvx_and_flow: undefined,
		locked_cvx_and_flow: [],
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
		builder.addCase(getDataLockedCRV.fulfilled, (state, action) => {
			state.curve.locked_crv = action.payload.locked_crv;
			state.curve.locked_crv_60d = action.payload.locked_crv_60d;
			state.curve.current_locked_crv = action.payload.current_locked_crv;
			state.curve.crv_leader_board = action.payload.crv_leader_board;
		});
		builder.addCase(getDataConvex.fulfilled, (state, action) => {
			state.convex.locked_cvx = action.payload.locked_cvx;
			state.convex.current_locked_cvx = action.payload.current_locked_cvx;
			state.convex.cvx_leaderboard = action.payload.cvx_leaderboard;
			state.convex.bribe_revenue = action.payload.bribe_revenue;
			state.convex.unlock_tracker_v2 = action.payload.unlock_tracker_v2;
			state.convex.cumulative_3crv = action.payload.cumulative_3crv;
			state.convex.crv_farmed = action.payload.crv_farmed;
			state.convex.fsx_farmed = action.payload.fsx_farmed;
		});
		builder.addCase(getDataConic.fulfilled, (state, action) => {
			state.conic.total_tvl = action.payload.total_tvl;
			state.conic.current_cnc = action.payload.current_cnc;
			state.conic.tvl_curve_pool_distribution = action.payload.tvl_curve_pool_distribution;
			state.conic.tvl_by_token =  action.payload.tvl_by_token;
			state.conic.daily_cnc_net_locked = action.payload.daily_cnc_net_locked;
			state.conic.current_daily_cnc_net_locked = action.payload.current_daily_cnc_net_locked;
			state.conic.locked_cnc = action.payload.locked_cnc;
			state.conic.leaderboard = action.payload.leaderboard;
			state.conic.unlocks_tracker_weekly = action.payload.unlocks_tracker_weekly;
		});
		builder.addCase(getDataCLever.fulfilled, (state, action) => {
			state.clever.current_locked_cvx_and_flow = action.payload.current_locked_cvx_and_flow;
			state.clever.locked_cvx_and_flow = action.payload.locked_cvx_and_flow;
		});
	}
});

export const {} = curveSlice.actions;
export default curveSlice.reducer;
