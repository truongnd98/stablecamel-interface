import React, { Suspense, useEffect } from 'react';
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
      <SummaryInfo />
      <SummaryCharts />

      {network.chainId === '0' ? (
        <AggregateDataGrid />
      ) : (
        <>
          <DataGrid />
          <Typography
            variant='h5'
            color='primary'
          >
            Stablecoin Liquidity Across Top DeFi Protocols
          </Typography>

          <ChartDetails />

          {network.slug === Chain.AVAX ? (
            <>
              <Typography
                variant='h5'
                color='primary'
              >
                Bridged vs Native
              </Typography>

              <ChartBridgeds />
            </>
          ) : (
            <></>
          )}

          <ChartInflow />

          <Typography
            variant='h5'
            color='primary'
          >
            Stablecoin Volume, Velocity, User Activity
          </Typography>
          <ChartActivities />
        </>
      )}
    </Box>
  );
};

export default Overview;
