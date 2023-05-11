import { Box } from '@mui/material';
import CustomAreaChart from '../../../components/AreaChart';
import { ChartDetailProps } from '../../../components/AreaChart/types';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import { ConvexContentLeaderboardTable } from './ConvexContentLeaderboardTable';
import PositiveAndNegativeBarChart from '../../../components/PositiveAndNegativeBarChart';

const lockedCVX: ChartDetailProps = {
	key: 'cum_from',
	color: '#6d3099',
	name: 'vlCVX'
};

const lockedCVXDaily: ChartDetailProps = {
	key: 'delta',
	color: '#6d3099',
	name: 'Locked'
};


export function ConvexContentLockedCVXAndLeaderboard() {
	const { convex } = useCurveEcosystemState();	

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
						data={convex.locked_cvx}
						title='Total Locked CVX (vlCVX)'
						id='total-locked-cvx-vlcvx'
						detail={lockedCVX}
					/>
				</Box>
				<Box sx={{ width: 'calc(50% - 14px)', height: '100%' }}>
					<ConvexContentLeaderboardTable />
				</Box>
			</Box>			
			<Box sx={{ width: '100%', height: 380 }}>
				<PositiveAndNegativeBarChart
					data={convex.locked_cvx}
					title='Daily Locked CVX (vlCVX)'
					id='locked-cvx-daily'
					details={lockedCVXDaily}
				/>
			</Box>
		</>
	);
}
