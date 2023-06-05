import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { ContentType } from "recharts/types/component/Tooltip";

export interface AreaChartOptions {
	data?: any[];
	title: string;
	detail: ChartDetailProps | ChartDetailProps[];
	legend?: boolean;
	id: string;
	tooltip?:any;
	XAxisKey?: string;
	formatTickX?: ((value: any, index: number) => string) | undefined;
	formatTickY?: ((value: any, index: number) => string) | undefined;
	CustomTooltip?: ContentType<ValueType, NameType> | undefined
}

export interface ChartDetailProps {
	color: string;
	key: string;
	name?: string
}
