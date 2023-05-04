import { Box } from '@mui/material';

export function TradingWidget() {
  return (
    <iframe
      src='https://ramp.stably.io/?integrationId=stablecamel-5c58e755'
      title='Stably Widget'
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
      }}
    />
  );
}
