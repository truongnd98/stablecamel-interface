import { MoneyPrinterMetricProps } from '../types';
import { Paper, Skeleton, SxProps, Typography } from '@mui/material';

const paper: SxProps = {
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
};

const skeleton: SxProps = {
  width: '100%',
  height: '100%',
};

export function MoneyPrinterSingleMetric({
  value,
  title,
}: MoneyPrinterMetricProps) {
  return value ? (
    <Paper
      sx={paper}
      elevation={0}
    >
      <Typography
        variant='h5'
        color='primary'
        sx={
          {
            //   fontSize: 14,
          }
        }
      >
        <b>{title}</b>
      </Typography>
      <Typography
        variant='h3'
        color='secondary'
      >
        {value}
      </Typography>
    </Paper>
  ) : (
    <Skeleton
      variant='rounded'
      sx={skeleton}
    />
  );
}
