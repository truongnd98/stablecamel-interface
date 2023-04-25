import { Box, SxProps } from '@mui/material';
import { Helmet } from 'react-helmet';
import { TradeStablecoinsDisclaimer } from './components/TradeStablecoinsDisclaimer';
import { TradingWidget } from './components/TradingWidget';

const main: SxProps = {
  width: 'calc(100% - 260px)',
  minHeight: '100vh',
  //   height: '100vh',
  marginLeft: '260px',
  backgroundColor: '#f5f5f5',
};

export default function TradeStablecoin() {
  return (
    <>
      <Helmet>
        {/* <title>Trade Stablecoin</title> */}
        <meta
          property='og:title'
          content='Stable Camel'
        />
        <meta
          property='og:description'
          content='Stable Camel Trade Stablecoin page'
        />
        <meta
          property='og:image'
          content='%PUBLIC_URL%/thumbnails/thumbnail-tradestablecoin.png'
        />
      </Helmet>
      <Box sx={main}>
        <TradingWidget />
        <TradeStablecoinsDisclaimer />
      </Box>
    </>
  );
}
