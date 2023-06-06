import { createSlice } from '@reduxjs/toolkit';

import {
	getOrdinalsMarketplacesData,
} from './thunks';
import { OrdinalsMarketplacesUniqueUser, OrdinalsMarketplacesVolume } from '../../pages/ordinals-marketplaces/type';



interface OrdinalsMarketplacesState {
	marketplace13: OrdinalsMarketplacesVolume[],
	marketplace12: OrdinalsMarketplacesUniqueUser[],
	marketplace2: [],
	marketplace2p: [],
	marketplace3: [],
	marketplace3p: [],
	marketplace5: [],
	marketplace6: [],
	marketplace9: [],
	marketplace10: [],
	dailyusers: []
}

const initialState: OrdinalsMarketplacesState = {
	marketplace13: [],
	marketplace12: [],
	marketplace2: [],
	marketplace2p: [],
	marketplace3: [],
	marketplace3p: [],
	marketplace5: [],
	marketplace6: [],
	marketplace9: [],
	marketplace10: [],
	dailyusers: []
};



const ordinalsMarketplacesSlice = createSlice({
	name: 'ordinals-marketplaces',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getOrdinalsMarketplacesData.fulfilled, (state, action) => {
			state.marketplace13 = action.payload.marketplace13;
			state.marketplace12 = action.payload.marketplace12;
			state.marketplace2 = action.payload.marketplace2;
			state.marketplace2p = action.payload.marketplace2p;
			state.marketplace3 = action.payload.marketplace3;
			state.marketplace3p = action.payload.marketplace3p;
			state.marketplace5 = action.payload.marketplace5;
			state.marketplace6 = action.payload.marketplace6;
			state.marketplace9 = action.payload.marketplace9;
			state.marketplace10 = action.payload.marketplace10;
			state.dailyusers = action.payload.dailyusers;
		});
	}
});

export const {} = ordinalsMarketplacesSlice.actions;
export default ordinalsMarketplacesSlice.reducer;
