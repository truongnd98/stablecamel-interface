import { Box } from '@mui/material';
import StackedBarChart from '../../../components/StackedBarChart';
import { ChartDetailProps } from '../../../components/StackedBarChart/types';
import randomColor from 'randomcolor';

const details: ChartDetailProps[] = [
  {
    key: 'arbitrum',
    color: randomColor({ seed: 'arbitrum' }),
  },
];

export function CurveEcosystemSecondSubChart() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 380,
      }}
    >
      <StackedBarChart
        data={[]}
        title='frxETH Supply'
        details={details}
        id='frxeth-supply'
      />
    </Box>
  );
}
