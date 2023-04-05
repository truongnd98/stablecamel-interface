import { Box, SxProps } from '@mui/material';
import { MoneyPrinterGroupChart } from './MoneyPrinterGroupChart';

import { MoneyPrinterGroupDataGrid } from './MoneyPrinterGroupDataGrid';

const container: SxProps = {
  width: '100%',
  height: 380,
  display: 'flex',
  gap: '28px',
};

export function MoneyPrinterGroupLayout({ data }: { data: any[] }) {
  return (
    <Box sx={container}>
      <MoneyPrinterGroupDataGrid data={data} />
      <MoneyPrinterGroupChart data={data} />
    </Box>
  );
}
