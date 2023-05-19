import { createSlice } from "@reduxjs/toolkit";
import { getDataCurveCrvUSD } from "./thunks";

interface CrvUSDSupplyMetric {
  day: string;
  supply: number;
  one_delta: number;
  thirty_d_chng: number;
}

interface CrvUSDSupplyChart {
  day: string;
  supply: number;
}

interface CrvUSDTotalBorrowed {
  day: string;
  amount: number;
}

interface CrvUSDCollateralMetric {
  usd: number;
}

interface CrvUSDCollateralChart {
  day: string;
  contract_address: string;
  symbol: string;
  supply: number;
  usd: number;
}

interface TUSDPool {
  day: string;
  tusd: number;
  crvusd: number;
  total: number;
}

interface USDPPool {
  day: string;
  tusd: number;
  crvusd: number;
  total: number;
}

interface USDCPool {
  day: string;
  tusd: number;
  crvusd: number;
  total: number;
}

interface USDTPool {
  day: string;
  tusd: number;
  crvusd: number;
  total: number;
}

interface CurveCrvUSDState {
  supply_metric: CrvUSDSupplyMetric | undefined;
  supply_chart: CrvUSDSupplyChart[];
  total_borrowed_metric: CrvUSDTotalBorrowed | undefined;
  total_borrowed_chart: CrvUSDTotalBorrowed[];
  collateral_metric: CrvUSDCollateralMetric | undefined;
  collateral_chart: CrvUSDCollateralChart[] ;
  tusd_pool_chart: TUSDPool[];
  usdp_pool_chart: USDPPool[];
  usdc_pool_chart: USDCPool[];
  usdt_pool_chart: USDTPool[];
}


const initialState: CurveCrvUSDState = {
  supply_metric: undefined,
  supply_chart: [],
  total_borrowed_metric: undefined,
  total_borrowed_chart: [],
  collateral_metric: undefined,
  collateral_chart: [],
  tusd_pool_chart: [],
  usdp_pool_chart: [],
  usdc_pool_chart: [],
  usdt_pool_chart: [],
}

const curveSlice = createSlice({
	name: 'curve-crvusd',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataCurveCrvUSD.fulfilled, (state, action) => {
      state.supply_metric = action.payload.supply_metric;
      state.supply_chart = action.payload.supply_chart;
      state.total_borrowed_metric = action.payload.total_borrowed_metric;
      state.total_borrowed_chart = action.payload.total_borrowed_chart;
      state.collateral_metric = action.payload.collateral_metric;
      state.collateral_chart = action.payload.collateral_chart;
      state.tusd_pool_chart = action.payload.tusd_pool_chart;
      state.usdp_pool_chart = action.payload.usdp_pool_chart;
      state.usdc_pool_chart = action.payload.usdc_pool_chart;
      state.usdt_pool_chart = action.payload.usdt_pool_chart;
		});
		
	}
});

export const {} = curveSlice.actions;
export default curveSlice.reducer;
