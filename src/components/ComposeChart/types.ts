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
	bar?: ChartDetails | ChartDetails[];
	line?: ChartDetails | ChartDetails[];
	area?: ChartDetails | ChartDetails[] ;
	scatter?: ChartDetails | ChartDetails[];
}

export interface ChartDetails {
	key: string;
	color: string;
	name?: string;
	right?: boolean;
}
