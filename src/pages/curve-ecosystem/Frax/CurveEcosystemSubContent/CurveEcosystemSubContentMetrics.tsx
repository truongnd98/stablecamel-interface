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

const formatNumber = (number: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		notation: 'compact',
		maximumFractionDigits: 2
	}).format(number);
};

export function CurveEcosystemSubContentMetrics() {
	const { fraxBP } = useCurveEcosystemState();
	return (
		<Box sx={main}>
			<Metric
				title='FRAXBP TVL'
				value={formatNumber(fraxBP ? fraxBP.current_bp_tvl.total : 0)}
			/>
			<Metric
				title='FRAXBP'
				value={
					fraxBP ? fraxBP.current_bp.liq_utilization.toFixed(2) + '%' : '0%'
				}
			/>
			<Metric
				title='3pool TVL'
				value={formatNumber(fraxBP ? fraxBP.current_three_pool_tvl.total : 0)}
			/>
			<Metric
				title='3pool'
				value={
					fraxBP
						? fraxBP.three_pool[
								fraxBP.three_pool.length - 1
						  ].liq_utilization.toFixed(2) + '%'
						: '0%'
				}
			/>
		</Box>
	);
}
