import { Box, SxProps } from '@mui/material';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import { Metric } from '../../../components/Metric/Metric';

const main: SxProps = {
	width: '100%',
	height: 120,
	display: 'flex',
	justifyContent: 'space-between',
	gap: '28px'
};

const formatNumber = (number?: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		notation: 'compact',
		maximumFractionDigits: 2
	}).format(number ?? 0);
};
export function ConvexContentMetrics() {
	const { convex } = useCurveEcosystemState();

	return !convex ? (
		<></>
	) : (
		<Box sx={main}>
			<Metric
				title='Locked CVX (vlCVX)'
				value={formatNumber(convex.current_locked_cvx?.cum_from)}
			/>
			<Metric
				title='Net CVX Locked Last 30 Days'
				value={formatNumber(convex.current_locked_cvx?.delta_30)}
			/>
			<Metric
				title='Net CVX Locked Last 7 Days'
				value={formatNumber(convex.current_locked_cvx?.delta_7)}
			/>
		</Box>
	);
}
