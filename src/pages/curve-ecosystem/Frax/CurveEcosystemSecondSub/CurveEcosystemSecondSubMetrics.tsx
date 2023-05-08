import { Box, SxProps, Typography } from '@mui/material';
import { Metric } from '../../../../components/Metric/Metric';
import { useCurveEcosystemState } from '../../../../stores/curve-ecosystem/hooks';

const main: SxProps = {
	width: '100%',
	height: 120,
	display: 'flex',
	justifyContent: 'space-between',
	gap: '28px'
};

const formatNumber = (number: number) => {
	return new Intl.NumberFormat('en-US', {
		// style: 'currency',
		// currency: 'USD',
		// notation: 'compact',
		maximumFractionDigits: 0
	}).format(number);
};

export function CurveEcosystemSecondSubMetrics() {
	const { frxETH } = useCurveEcosystemState();
	return (
		<Box sx={main}>
			<Metric
				title='frxETH Supply'
				value={formatNumber(
					frxETH ? frxETH.current_eth_supply.frxETH_supply : 0
				)}
			/>
			<Metric
				title='frxETH Supply'
				value={formatNumber(
					frxETH ? frxETH.current_eth_supply.frxETH_supply_delta : 0
				)}
			/>
		</Box>
	);
}
