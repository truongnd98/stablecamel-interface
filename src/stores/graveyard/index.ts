import { createSlice } from '@reduxjs/toolkit';
import { GraveYardRes } from '../../pages/graveyard/types';
import { getListGraveYard } from './thunks';

interface GraveyardState {
	list: GraveYardRes[];
}

const initialState: GraveyardState = {
	list: []
};

const graveYardSlice = createSlice({
	name: 'graveYard',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getListGraveYard.fulfilled, (state, action) => {
			state.list = action.payload;
		});
	}
});

export const {} = graveYardSlice.actions;
export default graveYardSlice.reducer;
