import { Box, SxProps } from '@mui/material';
import { Metric } from '../../../components/Metric/Metric';

const main: SxProps = {
  width: '100%',
  height: 120,
  display: 'flex',
  justifyContent: 'space-between',
  gap: '28px',
};

const formatNumber = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(number);
};
export function CurveEcosystemMainMetrics() {
  return (
    <Box sx={main}>
      <Metric
        title='FRAX Price'
        value={formatNumber(10e8)}
      />
      <Metric
        title='FRAX Supply (Total)'
        value={formatNumber(10e8)}
      />
      <Metric
        title='FraxSwap Volume'
        value={formatNumber(10e8)}
      />
    </Box>
  );
}
