import { Box, Skeleton } from '@mui/material';
import CustomAreaChart, {
  ChartDetailProps,
} from '../../../components/AreaChart';
import randomColor from 'randomcolor';
import { format } from 'date-fns';
import { MoneyPrinterGroupAreaChart } from './MoneyPrinterGroupAreaChart';

export function MoneyPrinterGroupChart({ data }: { data: any[] }) {
  const details: ChartDetailProps[] = [];
  for (let exchange in data[0]) {
    details.push({ key: exchange, color: randomColor() });
  }

  const list = !data.length
    ? []
    : data
        .map((item: any) => ({
          ...item,
          time: format(new Date(item.day ?? item.time), 'PP'),
        }))
        .reverse();
  return (
    <Box
      sx={{
        width: '50%',
      }}
    >
      {data.length > 0 ? (
        <MoneyPrinterGroupAreaChart
          data={list}
          title='Stablecoin Exchange Flow'
          detail={details}
        />
      ) : (
        <Skeleton
          variant='rounded'
          width='100%'
          height='100%'
        />
      )}
    </Box>
  );
}
