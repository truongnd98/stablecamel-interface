import { Box, Typography } from '@mui/material';
import { v4 } from 'uuid';
import { format } from 'date-fns';

// const sumData = (list: any[]) => {
// 	return list.reduce((partialSum, a) => partialSum + a.value, 0);
// };

const formatNumber = (value: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0
	}).format(value);
};

export const MoneyPrinterMainChartTooltip = ({
	active,
	payload,
	label
}: any) => {
	if (active && payload && payload.length) {
		return (
			<Box
				sx={{
					width: 200,
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#ffffff',
					padding: ' 12px',
					borderRadius: '8px',
					border: '2px solid #8c00ef',
					'&.recharts-tooltip-wrapper': {
						zIndex: 100
					}
				}}
			>
				<Typography
					variant='body1'
					color='primary'
				>
					<b>{format(new Date(label), 'PP')}</b>
				</Typography>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						color: payload[0].stroke
					}}
					key={v4()}
				>
					<Typography variant='body1'>{`USDC:`}</Typography>
					<Typography variant='body1'>
						{formatNumber(payload[0].value)}
					</Typography>
				</Box>
			</Box>
		);
	}

	return null;
};
