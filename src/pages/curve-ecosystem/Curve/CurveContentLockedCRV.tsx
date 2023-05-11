import { Box, Typography } from '@mui/material';
import CustomAreaChart from '../../../components/AreaChart';
import { ChartDetailProps } from '../../../components/AreaChart/types';
import { Metric } from '../../../components/Metric/Metric';
import PositiveAndNegativeBarChart from '../../../components/PositiveAndNegativeBarChart';
import StackedBarChart from '../../../components/StackedBarChart';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import { LockedCRV } from '../types';
import { CurveContentLockedCRVTable } from './CurveContentLockedCRVTable';
import { PopoverTooltip } from '../../../components/PopoverTooltip/PopoverTooltip';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const lockedCRVDetail: ChartDetailProps = {
  key: 'locked_crv',
  color: '#6d3099',
};

const lockedCRV60dDetail: ChartDetailProps = {
  key: 'CRV Locked',
  color: '#6d3099',
};

const formatNumber = (value?: number | null) => {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(value ?? 0);
};

export function CurveContentLockedCRV() {
  const { curve } = useCurveEcosystemState();

  const dataLockedCRV60d = curve.locked_crv_60d.map((item: LockedCRV) => ({
    ...item,
    'CRV Locked': item.delta,
  }));
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
        }}
      >
        <Typography
          variant='h5'
          color='primary'
        >
          Locked CRV
        </Typography>
        <PopoverTooltip
          content={
            <>
              <Typography sx={{ p: 1 }}>
                CRV holders can vote lock their CRV into the Curve DAO to
                receive veCRV. The longer they lock for, the more veCRV they
                receive. Vote locking allows you to vote in governance, boost
                your CRV rewards and receive trading fees.{' '}
                <Link
                  to='https://resources.curve.fi/governance/vote-locking-boost'
                  target='_blank'
                >
                  Read more
                </Link>
              </Typography>
            </>
          }
          component={
            <InfoIcon
              color='primary'
              sx={{
                height: 22,
              }}
            />
          }
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 380,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: 'calc(50% - 14px)', height: '100%' }}>
          <CustomAreaChart
            data={curve.locked_crv}
            title='Locked CRV (veCRV)'
            id='locked-crv-area'
            detail={lockedCRVDetail}
          />
        </Box>
        <Box sx={{ width: 'calc(50% - 14px)', height: '100%' }}>
          <CurveContentLockedCRVTable />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 120,
          display: 'flex',
          justifyContent: 'space-between',
          gap: '28px',
        }}
      >
        <Metric
          title='Total Locked CRV (veCRV)'
          value={formatNumber(curve.current_locked_crv?.locked_crv)}
          tooltip={
            <PopoverTooltip
              content={
                <Typography sx={{ p: 1 }}>
                  veCRV stands for voting escrow CRV. They are your CRV locked
                  for voting. The longer you lock your CRV for, the more voting
                  power you have (and the bigger boost you can reach).
                </Typography>
              }
              component={
                <InfoIcon
                  color='primary'
                  sx={{
                    height: 22,
                  }}
                />
              }
            />
          }
        />
        <Metric
          title='1D Locked CRV (veCRV)'
          value={formatNumber(curve.current_locked_crv?.delta)}
          tooltip={
            <PopoverTooltip
              content={
                <Typography sx={{ p: 1 }}>
                  When vote locking CRV, you will also earn a boost on your
                  provided liquidity of up to 2.5x. The goal is to incentivise
                  users to participate in governance by rewarding them with a
                  bigger share of the daily CRV inflation.
                </Typography>
              }
              component={
                <InfoIcon
                  color='primary'
                  sx={{
                    height: 22,
                  }}
                />
              }
            />
          }
        />
      </Box>
      <Box sx={{ width: '100%', height: 380 }}>
        <PositiveAndNegativeBarChart
          data={dataLockedCRV60d}
          title='Locked CRV (veCRV)'
          id='locked-crv-bar'
          details={lockedCRV60dDetail}
        />
      </Box>
    </>
  );
}
