import { createSlice } from '@reduxjs/toolkit';
import {
	AggregateDataSummary,
	DataBridgedUSDC,
	DataBridgedUSDT,
	DataBUSDChart,
	DataChart,
	DataDAIChart,
	DataDetail,
	DataFRAXChart,
	DataTVL,
	DataUSDCChart,
	DataUSDTChart
} from '../../pages/analytic/type';
import {
	getAggregateDataSummary,
	getDataBridged,
	getDataBUSD,
	getDataDAI,
	getDataFrax,
	getDataUSDC,
	getDataUSDT,
	getDAUAndDailyStableCoin,
	getListDataDetail,
	getListSupply,
	getListTVL,
	getStableCoinInflow
} from './thunks';

export interface AnalyticState {
	dataTVL: DataTVL[];
	dataSupply: DataChart[];
	dataDetail: DataDetail[];
	dataUSDC: DataUSDCChart[];
	dataUSDT: DataUSDTChart[];
	dataDAI: DataDAIChart[];
	dataFRAX: DataFRAXChart[];
	dataBUSD: DataBUSDChart[];
	dataInflow: DataChart[];
	dataDAU: DataChart[];
	dataDaily: DataChart[];
	dataBridgedUSDC: DataBridgedUSDC[];
	dataBridgedUSDT: DataBridgedUSDT[];
	dataAggregateSummary: AggregateDataSummary[];
}

const initialState: AnalyticState = {
	dataTVL: [],
	dataSupply: [],
	dataDetail: [],
	dataUSDC: [],
	dataUSDT: [],
	dataDAI: [],
	dataFRAX: [],
	dataBUSD: [],
	dataInflow: [],
	dataDAU: [],
	dataDaily: [],
	dataBridgedUSDC: [],
	dataBridgedUSDT: [],
	dataAggregateSummary: []
};

const analyticSlice = createSlice({
	name: 'analytic',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getListTVL.fulfilled, (state, action) => {
			state.dataTVL = action.payload;
		});
		builder.addCase(getListSupply.fulfilled, (state, action) => {
			state.dataSupply = action.payload;
		});
		builder.addCase(getListDataDetail.fulfilled, (state, action) => {
			state.dataDetail = action.payload;
		});
		builder.addCase(getDataUSDC.fulfilled, (state, action) => {
			state.dataUSDC = action.payload;
		});
		builder.addCase(getDataUSDT.fulfilled, (state, action) => {
			state.dataUSDT = action.payload;
		});
		builder.addCase(getDataDAI.fulfilled, (state, action) => {
			state.dataDAI = action.payload;
		});
		builder.addCase(getDataFrax.fulfilled, (state, action) => {
			state.dataFRAX = action.payload;
		});
		builder.addCase(getDataBUSD.fulfilled, (state, action) => {
			state.dataBUSD = action.payload;
		});
		builder.addCase(getStableCoinInflow.fulfilled, (state, action) => {
			state.dataInflow = action.payload;
		});
		builder.addCase(getDAUAndDailyStableCoin.fulfilled, (state, action) => {
			state.dataDAU = action.payload.DAU;
			state.dataDaily = action.payload.daily;
		});
		builder.addCase(getDataBridged.fulfilled, (state, action) => {
			state.dataBridgedUSDC = action.payload.dataUSDC;
			state.dataBridgedUSDT = action.payload.dataUSDT;
		});
		builder.addCase(getAggregateDataSummary.fulfilled, (state, action) => {
			state.dataAggregateSummary = action.payload;
		});
	}
});

export const {} = analyticSlice.actions;
export default analyticSlice.reducer;
