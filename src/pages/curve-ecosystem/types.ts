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
}

export interface CurveSwapVolume {
  cum: number;
  day: string;
  usd_volume: number;
}
