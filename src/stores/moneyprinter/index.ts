import { createSlice } from '@reduxjs/toolkit';
import {
	DeployedRes,
	ExchangeBalanceRes,
	SupplyUSDCRes
} from '../../pages/money-printer/types';
import {
	getListDeployedBridges,
	getListDeployedBridgesByBridge,
	getListDeployedLenders,
	getListDeployedLPs,
	getListDeployedToLendingProtocol,
	getListDeployedToLPs,
	getListExchangeBalance,
	getListExchangeBalanceByCEX,
	getListSupplyUSDC
} from './thunks';

interface MoneyPrinterState {
	exchangeBalanceList: ExchangeBalanceRes[];
	deployedLenderList: DeployedRes[];
	deployedLpsList: DeployedRes[];
	deployedBridgeList: DeployedRes[];
	supplyUSDCList: SupplyUSDCRes[];
	exchangeBalanceByCEXList: any[];
	usdcDeployedLendingProtocolList: any[];
	usdcDeployedToLPs: any[];
	usdcDeployedBridgesByBridge: any[];
}

const initialState: MoneyPrinterState = {
	exchangeBalanceList: [],
	deployedLenderList: [],
	deployedLpsList: [],
	deployedBridgeList: [],
	supplyUSDCList: [],
	exchangeBalanceByCEXList: [],
	usdcDeployedLendingProtocolList: [],
	usdcDeployedToLPs: [],
	usdcDeployedBridgesByBridge: []
};

const moneyPrinterSlice = createSlice({
	name: 'money-printer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getListExchangeBalance.fulfilled, (state, action) => {
			state.exchangeBalanceList = action.payload;
		});
		builder.addCase(getListDeployedLenders.fulfilled, (state, action) => {
			state.deployedLenderList = action.payload;
		});
		builder.addCase(getListDeployedLPs.fulfilled, (state, action) => {
			state.deployedLpsList = action.payload;
		});
		builder.addCase(getListDeployedBridges.fulfilled, (state, action) => {
			state.deployedBridgeList = action.payload;
		});
		builder.addCase(getListSupplyUSDC.fulfilled, (state, action) => {
			state.supplyUSDCList = action.payload;
		});
		builder.addCase(getListExchangeBalanceByCEX.fulfilled, (state, action) => {
			state.exchangeBalanceByCEXList = action.payload;
		});
		builder.addCase(
			getListDeployedToLendingProtocol.fulfilled,
			(state, action) => {
				state.usdcDeployedLendingProtocolList = action.payload;
			}
		);
		builder.addCase(getListDeployedToLPs.fulfilled, (state, action) => {
			state.usdcDeployedToLPs = action.payload;
		});
		builder.addCase(
			getListDeployedBridgesByBridge.fulfilled,
			(state, action) => {
				state.usdcDeployedBridgesByBridge = action.payload;
			}
		);
	}
});

export const {} = moneyPrinterSlice.actions;
export default moneyPrinterSlice.reducer;
