import { SxProps } from '@mui/material';
import { Box } from '@mui/system';
import CustomAreaChart from '../../../components/AreaChart';
import PositiveAndNegativeBarChart from '../../../components/PositiveAndNegativeBarChart';
import { ChartDetailProps } from '../../../components/PositiveAndNegativeBarChart/types';
import randomColor from 'randomcolor';
import StackedBarChart from '../../../components/StackedBarChart';

const container: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
};

const wrapChart: SxProps = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  height: 380,
};

const singleChart: SxProps = {
  width: '100%',
  height: 380,
};

const details: ChartDetailProps[] = [
  {
    key: 'arbitrum',
    color: randomColor({ seed: 'arbitrum' }),
  },
];

export function CurveEcosystemMainCharts() {
  return (
    <Box sx={container}>
      <Box sx={wrapChart}>
        <Box
          sx={{
            width: '40%',
          }}
        >
          <CustomAreaChart
            title='FRAX Supply'
            detail={details}
            id='frax-supply'
          />
        </Box>
        <Box
          sx={{
            width: 'calc(60% - 28px)',
          }}
        >
          <PositiveAndNegativeBarChart
            data={[]}
            title='FRAX Price'
            details={details}
            id='frax-price'
          />
        </Box>
      </Box>
      <Box sx={singleChart}>
        <StackedBarChart
          data={[]}
          title='FraxSwap Volume'
          details={details}
          id='fraxswap-volume'
        />
      </Box>
    </Box>
  );
}
