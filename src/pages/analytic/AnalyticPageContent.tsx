import React, { Suspense } from 'react';
import { Box, SxProps, Typography } from '@mui/material';
import { Chain, Network } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';
import LazyLoad from 'react-lazyload';

import SummaryInfo from './components/SummaryInfo';
import SummaryCharts from './components/SummaryCharts';
import AggregateDataGrid from './components/AggregateDataGrid';
import DataGrid from './components/DataGrid';
import ChartDetails from './components/ChartDetails';
import ChartBridgeds from './components/ChartBridgeds';
import ChartInflow from './components/ChartInflow';
import ChartActivities from './components/ChartActivities';
import { useGetListData } from '../../stores/analytic/hooks';
import { useNetworkContext } from './AnalyticPage';

// const SummaryInfo = React.lazy(() => import('./components/SummaryInfo'));
// const SummaryCharts = React.lazy(() => import('./components/SummaryCharts'));
// const AggregateDataGrid = React.lazy(
// 	() => import('./components/AggregateDataGrid')
// );
// const DataGrid = React.lazy(() => import('./components/DataGrid'));
// const ChartDetails = React.lazy(() => import('./components/ChartDetails'));
// const ChartInflow = React.lazy(() => import('./components/ChartInflow'));
// const ChartBridgeds = React.lazy(() => import('./components/ChartBridgeds'));
// const ChartActivities = React.lazy(
// 	() => import('./components/ChartActivities')
// );

const main: SxProps = {
  width: '100%',
  padding: '20px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
  minHeight: 'calc(100vh - 40px - 46px - 28px - 20px)',
  height: 'fit-content',
};

const Overview = () => {
  const network: Network = useNetworkContext();
  useGetListData(network.slug);
  return (
    <Box sx={main}>
      <LazyLoad
        once
        placeholder={<CircularProgress color='secondary' />}
      >
        <SummaryInfo />
      </LazyLoad>
      <LazyLoad
        once
        placeholder={<CircularProgress color='secondary' />}
      >
        <SummaryCharts />
      </LazyLoad>

      {network.chainId === '0' ? (
        <LazyLoad
          once
          placeholder={<CircularProgress color='secondary' />}
        >
          <AggregateDataGrid />
        </LazyLoad>
      ) : (
        <>
          <LazyLoad
            once
            placeholder={<CircularProgress color='secondary' />}
          >
            <DataGrid />
          </LazyLoad>

          <Typography
            variant='h5'
            color='primary'
          >
            Stablecoin Liquidity Across Top DeFi Protocols
          </Typography>

          <LazyLoad
            once
            placeholder={<CircularProgress color='secondary' />}
          >
            <ChartDetails />
          </LazyLoad>

          {network.slug === Chain.AVAX ? (
            <>
              <Typography
                variant='h5'
                color='primary'
              >
                Bridged vs Native
              </Typography>

              <LazyLoad
                once
                placeholder={<CircularProgress color='secondary' />}
              >
                <ChartBridgeds />
              </LazyLoad>
            </>
          ) : (
            <></>
          )}
          <LazyLoad
            once
            placeholder={<CircularProgress color='secondary' />}
          >
            <ChartInflow />
          </LazyLoad>

          <Typography
            variant='h5'
            color='primary'
          >
            Stablecoin Volume, Velocity, User Activity
          </Typography>

          <LazyLoad
            once
            placeholder={<CircularProgress color='secondary' />}
          >
            <ChartActivities />
          </LazyLoad>
        </>
      )}
    </Box>
  );
};

export default Overview;
