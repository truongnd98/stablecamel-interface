import { Box, SxProps } from '@mui/material';
import { Metric } from '../../../../components/Metric/Metric';
import { useCurveEcosystemState } from '../../../../stores/curve-ecosystem/hooks';

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
export function CurveEcosystemMainMetrics() {
	const { frax } = useCurveEcosystemState();

	return !frax ? (
		<></>
	) : (
		<Box sx={main}>
			<Metric
				title='FRAX Price'
				value={formatNumber(frax.current_price.frax)}
			/>
			<Metric
				title='FRAX Supply (Total)'
				value={new Intl.NumberFormat('en-US', {
					notation: 'compact',
					maximumFractionDigits: 2
				}).format(frax.current_supply.supply)}
			/>
			<Metric
				title='FraxSwap Volume'
				value={formatNumber(frax.current_swap_volume.usd_volume)}
			/>
		</Box>
	);
}
