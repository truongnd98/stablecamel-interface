import { Box } from '@mui/material';
import { ChartDetailProps } from '../../../components/AreaChart/types';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import StackedBarChart from '../../../components/StackedBarChart';
import randomColor from 'randomcolor';
import { ComposeChart } from '../../../components/ComposeChart/ComposeChart';
import { v4 } from 'uuid';


const bribeRevenueDetail: ChartDetailProps[] = ['DAI', 'WETH', 'ALCX', 'FXS', 'MTA', 'LDO', 'BADGER', 'CRV', 'CVX', 'EURS', 'TRIBE', 'OGN', 'LUNA', 'YFI', 'MATIC', 'RAI', 'FLX', 'T', 'UST', 'GRO', 'LFT', 'SNX', 'INV', 'LYRA', 'STG', 'JPEG', 'USDN', 'GNO', 'TUSD', 'USDD', 'FRAX', 'USDC'].map(key=>({
	key: key,
	color: randomColor({
		seed: key
	}),
})) 


export function ConvexContentBribeRevenueAndUnlockTracker() {
	const { convex } = useCurveEcosystemState();

	const unlockTrackerV2 = convex.unlock_tracker_v2;
	const unlockTrackerV2Detail = {
		bar: [{ key: "expired_unlock", color: "#6d3099" }, { key: "future_unlock", color: "#fd3099" }],
		line: [{ key : "expired_unlock_usd", color: "#6d3099", right: true }, { key : "future_unlock_usd", color: "#fd3099", right: true }]
	}

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
					<StackedBarChart
						data={convex.bribe_revenue}
						title='vlCVX Bribe Revenue'
						id='vlcvx-bribe-revenue'
						details={bribeRevenueDetail}
						legend={false}
					/>
				</Box>
				<Box sx={{ width: 'calc(50% - 14px)', height: '100%' }}>
				<ComposeChart
					data={unlockTrackerV2}
					title='vlCVX Unlock Tracker v2'
					details={unlockTrackerV2Detail}
					yAxisKey={{
						left:'expired_unlock',
						right: 'expired_unlock_usd',
					}}
					id='vlcvx-unlock-tracker-v2'
				/>
				</Box>
			</Box>			
			
		</>
	);
}
