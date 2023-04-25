import React, { Suspense, useEffect, useState } from 'react';
import { Box, SxProps, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useAnalyticState } from '../../../stores/analytic/hooks';
import CustomAreaChart from '../../../components/AreaChart';
import { useNetworkContext } from '../AnalyticPage';
import LazyLoad from 'react-lazyload';
import CircularProgress from '@mui/material/CircularProgress';

const main: SxProps = {
  width: '100%',
  height: 380,
  display: 'flex',
  justifyContent: 'space-between',
};

const each: SxProps = {
  width: 'calc(50% - 14px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  position: 'relative',
};

export default function ChartBridgeds() {
  const { dataBridgedUSDC, dataBridgedUSDT } = useAnalyticState();
  const currentNetwork = useNetworkContext();

  return (
    <Box sx={main}>
      <Box sx={each}>
        <CustomAreaChart
          data={dataBridgedUSDC}
          title={`Bridged vs. Native USDC TVL (${currentNetwork.name})`}
          detail={[
            {
              key: 'USDC',
              color: '#0027ff',
            },
            {
              key: 'USDCE',
              color: '#00c7ff',
            },
          ]}
          legend
          id='bridged-native-usdc'
        />
      </Box>

      <Box sx={each}>
        <CustomAreaChart
          data={dataBridgedUSDT}
          title={`Bridged vs. Native USDT TVL (${currentNetwork.name})`}
          detail={[
            {
              key: 'USDT',
              color: '#00b013',
            },
            {
              key: 'USDTE',
              color: '#0aff00',
            },
          ]}
          legend
          id='bridged-native-usdt'
        />
      </Box>
    </Box>
  );
}
