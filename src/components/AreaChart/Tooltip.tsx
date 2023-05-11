import { Box, Typography } from '@mui/material';

import { v4 } from 'uuid';

const sumData = (list: any[]): number => {
	return list.reduce((partialSum, a) => partialSum + (a.value ?? 0), 0);
};

const convertNumber = (value: number) => {
	return new Intl.NumberFormat('en-US', {
		// style: 'currency',
		// currency: 'USD',
		maximumFractionDigits: 0
	}).format(value);
};

const CustomTooltip = ({ active, payload, label }: any) => {
	// console.log('payload', payload);
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
					<b>{label}</b>
				</Typography>
				{payload
					.sort((a: any, b: any) => b.value - a.value)
					.slice(0, 10)
					.map((item: any) => (
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between'
							}}
							key={v4()}
						>
							{item.value > 0 ? (
								<>
									<Typography
										variant='body1'
										sx={{
											color: item.color
										}}
									>{`${item.name}:`}</Typography>
									<Typography
										variant='body1'
										sx={{
											color: item.color
										}}
									>
										{convertNumber(item.value)}
									</Typography>
								</>
							) : (
								<></>
							)}
						</Box>
					))}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						marginTop: '12px'
					}}
					key={v4()}
				>
					<Typography
						variant='body1'
						sx={{
							color: '#000000',
							fontWeight: 600
						}}
					>
						Total:{' '}
					</Typography>
					<Typography
						variant='body1'
						sx={{
							color: '#000000',
							fontWeight: 600
						}}
					>
						{convertNumber(sumData(payload))}
					</Typography>
				</Box>
			</Box>
		);
	}

	return null;
};

export default CustomTooltip;
