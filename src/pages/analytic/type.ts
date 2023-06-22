import { ChartDetailProps } from '../../components/AreaChart/types';

export enum Stablecoin {
  USDC = 'USDC',
  USDT = 'USDT',
  DAI = 'DAI',
  FRAX = 'FRAX',
  BUSD = 'BUSD',
}

export interface StablecoinChartDetail extends ChartDetailProps {
  key: Stablecoin;
}

export const stableCoinDetailProps: StablecoinChartDetail[] = [
  {
    key: Stablecoin.USDC,
    color: '#2875ca',
  },
  {
    key: Stablecoin.USDT,
    color: '#009393',
  },
  {
    key: Stablecoin.DAI,
    color: '#fabe3e',
  },
  {
    key: Stablecoin.FRAX,
    color: '#000000',
  },
  {
    key: Stablecoin.BUSD,
    color: '#f3c131',
  },
];

export interface DataChart {
  DAI: number;
  time: string;
  BUSD: number;
  FRAX: number;
  USDC: number;
  USDT: number;
  total: number;
}

export interface DataTVL extends DataChart {
  total: number;
  seven_d_chng: number;
  dominance: number;
}

export interface DataDetail {
  icon: string;
  name: string;
  symbol: string;
  tvl: number;
  change_7d: number;
  change_30d: number;
  supply: number;
  tvl_supply: number;
}

export interface AggregateDataSummary {
  chain: string;
  totalSupply: number;
  totalTvl: number;
  sevenDayChange: number;
  usdcDominance: number;
  busdDominance: number;
  stablecoinDominance: {
    token: string;
    percent: number;
  };
}

export interface DataUSDTChart {
  time: string;
  Aave: number;
  Curve: number;
  Other: number;
  Yearn: number;
  Bancor: number;
  Uniswap: number;
  Balancer: number;
  Compound: number;
  Treasury: number;
  Sushiswap: number;
}

export interface DataUSDCChart {
  time: string;
  Aave: number;
  dYdX: number;
  Curve: number;
  Maker: number;
  Other: number;
  Bancor: number;
  Uniswap: number;
  Balancer: number;
  Compound: number;
  Treasury: number;
  Sushiswap: number;
  GMX: number;
  Vesta: number;
  Hundred: number;
  Radiant: number;
}

export interface DataDAIChart {
  time: string;
  Aave: number;
  dYdX: number;
  Curve: number;
  Other: number;
  Yearn: number;
  Bancor: number;
  Uniswap: number;
  Balancer: number;
  Compound: number;
  Treasury: number;
  Sushiswap: number;
}

export interface DataFRAXChart {
  time: string;
  Aave: number;
  Frax: number;
  Curve: number;
  Other: number;
  Uniswap: number;
  Alchemix: number;
  Treasury: number;
  Sushiswap: number;
}

export interface DataBUSDChart {
  time: string;
  Aave: number;
  Curve: number;
  Other: number;
  Yearn: number;
  Strike: number;
  Uniswap: number;
}

export interface DataBridgedUSDC {
  time: string;
  USDC: number;
  USDCE: number;
}

export interface DataBridgedUSDT {
  time: string;
  USDT: number;
  USDTE: number;
}

export interface DataDetailRes {
  tvl: number;
  ratio: number;
  token: string;
  supply: number;
  seven_d_chng: number;
  thirty_d_chng: number;
}

export interface DAUAndDailyStableCoinRes {
  day: string;
  dai_users: number;
  busd_users: number;
  dai_tx_amt: number;
  frax_users: number;
  usdc_users: number;
  usdt_users: number;
  busd_tx_amt: number;
  frax_tx_amt: number;
  total_users: number;
  usdc_tx_amt: number;
  usdt_tx_amt: number;
  seven_d_chng: number;
  total_tx_amt: number;
  usdt_dominance: number;
}
