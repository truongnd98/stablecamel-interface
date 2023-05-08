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

export interface CurveVolume {
	cum: number;
	day: string;
	usd_volume: number;
}

export interface CurvePoolVolume {
	time: string;
	'3pool': string;
	other: string;
	steth: string;
	tricrypto2: string;
}

export interface TotalRevenue {
	total_revenue: number;
}

export interface AdminFeeRevenue {
	day: string;
	locked_crv: null;
	admin_revenue: number;
	rev_per_vecrv: null;
}

export interface FeeRevenuePoolType {
	_col1: number;
	token_type: string;
}

export interface FeeRevenue {
	volume: number;
	fee_usd: number;
	token_type: string;
	fee_usd_cum: number;
	admin_fee_usd: number;
	admin_fee_usd_cum: number;
	project_contract_address: string;
}

export interface FeeRevenuePool {
	[key: string]: FeeRevenue | string;
	time: string;
}

export interface FeeRevenuePoolFormat {
	[key: string]: number | string;
	time: string;
}

export interface LockedCRV {
	day: string;
	delta: number | null;
	locked_crv: number;
}

export interface CRVLeaderboard {
	wallet: string;
	balance: number;
	percent_of_total: number;
}

export interface Curve {
	curve_volume: CurveVolume[];
	curve_pool_volume: CurvePoolVolume[];
	total_volume: { total_volume: number } | undefined;
	total_fee_revenue: TotalRevenue[];
	admin_fee_revenue_per_vecrv: AdminFeeRevenue | undefined;
	fee_revenue_by_pool_type: FeeRevenuePoolType[];
	fee_revenue_by_pool_cumulative: FeeRevenuePool[];
	fee_revenue_by_pool_daily: FeeRevenuePool[];
	locked_crv_60d: LockedCRV[];
	locked_crv: LockedCRV[];
	current_locked_crv: LockedCRV | undefined;
	crv_leader_board: CRVLeaderboard[];
}
