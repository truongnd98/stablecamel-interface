import React, { Suspense, useEffect, useState } from 'react';
import { Box, SxProps, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useAnalyticState } from '../../../stores/analytic/hooks';
import CustomAreaChart from '../../../components/AreaChart';
import { useNetworkContext } from '../AnalyticPage';
import { StablecoinChartDetail, stableCoinDetailProps } from '../type';
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

const SummaryCharts = () => {
  const { dataTVL, dataSupply } = useAnalyticState();
  const currentNetwork = useNetworkContext();

  return (
    <Box sx={main}>
      <Box sx={each}>
        {dataTVL && dataTVL.length > 0 ? (
          <CustomAreaChart
            data={dataTVL}
            title={`Stablecoin TVL (${currentNetwork.name})`}
            detail={stableCoinDetailProps.filter(
              (item: StablecoinChartDetail) =>
                typeof dataTVL[0][item.key] !== 'undefined' ||
                typeof dataTVL[dataTVL.length - 1][item.key] !== 'undefined'
            )}
            legend
            id='chart-tvl'
          />
        ) : (
          <Skeleton
            variant='rounded'
            width='100%'
            height='100%'
          />
        )}
      </Box>

      <Box sx={each}>
        {dataSupply && dataSupply.length > 0 ? (
          <CustomAreaChart
            data={dataSupply}
            title={`Stablecoin Supply (${currentNetwork.name})`}
            detail={stableCoinDetailProps.filter(
              (item: StablecoinChartDetail) =>
                typeof dataSupply[dataSupply.length - 1][item.key] !==
                  'undefined' || typeof dataSupply[0][item.key] !== 'undefined'
            )}
            legend
            id='chart-supply'
          />
        ) : (
          <Skeleton
            variant='rounded'
            width='100%'
            height='100%'
          />
        )}
      </Box>
    </Box>
  );
};

export default SummaryCharts;
