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

export function PegTrackerTable() {
	const navigate = useNavigate();
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
						<TableCell sx={{ ...header, paddingLeft: '32px' }}>Chain</TableCell>
						<TableCell sx={header}>Stablecoins</TableCell>
						<TableCell sx={header}>Supply</TableCell>
						<TableCell sx={header}>TVL</TableCell>
						<TableCell sx={header}>TVL Change (7D)</TableCell>
						<TableCell sx={header}>On-chain Dominant</TableCell>
					</TableRow>
				</TableHead>
				{dataAggregateSummary && dataAggregateSummary.length > 0 ? (
					<TableBody sx={body}>
						{dataAggregateSummary.map(
							(token: AggregateDataSummary, index: number) => (
								<TableRow
									key={v4()}
									sx={row}
									hover
								>
									<TableCell
									// component='th'
									// scope='row'
									>
										<Box
											sx={{
												...cell,
												cursor: 'pointer',
												':hover': {
													textDecoration: 'underline'
												}
											}}
											onClick={() => {
												navigate(token.chain);
											}}
										>
											<img
												src={handleIcon(token.chain)?.logo}
												alt={handleIcon(token.chain)?.name}
											/>
											{handleIcon(token.chain)?.name}
										</Box>
									</TableCell>
									<TableCell>
										<AvatarGroup sx={{ justifyContent: 'flex-end' }}>
											{Tokens.map((token: Token) => (
												<Avatar
													src={token.icon}
													alt={token.name}
													// style={{
													// 	width: 20,
													// 	height: 20
													// }}
													sx={avatar}
													key={v4()}
													title={token.name}
												/>
											))}
										</AvatarGroup>
									</TableCell>
									<TableCell>
										{new Intl.NumberFormat('en-US', {
											style: 'currency',
											currency: 'USD',
											notation: 'compact',
											maximumFractionDigits: 2
										}).format(token.totalSupply)}
									</TableCell>
									<TableCell>
										{new Intl.NumberFormat('en-US', {
											style: 'currency',
											currency: 'USD',
											notation: 'compact',
											maximumFractionDigits: 2
										}).format(token.totalTvl)}
									</TableCell>
									<TableCell>
										<Typography
											variant='body1'
											color={handleColor(token.sevenDayChange).main}
											sx={{
												width: 'fit-content',
												padding: '0 8px',
												backgroundColor: handleColor(token.sevenDayChange)
													.background
											}}
										>
											{token.sevenDayChange > 0 ? '+' : ''}
											{token.sevenDayChange.toFixed(2)}%
										</Typography>
									</TableCell>
									<TableCell>
										{token.chain !== Chain.BSC ? 'USDC:' : 'BUSD:'}{' '}
										{token.usdcDominance
											? token.usdcDominance.toFixed(2) + '%'
											: token.busdDominance.toFixed(2) + '%'}
									</TableCell>
								</TableRow>
							)
						)}
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
