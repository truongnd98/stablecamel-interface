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
	FeeRevenuePool
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
					time: format(new Date(item.time), 'PP'),
				})
			),
			fee_revenue_by_pool_daily: data.fee_revenue_by_pool_daily.map(
				(item: FeeRevenuePool) => ({
					...item,
					time: format(new Date(item.time), 'PP'),
				})
			)
		};
	}
);
