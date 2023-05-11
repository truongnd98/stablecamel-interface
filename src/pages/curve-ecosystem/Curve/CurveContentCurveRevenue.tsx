import { Box, SxProps, Typography } from '@mui/material';
import { Metric } from '../../../components/Metric/Metric';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import { CurveContentCurveRevenueCharts } from './CurveContentCurveRevenueCharts';
import { PopoverTooltip } from '../../../components/PopoverTooltip/PopoverTooltip';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

const main: SxProps = {
  width: '100%',
  height: 120,
  display: 'flex',
  justifyContent: 'space-between',
  gap: '28px',
};

const formatNumber = (number?: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(number ?? 0);
};

export function CurveContentCurveRevenue() {
  const { curve } = useCurveEcosystemState();

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
          Curve Revenue
        </Typography>
        <PopoverTooltip
          content={
            <>
              <Typography sx={{ p: 1 }}>
                CRV can now be staked (locked) to receive trading fees from the
                Curve protocol. A community-lead proposal introduced a 50% admin
                fee on all trading fees. Those fees are collected and used to
                buy 3CRV, the LP token for the TriPool, which are then
                distributed to veCRV holders.
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
      <Box sx={main}>
        <Metric
          title='Curve Volume'
          value={formatNumber(
            curve.total_volume
              ? curve.total_volume.total_volume * 1e9
              : undefined
          )}
        />
        <Metric
          title='Total Fee Revenue'
          value={formatNumber(curve.total_fee_revenue[0]?.total_revenue * 1e6)}
        />
        <Metric
          title='Admin Fee Revenue Per veCRV'
          value={formatNumber(curve.admin_fee_revenue_per_vecrv?.admin_revenue)}
        />
      </Box>
      <CurveContentCurveRevenueCharts />
    </>
  );
}
