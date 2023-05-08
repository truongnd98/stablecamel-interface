import { SxProps } from '@mui/material';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
	LineChart,
	Line,
	PieChart,
	Pie,
	Cell
} from 'recharts';

import { Box, Typography, Skeleton } from '@mui/material';
import { v4 } from 'uuid';
import LazyLoad from 'react-lazyload';
import CircularProgress from '@mui/material/CircularProgress';
import LinkIcon from '@mui/icons-material/Link';
import { CopyToClipboardButton } from '../CopyToClipboardButton/CopyToClipboardButton';
import { PieChartTooltip } from './PieChartTooltip';
import { ChartDetailProps, PieChartProps } from './types';
import { PieChartLegend } from './PieChartLegend';

const formatTickY = (value: number) => {
	return new Intl.NumberFormat('en-US', {
		notation: 'compact'
	}).format(value);
};

const formatTickX = (value: string) => {
	return value.slice(0, 3) + ' ' + value.slice(-4, value.length);
};

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

const rowTitle: SxProps = {
	width: '100%',
	padding: '0 20px',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
};

export function CustomPieChart({
	data,
	title,
	legend = false,
	id
}: PieChartProps) {
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
								type={
									<Box
										sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}
									>
										<LinkIcon color='primary' />
										<Typography
											variant='body1'
											color='primary'
										>
											Copy chart
										</Typography>
									</Box>
								}
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
								<PieChart
									width={500}
									height={400}
									data={data}
									margin={{
										top: 12,
										right: 50,
										left: 0,
										bottom: 0
									}}
								>
									{/* <CartesianGrid strokeDasharray='3 3' />
									<XAxis
										dataKey='time'
										tickFormatter={formatTickX}
										minTickGap={50}
									/>
									<YAxis
										tickFormatter={formatTickY}
										domain={['dataMin', 'dataMax']}
										axisLine={false}
									/> */}
									{legend ? (
										<Legend
											align='right'
											verticalAlign='middle'
											layout='vertical'
											iconType='circle'
										/>
									) : (
										<></>
									)}
									<Tooltip
										wrapperStyle={{
											zIndex: 2
										}}
										content={<PieChartTooltip />}
									/>

									<Pie
										dataKey='value'
										data={data}
										cx='50%'
										cy='50%'
										innerRadius={60}
										outerRadius={120}
										isAnimationActive={false}
									>
										{data.map((item: any) => (
											<Cell
												key={item.key}
												fill={item.color}
												// fillOpacity={1}
											/>
										))}
									</Pie>
								</PieChart>
							</ResponsiveContainer>
						</LazyLoad>
					</Box>
				</LazyLoad>
			)}
		</>
	);
}
