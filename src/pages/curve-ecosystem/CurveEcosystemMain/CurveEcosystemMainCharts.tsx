import { SxProps } from '@mui/material';
import { Box } from '@mui/system';
import CustomAreaChart from '../../../components/AreaChart';
import PositiveAndNegativeBarChart from '../../../components/PositiveAndNegativeBarChart';
import { ChartDetailProps } from '../../../components/PositiveAndNegativeBarChart/types';
import randomColor from 'randomcolor';
import StackedBarChart from '../../../components/StackedBarChart';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import { CustomLineChart } from '../../../components/LineChart/LineChart';

const container: SxProps = {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: '28px'
};

const wrapChart: SxProps = {
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',

	height: 380
};

const singleChart: SxProps = {
	width: '100%',
	height: 380
};

const details: ChartDetailProps[] = [
	{
		key: 'arbitrum',
		color: randomColor({ seed: 'arbitrum' })
	}
];

const supplyDetails: ChartDetailProps[] = [
	{
		key: 'eth',
		color: randomColor({ seed: 'eth' })
	},
	{
		key: 'arbitrum',
		color: randomColor({ seed: 'arbitrum' })
	},
	{
		key: 'avalanche',
		color: randomColor({ seed: 'avalanche' })
	},
	{
		key: 'fantom',
		color: randomColor({ seed: 'fantom' })
	},
	{
		key: 'optimism',
		color: randomColor({ seed: 'optimism' })
	}
];

const priceDetails: ChartDetailProps[] = [
	{
		key: 'frax',
		color: randomColor({ seed: 'frax' })
	},
	{
		key: 'stable',
		color: randomColor({ seed: 'stable' })
	}
];

export function CurveEcosystemMainCharts() {
	const { frax } = useCurveEcosystemState();
	return (
		<Box sx={container}>
			<Box sx={wrapChart}>
				<Box
					sx={{
						width: '40%'
					}}
				>
					<CustomAreaChart
						data={frax ? frax.supply : undefined}
						title='FRAX Supply'
						detail={supplyDetails}
						id='frax-supply'
					/>
				</Box>
				<Box
					sx={{
						width: 'calc(60% - 28px)'
					}}
				>
					<CustomLineChart
						// data={[]}
						data={frax ? frax.price : undefined}
						title='FRAX Price'
						details={priceDetails}
						id='frax-price'
					/>
				</Box>
			</Box>
			<Box sx={singleChart}>
				<StackedBarChart
					data={[]}
					title='FraxSwap Volume'
					details={details}
					id='fraxswap-volume'
				/>
			</Box>
		</Box>
	);
}
