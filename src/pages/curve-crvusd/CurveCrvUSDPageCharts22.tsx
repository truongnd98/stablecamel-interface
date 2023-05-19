import { Box, SxProps } from '@mui/material';
import CustomAreaChart from '../../components/AreaChart';
import { useCurveCrvUSDState } from '../../stores/curve-crvusd/hook';
import randomColor from 'randomcolor';

const main: SxProps = {
	width: '100%',
	height: 380,
	display: 'flex',
	justifyContent: 'space-between',
	gap: '28px',
	padding: "28px 0px 0px 0px",
};

export function CurveCrvUSDPageCharts22() {
	const { usdc_pool_chart, usdt_pool_chart } = useCurveCrvUSDState();
	
	return (
		<Box sx={main}>
			<Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
				<CustomAreaChart
						data={usdc_pool_chart}
						title='crvUSD USDC Pool'
						detail={[
								{
									key: 'usdc',
									color: randomColor({ seed: 'usdc' }),
									name: 'USDC'
								},
								{
									key: 'crvusd',
									color: randomColor({ seed: 'crvusd' }),
									name: 'crvUSD'
								}
							]}
						id='crvusd-usdc-pool-chart'
						legend
					/>
			</Box>
			<Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
			<CustomAreaChart
						data={usdt_pool_chart}
						title='crvUSD USDT Pool'
						detail={[
								{
									key: 'usdt',
									color: randomColor({ seed: 'usdt' }),
									name: 'USDT'
								},
								{
									key: 'crvusd',
									color: randomColor({ seed: 'crvusd' }),
									name: 'crvUSD'
								}
							]}
						id='crvusd-usdt-pool-chart'
						legend
					/>
			</Box>
		</Box>
	);
}
