import { SxProps, Typography, Box } from '@mui/material';
import { CurveEcosystemSubContentMetrics } from './CurveEcosystemSubContentMetrics';
import { CurveEcosystemSubContentCharts } from './CurveEcosystemSubContentCharts';
import { PopoverTooltip } from '../../../../components/PopoverTooltip/PopoverTooltip';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

const container: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
};

export function CurveEcosystemSubContent() {
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
          FraxBP Versus 3pool
        </Typography>
        <PopoverTooltip
          content={
            <>
              <Typography sx={{ p: 1 }}>
                The Frax Base Pool (FraxBP) is an initiative by the Frax
                Protocol to create a representation of Frax on the Curve
                platform. It is made up of only FRAX and USDC. This pool allows
                for easier liquidity of FRAX on other protocols by creating
                FraxBP metapools. This means that FRAX can be injected into
                other protocols without being exposed to DAI and USDT.{' '}
                <Link
                  to='https://grofarmer.substack.com/p/fraxbasepoolfraxbp-review'
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
      <CurveEcosystemSubContentMetrics />
      <CurveEcosystemSubContentCharts />
    </Box>
  );
}
