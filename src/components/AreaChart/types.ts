export interface AreaChartOptions {
	data?: any[];
	title: string;
	detail: ChartDetailProps | ChartDetailProps[];
	legend?: boolean;
	id: string;
}

export interface ChartDetailProps {
	color: string;
	key: string;
}
