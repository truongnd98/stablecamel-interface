import { Box, SxProps, Typography } from '@mui/material';
import { PegTrackerToolTip } from './PegTrackerToolTip';

const title: SxProps = {
	display: 'flex',
	alignItems: 'center',
	gap: '8px'
};

export function PegTrackerTitle() {
	return (
		<Box sx={title}>
			<Typography
				variant='h5'
				color='primary'
			>
				Stablecoin Activity Monitor
			</Typography>
			<PegTrackerToolTip />
		</Box>
	);
}
