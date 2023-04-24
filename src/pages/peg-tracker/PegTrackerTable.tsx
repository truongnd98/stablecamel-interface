import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar, AvatarGroup, Box, SxProps, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import { useNavigate } from 'react-router-dom';
import Tokens from '../../jsons/tokens.json';
import Networks from '../../jsons/networks.json';
import { v4 } from 'uuid';
import { Chain, Network, Token } from '../../App';
import { usePegTrackerState } from '../../stores/pegtracker/hooks';
import { PegTrackerRes, PegTrackerTableProps } from './types';
import { useAnalyticState } from '../../stores/analytic/hooks';

const header: SxProps = {
	fontSize: 18,
	fontWeight: 600,
	height: 80,
	'@media (max-width: 1280px)': {
		fontSize: 16
	}
};

const cell: SxProps = {
	display: 'flex',
	alignItems: 'center',
	paddingLeft: '12px',
	gap: '8px',
	img: {
		width: 20,
		height: 20
	}
};

const row: SxProps = {
	'&:last-child td, &:last-child th': {
		border: 0
	},
	width: '100%',
	height: 50,
	':hover': {
		backgroundColor: '#FAFAFA !important'
	}
};

const body: SxProps = {
	'&:last-child ': {
		height: 62,
		paddingBottom: '12px'
	}
};

const skeleton: SxProps = {
	width: '100%',
	height: 50
};

const avatar: SxProps = {
	width: 20,
	height: 20,
	'$.MuiAvatar-root': {
		border: 'none'
	}
};

const handleColor = (value: number) => {
	if (value > 0)
		return {
			main: '#2e8c57',
			background: '#dcfce7'
		};
	else if (value < 0) return { main: '#be3832', background: '#fde2e1' };
	else return { main: '#676b74', background: '#f3f4f6' };
};

const handleIcon = (slug: string): Network | undefined => {
	return Networks.find((item: Network) => item.slug === slug);
};

const handleAvatar = (data: any) => {
	for (const network in data) {
		const result = Networks.find((item: Network) =>
			network.toLowerCase().includes(item.slug)
		);
	}
};

export function PegTrackerTable() {
	const { list } = usePegTrackerState();
	const { dataAggregateSummary } = useAnalyticState();

	const usdc = list.find((item: PegTrackerRes) => item.symbol === 'usdc');
	const usdt = list.find((item: PegTrackerRes) => item.symbol === 'usdt');
	const busd = list.find((item: PegTrackerRes) => item.symbol === 'busd');
	const frax = list.find((item: PegTrackerRes) => item.symbol === 'frax');
	const dai = list.find((item: PegTrackerRes) => item.symbol === 'dai');

	const tempList: PegTrackerRes[] = list.filter(
		(item: PegTrackerRes) =>
			item.symbol !== 'usdc' &&
			item.symbol !== 'usdt' &&
			item.symbol !== 'busd' &&
			item.symbol !== 'frax' &&
			item.symbol !== 'dai'
	);
	const listData = [usdc, usdt, dai, frax, busd, ...tempList];
	// const formatList = list?.sort(
	// 	(a: PegTrackerRes, b: PegTrackerRes) => b.supply - a.supply
	// );
	return (
		<TableContainer
			sx={{
				backgroundColor: '#ffffff',
				borderRadius: '8px'
			}}
		>
			<Table
				sx={{
					minWidth: 650
				}}
				size='small'
				aria-label='a dense table'
			>
				<TableHead>
					<TableRow>
						<TableCell sx={header}>Stablecoins</TableCell>
						<TableCell sx={header}>Networks</TableCell>
						<TableCell sx={header}>Price</TableCell>
						<TableCell sx={header}>Current % Off Peg</TableCell>
						<TableCell sx={header}>30D % Off Peg</TableCell>
						<TableCell sx={header}>TVL</TableCell>
						<TableCell sx={header}>Ethereum TVL</TableCell>
						<TableCell sx={header}>BSC TVL</TableCell>
						<TableCell sx={header}>Avalanche TVL</TableCell>
						<TableCell sx={header}>Arbitrum TVL</TableCell>
						<TableCell sx={header}>Supply</TableCell>
					</TableRow>
				</TableHead>
				{listData && listData.length > 0 ? (
					<TableBody sx={body}>
						{listData.map((data: PegTrackerRes | undefined, index: number) => (
							<TableRow
								key={v4()}
								sx={row}
								hover
							>
								<TableCell
								// component='th'
								// scope='row'
								>
									{/* <Box
                    sx={{
                      ...cell,
                      cursor: 'pointer',
                      ':hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <img
                      src={handleIcon(token.chain)?.logo}
                      alt={handleIcon(token.chain)?.name}
                    />
                    {handleIcon(token.chain)?.name}
                  </Box> */}
									<Typography variant='body1'>{data?.symbol}</Typography>
								</TableCell>
								<TableCell>
									{/* <AvatarGroup sx={{ justifyContent: 'flex-end' }}>
										{Networks.map((network: Network) => (
											<Avatar
												src={network.logo}
												alt={network.name}
												// style={{
												// 	width: 20,
												// 	height: 20
												// }}
												sx={avatar}
												key={v4()}
												title={network.name}
											/>
										))}
									</AvatarGroup> */}
								</TableCell>
								<TableCell>
									{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD',
										notation: 'compact',
										maximumFractionDigits: 2
									}).format(data?.usd ?? 0)}
								</TableCell>

								<TableCell>
									<Typography
										variant='body1'
										color={handleColor(data?.current_off_per ?? 0).main}
										sx={{
											width: 'fit-content',
											padding: '0 8px',
											backgroundColor: handleColor(data?.current_off_per ?? 0)
												.background
										}}
									>
										{data?.current_off_per
											? data?.current_off_per > 0
												? '+'
												: ''
											: ''}
										{data?.current_off_per.toFixed(2)}%
									</Typography>
								</TableCell>
								<TableCell>
									<Typography
										variant='body1'
										color={handleColor(data?.thirty_off_per ?? 0).main}
										sx={{
											width: 'fit-content',
											padding: '0 8px',
											backgroundColor: handleColor(data?.thirty_off_per ?? 0)
												.background
										}}
									>
										{data?.thirty_off_per
											? data?.thirty_off_per > 0
												? '+'
												: ''
											: ''}
										{data?.thirty_off_per.toFixed(2)}%
									</Typography>
								</TableCell>
								<TableCell>
									{/* {new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD',
										notation: 'compact',
										maximumFractionDigits: 2
									}).format(data.supply)} */}
								</TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell>
									{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD',
										notation: 'compact',
										maximumFractionDigits: 2
									}).format(data?.supply ?? 0)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				) : (
					<Box
						sx={{
							width: '100%',
							padding: '0 20px'
						}}
					>
						<Skeleton sx={skeleton} />
						<Skeleton sx={skeleton} />
						<Skeleton sx={skeleton} />
						<Skeleton sx={skeleton} />
					</Box>
				)}
				<Box sx={{ height: 12 }} />
			</Table>
		</TableContainer>
	);
}
