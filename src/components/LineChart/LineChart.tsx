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
	Line
} from 'recharts';
import { LineChartTooltip } from './LineChartTooltip';
import { Box, Typography, Skeleton } from '@mui/material';
import { v4 } from 'uuid';
import LazyLoad from 'react-lazyload';
import CircularProgress from '@mui/material/CircularProgress';
import LinkIcon from '@mui/icons-material/Link';
import { CopyToClipboardButton } from '../CopyToClipboardButton/CopyToClipboardButton';
import { LineChartProps, ChartDetailProps } from './types';

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

export function CustomLineChart({
	data,
	title,
	details,
	legend = false,
	id
}: LineChartProps) {
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
											<b>Copy chart</b>
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
								<LineChart
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
									{/* <CartesianGrid strokeDasharray='3 3' /> */}
									<XAxis
										dataKey='time'
										tickFormatter={formatTickX}
										minTickGap={50}
									/>
									<YAxis
										tickFormatter={formatTickY}
										domain={['dataMin', 'dataMax']}
										axisLine={false}
									/>
									{legend ? (
										<Legend
											iconType='circle'
											wrapperStyle={{
												paddingLeft: '50px'
											}}
										/>
									) : (
										<></>
									)}
									<Tooltip
										wrapperStyle={{
											zIndex: 2
										}}
										content={<LineChartTooltip />}
									/>
									{!Array.isArray(details) ? (
										<Line
											type='monotone'
											dataKey={details.key}
											stroke={details.color}
											activeDot={false}
											dot={false}
											fillOpacity={1}
										/>
									) : (
										details.map((item: ChartDetailProps) => (
											<Line
												type='monotone'
												dataKey={item.key}
												stroke={item.color}
												dot={false}
												activeDot={false}
												key={v4()}
												fillOpacity={1}
												isAnimationActive={false}
											/>
										))
									)}
								</LineChart>
							</ResponsiveContainer>
						</LazyLoad>
					</Box>
				</LazyLoad>
			)}
		</>
	);
}
