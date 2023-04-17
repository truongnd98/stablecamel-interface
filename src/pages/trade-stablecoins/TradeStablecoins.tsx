import { Box, SxProps } from '@mui/material';
import { TradeStablecoinsDisclaimer } from './components/TradeStablecoinsDisclaimer';
import { TradingWidget } from './components/TradingWidget';

const main: SxProps = {
  width: 'calc(100% - 240px)',
  minHeight: '100vh',
  //   height: '100vh',
  marginLeft: '240px',
  backgroundColor: '#f5f5f5',
};

export default function TradeStablecoin() {
  return (
    <Box sx={main}>
      <TradingWidget />
      <TradeStablecoinsDisclaimer />
    </Box>
  );
}
