import { Box } from '@mui/material';
import CustomAreaChart from '../../../components/AreaChart';
import { ChartDetailProps } from '../../../components/AreaChart/types';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import { ConicContentLeaderboardTable } from './ConicContentLeaderboardTable';

const lockedCNC: ChartDetailProps = {
	key: 'vlcnc',
	color: '#6d3099',
	name: 'vlCNC'
};

export function ConicContentLockedCNCAndLeaderboard() {
	const { conic } = useCurveEcosystemState();	

	return (
		<>
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
						data={conic.locked_cnc}
						title='Locked CNC (vlCNC)'
						id='locked-cnc-vlcnc'
						detail={lockedCNC}
					/>
				</Box>
				<Box sx={{ width: 'calc(50% - 14px)', height: '100%' }}>
					<ConicContentLeaderboardTable />
				</Box>
			</Box>			
		</>
	);
}
