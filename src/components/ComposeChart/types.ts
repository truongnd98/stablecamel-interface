import { StringLiteral } from 'typescript';

export interface ComposeChartProps {
	data?: any[];
	id: string;
	title: string;
	details: ComposeChartDetails;
	yAxisKey: ComposeChartAxisKey;
}

export interface ComposeChartAxisKey {
	left?: string;
	right?: string;
}

export interface ComposeChartDetails {
	bar?: ChartDetails;
	line?: ChartDetails;
	area?: ChartDetails;
	scatter?: ChartDetails;
}

export interface ChartDetails {
	key: string;
	color: string;
}
