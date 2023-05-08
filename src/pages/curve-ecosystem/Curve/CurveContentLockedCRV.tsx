import { Box, Typography } from '@mui/material';
import CustomAreaChart from '../../../components/AreaChart';
import { ChartDetailProps } from '../../../components/AreaChart/types';
import { Metric } from '../../../components/Metric/Metric';
import PositiveAndNegativeBarChart from '../../../components/PositiveAndNegativeBarChart';
import StackedBarChart from '../../../components/StackedBarChart';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import { LockedCRV } from '../types';
import { CurveContentLockedCRVTable } from './CurveContentLockedCRVTable';

const lockedCRVDetail: ChartDetailProps = {
	key: 'locked_crv',
	color: '#6d3099'
};

const lockedCRV60dDetail: ChartDetailProps = {
	key: 'CRV Locked',
	color: '#6d3099'
};

const formatNumber = (value?: number | null) => {
	return new Intl.NumberFormat('en-US', {
		maximumFractionDigits: 0
	}).format(value ?? 0);
};

export function CurveContentLockedCRV() {
	const { curve } = useCurveEcosystemState();

	const dataLockedCRV60d = curve.locked_crv_60d.map((item: LockedCRV) => ({
		...item,
		'CRV Locked': item.delta
	}));
	return (
		<>
			<Typography
				variant='h5'
				color='primary'
			>
				Locked CRV Statistics
			</Typography>
			<Box
				sx={{
					width: '100%',
					height: 380,
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<Box sx={{ width: 'calc(50% - 14px)', height: '100%' }}>
					<CustomAreaChart
						data={curve.locked_crv}
						title='Locked CRV (veCRV)'
						id='locked-crv-area'
						detail={lockedCRVDetail}
					/>
				</Box>
				<Box sx={{ width: 'calc(50% - 14px)', height: '100%' }}>
					<CurveContentLockedCRVTable />
				</Box>
			</Box>
			<Box
				sx={{
					width: '100%',
					height: 120,
					display: 'flex',
					justifyContent: 'space-between',
					gap: '28px'
				}}
			>
				<Metric
					title='Locked CRV (veCRV)'
					value={formatNumber(curve.current_locked_crv?.locked_crv)}
				/>
				<Metric
					title='Locked CRV (veCRV)'
					value={formatNumber(curve.current_locked_crv?.delta)}
				/>
			</Box>
			<Box sx={{ width: '100%', height: 380 }}>
				<PositiveAndNegativeBarChart
					data={dataLockedCRV60d}
					title='Locked CRV (veCRV)'
					id='locked-crv-bar'
					details={lockedCRV60dDetail}
				/>
			</Box>
		</>
	);
}
