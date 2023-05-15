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

export function CleverContentMetrics() {
	const { clever } = useCurveEcosystemState();

	return !clever ? (
		<></>
	) : (
		<Box sx={main}>
			<Metric
				title='CVX Locked'
				value={new Intl.NumberFormat('en-US', {
					maximumFractionDigits: 2,
					notation: 'compact',
				}).format(clever.current_locked_cvx_and_flow?.CVX_locked ?? 0)}
			/>
			<Metric
				title='clevCVX Supply'
				value={new Intl.NumberFormat('en-US', {
					maximumFractionDigits: 2,
					notation: 'compact',
				}).format(clever.current_locked_cvx_and_flow?.clevCVX_supply ?? 0)}
			/>
			<Metric
				title='Net Borrowing'
				value={String(clever.current_locked_cvx_and_flow?.Net_borrowings_counter.toFixed(2) || 0) + '%'}
			/>
		</Box>
	);
}
