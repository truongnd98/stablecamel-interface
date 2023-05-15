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

export interface LockedCVX {
	day: string;
	delta: number;
	delta_7: number;
	delta_30: number;
	cum_from: number;
}

export interface CVXLeaderboard {
	label: string;
	balance: number;
	percent_of_total: number;
}

export interface CVXBribeRevenue {
	time: string;
	[key:string]: any;
}


export interface CVXUnlockTrackerV2 {
	cvx: number,
	epoch: string,
	unlock_date: string,
	future_unlock: number,
	expired_unlock: number,
	future_unlock_usd: number,
	expired_unlock_usd: number
}

export interface CVXCumulative3CRV {
	day: string;
	total_3crv: number;
	total_3crv_usd: number;
}

export interface CRVFarmed {
	day: string;
	total_crv: number;
	cum_farmed_crv: number;
}


export interface FSXFarmed {
	day: string;
	total_fxs: number;
	fxs_to_LPs: number;
	fxs_to_vlCVX: number;
	fxs_to_cvxFXS: number;
	total_fxs_usd: number;
	fxs_to_LPs_usd: number;
	fxs_to_vlCVX_usd: number;
	fxs_to_cvxFXS_usd: number;
}

export interface Convex {
	locked_cvx: LockedCVX[];
	current_locked_cvx: LockedCVX | undefined;
	cvx_leaderboard: CVXLeaderboard[];
	bribe_revenue: CVXBribeRevenue[];
	unlock_tracker_v2: CVXUnlockTrackerV2[];
	cumulative_3crv: CVXCumulative3CRV[];
	crv_farmed: CRVFarmed[];
	fsx_farmed: FSXFarmed[];
}

export interface ConicTotalTvl {
	TVL: number;
	day: string;
}

export interface CNC {
	ratio: number;
	vlcnc: number;
	minute: string;
	circ_supply: number;
	total_supply: number;
	circ_cnc_locked: number;
	circ_cnc_locked_counter: number;
}

export interface CNCTVLByToken {
	day: string,
	USDC: number;
	DAI: number;
	FRAX: number;
	USDT: number;
}

export interface CNCTVLCurvePoolDistribution {
	label: string;
	amount: number;
}

export interface DailyCNCNetLocked {
	day: string;
	locked: number;
	rolling_7_day_amount: number;
	rolling_30_day_amount: number;
}

export interface LockedCNC {
	delta: number;
	vlcnc: number;
	minute: string;
}

export interface CNCLeaderboard {
	wallet: string;
	balance: number;
	percent_of_total: number;
}

export interface CNCUnlocksTrackerWeekly {
	week: string;
	unlock_usd: number;
	locked_amount: number;
	expired_unlock_usd: number;
	expired_locked_amount: number;
}

export interface Conic {
	total_tvl: ConicTotalTvl | undefined;
	current_cnc: CNC | undefined;
	tvl_curve_pool_distribution: CNCTVLCurvePoolDistribution[];
	tvl_by_token: CNCTVLByToken[];
	current_daily_cnc_net_locked: DailyCNCNetLocked | undefined;
	daily_cnc_net_locked: DailyCNCNetLocked[];
	locked_cnc: LockedCNC[];
	leaderboard: CNCLeaderboard[];
	unlocks_tracker_weekly: CNCUnlocksTrackerWeekly[];
}

export interface CLeverLockedCVXAndFlow {
	Date: string;
	inflow: number;
	Holders: number;
	outflow: number;
	CVX_locked: number;
	Net_borrowings: number;
	clevCVX_supply: number;
	clevCVX_upper_limit: number;
	Net_borrowings_counter: number;
}

export interface CLever {
	current_locked_cvx_and_flow: CLeverLockedCVXAndFlow | undefined;
	locked_cvx_and_flow: CLeverLockedCVXAndFlow[];
}