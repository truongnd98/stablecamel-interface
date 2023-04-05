import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOST } from '../../configs/host';

export const getListExchangeBalance = createAsyncThunk(
	'money-printer/getListExchangeBalance',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/exchange-balances/usdc`
		});
		if (!data) throw new Error('Data exchange balance not found');
		return data;
	}
);

export const getListDeployedLenders = createAsyncThunk(
	'money-printer/getListDeployedLenders',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/usdc-deployed-to-lenders`
		});
		if (!data) throw new Error('Data deployed to lenders not found');
		return data;
	}
);

export const getListDeployedLPs = createAsyncThunk(
	'money-printer/getListDeployedLPs',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/total-usdc-deployed-to-lps`
		});
		if (!data) throw new Error('Data deployed to LPs not found');
		return data;
	}
);

export const getListDeployedBridges = createAsyncThunk(
	'money-printer/getListDeployedBridges',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/usdc-deployed-to-bridges`
		});
		if (!data) throw new Error('Data deployed to Bridge not found');
		return data;
	}
);

export const getListSupplyUSDC = createAsyncThunk(
	'money-printer/getListSupplyUSDC',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/stablecoin-supply/usdc`
		});
		if (!data) throw new Error('Data supply USDC not found');
		return data.reverse();
	}
);

export const getListExchangeBalanceByCEX = createAsyncThunk(
	'money-printer/getListExchangeBalanceByCEX',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/exchange-balances-usdc-by-cex`
		});

		if (!data) throw new Error('Data exchange balance by CEX not found');
		return data;
	}
);

export const getListDeployedToLendingProtocol = createAsyncThunk(
	'money-printer/getListDeployedToLendingProtocol',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/usdc-deployed-to-lenders-by-protocol`
		});
		if (!data) throw new Error('Data deployed to lending protocol not found');
		return data;
	}
);

export const getListDeployedToLPs = createAsyncThunk(
	'money-printer/getListDeployedToLPs',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/usdc-deployed-to-lps-by-protocol`
		});

		if (!data) throw new Error('Data deployed to lps by protocol not found');
		return data;
	}
);
