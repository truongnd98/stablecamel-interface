import { Box, SxProps, Typography } from '@mui/material';
import { CurveEcosystemSecondSubMetrics } from './CurveEcosystemSecondSubMetrics';
import { CurveEcosystemSecondSubChart } from './CurveEcosystemSecondSubChart';
import { PopoverTooltip } from '../../../../components/PopoverTooltip/PopoverTooltip';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

const container: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
};

export function CurveEcosystemSecondSub() {
  return (
    <Box sx={container}>
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
          frxETH Supply
        </Typography>
        <PopoverTooltip
          content={
            <>
              <Typography sx={{ p: 1 }}>
                ETH in the Frax ecosystem comes in two forms, frxETH (Frax
                Ether), and sfrxETH (Staked Frax Ether). frxETH acts as a
                stablecoin loosely pegged to ETH, so that 1 frxETH always
                represents 1 ETH and the amount of frxETH in circulation matches
                the amount of ETH in the Frax ETH system. When ETH is sent to
                the frxETHMinter, an equivalent amount of frxETH is minted.
                Holding frxETH on its own is not eligible for staking yield and
                should be thought of as analogous as holding ETH.{' '}
                <Link
                  to='https://docs.frax.finance/frax-ether/frxeth-and-sfrxeth'
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
      <CurveEcosystemSecondSubMetrics />
      <CurveEcosystemSecondSubChart />
    </Box>
  );
}
