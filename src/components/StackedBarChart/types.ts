export interface ChartDetailProps {
	color: string;
	key: string;
}

export interface BarChartOptions {
	id: string;
	title: string;
	data?: any[];
	details: ChartDetailProps | ChartDetailProps[];
	legend?: boolean;
	tooltip?: any;
}
