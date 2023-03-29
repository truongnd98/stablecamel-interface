import { Box, Typography } from '@mui/material';

import { convertCurrency } from '../../utils/convertCurrency';
import { v4 } from 'uuid';

const sumData = (list: any[]) => {
  return list.reduce((partialSum, a) => partialSum + a.value, 0);
};

const StackedChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          width: 200,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          padding: ' 12px',
          borderRadius: '8px',
          border: '2px solid #8c00ef',
        }}
      >
        <Typography
          variant='body1'
          color='primary'
        >
          <b>{label}</b>
        </Typography>
        {payload.map((item: any) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            key={v4()}
          >
            <Typography
              variant='body1'
              sx={{
                color: item.color,
              }}
            >{`${item.name}:`}</Typography>

            <Typography
              variant='body1'
              sx={{
                color: item.color,
              }}
            >
              {convertCurrency(item.value)}
            </Typography>
          </Box>
        ))}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '12px',
          }}
          key={v4()}
        >
          <Typography
            variant='body1'
            sx={{
              color: '#000000',
              fontWeight: 600,
            }}
          >
            Total:{' '}
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: '#000000',
              fontWeight: 600,
            }}
          >
            {convertCurrency(sumData(payload))}
          </Typography>
        </Box>
      </Box>
    );
  }

  return null;
};

export default StackedChartTooltip;
