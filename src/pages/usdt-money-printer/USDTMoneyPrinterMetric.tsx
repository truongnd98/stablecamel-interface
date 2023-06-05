import { Box, SxProps } from '@mui/material';
import { Metric } from '../../components/Metric/Metric';
import { useUSDTMoneyPrinterState } from '../../stores/usdt-moneyprinter/hooks';


const main: SxProps = {
	width: '100%',
	height: 120,
	display: 'flex',
	justifyContent: 'space-between',
	gap: '28px'
};

export function USDTMoneyPrinterMetric() {

	const { 
		exchangeBalancesOfUSDT,
		totalUSDTDeployedToDEXs,
		totalUSDTDeployedToLenders,
		usdtDeployedToBridgesTotal
	} = useUSDTMoneyPrinterState();

	const exchangeBalance = exchangeBalancesOfUSDT?.[exchangeBalancesOfUSDT.length - 1]?.balance || 0
	const usdtDeployedToDEX = totalUSDTDeployedToDEXs?.[totalUSDTDeployedToDEXs.length - 1]?.value || 0
	const usdtDeployedToLender = totalUSDTDeployedToLenders?.[totalUSDTDeployedToLenders.length - 1]?.value || 0
	const usdtDeployedToBridge = usdtDeployedToBridgesTotal?.[usdtDeployedToBridgesTotal.length - 1]?.value || 0

	return (
			<Box sx={main}>
					<Metric 
						title='USDT Exchange Balances'
						value={new Intl.NumberFormat('en-US', {
							notation: 'compact',
							maximumFractionDigits: 2,
						}).format(exchangeBalance)}
					/>
					<Metric 
						title='USDT Deployed to DEXs'
						value={new Intl.NumberFormat('en-US', {
							notation: 'compact',
							maximumFractionDigits: 2,
						}).format(usdtDeployedToDEX)}
					/>
					<Metric 
						title='USDT Deployed to Lenders'
						value={new Intl.NumberFormat('en-US', {
							notation: 'compact',
							maximumFractionDigits: 2,
						}).format(usdtDeployedToLender)}
					/>
					<Metric 
						title='USDT Deployed to Bridges'
						value={new Intl.NumberFormat('en-US', {
							notation: 'compact',
							maximumFractionDigits: 2,
						}).format(usdtDeployedToBridge)}
					/>
			</Box>
	);
}
