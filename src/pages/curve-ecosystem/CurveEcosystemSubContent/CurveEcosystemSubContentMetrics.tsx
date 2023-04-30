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

export function CurveEcosystemSubContentMetrics() {
  return (
    <Box sx={main}>
      <Metric
        title='FRAXBP TVL'
        value={formatNumber(10e8)}
      />
      <Metric
        title='FRAXBP'
        value={formatNumber(10e8)}
      />
      <Metric
        title='3pool TVL'
        value={formatNumber(10e8)}
      />
      <Metric
        title='3pool'
        value={formatNumber(10e8)}
      />
    </Box>
  );
}
