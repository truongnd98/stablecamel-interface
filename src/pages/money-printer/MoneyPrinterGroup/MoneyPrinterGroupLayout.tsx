import { Box, SxProps } from '@mui/material';
import { MoneyPrinterGroupChart } from './MoneyPrinterGroupChart';

import { MoneyPrinterGroupDataGrid } from './MoneyPrinterGroupDataGrid';

const container: SxProps = {
  width: '100%',
  height: 380,
  display: 'flex',
  justifyContent: 'space-between',
};

export function MoneyPrinterGroupLayout({ data }: { data: any[] }) {
  return (
    <Box sx={container}>
      <MoneyPrinterGroupChart data={data} />
      <MoneyPrinterGroupDataGrid data={data} />
    </Box>
  );
}
