import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOST } from "../../configs/host";
import { format } from "date-fns";

export const getDataCurveCrvUSD = createAsyncThunk(
	'curve-ecosystem/getDataCurveCrvUSD',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/curve-crvusd/curve-crvusd`
		});

		if (!data) throw new Error('Curve crvUSD data undefined');

		return {
			...data,
      supply_chart: data.supply_chart
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: { day: string }) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
      total_borrowed_chart: data.total_borrowed_chart
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: { day: string }) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
      collateral_chart: data.collateral_chart
			.filter((item: { symbol: string })=> item.symbol)
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: { day: string, usd: number ,supply: number}) => {	
				return ({
				...item,
				time: format(new Date(item.day), 'PP')
			});
		})
			.reverse(),
			tusd_pool_chart: data.tusd_pool_chart
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: { day: string }) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
			usdp_pool_chart: data.usdp_pool_chart
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: { day: string }) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
			usdc_pool_chart: data.usdc_pool_chart
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: { day: string }) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
			usdt_pool_chart: data.usdt_pool_chart
			.sort((item1: { day: string }, item2: { day: string })=>
				( - new Date(item1.day).getTime() + new Date(item2.day).getTime())
			)
			.map((item: { day: string }) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			}))
			.reverse(),
		};
	}
);
