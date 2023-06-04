import { createSlice } from '@reduxjs/toolkit';

import {
	getUSDTMoneyPrinterData,
} from './thunks';

import { 
	ExchangeBalancesOfUSDT,
	ExchangeBalancesOfUSDTByCEX,
	TotalUSDTDeployedToDEXs,
	TotalUSDTDeployedToLenders,
	USDTDeployedToBridgesTotal,
	USDTDeployedToLendersByProtocol,
	USDTDeployedToLPsByProtocol,
	USDTSupply,
	UsdtDeployedToLPsAndLendingPools,
	usdtDeployedToBridgesByBridge
} from '../../pages/usdt-money-printer/type';

interface USDTMoneyPrinterState {
	usdtSupply: USDTSupply[];
	usdtDeployedToLPsAndLendingPools: UsdtDeployedToLPsAndLendingPools[];
	exchangeBalancesOfUSDT: ExchangeBalancesOfUSDT[];
	exchangeBalancesOfUSDTByCEX: ExchangeBalancesOfUSDTByCEX[];
	totalUSDTDeployedToLenders: TotalUSDTDeployedToLenders[];
	usdtDeployedToLendersByProtocol: USDTDeployedToLendersByProtocol[];
	totalUSDTDeployedToDEXs: TotalUSDTDeployedToDEXs[];
	usdtDeployedToLPsByProtocol:  USDTDeployedToLPsByProtocol[];
	usdtDeployedToBridgesTotal: USDTDeployedToBridgesTotal[];
	usdtDeployedToBridgesByBridge: usdtDeployedToBridgesByBridge[];
}

const initialState: USDTMoneyPrinterState = {
	usdtSupply: [],
	usdtDeployedToLPsAndLendingPools: [],
	exchangeBalancesOfUSDT: [],
	exchangeBalancesOfUSDTByCEX: [],
	totalUSDTDeployedToLenders: [],
	usdtDeployedToLendersByProtocol: [],
	totalUSDTDeployedToDEXs: [],
	usdtDeployedToLPsByProtocol: [],
	usdtDeployedToBridgesTotal: [],
	usdtDeployedToBridgesByBridge: [],
};



const moneyPrinterSlice = createSlice({
	name: 'usdt-money-printer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUSDTMoneyPrinterData.fulfilled, (state, action) => {
			state.usdtSupply = action.payload.usdt_supply;
			state.usdtDeployedToLPsAndLendingPools = action.payload.usdt_deployed_to_lps_and_lending_pools;
			state.exchangeBalancesOfUSDT = action.payload.exchange_balances_of_usdt;
			state.exchangeBalancesOfUSDTByCEX = action.payload.exchange_balances_of_usdt_by_cex;
			state.totalUSDTDeployedToLenders = action.payload.total_usdt_deployed_to_lenders;
			state.usdtDeployedToLendersByProtocol = action.payload.usdt_deployed_to_lenders_by_protocol;
			state.totalUSDTDeployedToDEXs = action.payload.total_usdt_deployed_to_cexs;
			state.usdtDeployedToLPsByProtocol = action.payload.usdt_deployed_to_lps_by_protocol;
			state.usdtDeployedToBridgesTotal = action.payload.usdt_deployed_to_bridges_total;
			state.usdtDeployedToBridgesByBridge = action.payload.usdt_deployed_to_bridges_by_bridge;
		});
	}
});

export const {} = moneyPrinterSlice.actions;
export default moneyPrinterSlice.reducer;
