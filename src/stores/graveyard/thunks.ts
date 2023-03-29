import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../configs/host';
import { GraveYardRes } from '../../pages/graveyard/types';

export const getListGraveYard = createAsyncThunk(
	'graveYard/getListGraveYard',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/google-sheet/stablecoin-graveyard`
		});
		if (!data) throw new Error('Get list grave yard failed');
		return data.sort(
			(a: GraveYardRes, b: GraveYardRes) =>
				b.peak_supply_number - a.peak_supply_number
		);
	}
);
