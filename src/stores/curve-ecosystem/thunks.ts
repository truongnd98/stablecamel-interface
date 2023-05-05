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
	ThreePoolTVL
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
			bp_volume: data.bp_volume
				.map((item: BPVolume) => ({
					...item,
					time: format(new Date(item.day), 'PP')
				}))
				.reverse()
		};
	}
);
