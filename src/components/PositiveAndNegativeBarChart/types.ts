export interface ChartDetailProps {
	color: string;
	key: string;
}

export interface PositiveAndNegativeBarChartOptions {
	data?: any[];
	title: string;
	details: ChartDetailProps | ChartDetailProps[];
	id: string;
}
