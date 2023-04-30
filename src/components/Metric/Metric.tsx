import { Paper, Skeleton, SxProps, Typography } from '@mui/material';
import { MetricProps } from './types';

const paper: SxProps = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
};

export function Metric({ title, value }: MetricProps) {
  return value ? (
    <Paper
      sx={paper}
      elevation={0}
    >
      <Typography
        variant='h5'
        color='primary'
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
      width='100%'
      height='100%'
    />
  );
}
