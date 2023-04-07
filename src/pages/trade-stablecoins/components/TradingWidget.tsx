import { Box } from '@mui/material';

export function TradingWidget() {
  return (
    <iframe
      src='https://ramp.stably.io/?address=hx777535db1b4039c837580e74aac35d0bbaaa7b4c&amount=42.42&network=icon&asset=USDS&filter=true'
      title='Stably Widget'
      style={{
        width: '100%',
        height: '100vh',
      }}
    />
  );
}
