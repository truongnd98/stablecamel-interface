import { useGetDataClever } from '../../../stores/curve-ecosystem/hooks';
import { FraxTitle } from '../Frax/FraxTitle/FraxTitle';
import { CleverContentCharts } from './CleverContentCharts';
import { CleverContentMetrics } from './CleverContentMetrics';

export function CleverContent() {
	useGetDataClever();
	return (
		<>
      <FraxTitle/>
      <CleverContentMetrics/>
      <CleverContentCharts/>
		</>
	);
}
