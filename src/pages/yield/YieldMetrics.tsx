import { Box, SxProps, Paper, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useYieldState } from '../../stores/yield/hooks';

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

export function YieldMetrics() {
	const { list } = useYieldState();
	const totalTVL: number = list.reduce(
		(partialSum, a) => partialSum + a.tvl_number,
		0
	);
	const totalAPY: number = list.reduce(
		(partialSum, a) => partialSum + a.total_apy,
		0
	);

	const baseAPY: number = list.reduce(
		(partialSum, a) => partialSum + (a.base_apy ? a.base_apy : 0),
		0
	);

	const TVL: string = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		notation: 'compact',
		maximumFractionDigits: 2
	}).format(totalTVL);

	const medianTVL: string = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		notation: 'compact',
		maximumFractionDigits: 2
	}).format(totalTVL / list.length);

	const medianAPY: string = (totalAPY / list.length).toFixed(2);

	const medianBaseAPY: string = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		notation: 'compact',
		maximumFractionDigits: 2
	}).format(baseAPY / list.length);
	return (
		<Box sx={main}>
			<Box sx={wrap}>
				{list && list.length > 0 ? (
					<Paper
						sx={paper}
						elevation={0}
					>
						<Typography
							variant='h5'
							color='primary'
						>
							<b>Total Value Locked</b>
						</Typography>
						<Typography
							variant='h3'
							color='secondary'
						>
							{TVL}
						</Typography>
					</Paper>
				) : (
					<Skeleton
						variant='rounded'
						sx={skeleton}
					/>
				)}

				{list && list.length > 0 ? (
					<Paper
						sx={paper}
						elevation={0}
					>
						<Typography
							variant='h5'
							color='primary'
						>
							<b>Median TVL</b>
						</Typography>
						<Typography
							variant='h3'
							color='secondary'
						>
							{medianTVL}
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
				{list && list.length > 0 ? (
					<Paper
						sx={paper}
						elevation={0}
					>
						<Typography
							variant='h5'
							color='primary'
						>
							<b>Median Total APY</b>
						</Typography>
						<Typography
							variant='h3'
							color='secondary'
						>
							{medianAPY}%
						</Typography>
					</Paper>
				) : (
					<Skeleton
						variant='rounded'
						sx={skeleton}
					/>
				)}
				{list && list.length > 0 ? (
					<Paper
						sx={paper}
						elevation={0}
					>
						<Typography
							variant='h5'
							color='primary'
						>
							<b>Median Base APY</b>
						</Typography>
						<Typography
							variant='h3'
							color='secondary'
						>
							{medianBaseAPY}%
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
