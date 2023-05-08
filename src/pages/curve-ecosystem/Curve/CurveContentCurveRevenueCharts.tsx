import { Box, SxProps, Typography } from '@mui/material';
import randomColor from 'randomcolor';
import { v4 } from 'uuid';
import CustomAreaChart from '../../../components/AreaChart';
import { ChartDetailProps } from '../../../components/AreaChart/types';
import { CustomPieChart } from '../../../components/PieChart/PieChart';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import {
	FeeRevenuePoolType,
	FeeRevenuePool,
	FeeRevenuePoolFormat,
	FeeRevenue
} from '../types';

const wrap: SxProps = {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	height: 380
};

const cumulativeDetail: ChartDetailProps[] = [
	{
		key: 'abc',
		color: '#000000'
	}
];

export function CurveContentCurveRevenueCharts() {
	const { curve } = useCurveEcosystemState();

	const dataPie = curve.fee_revenue_by_pool_type.map(
		(item: FeeRevenuePoolType) => ({
			key: v4(),
			color: randomColor({ seed: item.token_type }),
			name: item.token_type,
			value: item._col1
		})
	);

	return (
		<>
			<Box sx={wrap}>
				<Box
					sx={{
						width: 'calc((100% - 56px) / 3 * 2 + 28px)'
					}}
				>
					<CustomAreaChart
						title='Curve Fee Revenue by Pool: Cumulative'
						id='curve-fee-revenue-pool-cumulative'
						detail={cumulativeDetail}
					/>
				</Box>
				<Box
					sx={{
						width: 'calc((100% - 56px) / 3)'
					}}
				>
					<CustomPieChart
						data={dataPie}
						title='Curve Fee Revenue by Pool Type'
						id='curve-fee-revenue-pool-type'
						legend
					/>
				</Box>
			</Box>
		</>
	);
}
