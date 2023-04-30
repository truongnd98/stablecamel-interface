import { Box, SxProps } from '@mui/material';
import CustomAreaChart from '../../../components/AreaChart';
import StackedBarChart from '../../../components/StackedBarChart';
import { ChartDetailProps } from '../../../components/AreaChart/types';
import randomColor from 'randomcolor';

const container: SxProps = {
  width: '100%',
  display: 'flex',
  gap: '28px',
  flexWrap: 'wrap',
};

const each: SxProps = {
  width: 'calc(50% -  14px)',
  height: 380,
  display: 'flex',
  justifyContent: 'space-between',
};

const details: ChartDetailProps[] = [
  {
    key: 'arbitrum',
    color: randomColor({ seed: 'arbitrum' }),
  },
];

export function CurveEcosystemSubContentCharts() {
  return (
    <Box sx={container}>
      <Box sx={each}>
        <CustomAreaChart
          title='FRAXBP TVL'
          detail={details}
          id='fraxbp-tvl'
        />
      </Box>
      <Box sx={each}>
        <CustomAreaChart
          title='3pool TVL'
          detail={details}
          id='3pool-tvl'
        />
      </Box>
      <Box sx={each}>
        <StackedBarChart
          data={[]}
          title='FRAXBP Volume'
          details={details}
          id='fraxbp-tvl'
        />
      </Box>
      <Box sx={each}>
        <StackedBarChart
          data={[]}
          title='3pool Volume'
          details={details}
          id='3pool-volume'
        />
      </Box>
    </Box>
  );
}
