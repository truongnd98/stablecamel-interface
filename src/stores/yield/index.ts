import { createSlice } from '@reduxjs/toolkit';
import { YieldRes } from '../../pages/yield/types';
import { getListYield } from './thunks';

interface YieldState {
	list: YieldRes[];
}

const initialState: YieldState = {
	list: []
};

const yieldSlice = createSlice({
	name: 'yield',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getListYield.fulfilled, (state, action) => {
			state.list = action.payload;
		});
	}
});

export const {} = yieldSlice.actions;
export default yieldSlice.reducer;
