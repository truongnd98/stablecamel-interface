import { Box, Typography } from '@mui/material';

import { convertCurrency } from '../../utils/convertCurrency';
import { v4 } from 'uuid';

const sumData = (list: any[]) => {
  return list.reduce((partialSum, a) => partialSum + a.value, 0);
};

export function YieldChartTooltip({ active, payload, label }: any) {
  // console.log('payload', payload);
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
          '&.recharts-tooltip-wrapper': {
            zIndex: 100,
          },
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
            {item.value > 0 ? (
              <>
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
              </>
            ) : (
              <></>
            )}
          </Box>
        ))}
      </Box>
    );
  }

  return null;
}
