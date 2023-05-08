export function PieChartLegend({ payload }: any) {
	return (
		<ul>
			{payload.map((entry: any, index: number) => (
				<li key={`item-${index}`}>{entry.value}</li>
			))}
		</ul>
	);
}
