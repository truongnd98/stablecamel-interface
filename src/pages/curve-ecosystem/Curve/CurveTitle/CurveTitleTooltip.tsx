import { Link } from 'react-router-dom';
import { PopoverTooltip } from '../../../../components/PopoverTooltip/PopoverTooltip';
import { Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export function CurveTitleTooltip() {
  return (
    <PopoverTooltip
      content={
        <>
          <Typography sx={{ p: 1 }}>
            Curve is one of DeFi's leading AMM, (Automated Market Maker).
            Hundreds of liquidity pools have been launched through Curve's
            factory and incentivized by Curve's DAO. Users rely on Curve's
            proprietary formulas to provide high liquidity, low slippage, low
            fee transactions among ERC-20 tokens.{' '}
            <Link
              to='https://resources.curve.fi/'
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
  );
}
