import { Box, SxProps, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Footer';
import {
  useFetchData,
  useMoneyPrinterState,
} from '../../stores/moneyprinter/hooks';
import { MoneyPrinterGroupLayout } from './MoneyPrinterGroup/MoneyPrinterGroupLayout';
import { MoneyPrinterGroupLayoutBalance } from './MoneyPrinterGroup/MoneyPrinterGroupLayoutBalance';
import { MoneyPrinterMainChart } from './MoneyPrinterMainChart/MoneyPrinterMainChart';
import { MoneyPrinterMetrics } from './MoneyPrinterMetrics/MoneyPrinterMetrics';

const container: SxProps = {
  padding: '20px 28px',
  paddingBottom: '0',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  height: 'fit-content',
};

const main: SxProps = {
  minHeight: 'calc(100vh - 20px)',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'space-between',
  gap: '28px',
};

const group: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

export function MoneyPrinterPage() {
  const {
    exchangeBalanceByCEXList,
    usdcDeployedLendingProtocolList,
    usdcDeployedToLPs,
    usdcDeployedBridgesByBridge,
  } = useMoneyPrinterState();
  useFetchData();
  return (
    <>
      <Helmet>
        {/* <title>Money Printer Page</title> */}
        <meta
          property='og:description'
          content='Stable Camel Money Printer page'
        />
        <meta
          property='og:image'
          content='/thumbnails/thumbnail-moneyprinter.png'
        />
      </Helmet>
      <Box sx={container}>
        <Box sx={main}>
          <Box sx={group}>
            <Typography
              variant='h5'
              color='primary'
              sx={{
                '@media (max-width: 1280px)': {
                  fontSize: '18px !important',
                },
              }}
            >
              USDC Money Printer (Ethereum)
            </Typography>
            <MoneyPrinterMetrics />
            <MoneyPrinterMainChart />
          </Box>
          <Box sx={group}>
            <Typography
              variant='h5'
              color='primary'
            >
              USDC Exchange Balances
            </Typography>
            <MoneyPrinterGroupLayoutBalance data={exchangeBalanceByCEXList} />
          </Box>
          <Box sx={group}>
            <Typography
              variant='h5'
              color='primary'
            >
              USDC Deployed to Lending Protocols
            </Typography>
            <MoneyPrinterGroupLayout data={usdcDeployedLendingProtocolList} />
          </Box>
          <Box sx={group}>
            <Typography
              variant='h5'
              color='primary'
            >
              USDC Deployed to LPs
            </Typography>
            <MoneyPrinterGroupLayout data={usdcDeployedToLPs} />
          </Box>
          <Box sx={group}>
            <Typography
              variant='h5'
              color='primary'
            >
              USDC Deployed to Bridges
            </Typography>
            <MoneyPrinterGroupLayout data={usdcDeployedBridgesByBridge} />
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
