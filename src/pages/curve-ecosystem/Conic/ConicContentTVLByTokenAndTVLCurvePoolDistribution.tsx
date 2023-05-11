import { Box } from '@mui/material';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import { CustomPieChart } from '../../../components/PieChart/PieChart';
import { v4 } from 'uuid';
import randomColor from 'randomcolor';
import CustomAreaChart from '../../../components/AreaChart';
import { ChartDetailProps } from '../../../components/AreaChart/types';

export function ConicContentTVLByTokenAndTVLCurvePoolDistribution() {
	const { conic } = useCurveEcosystemState();
	
	const tvlByTokenDetail: ChartDetailProps[] = [
		{
			key: 'FRAX',
			color: randomColor({ seed: 'FRAX' })
		},
		{
			key: 'DAI',
			color: randomColor({ seed: 'DAI' })
		},
		{
			key: 'USDC',
			color: randomColor({ seed: 'USDC' })
		},
		{
			key: 'USDT',
			color: randomColor({ seed: 'USDT' })
		}
	]

	const dataTVLCurvePoolDistribution = conic.tvl_curve_pool_distribution.map(item=>({
		key: v4(),
		color: randomColor({ seed: item.label }),
		name: item.label,
		value: item.amount
	}));

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
						title='Conic TVL by Token'
						id='cnc-tvl-by-token'
						data={conic.tvl_by_token}
						detail={tvlByTokenDetail}
						legend
					/>
				</Box>
				<Box sx={{ width: 'calc(50% - 14px)', height: '100%' }}>
					<CustomPieChart
						title='Conic TVL Curve Pool Distribution'
						data={dataTVLCurvePoolDistribution}
						id="tvl-curve-pool-distribution"
						legend
					/>
				</Box>
			</Box>			
		</>
	);
}
