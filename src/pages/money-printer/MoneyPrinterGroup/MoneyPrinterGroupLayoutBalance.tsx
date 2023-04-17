import { Box, SxProps } from '@mui/material';
import { MoneyPrinterGroupChart } from './MoneyPrinterGroupChart';
import { MoneyPrinterGroupDataGridBalance } from './MoneyPrinterGroupDataGridBalance';

const container: SxProps = {
  width: '100%',
  height: 380,
  display: 'flex',
  gap: '28px',
};

export function MoneyPrinterGroupLayoutBalance({ data }: { data: any[] }) {
  return (
    <Box sx={container}>
      <MoneyPrinterGroupChart data={data} />
      <MoneyPrinterGroupDataGridBalance data={data} />
    </Box>
  );
}
