import { Box, SxProps, Typography } from '@mui/material';
import { Metric } from '../../../components/Metric/Metric';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';

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

export function CurveContentCurveRevenue() {
	const { curve } = useCurveEcosystemState();
	return (
		<>
			<Typography
				variant='h5'
				color='primary'
			>
				Curve Revenue
			</Typography>
			<Box sx={main}>
				<Metric
					title='Curve Volume'
					value={formatNumber(
						curve
							? curve.curve_volume[curve.curve_volume.length - 1].usd_volume
							: 0
					)}
				/>
				<Metric
					title='Curve Revenue'
					value={formatNumber(0)}
				/>
				<Metric
					title='Curve Revenue'
					value={formatNumber(0)}
				/>
			</Box>
		</>
	);
}
