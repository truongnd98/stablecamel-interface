import { createSlice } from '@reduxjs/toolkit';
import { PegTrackerRes } from '../../pages/peg-tracker/types';
import { getListPegTracker } from './thunks';

interface PegTrackerState {
  list: PegTrackerRes[];
}

const initialState: PegTrackerState = {
  list: [],
};

const pegTrackerSlice = createSlice({
  name: 'peg-tracker',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListPegTracker.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const {} = pegTrackerSlice.actions;
export default pegTrackerSlice.reducer;
