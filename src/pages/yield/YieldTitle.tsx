import { Box, SxProps, Typography } from '@mui/material';
import YieldTooltip from './YieldTooltip';

const title: SxProps = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

export function YieldTitle() {
  return (
    <Box sx={title}>
      <Typography
        variant='h5'
        color='primary'
      >
        Stablecoin Yields
      </Typography>
      <YieldTooltip />
    </Box>
  );
}
