import { Typography } from '@mui/material';
import { useGetDataCurve } from '../../../stores/curve-ecosystem/hooks';
import { CurveContentCurveRevenue } from './CurveContentCurveRevenue';
import { CurveContentLockedCRV } from './CurveContentLockedCRV';
import { CurveVolumeCharts } from './CurveVolumeCharts';

export function CurveContent() {
	useGetDataCurve();
	return (
		<>
			<CurveVolumeCharts />
			<CurveContentCurveRevenue />
			<CurveContentLockedCRV />
		</>
	);
}
