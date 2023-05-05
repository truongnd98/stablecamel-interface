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
