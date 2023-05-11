import { Typography } from '@mui/material';
import { useGetDataCurve } from '../../../stores/curve-ecosystem/hooks';
import { CurveContentCurveRevenue } from './CurveContentCurveRevenue';
import { CurveContentLockedCRV } from './CurveContentLockedCRV';
import { CurveVolumeCharts } from './CurveVolumeCharts';
import { FraxTitle } from '../Frax/FraxTitle/FraxTitle';

export function CurveContent() {
	useGetDataCurve();
	return (
		<>
			<FraxTitle/>
			<CurveVolumeCharts />
			<CurveContentCurveRevenue />
			<CurveContentLockedCRV />
		</>
	);
}
