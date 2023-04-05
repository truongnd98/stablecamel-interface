import { Box, SxProps, Paper, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useMoneyPrinterState } from '../../stores/moneyprinter/hooks';

const main: SxProps = {
	width: '100%',
	height: 120,
	display: 'flex',
	justifyContent: 'space-between'
};

const paper: SxProps = {
	width: '50%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#ffffff',
	borderRadius: '8px'
};

const wrap: SxProps = {
	width: 'calc(50% - 14px)',
	height: '100%',
	display: 'flex',
	gap: '28px'
};

const skeleton: SxProps = {
	width: '100%',
	height: '100%'
};

const formatNumber = (value: number): string => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		notation: 'compact',
		maximumFractionDigits: 2
	}).format(value);
};

export function MoneyPrinterMetrics() {
	const {
		exchangeBalanceList,
		deployedLenderList,
		deployedLpsList,
		deployedBridgeList
	} = useMoneyPrinterState();
	const dataExchange = formatNumber(
		exchangeBalanceList[0] ? exchangeBalanceList[0].balance : 0
	);
	const dataLPs = formatNumber(
		deployedLpsList[0] ? deployedLpsList[0].value : 0
	);
	const dataLenders = formatNumber(
		deployedLenderList[0] ? deployedLenderList[0].value : 0
	);
	const dataBridges = formatNumber(
		deployedBridgeList[0] ? deployedBridgeList[0].value : 0
	);
	return (
		<Box sx={main}>
			<Box sx={wrap}>
				{exchangeBalanceList && exchangeBalanceList.length > 0 ? (
					<Paper
						sx={paper}
						elevation={0}
					>
						<Typography
							variant='h5'
							color='primary'
						>
							<b>USDC Exchange Balances</b>
						</Typography>
						<Typography
							variant='h3'
							color='secondary'
						>
							{dataExchange}
						</Typography>
					</Paper>
				) : (
					<Skeleton
						variant='rounded'
						sx={skeleton}
					/>
				)}

				{deployedLpsList && deployedLpsList.length > 0 ? (
					<Paper
						sx={paper}
						elevation={0}
					>
						<Typography
							variant='h5'
							color='primary'
						>
							<b>USDC Deployed to LPs</b>
						</Typography>
						<Typography
							variant='h3'
							color='secondary'
						>
							{dataLPs}
						</Typography>
					</Paper>
				) : (
					<Skeleton
						variant='rounded'
						sx={skeleton}
					/>
				)}
			</Box>
			<Box sx={wrap}>
				{deployedLenderList && deployedLenderList.length > 0 ? (
					<Paper
						sx={paper}
						elevation={0}
					>
						<Typography
							variant='h5'
							color='primary'
						>
							<b>USDC Deployed to Lenders</b>
						</Typography>
						<Typography
							variant='h3'
							color='secondary'
						>
							{dataLenders}
						</Typography>
					</Paper>
				) : (
					<Skeleton
						variant='rounded'
						sx={skeleton}
					/>
				)}
				{deployedBridgeList && deployedBridgeList.length > 0 ? (
					<Paper
						sx={paper}
						elevation={0}
					>
						<Typography
							variant='h5'
							color='primary'
						>
							<b>USDC Deployed to Bridges</b>
						</Typography>
						<Typography
							variant='h3'
							color='secondary'
						>
							{dataBridges}
						</Typography>
					</Paper>
				) : (
					<Skeleton
						variant='rounded'
						sx={skeleton}
					/>
				)}
			</Box>
		</Box>
	);
}
