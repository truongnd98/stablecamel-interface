import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../configs/host';
import { format } from 'date-fns';

export const getUSDTMoneyPrinterData = createAsyncThunk(
	'usdt-money-printer/usdt-money-printer',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/usdt-money-printer/usdt-money-printer`
		});
		if (!data) throw new Error('Data usdt-money-printer not found');
		return { 
			...data,
			usdt_supply: data.usdt_supply
			.sort((item1: { day: string }, item2: { day: string })=>
				(new Date(item1.day).getTime() - new Date(item2.day).getTime())
			)
			.map((item: { day: string , supply: number }) => ({
				...item,
				time: format(new Date(item.day), 'PP'),
				supply: item.supply?.toFixed(0) || 0
			})),
			usdt_deployed_to_lps_and_lending_pools: data.usdt_deployed_to_lps_and_lending_pools
			.sort((item1: { day: string }, item2: { day: string })=>
				(new Date(item1.day).getTime() - new Date(item2.day).getTime())
			)
			.map((item: { day: string }) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			})),

			exchange_balances_of_usdt: data.exchange_balances_of_usdt
			.sort((item1: { day: string }, item2: { day: string })=>
				(new Date(item1.day).getTime() - new Date(item2.day).getTime())
			)
			.map((item: { day: string }) => ({
				...item,
				time: format(new Date(item.day), 'PP')
			})),

			exchange_balances_of_usdt_by_cex: data.exchange_balances_of_usdt_by_cex
			.sort((item1: { time: string }, item2: { time: string })=>
				(new Date(item1.time).getTime() - new Date(item2.time).getTime())
			)
			.map((item: { time: string }) => ({
				...item,
				time: format(new Date(item.time), 'PP')
			})),

			total_usdt_deployed_to_lenders: data.total_usdt_deployed_to_lenders
			.sort((item1: { time: string }, item2: { time: string })=>
				(new Date(item1.time).getTime() - new Date(item2.time).getTime())
			)
			.map((item: { time: string }) => ({
				...item,
				time: format(new Date(item.time), 'PP')
			})),

			usdt_deployed_to_lenders_by_protocol: data.usdt_deployed_to_lenders_by_protocol
			.sort((item1: { time: string }, item2: { time: string })=>
				(new Date(item1.time).getTime() - new Date(item2.time).getTime())
			)
			.map((item: { time: string }) => ({
				...item,
				time: format(new Date(item.time), 'PP')
			})),

			total_usdt_deployed_to_cexs: data.total_usdt_deployed_to_cexs
			.sort((item1: { time: string }, item2: { time: string })=>
				(new Date(item1.time).getTime() - new Date(item2.time).getTime())
			)
			.map((item: { time: string }) => ({
				...item,
				time: format(new Date(item.time), 'PP')
			})),

			usdt_deployed_to_lps_by_protocol: data.usdt_deployed_to_lps_by_protocol
			.sort((item1: { time: string }, item2: { time: string })=>
				(new Date(item1.time).getTime() - new Date(item2.time).getTime())
			)
			.map((item: { time: string }) => ({
				...item,
				time: format(new Date(item.time), 'PP')
			})),

			usdt_deployed_to_bridges_total: data.usdt_deployed_to_bridges_total
			.sort((item1: { time: string }, item2: { time: string })=>
				(new Date(item1.time).getTime() - new Date(item2.time).getTime())
			)
			.map((item: { time: string }) => ({
				...item,
				time: format(new Date(item.time), 'PP')
			})),

			usdt_deployed_to_bridges_by_bridge: data.usdt_deployed_to_bridges_by_bridge
			.sort((item1: { time: string }, item2: { time: string })=>
				(new Date(item1.time).getTime() - new Date(item2.time).getTime())
			)
			.map((item: { time: string }) => ({
				...item,
				time: format(new Date(item.time), 'PP')
			})),

		};
	}
);
