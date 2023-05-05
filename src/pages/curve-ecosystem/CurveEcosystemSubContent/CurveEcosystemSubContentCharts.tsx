import { Box, SxProps } from '@mui/material';
import CustomAreaChart from '../../../components/AreaChart';
import StackedBarChart from '../../../components/StackedBarChart';
import { ChartDetailProps } from '../../../components/AreaChart/types';
import randomColor from 'randomcolor';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';

const container: SxProps = {
	width: '100%',
	display: 'flex',
	gap: '28px',
	flexWrap: 'wrap'
};

const each: SxProps = {
	width: 'calc(50% -  14px)',
	height: 380,
	display: 'flex',
	justifyContent: 'space-between'
};

const details: ChartDetailProps[] = [
	{
		key: 'arbitrum',
		color: randomColor({ seed: 'arbitrum' })
	}
];

const fraxBP_TVLDetails: ChartDetailProps[] = [
	{
		key: 'usdc',
		color: '#d3d3d3'
	},
	{
		key: 'frax',
		color: '#001f54'
	}
];

const threePoolTVLDetails: ChartDetailProps[] = [
	{
		key: 'dai',
		color: '#afeeee'
	},
	{
		key: 'usdc',
		color: '#d3d3d3'
	},
	{
		key: 'usdt',
		color: '#001f54'
	}
];

const fraxBPVolumeDetails: ChartDetailProps[] = [
	{
		key: 'cumulative',
		color: '#d3d3d3'
	},
	{
		key: 'volume',
		color: '#001f54'
	}
];

export function CurveEcosystemSubContentCharts() {
	const { fraxBP } = useCurveEcosystemState();
	return (
		<Box sx={container}>
			<Box sx={each}>
				<CustomAreaChart
					data={fraxBP ? fraxBP.bp_tvl : undefined}
					title='FRAXBP TVL'
					detail={fraxBP_TVLDetails}
					id='fraxbp-tvl'
					legend
				/>
			</Box>
			<Box sx={each}>
				<CustomAreaChart
					data={fraxBP ? fraxBP.three_pool_tvl : undefined}
					title='3pool TVL'
					detail={threePoolTVLDetails}
					id='3pool-tvl'
					legend
				/>
			</Box>
			<Box sx={each}>
				<StackedBarChart
					data={fraxBP ? fraxBP.bp_volume : undefined}
					title='FRAXBP Volume'
					details={fraxBPVolumeDetails}
					id='fraxbp-tvl'
				/>
			</Box>
			<Box sx={each}>
				<StackedBarChart
					data={[]}
					title='3pool Volume'
					details={details}
					id='3pool-volume'
				/>
			</Box>
		</Box>
	);
}
