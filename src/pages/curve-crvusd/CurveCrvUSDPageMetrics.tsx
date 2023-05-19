import { Box, SxProps } from '@mui/material';
import { Metric } from '../../components/Metric/Metric';
import { useCurveCrvUSDState } from '../../stores/curve-crvusd/hook';


const main: SxProps = {
	width: '100%',
	height: 120,
	display: 'flex',
	justifyContent: 'space-between',
	gap: '28px'
};

export function CurveCrvUSDPageMetrics() {

	const { collateral_metric, supply_metric, total_borrowed_metric} = useCurveCrvUSDState();

	return (
			<Box sx={main}>
					<Metric 
						title='crvUSD Supply'
						value={new Intl.NumberFormat('en-US', {
							notation: 'standard',
							maximumFractionDigits: 0,
						}).format(supply_metric?.supply ?? 0)}
					/>
					<Metric 
						title='Total crvUSD borrowed'
						value={new Intl.NumberFormat('en-US', {
							notation: 'standard',
							maximumFractionDigits: 0,
						}).format(total_borrowed_metric?.amount ?? 0)}
					/>
					<Metric 
						title='crvUSD Collateral'
						value={new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD',
							notation: 'standard',
							maximumFractionDigits: 0,
						}).format(collateral_metric?.usd ?? 0)}
					/>
			</Box>
	);
}
