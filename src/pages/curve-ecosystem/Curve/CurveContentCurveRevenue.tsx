import { Box, SxProps, Typography } from '@mui/material';
import { Metric } from '../../../components/Metric/Metric';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import { CurveContentCurveRevenueCharts } from './CurveContentCurveRevenueCharts';

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
						curve.total_volume
							? curve.total_volume.total_volume * 1e9
							: undefined
					)}
				/>
				<Metric
					title='Total Fee Revenue'
					value={formatNumber(curve.total_fee_revenue[0]?.total_revenue * 1e6)}
				/>
				<Metric
					title='Admin Fee Revenue Per veCRV'
					value={formatNumber(curve.admin_fee_revenue_per_vecrv?.admin_revenue)}
				/>
			</Box>
			<CurveContentCurveRevenueCharts />
		</>
	);
}
