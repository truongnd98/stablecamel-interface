import { useGetDataClever } from '../../../stores/curve-ecosystem/hooks';
import { CleverContentCharts } from './CleverContentCharts';
import { CleverContentMetrics } from './CleverContentMetrics';

export function CleverContent() {
	useGetDataClever();
	return (
		<>
      <CleverContentMetrics/>
      <CleverContentCharts/>
		</>
	);
}
