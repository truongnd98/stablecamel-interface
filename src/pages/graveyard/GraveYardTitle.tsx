import { Box, SxProps, Typography } from '@mui/material';
import GraveYardToolTip from './GraveYardToolTip';

const title: SxProps = {
	display: 'flex',
	alignItems: 'center',
	gap: '8px'
};

export function GraveYardTitle() {
	return (
		<Box sx={title}>
			<Typography
				variant='h5'
				color='primary'>
				Stablecoin Graveyard
			</Typography>
			<GraveYardToolTip />
		</Box>
	);
}
