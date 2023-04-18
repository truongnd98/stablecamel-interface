import { Box, SxProps } from '@mui/material';
import PositiveAndNegativeBarChart from '../../../components/PositiveAndNegativeBarChart';
import { useAnalyticState } from '../../../stores/analytic/hooks';
import Skeleton from '@mui/material/Skeleton';
import { useNetworkContext } from '../AnalyticPage';
import { StablecoinChartDetail, stableCoinDetailProps } from '../type';
import LazyLoad from 'react-lazyload';
import CircularProgress from '@mui/material/CircularProgress';

const main: SxProps = {
  width: '100%',
  height: 380,
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
};

const skeleton: SxProps = {
  width: '100%',
  height: '100%',
};

export default function ChartInflow() {
  const { dataInflow } = useAnalyticState();
  const currentNetwork = useNetworkContext();
  // window.location.hash = '#chart-inflow';
  return (
    <Box sx={main}>
      {dataInflow.length > 0 ? (
        <PositiveAndNegativeBarChart
          title={`Stablecoin Inflow (${currentNetwork.name})`}
          data={dataInflow}
          details={stableCoinDetailProps.filter(
            (item: StablecoinChartDetail) =>
              typeof dataInflow[0][item.key] !== 'undefined' ||
              typeof dataInflow[dataInflow.length - 1][item.key] !== 'undefined'
          )}
        />
      ) : (
        <Skeleton
          variant='rounded'
          sx={skeleton}
        />
      )}
    </Box>
  );
}
