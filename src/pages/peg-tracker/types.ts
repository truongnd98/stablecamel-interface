export interface PegTrackerRes {
	id: string;
	symbol: string;
	name: string;
	platforms: Record<string, string>;
	supply: number;
	usd: number;
	usd_market_cap: number;
	usd_24h_vol: number;
	usd_24h_change: number;
	last_updated_at: number;
	thirty_off_per: number;
	current_off_per: number;
}

export interface PegTrackerTableProps extends PegTrackerRes {
	tvl: number;
	ethereumTVL: number;
	bscTVL: number;
	avaxTVL: number;
	arbitrumTVL: number;
}
