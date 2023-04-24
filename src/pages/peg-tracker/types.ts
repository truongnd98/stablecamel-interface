export interface PegTrackerRes {
	id: string;
	symbol: string;
	name: string;
	platforms: {
		ethereum: string;
		fantom: string;
		'optimistic-ethereum': string;
	};
	usd: number;
	usd_market_cap: number;
	usd_24h_vol: number;
	usd_24h_change: number;
	last_updated_at: number;
	thirty_off_per: number;
	current_off_per: number;
}
