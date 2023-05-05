import { SxProps, Typography, Box } from '@mui/material';
import { CurveEcosystemSubContentMetrics } from './CurveEcosystemSubContentMetrics';
import { CurveEcosystemSubContentCharts } from './CurveEcosystemSubContentCharts';

const container: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
};

export function CurveEcosystemSubContent() {
  return (
    <Box sx={container}>
      <Typography
        variant='h5'
        color='primary'
      >
        FraxBP Versus 3pool
      </Typography>
      <CurveEcosystemSubContentMetrics />
      <CurveEcosystemSubContentCharts />
    </Box>
  );
}
