export interface CurvePrice {
	minute: string;
	frax: number;
	stable: number;
	createdAt: string;
	updatedAt: string;
}

export interface CurveSupply {
	day: string;
	supply: number;
	time: string;
	eth: number;
	arbitrum: number;
	avalanche: number;
	fantom: number;
	optimism: number;
}

export interface CurveSwapVolume {
	cum: number;
	day: string;
	usd_volume: number;
}

export interface CurveEcosystemFraxRes {
	price: CurvePrice[];
	current_price: CurvePrice;
	supply: CurveSupply[];
	current_supply: CurveSupply;
	swap_volume: CurveSwapVolume[];
	current_swap_volume: CurveSwapVolume;
}

export interface BPVolume {
	day: string;
	volume: number;
	cumulative: number;
	seven_day_average: number;
}

export interface ThreePoolVolume {
	week: string;
	volume: number;
	cumulative: number;
}

export interface BP_TVL {
	day: string;
	frax: number;
	usdc: number;
	total: number;
}

export interface ThreePoolTVL {
	dai: number;
	usdc: number;
	usdt: number;
	total: number;
	evt_date: string;
}

export interface CurrentBP {
	week: string;
	total: number;
	volume: number;
	liq_utilization: number;
}

export interface CurveEcosystemFraxBPRes {
	current_bp: CurrentBP;
	bp_tvl: BP_TVL[];
	current_bp_tvl: BP_TVL;
	three_pool: CurrentBP[];
	three_pool_tvl: ThreePoolTVL[];
	current_three_pool_tvl: ThreePoolTVL;
	bp_volume: BPVolume[];
	three_pool_volume: ThreePoolVolume[];
}

export interface frxETHSupply {
	day: string;
	frxETH_supply: number;
	frxETH_supply_delta: number;
}

export interface fxsLocked {
	delta: number | null;
	veFXS: number;
	txn_date: string;
}

export interface fxsLeaderboard {
	wallet: string;
	balance: number;
	percent_of_total: number;
}

export interface CurveEcosystemFrxAndFxsRes {
	eth_supply: frxETHSupply[];
	current_eth_supply: frxETHSupply;
	locked_fxs: fxsLocked[];
	fxs_leader_board: fxsLeaderboard[];
}
