import { Box, SxProps } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { TradeStablecoinsDisclaimer } from './components/TradeStablecoinsDisclaimer';
import { TradingWidget } from './components/TradingWidget';

const main: SxProps = {
  minHeight: '100vh',
  //   height: '100vh',
  backgroundColor: '#f5f5f5',
};

export default function TradeStablecoin() {
  return (
    <>
      <Helmet>
        {/* <title>Trade Stablecoin</title> */}

        <meta
          property='og:description'
          content='Stable Camel Trade Stablecoin page'
        />
        <meta
          property='og:image'
          content='/thumbnails/thumbnail-tradestablecoin.png'
        />
      </Helmet>
      <Box sx={main}>
        <TradingWidget />
        <TradeStablecoinsDisclaimer />
      </Box>
    </>
  );
}
