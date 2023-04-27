import { Box, SxProps, Paper, Typography } from '@mui/material';
import { useAnalyticState } from '../../../stores/analytic/hooks';
import Skeleton from '@mui/material/Skeleton';
import { useNetworkContext } from '../AnalyticPage';

const main: SxProps = {
  width: '100%',
  height: 120,
  display: 'flex',
  justifyContent: 'space-between',
};

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

const wrap: SxProps = {
  width: 'calc(50% - 14px)',
  height: '100%',
  display: 'flex',
  gap: '28px',
};

const skeleton: SxProps = {
  width: '100%',
  height: '100%',
};

// @lazyload({
// 	height: 120,
// 	once: true,
// 	offset: 100
// })

export default function SummaryInfo() {
  const { dataTVL, dataSupply } = useAnalyticState();
  const currentNetwork = useNetworkContext();

  const data = dataTVL ? dataTVL[dataTVL.length - 1] : null;

  const supply = () => {
    if (dataSupply && dataSupply.length > 0) {
      const { USDC, USDT, FRAX, DAI, BUSD } = dataSupply[dataSupply.length - 1];
      return USDC + USDT + FRAX + DAI + (BUSD ?? 0);
    }
    return 0;
  };

  return (
    <Box sx={main}>
      <Box sx={wrap}>
        {supply() ? (
          <Paper
            sx={paper}
            elevation={0}
          >
            <Typography
              variant='h5'
              color='primary'
            >
              <b>Stablecoin Supply</b>
            </Typography>
            <Typography
              variant='h3'
              color='secondary'
            >
              ${(supply() / 1e9).toFixed(2)}B
            </Typography>
          </Paper>
        ) : (
          <Skeleton
            variant='rounded'
            sx={skeleton}
          />
        )}

        {data && data.total ? (
          <Paper
            sx={paper}
            elevation={0}
          >
            <Typography
              variant='h5'
              color='primary'
            >
              <b>Stablecoin TVL</b>
            </Typography>
            <Typography
              variant='h3'
              color='secondary'
            >
              ${(data.total / 1e9).toFixed(2)}B
            </Typography>
          </Paper>
        ) : (
          <Skeleton
            variant='rounded'
            sx={skeleton}
          />
        )}
      </Box>
      <Box sx={wrap}>
        {data && data.seven_d_chng ? (
          <Paper
            sx={paper}
            elevation={0}
          >
            <Typography
              variant='h5'
              color='primary'
            >
              <b>TVL Change (7D)</b>
            </Typography>
            <Typography
              variant='h3'
              color='secondary'
            >
              {data.seven_d_chng.toFixed(2)}%
            </Typography>
          </Paper>
        ) : (
          <Skeleton
            variant='rounded'
            sx={skeleton}
          />
        )}
        {data && data.dominance ? (
          <Paper
            sx={paper}
            elevation={0}
          >
            <Typography
              variant='h5'
              color='primary'
            >
              <b>
                {currentNetwork.slug === 'BSC'
                  ? 'BUSD Dominance'
                  : 'USDC Dominance'}
              </b>
            </Typography>
            <Typography
              variant='h3'
              color='secondary'
            >
              {data.dominance.toFixed(2)}%
            </Typography>
          </Paper>
        ) : (
          <Skeleton
            variant='rounded'
            sx={skeleton}
          />
        )}
      </Box>
    </Box>
  );
}
