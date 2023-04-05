import { Box, Skeleton, SxProps } from '@mui/material';
import { format } from 'date-fns';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useMoneyPrinterState } from '../../../stores/moneyprinter/hooks';
import { MoneyPrinterMainChartTooltip } from './MoneyPrinterMainChartTooltip';
import {
  ExchangeBalanceRes,
  MainChartProps,
  SupplyUSDCRes,
  DeployedRes,
} from '../types';

const main: SxProps = {
  width: '100%',
  height: 380,
  backgroundColor: '#ffffff',
};

const formatTickX = (value: string) => {
  const time: string = format(new Date(value), 'PP');
  return time.slice(0, 3) + ' ' + time.slice(-4, time.length);
};

const formatTickY = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
  }).format(value);
};

export function MoneyPrinterMainChart() {
  const {
    supplyUSDCList,
    exchangeBalanceList,
    deployedLenderList,
    deployedLpsList,
    deployedBridgeList,
  } = useMoneyPrinterState();

  // const data =
  // 	!supplyUSDCList || !supplyUSDCList.length
  // 		? []
  // 		: supplyUSDCList.map((item: SupplyUSDCRes) => {
  // 				const time = format(new Date(item.day), 'dd/MM/yyyy');
  // 				const balance = exchangeBalanceList.find(
  // 					(item: ExchangeBalanceRes) =>
  // 						format(new Date(item.day), 'dd/MM/yyyy') === time
  // 				);
  // 				const lender = deployedLenderList.find(
  // 					(item: DeployedRes) =>
  // 						format(new Date(item.time), 'dd/MM/yyyy') === time
  // 				);
  // 				const lps = deployedLpsList.find(
  // 					(item: DeployedRes) =>
  // 						format(new Date(item.time), 'dd/MM/yyyy') === time
  // 				);
  // 				const bridge = deployedBridgeList.find(
  // 					(item: DeployedRes) =>
  // 						format(new Date(item.time), 'dd/MM/yyyy') === time
  // 				);
  // 				return {
  // 					time,
  // 					supply: item.supply,
  // 					balance: balance ? balance.balance : 0,
  // 					lender: lender ? lender.value : 0,
  // 					lps: lps ? lps.value : 0,
  // 					bridge: bridge ? bridge.value : 0
  // 				};
  // 		  });
  // console.log('data', data);

  return (
    <Box sx={main}>
      {supplyUSDCList && supplyUSDCList.length > 0 ? (
        <ResponsiveContainer
          width='100%'
          height='100%'
        >
          <LineChart
            width={500}
            height={300}
            data={supplyUSDCList}
            margin={{
              top: 12,
              right: 50,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray='3 3' /> */}
            <XAxis
              dataKey='day'
              tickFormatter={formatTickX}
              minTickGap={50}
            />
            <YAxis tickFormatter={formatTickY} />
            <Tooltip content={<MoneyPrinterMainChartTooltip />} />
            {/* <Legend /> */}
            <Line
              type='monotone'
              dataKey='supply'
              stroke='#8884d8'
              dot={false}
            />
            {/* <Line
						type='monotone'
						dataKey='balance'
						stroke='#82ca9d'
					/>
					<Line
						type='monotone'
						dataKey='lender'
						stroke='#000000'
					/>
					<Line
						type='monotone'
						dataKey='lps'
						stroke='#fd0012'
					/>
					<Line
						type='monotone'
						dataKey='bridge'
						stroke='#0d887b'
					/> */}
          </LineChart>
        </ResponsiveContainer>
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
