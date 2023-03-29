import { Box, SxProps } from '@mui/material';
import StackedBarChart from '../../../components/StackedBarChart';
import { useAnalyticState } from '../../../stores/analytic/hooks';
import Skeleton from '@mui/material/Skeleton';
import { StablecoinChartDetail, stableCoinDetailProps } from '../type';
import LazyLoad from 'react-lazyload';
import CircularProgress from '@mui/material/CircularProgress';
import { useNetworkContext } from '../AnalyticPage';

const main: SxProps = {
  width: '100%',
  height: 380,
  display: 'flex',
  justifyContent: 'space-between',
  gap: '28px',
};

const chart: SxProps = {
  width: 'calc(100% - 14px)',
  height: '100%',
};

const skeleton: SxProps = {
  width: '100%',
  height: '100%',
};

export default function ChartActivities() {
  const { dataDAU, dataDaily } = useAnalyticState();
  const currentNetwork = useNetworkContext();
  return (
    <Box sx={main}>
      <Box sx={chart}>
        {dataDAU.length > 0 ? (
          <StackedBarChart
            title={`DAU Per Stable (${currentNetwork.name})`}
            data={dataDAU}
            details={stableCoinDetailProps.filter(
              (item: StablecoinChartDetail) =>
                typeof dataDAU[0][item.key] !== 'undefined' ||
                typeof dataDAU[dataDAU.length - 1][item.key] !== 'undefined'
            )}
          />
        ) : (
          <Skeleton
            variant='rounded'
            sx={skeleton}
          />
        )}
      </Box>

      <Box sx={chart}>
        {dataDaily.length > 0 ? (
          <StackedBarChart
            data={dataDaily}
            title={`Daily Transfer Amount (${currentNetwork.name})`}
            details={stableCoinDetailProps.filter(
              (item: StablecoinChartDetail) =>
                typeof dataDaily[0][item.key] !== 'undefined' ||
                typeof dataDaily[dataDaily.length - 1][item.key] !== 'undefined'
            )}
          />
        ) : (
          <Skeleton
            variant='rounded'
            sx={skeleton}
          />
        )}
      </Box>
    </Box>
  );
}
