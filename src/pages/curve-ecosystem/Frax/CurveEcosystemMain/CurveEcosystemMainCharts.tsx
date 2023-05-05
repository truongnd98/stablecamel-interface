import { SxProps } from '@mui/material';
import { Box } from '@mui/system';
import CustomAreaChart from '../../../../components/AreaChart';
import { ChartDetailProps } from '../../../../components/PositiveAndNegativeBarChart/types';
import randomColor from 'randomcolor';

import { useCurveEcosystemState } from '../../../../stores/curve-ecosystem/hooks';
import { CustomLineChart } from '../../../../components/LineChart/LineChart';
import { ComposeChart } from '../../../../components/ComposeChart/ComposeChart';
import { ComposeChartDetails } from '../../../../components/ComposeChart/types';

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

const volumeDetails: ComposeChartDetails = {
	bar: {
		key: 'usd_volume',
		color: '#001f54'
	},
	area: {
		key: 'cum',
		color: '#e9e9e9'
	}
};

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
		color: '#001f54'
	},
	{
		key: 'stable',
		color: '#d3d3d3'
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
						legend
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
						legend
					/>
				</Box>
			</Box>
			<Box sx={singleChart}>
				<ComposeChart
					data={frax ? frax.swap_volume : undefined}
					title='FraxSwap Volume'
					details={volumeDetails}
					id='fraxswap-volume'
					yAxisKey={{
						left: 'usd_volume',
						right: 'cum'
					}}
				/>
			</Box>
		</Box>
	);
}
