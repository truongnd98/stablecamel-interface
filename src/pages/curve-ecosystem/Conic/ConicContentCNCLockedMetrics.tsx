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
export function ConicContentCNCLockedMetrics() {
	const { conic } = useCurveEcosystemState();

	return !conic ? (
		<></>
	) : (
		<Box sx={main}>
			<Metric
				title={`Today's Net Locked`}
				value={String(conic.current_daily_cnc_net_locked?.locked.toFixed(0) || 0)}
			/>
			<Metric
				title={`Net CNC Locked last 30 Days`}
				value={String(conic.current_daily_cnc_net_locked?.rolling_30_day_amount.toFixed(0) || 0)}
			/>
			<Metric
				title={`Net CNC Locked Last 7 Days`}
				value={String(conic.current_daily_cnc_net_locked?.rolling_7_day_amount.toFixed(0) || 0)}
			/>
		</Box>
	);
}
