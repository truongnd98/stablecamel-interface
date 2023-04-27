import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import analytic from './analytic';
import graveyard from './graveyard';
import moneyprinter from './moneyprinter';
import _yield from './yield';
import pegtracker from './pegtracker';

export const store = configureStore({
  reducer: {
    analytic,
    graveyard,
    yield: _yield,
    moneyprinter,
    pegtracker,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
