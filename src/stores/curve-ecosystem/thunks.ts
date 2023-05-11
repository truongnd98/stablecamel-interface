import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { format } from 'date-fns';
import { HOST } from '../../configs/host';
import {
	BPVolume,
	BP_TVL,
	CurveEcosystemFraxRes,
	CurveSupply,
	CurveSwapVolume,
	CurveVolume,
	frxETHSupply,
	fxsLocked,
	ThreePoolTVL,
	ThreePoolVolume,
	FeeRevenuePool,
	LockedCRV,
	LockedCVX,
	CVXCumulative3CRV,
	CRVFarmed,
	FSXFarmed,
	LockedCNC,
	CNCTVLByToken,
	DailyCNCNetLocked,
	CNCUnlocksTrackerWeekly,
	CLeverLockedCVXAndFlow
} from '../../pages/curve-ecosystem/types';

export const getDataFrax = createAsyncThunk(
	'curve-ecosystem/getDataFrax',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/curve-ecosystem/frax/frax`
		});
		if (!data) throw new Error('Data Frax not available');
		return {
			...data,
			supply: data.supply
				.map((item: CurveSupply) => ({
					...item,
					time: format(new Date(item.time), 'PP')
				}))
				.reverse(),
			price: data.price
				.map((item: CurveSupply) => ({
					...item,
					time: format(new Date(item.time), 'PP')
				}))
				.reverse(),
			// .filter((item: CurveSupply, index: number) => index % 100 === 0),
			swap_volume: data.swap_volume
				.map((item: CurveSwapVolume) => ({
					...item,
					time: format(new Date(item.day), 'PP')
				}))
				.reverse()
		};
	}
);

export const getDataFraxBP = createAsyncThunk(
	'curve-ecosystem/getDataFraxBP',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/curve-ecosystem/frax/frax-bp`
		});
		if (!data) throw new Error('Data Frax BP not available');
		return {
			...data,
			bp_tvl: data.bp_tvl
				.map((item: BP_TVL) => ({
					...item,
					time: format(new Date(item.day), 'PP')
				}))
				.reverse(),
			three_pool: data.three_pool.reverse(),
			three_pool_tvl: data.three_pool_tvl
				.map((item: ThreePoolTVL) => ({
					...item,
					time: format(new Date(item.evt_date), 'PP')
				}))
				.reverse(),
			bp_volume: data.bp_volume.map((item: BPVolume) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			})),
			three_pool_volume: data.three_pool_volume.map(
				(item: ThreePoolVolume) => ({
					...item,
					time: format(new Date(item.week), 'PP')
				})
			)
		};
	}
);

export const getDatafrxETH = createAsyncThunk(
	'curve-ecosystem/getDatafrxETH',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/curve-ecosystem/frax/frax-eth-supply`
		});
		if (!data) throw new Error('Data frxETH not available');
		return {
			...data,
			eth_supply: data.eth_supply
				.map((item: frxETHSupply) => ({
					...item,
					time: format(new Date(item.day), 'PP')
				}))
				.reverse(),
			locked_fxs: data.locked_fxs.map((item: fxsLocked) => ({
				...item,
				time: format(new Date(item.txn_date), 'PP')
			}))
		};
	}
);

export const getDataCurve = createAsyncThunk(
	'curve-ecosystem/getDataCurve',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/curve-ecosystem/curve/curve`
		});
		if (!data) throw new Error('Curve data undefined');
		return {
			volume: data.volume
				.map((item: CurveVolume) => ({
					...item,
					time: format(new Date(item.day), 'PP')
				}))
				.reverse(),
			pool_volume: data.pool_volume.map((item: any) => ({
				time: format(new Date(item.day), 'PP'),
				'3pool': item['3pool'].pool_usd_volume,
				other: item.other.pool_usd_volume,
				steth: item.steth.pool_usd_volume,
				tricrypto2: item.tricrypto2.pool_usd_volume
			}))
		};
	}
);

export const getDataCurveRevenue = createAsyncThunk(
	'curve-ecosystem/getDataCurveRevenue',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/curve-ecosystem/curve/curve-revenue`
		});
		if (!data) throw new Error('Curve revenue not available');

		return {
			...data,
			fee_revenue_by_pool_type: data.fee_revenue_by_pool_type,
			fee_revenue_by_pool_cumulative: data.fee_revenue_by_pool_cumulative.map(
				(item: FeeRevenuePool) => ({
					...item,
					time: format(new Date(item.time), 'PP')
				})
			),
			fee_revenue_by_pool_daily: data.fee_revenue_by_pool_daily.map(
				(item: FeeRevenuePool) => ({
					...item,
					time: format(new Date(item.time), 'PP')
				})
			)
		};
	}
);

export const getDataLockedCRV = createAsyncThunk(
	'curve-ecosystem/getDataLockedCRV',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/curve-ecosystem/curve/locked-crv-statistics`
		});
		if (!data) throw new Error('Get data locked CRV not found');
		return {
			...data,
			locked_crv_60d: data.locked_crv_60d.map((item: LockedCRV) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			})),
			locked_crv: data.locked_crv
				.map((item: LockedCRV) => ({
					...item,
					time: format(new Date(item.day), 'PP')
				}))
				.reverse(),
			current_locked_crv: {
				...data.current_locked_crv,
				time: format(new Date(data.current_locked_crv.day), 'PP')
			}
		};
	}
);

export const getDataConvex = createAsyncThunk(
	'curve-ecosystem/getDataConvex',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/curve-ecosystem/convex/convex`
		});
		if (!data) throw new Error('Convex data undefined');
		return {
			...data,
			locked_cvx: data.locked_cvx.map((item: LockedCVX) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
			unlock_tracker_v2: data.unlock_tracker_v2
			.sort((item1: { unlock_date: string }, item2: { unlock_date: string })=>
				( - new Date(item1.unlock_date).getTime() + new Date(item2.unlock_date).getTime())
			)
			.map((item: { unlock_date: string }) => ({
				...item,
				time: format(new Date(item.unlock_date), 'PP')
			}))
			.reverse(),
			cumulative_3crv: data.cumulative_3crv.map((item: CVXCumulative3CRV) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
			crv_farmed: data.crv_farmed
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: CRVFarmed) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
			fsx_farmed: data.fsx_farmed
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: FSXFarmed) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
		};
	}
);

export const getDataConic = createAsyncThunk(
	'curve-ecosystem/getDataConic',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/curve-ecosystem/conic/conic`
		});
		if (!data) throw new Error('Conic data undefined');
		return {
			...data,
			tvl_by_token: data.tvl_by_token
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: CNCTVLByToken) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
			locked_cnc: data.locked_cnc
			.sort((item1: { minute: string }, item2: { minute: string })=>
				( - new Date(item1.minute).getTime() + new Date(item2.minute).getTime())
			)
			.map((item: LockedCNC) => ({
				...item,
				time: format(new Date(item.minute), 'PP')
			}))
			.reverse(),
			daily_cnc_net_locked: data.daily_cnc_net_locked
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: DailyCNCNetLocked) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
			unlocks_tracker_weekly: data.unlocks_tracker_weekly
			.sort((item1: { week: string }, item2: { week: string })=>
				( - new Date(item1.week).getTime() + new Date(item2.week).getTime())
			)
			.map((item: CNCUnlocksTrackerWeekly) => ({
				...item,
				time: format(new Date(item.week), 'PP')
			}))
			.reverse(),
		};
	}
);

export const getDataCLever = createAsyncThunk(
	'curve-ecosystem/getDataCLever',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/curve-ecosystem/clever/clever`
		});
		if (!data) throw new Error('CLever data undefined');

		return {
			...data,
			locked_cvx_and_flow: data.locked_cvx_and_flow
			.sort((item1: { Date: string }, item2: { Date: string })=>
				( - new Date(item1.Date).getTime() + new Date(item2.Date).getTime())
			)
			.map((item: CLeverLockedCVXAndFlow) => ({
				...item,
				time: format(new Date(item.Date), 'PP')
			}))
			.reverse(),
		};
	}
);
