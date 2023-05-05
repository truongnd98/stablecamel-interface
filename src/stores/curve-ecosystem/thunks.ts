import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { format } from 'date-fns';
import { HOST } from '../../configs/host';
import {
	CurveEcosystemFraxRes,
	CurveSupply
} from '../../pages/curve-ecosystem/types';

export const getDataFrax = createAsyncThunk('curve-ecosystem', async () => {
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
			.reverse()
		// .filter((item: CurveSupply, index: number) => index % 100 === 0)
	};
});
