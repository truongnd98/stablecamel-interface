import { Box, SxProps, Typography } from '@mui/material';
import { CurveEcosystemSecondSubMetrics } from './CurveEcosystemSecondSubMetrics';
import { CurveEcosystemSecondSubChart } from './CurveEcosystemSecondSubChart';

const container: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
};

export function CurveEcosystemSecondSub() {
  return (
    <Box sx={container}>
      <Typography
        variant='h5'
        color='primary'
      >
        frxETH Supply
      </Typography>
      <CurveEcosystemSecondSubMetrics />
      <CurveEcosystemSecondSubChart />
    </Box>
  );
}
