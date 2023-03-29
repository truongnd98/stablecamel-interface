import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import analytic from './analytic';
import graveyard from './graveyard';
import _yield from './yield';

export const store = configureStore({
	reducer: {
		analytic,
		graveyard,
		yield: _yield
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
