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
  bsc_tvl?: number;
  ethereum_tvl?: number;
  avalanche_tvl?: number | null;
  arbitrum_tvl?: number | null;
  total_tvl?: number;
}
