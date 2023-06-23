import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { format } from 'date-fns';
import { HOST } from '../../configs/host';
import {
	AggregateDataSummary,
	DataDetail,
	DataDetailRes,
	DAUAndDailyStableCoinRes
} from '../../pages/analytic/type';

export const getListTVL = createAsyncThunk(
	'analytic/getListTVL',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/stablecoin-tvl/${network}`
		});

		if (!data) throw new Error('Fetching data error');

		if (data.length > 0) {
			const list = data.map((item: any) => {
				return {
					USDC:
						item.usdc_pool_tvl ??
						item.total_usdc_tvl ??
						item.usdc_tvl ??
						item.usdcTvl,
					USDT:
						item.usdt_pool_tvl ??
						item.total_usdt_tvl ??
						item.usdt_tvl ??
						item.usdtTvl,
					BUSD: item.busd_tvl ?? item.busdTvl,
					FRAX: item.frax_tvl ?? item.fraxTvl,
					DAI: item.dai_tvl ?? item.daiTvl,
					total: item.total_tvl ?? item.totalTvl,
					seven_d_chng: item.seven_d_chng ?? item.sevenDayChange,
					dominance:
						item.usdc_dominance ??
						item.busd_dominance ??
						item.usdcDominance ??
						item.busdDominance,
					time: format(new Date(item.time), 'PP')
					// monthNames[new Date(item.time).getMonth()] +
					// ' ' +
					// new Date(item.time).getDate() +
					// ' ' +
					// new Date(item.time).getFullYear()
				};
			});
			return list.reverse();
		}
	}
);

export const getListSupply = createAsyncThunk(
	'analytic/getListSupply',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/stablecoin-supply/${network}`
		});

		if (!data) throw new Error('Fetching data error');
		return data
			.map((item: any) => ({
				USDT: item.USDT,
				USDC: item.USDC,
				FRAX: item.FRAX,
				DAI: item.DAI || item.supply,
				BUSD: item.BUSD,
				time: format(new Date(item.day ?? item.time), 'PP')
				// monthNames[new Date(item.day ?? item.time).getMonth()] +
				// ' ' +
				// new Date(item.day ?? item.time).getDate() +
				// ' ' +
				// new Date(item.day ?? item.time).getFullYear()
			}))
			.reverse();
	}
);

export const getListDataDetail = createAsyncThunk(
	'analytic/getListDataDetail',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/stablecoin-tvl-summary/${network}`
		});

		if (!data) throw new Error('Error fetching data');

		let res: DataDetail[] = [];

		const dataUSDC: DataDetailRes | undefined = data.find(
			(item: DataDetailRes) => item.token === 'USDC'
		);
		const dataUSDT: DataDetailRes | undefined = data.find(
			(item: DataDetailRes) => item.token === 'USDT' || item.token === 'USDt'
		);
		const dataDAI: DataDetailRes | undefined = data.find(
			(item: DataDetailRes) => item.token === 'DAI' || item.token === 'DAI.e'
		);
		const dataFRAX: DataDetailRes | undefined = data.find(
			(item: DataDetailRes) => item.token === 'FRAX'
		);
		const dataBUSD: DataDetailRes | undefined = data.find(
			(item: DataDetailRes) => item.token === 'BUSD'
		);

		if (dataUSDC)
			res.push({
				icon: 'https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png',
				name: 'USD Coin',
				symbol: 'USDC',
				tvl: dataUSDC ? dataUSDC.tvl : 0,
				change_7d: dataUSDC ? dataUSDC.seven_d_chng : 0,
				change_30d: dataUSDC ? dataUSDC.thirty_d_chng : 0,
				supply: dataUSDC ? dataUSDC.supply : 0,
				tvl_supply: dataUSDC ? dataUSDC.ratio : 0
			});
		if (dataUSDT)
			res.push({
				icon: 'https://s2.coinmarketcap.com/static/img/coins/200x200/825.png',
				name: 'Tether',
				symbol: 'USDT',
				tvl: dataUSDT ? dataUSDT.tvl : 0,
				change_7d: dataUSDT ? dataUSDT.seven_d_chng : 0,
				change_30d: dataUSDT ? dataUSDT.thirty_d_chng : 0,
				supply: dataUSDT ? dataUSDT.supply : 0,
				tvl_supply: dataUSDT ? dataUSDT.ratio : 0
			});
		if (dataDAI)
			res.push({
				icon: 'https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png',
				name: 'Dai',
				symbol: 'DAI',
				tvl: dataDAI ? dataDAI.tvl : 0,
				change_7d: dataDAI ? dataDAI.seven_d_chng : 0,
				change_30d: dataDAI ? dataDAI.thirty_d_chng : 0,
				supply: dataDAI ? dataDAI.supply : 0,
				tvl_supply: dataDAI ? dataDAI.ratio : 0
			});
		if (dataFRAX)
			res.push({
				icon: 'https://s2.coinmarketcap.com/static/img/coins/200x200/6952.png',
				name: 'Frax',
				symbol: 'FRAX',
				tvl: dataFRAX ? dataFRAX.tvl : 0,
				change_7d: dataFRAX ? dataFRAX.seven_d_chng : 0,
				change_30d: dataFRAX ? dataFRAX.thirty_d_chng : 0,
				supply: dataFRAX ? dataFRAX.supply : 0,
				tvl_supply: dataFRAX ? dataFRAX.ratio : 0
			});
		if (dataBUSD)
			res.push({
				icon: 'https://s3.coinmarketcap.com/static/img/portraits/62da512ff192d82df80012bb.png',
				name: 'Binance USD',
				symbol: 'BUSD',
				tvl: dataBUSD ? dataBUSD.tvl : 0,
				change_7d: dataBUSD ? dataBUSD.seven_d_chng : 0,
				change_30d: dataBUSD ? dataBUSD.thirty_d_chng : 0,
				supply: dataBUSD ? dataBUSD.supply : 0,
				tvl_supply: dataBUSD ? dataBUSD.ratio : 0
			});

		res.sort((a,b) => -a.tvl + b.tvl);

		return res;
	}
);

export const getDataUSDC = createAsyncThunk(
	'analytics/getDataUSDC',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/token-tvl/${network}/usdc`
		});

		if (!data) throw new Error('No data');

		return data
			.map((item: any) => ({
				Aave:
					item.Aaveusdc_tvl ?? item.Aaveusdc ?? item.Aaveusdc_usdce_tvl ?? 0,
				dYdX: item.dYdXusdc_tvl ?? 0,
				Curve:
					item.Curveusdc_tvl ?? item.Curveusdc ?? item.Curveusdc_usdce_tvl ?? 0,
				Maker: item.Makerusdc_tvl ?? 0,
				Other:
					item.Otherusdc_tvl ?? item.Otherusdc ?? item.Otherusdc_usdce_tvl ?? 0,
				Bancor: item.Bancorusdc_tvl ?? 0,
				Uniswap: item.Uniswapusdc_tvl ?? item.Uniswapusdc,
				Balancer: item.Balancerusdc_tvl ?? item.Balancerusdc,
				Compound: item.Compoundusdc_tvl ?? 0,
				Treasury: item.Treasuryusdc_tvl ?? 0,
				Sushiswap:
					item.Sushiswapusdc_tvl ??
					item.Sushiusdc ??
					item.SushiSwapusdc_usdce_tvl ??
					0,
				GMX: item.GMXusdc ?? item.GMXusdc_usdce_tvl ?? 0,
				Vesta: item.Vestausdc ?? 0,
				Hundred: item.Hundredusdc ?? 0,
				Radiant: item.Radiantusdc ?? 0,
				Benqi: item.Benqiusdc_usdce_tvl ?? 0,
				HashFlow: item.HashFlowusdc_usdce_tvl ?? 0,
				IronBank: item.IronBankusdc_usdce_tvl ?? 0,
				Pangolin: item.Pangolinusdc_usdce_tvl ?? 0,
				Platypus: item.Platypususdc_usdce_tvl ?? 0,
				KyberSwap: item.KyberSwapusdc_usdce_tvl ?? 0,
				TraderJoe: item.TraderJoeusdc_usdce_tvl ?? 0,
				Cream: item.Creamusdc_tvl ?? 0,
				Valas: item.Valasusdc_tvl ?? 0,
				Venus: item.Venususdc_tvl ?? 0,
				Biswap: item.Biswapusdc_tvl ?? 0,
				Planet: item.Planetusdc_tvl ?? 0,
				Wombat: item.Wombatusdc_tvl ?? 0,
				dForce: item.dForceusdc_tvl ?? 0,
				Apeswap: item.Apeswapusdc_tvl ?? 0,
				BabySwap: item.BabySwapusdc_tvl ?? 0,
				PancakeSwap: item.PancakeSwapusdc_tvl ?? 0,
				time: format(new Date(item.time), 'PP')

				// time:
				// 	monthNames[new Date(item.time).getMonth()] +
				// 	' ' +
				// 	new Date(item.time).getDate() +
				// 	' ' +
				// 	new Date(item.time).getFullYear()
			}))
			.reverse();
	}
);

export const getDataUSDT = createAsyncThunk(
	'analytic/getDataUSDT',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/token-tvl/${network}/usdt`
		});

		if (!data) throw new Error('No data');

		return data
			.map((item: any) => ({
				Aave:
					item.Aaveusdt_tvl ?? item.Aaveusdt ?? item.Aaveusdt_usdte_tvl ?? 0,
				Curve:
					item.Curveusdt_tvl ?? item.Curveusdt ?? item.Curveusdt_usdte_tvl ?? 0,
				Other:
					item.Otherusdt_tvl ?? item.Otherusdt ?? item.Otherusdt_usdte_tvl ?? 0,
				Yearn: item.Yearnusdt_tvl ?? 0,
				Bancor: item.Bancorusdt_tvl ?? 0,
				Uniswap: item.Uniswapusdt_tvl ?? item.Uniswapusdt,
				Balancer: item.Balancerusdt_tvl ?? item.Balancerusdt,
				Compound: item.Compoundusdt_tvl ?? 0,
				Treasury: item.Treasuryusdt_tvl ?? 0,
				Sushiswap:
					item.Sushiswapusdt_tvl ??
					item.Sushiusdt ??
					item.SushiSwapusdt_usdte_tvl ??
					0,
				GMX: item.GMXusdt ?? 0,
				Hundred: item.Hundredusdt ?? 0,
				Radiant: item.Radiantusdt ?? 0,
				Benqi: item.Benqiusdt_usdte_tvl ?? 0,
				HashFlow: item.HashFlowusdt_usdte_tvl ?? 0,
				IronBank: item.IronBankusdt_usdte_tvl ?? 0,
				Pangolin: item.Pangolinusdt_usdte_tvl ?? 0,
				Platypus: item.Platypususdt_usdte_tvl ?? 0,
				TraderJoe: item.TraderJoeusdt_usdte_tvl ?? 0,
				Dodo: item.Dodousdt_tvl ?? 0,
				Cream: item.Creamusdt_tvl ?? 0,
				Venus: item.Venususdt_tvl ?? 0,
				Biswap: item.Biswapusdt_tvl ?? 0,
				Planet: item.Planetusdt_tvl ?? 0,
				Wombat: item.Wombatusdt_tvl ?? 0,
				Apeswap: item.Apeswapusdt_tvl ?? 0,
				BabySwap: item.BabySwapusdt_tvl ?? 0,
				Coinwind: item.Coinwindusdt_tvl ?? 0,
				Ellipsis: item.Ellipsisusdt_tvl ?? 0,
				KnightSwap: item.KnightSwapusdt_tvl ?? 0,
				PancakeSwap: item.PancakeSwapusdt_tvl ?? 0,
				time: format(new Date(item.time), 'PP')
				// time:
				// 	monthNames[new Date(item.time).getMonth()] +
				// 	' ' +
				// 	new Date(item.time).getDate() +
				// 	' ' +
				// 	new Date(item.time).getFullYear()
			}))
			.reverse();
	}
);

export const getDataDAI = createAsyncThunk(
	'analytic/getDataDAI',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/token-tvl/${network}/dai`
		});

		if (!data) throw new Error('No data');

		return data
			.map((item: any) => ({
				Aave: item.Aavedai_tvl ?? item.Aavedai_tvl ?? 0,
				dYdX: item.dydxdai_tvl ?? 0,
				Curve: item.Curvedai_tvl ?? 0,
				Other: item.Otherdai_tvl ?? item.Otherdai_tvl ?? 0,
				Yearn: item.Yearndai_tvl ?? 0,
				Bancor: item.Bancordai_tvl ?? 0,
				Uniswap: item.Uniswapdai_tvl ?? 0,
				Balancer: item.Balancerdai_tvl ?? 0,
				Compound: item.Compounddai_tvl ?? 0,
				Treasury: item.Treasurydai_tvl ?? 0,
				Sushiswap:
					item.Sushiswapdai_tvl ??
					item.Sushidai_tvl ??
					(item.Sushidai_tvl || 0),
				MUX: item.MUXdai_tvl ?? 0,
				Premia: item.Premiadai_tvl ?? 0,
				Hundred: item.Hundreddai_tvl ?? 0,
				Radiant: item.Radiantdai_tvl ?? 0,
				WePiggy: item.WePiggydai_tvl ?? 0,
				Axial: item.dai_tvl ?? 0,
				Benqi: item.Benqidai_tvl ?? 0,
				InsurAce: item.InsurAcedai_tvl ?? 0,
				IronBank: item.IronBankdai_tvl ?? 0,
				Pangolin: item.Pangolindai_tvl ?? 0,
				Platypus: item.Platypusdai_tvl ?? 0,
				KyberSwap: item.KyberSwapdai_tvl ?? 0,
				TraderJoe: item.TraderJoedai_tvl ?? 0,
				NereusFinance: item.NereusFinancedai_tvl ?? 0,
				Cream: item.Creamdai_tvl ?? 0,
				Valas: item.Valasdai_tvl ?? 0,
				Venus: item.Venusdai_tvl ?? 0,
				Wombat: item.Wombatdai_tvl ?? 0,
				dForce: item.dForcedai_tvl ?? 0,
				Apeswap: item.Apeswapdai_tvl ?? 0,
				Ellipsis: item.Ellipsisdai_tvl ?? 0,
				KnightSwap: item.KnightSwapdai_tvl ?? 0,
				PancakeSwap: item.PancakeSwapdai_tvl ?? 0,
				time: format(new Date(item.time), 'PP')

				// time:
				// 	monthNames[new Date(item.time).getMonth()] +
				// 	' ' +
				// 	new Date(item.time).getDate() +
				// 	' ' +
				// 	new Date(item.time).getFullYear()
			}))
			.reverse();
	}
);

export const getDataFrax = createAsyncThunk(
	'analytic/getDataFrax',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/token-tvl/${network}/frax`
		});

		if (!data) throw new Error('No data');

		return data
			.map((item: any) => ({
				Aave: item.Aavefrax_tvl ?? 0,
				Frax: item.Fraxfrax_tvl ?? 0,
				Curve: item.Curvefrax_tvl ?? 0,
				Other: item.Otherfrax_tvl ?? 0,
				Uniswap: item.Uniswapfrax_tvl ?? 0,
				Alchemix: item.Alchemixfrax_tvl ?? 0,
				Treasury: item.Treasuryfrax_tvl ?? 0,
				Sushiswap: item.Sushiswapfrax_tvl ?? 0,
				Saddle: item.Saddlefrax_tvl ?? 0,
				dForce: item.dForcefrax_tvl ?? 0,
				Hundred: item.Hundredfrax_tvl ?? 0,
				Dex: item.Dexfrax_tvl ?? 0,
				Axial: item.Axialfrax_tvl ?? 0,
				Platypus: item.Platypusfrax_tvl ?? 0,
				Planet: item.Planetfrax_tvl ?? 0,
				Apeswap: item.Apeswapfrax_tvl ?? 0,
				PancakeSwap: item.PancakeSwapfrax_tvl ?? 0,
				time: format(new Date(item.time), 'PP')
				// time:
				// 	monthNames[new Date(item.time).getMonth()] +
				// 	' ' +
				// 	new Date(item.time).getDate() +
				// 	' ' +
				// 	new Date(item.time).getFullYear()
			}))
			.reverse();
	}
);

export const getDataBUSD = createAsyncThunk(
	'analytic/getDataBUSD',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/token-tvl/${network}/busd`
		});

		if (!data) throw new Error('No data');

		return data
			.map((item: any) => ({
				Aave: item.Aavebusd_tvl ?? 0,
				Curve: item.Curvebusd_tvl ?? 0,
				Other: item.Otherbusd_tvl ?? 0,
				Yearn: item.Yearnbusd_tvl ?? 0,
				Strike: item.Strikebusd_tvl ?? 0,
				Uniswap: item.Uniswapbusd_tvl ?? 0,
				Dodo: item.Dodobusd_tvl ?? 0,
				Cream: item.Creambusd_tvl ?? 0,
				Venus: item.Venusbusd_tvl ?? 0,
				Wombat: item.Wombatbusd_tvl ?? 0,
				Apeswap: item.Apeswapbusd_tvl ?? 0,
				JulSwap: item.JulSwapbusd_tvl ?? 0,
				BabySwap: item.BabySwapbusd_tvl ?? 0,
				Ellipsis: item.Ellipsisbusd_tvl ?? 0,
				KnightSwap: item.KnightSwapbusd_tvl ?? 0,
				PancakeSwap: item.PancakeSwapbusd_tvl ?? 0,
				time: format(new Date(item.time), 'PP')
				// time:
				// 	monthNames[new Date(item.time).getMonth()] +
				// 	' ' +
				// 	new Date(item.time).getDate() +
				// 	' ' +
				// 	new Date(item.time).getFullYear()
			}))
			.reverse();
	}
);

export const getStableCoinInflow = createAsyncThunk(
	'analytic/getStableCoinInflow',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/stablecoin-inflow/${network}`
		});
		if (!data) throw new Error('Stablecoin no data');

		return data
			.map((item: any) => ({
				USDC: item.usdc_pool_netflow ?? item.usdc_netflow,
				USDT: item.usdt_pool_netflow ?? item.usdt_netflow,
				BUSD: item.busd_netflow,
				FRAX: item.frax_netflow,
				DAI: item.dai_netflow,
				total: item.total_netflow,
				time: format(new Date(item.time), 'PP')
				// time:
				// 	monthNames[new Date(item.time).getMonth()] +
				// 	' ' +
				// 	new Date(item.time).getDate() +
				// 	' ' +
				// 	new Date(item.time).getFullYear()
			}))
			.reverse();
	}
);

export const getDAUAndDailyStableCoin = createAsyncThunk(
	'analytic/getDAUAndDailyStableCoin',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/daily-transfer-and-dau/${network}`
		});

		if (!data) throw new Error('DAU and daily no data');

		return {
			DAU: data
				.map((item: DAUAndDailyStableCoinRes) => ({
					time: format(new Date(item.day), 'PP'),
					// time:
					// 	monthNames[new Date(item.day).getMonth()] +
					// 	' ' +
					// 	new Date(item.day).getDate() +
					// 	' ' +
					// 	new Date(item.day).getFullYear(),
					USDC: item.usdc_users,
					USDT: item.usdt_users,
					BUSD: item.busd_users,
					FRAX: item.frax_users,
					DAI: item.dai_users,
					total: item.total_users
				}))
				.reverse(),
			daily: data
				.map((item: DAUAndDailyStableCoinRes) => ({
					// time:
					// 	monthNames[new Date(item.day).getMonth()] +
					// 	' ' +
					// 	new Date(item.day).getDate() +
					// 	' ' +
					// 	new Date(item.day).getFullYear(),
					time: format(new Date(item.day), 'PP'),
					USDC: item.usdc_tx_amt,
					USDT: item.usdt_tx_amt,
					BUSD: item.busd_tx_amt,
					FRAX: item.frax_tx_amt,
					DAI: item.dai_tx_amt,
					total: item.total_tx_amt
				}))
				.reverse()
		};
	}
);

export const getDataBridged = createAsyncThunk(
	'analytic/getDataBridged',
	async (network: string) => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/bridged-vs-native/${network}`
		});

		if (!data) throw new Error('Data bridge not found');

		return {
			dataUSDC: data
				.map((item: any) => ({
					time: format(new Date(item.time), 'PP'),
					// time:
					// 	monthNames[new Date(item.time).getMonth()] +
					// 	' ' +
					// 	new Date(item.time).getDate() +
					// 	' ' +
					// 	new Date(item.time).getFullYear(),
					USDC: item.usdc_tvl,
					USDCE: item.usdce_tvl
				}))
				.reverse(),
			dataUSDT: data
				.map((item: any) => ({
					// time:
					// 	monthNames[new Date(item.time).getMonth()] +
					// 	' ' +
					// 	new Date(item.time).getDate() +
					// 	' ' +
					// 	new Date(item.time).getFullYear(),
					time: format(new Date(item.time), 'PP'),
					USDT: item.usdt_tvl,
					USDTE: item.usdte_tvl
				}))
				.reverse()
		};
	}
);

export const getAggregateDataSummary = createAsyncThunk(
	'analytic/getAggregateDataSummary',
	async () => {
		const { data } = await axios({
			method: 'GET',
			url: `${HOST}/api/stablecoin-tvl-summary`
		});
		if (!data) throw new Error(`No aggregate data`);
		return data.sort(
			(a: AggregateDataSummary, b: AggregateDataSummary) =>
				b.totalTvl - a.totalTvl
		);
	}
);
