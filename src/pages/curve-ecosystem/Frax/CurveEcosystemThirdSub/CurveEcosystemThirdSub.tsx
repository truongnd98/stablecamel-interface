import { Box, SxProps, Typography } from '@mui/material';
import CustomAreaChart from '../../../../components/AreaChart';
import { ChartDetailProps } from '../../../../components/AreaChart/types';
import randomColor from 'randomcolor';
import { CurveEcosystemThirdSubTable } from './CurveEcosystemThirdSubTable';
import { useCurveEcosystemState } from '../../../../stores/curve-ecosystem/hooks';

const container: SxProps = {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: '28px'
};

const wrap: SxProps = {
	width: '100%',
	height: 380,
	display: 'flex',
	justifyContent: 'space-between'
};

const each: SxProps = {
	width: 'calc(50% - 14px)',
	height: '100%'
};

const details: ChartDetailProps[] = [
	{
		key: 'veFXS',
		color: '#001f54'
	}
];

export function CurveEcosystemThirdSub() {
	const { fxs } = useCurveEcosystemState();
	return (
		<Box sx={container}>
			<Typography
				variant='h5'
				color='primary'
			>
				Locked FXS
			</Typography>
			<Box sx={wrap}>
				<Box sx={each}>
					<CustomAreaChart
						data={fxs ? fxs.locked_fxs : undefined}
						title='Locked FXS (veFXS)'
						detail={details}
						id='locked-fxs'
					/>
				</Box>
				<Box sx={each}>
					<CurveEcosystemThirdSubTable />
				</Box>
			</Box>
		</Box>
	);
}
