import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../configs/host';

export const getOrdinalsMarketplacesData = createAsyncThunk(
	'ordinals-marketplaces/ordinals-marketplaces',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/ordinals-marketplaces/ordinals-marketplaces`
		});
		if (!data) throw new Error('Data ordinals-marketplaces not found');
		return { 
			...data,
		};
	}
);
