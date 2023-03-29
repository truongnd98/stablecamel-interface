export interface YieldRes {
	network: string;
	project: string;
	pool: string;
	total_apy: number;
	base_apy: number | null;
	reward_apy: number | null;
	tvl: string;
	tvl_number: number;
	apy_7d: number;
	apy_30d: number;
}

export interface ScatterChartProps {
	data: YieldRes[];
	name: string;
	color: string;
}
