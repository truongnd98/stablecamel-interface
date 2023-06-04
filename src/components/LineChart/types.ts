export interface LineChartProps {
	data?: any[];
	title: string;
	details: ChartDetailProps | ChartDetailProps[];
	legend?: boolean;
	id: string;
}

export interface ChartDetailProps {
	color: string;
	key: string;
	name?: string,
}
