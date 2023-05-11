import { Box, Typography } from '@mui/material';
import { useGetDataCurve } from '../../../stores/curve-ecosystem/hooks';
import { CurveContentCurveRevenue } from './CurveContentCurveRevenue';
import { CurveContentLockedCRV } from './CurveContentLockedCRV';
import { CurveVolumeCharts } from './CurveVolumeCharts';
import { PopoverTooltip } from '../../../components/PopoverTooltip/PopoverTooltip';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { CurveTitle } from './CurveTitle/CurveTitle';

export function CurveContent() {
  useGetDataCurve();
  return (
    <>
      <CurveTitle />
      <CurveVolumeCharts />
      <CurveContentCurveRevenue />
      <CurveContentLockedCRV />
    </>
  );
}
