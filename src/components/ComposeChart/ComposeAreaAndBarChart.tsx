import {
	Box,
	CircularProgress,
	Skeleton,
	SxProps,
	Typography
} from '@mui/material';
import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import {
	ComposedChart,
	Line,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Scatter,
	ResponsiveContainer
} from 'recharts';
import { CompostAreaAndBarChartProps } from './types';
import { CopyToClipboardButton } from '../CopyToClipboardButton/CopyToClipboardButton';
import LinkIcon from '@mui/icons-material/Link';

const main: SxProps = {
	width: '100%',
	height: '100%',
	backgroundColor: '#ffffff',
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	padding: '24px 0',
	alignItems: 'center',
	borderRadius: '8px',
	position: 'relative'
};

const background: SxProps = {
	position: 'absolute',
	top: 150,
	img: {
		width: 150,
		opacity: 0.35
	},
	zIndex: 1
};

const formatTickY = (value: number) => {
	if (value > 1e9) return (value / 1e9).toFixed(0) + 'B';
	else if (value > 1e6 || value < -1e6) return (value / 1e6).toFixed(0) + 'M';
	else if (value > 1e3 || value < -1e3) return (value / 1e3).toFixed(0) + 'K';
	else return value.toFixed(0);
};

const formatTickX = (value: string) => {
	return value.slice(0, 3) + ' ' + value.slice(-4, value.length);
};

const rowTitle: SxProps = {
	width: '100%',
	padding: '0 20px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
};

export function ComposeAreaAndBarChart({
	id,
	title,
	data
}: CompostAreaAndBarChartProps) {
	return (
		<>
			<section id={id}></section>
			{!data || !data.length ? (
				<Skeleton
					variant='rounded'
					width='100%'
					height='100%'
				/>
			) : (
				<LazyLoad
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
					once
					placeholder={<CircularProgress color='secondary' />}
				>
					<Box sx={main}>
						<Box sx={background}>
							<img
								src='/logos/logo-bw.png'
								alt='logo'
							/>
						</Box>
						<Box sx={rowTitle}>
							<Typography
								variant='h5'
								color='primary'
							>
								{title}
							</Typography>
							<CopyToClipboardButton
								type={<LinkIcon color='primary' />}
								content={`${window.location.toString().split('#')[0]}#${id}`}
							/>
						</Box>
						<LazyLoad
							height='100%'
							offset={100}
							style={{
								width: '100%',
								height: '100%'
							}}
							once
						>
							<ResponsiveContainer
								width='100%'
								height='100%'
							>
								<ComposedChart
									width={500}
									height={400}
									data={data}
									margin={{
										top: 20,
										right: 20,
										bottom: 20,
										left: 20
									}}
								>
									<CartesianGrid stroke='#f5f5f5' />
									<XAxis
										dataKey='time'
										tickFormatter={formatTickX}
										// scale='band'
									/>
									<YAxis tickFormatter={formatTickY} />
									{/* <YAxis tickFormatter={formatTickY} /> */}
									<Tooltip />
									<Legend />
									<Area
										type='monotone'
										dataKey='amt'
										fill='#8884d8'
										stroke='#8884d8'
									/>
									<Bar
										dataKey='pv'
										barSize={20}
										fill='#413ea0'
									/>
									<Line
										type='monotone'
										dataKey='uv'
										stroke='#ff7300'
									/>
									<Scatter
										dataKey='cnt'
										fill='red'
									/>
								</ComposedChart>
							</ResponsiveContainer>
						</LazyLoad>
					</Box>
				</LazyLoad>
			)}
		</>
	);
}
