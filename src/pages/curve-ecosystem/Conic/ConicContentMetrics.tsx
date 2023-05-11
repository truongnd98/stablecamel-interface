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
export function ConicContentMetrics() {
	const { conic } = useCurveEcosystemState();

	return !conic ? (
		<></>
	) : (
		<Box sx={main}>
			<Metric
				title='Total TVL'
				value={formatNumber(conic.total_tvl?.TVL)}
			/>
			<Metric
				title='Locked CNC'
				value={String(conic.current_cnc?.vlcnc.toFixed(2) || 0)}
			/>
			<Metric
				title='Circulating CNC Locked'
				value={String(conic.current_cnc?.circ_cnc_locked_counter.toFixed(2) || 0) + '%'}
			/>
		</Box>
	);
}
