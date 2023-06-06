import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import analytic from './analytic';
import graveyard from './graveyard';
import moneyprinter from './moneyprinter';
import _yield from './yield';
import pegtracker from './pegtracker';
import curveEcosystem from './curve-ecosystem';
import curveCrvUSD from './curve-crvusd';
import usdt_moneyprinter from './usdt-moneyprinter'
import ordinals_marketplaces from './ordinals-marketplaces'

export const store = configureStore({
  reducer: {
    analytic,
    graveyard,
    yield: _yield,
    moneyprinter,
    pegtracker,
    curveEcosystem,
    curveCrvUSD,
    usdt_moneyprinter,
    ordinals_marketplaces,
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
