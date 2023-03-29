import { SxProps } from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  Legend,
} from 'recharts';
import { Box, Typography } from '@mui/material';
import { v4 } from 'uuid';
import LazyLoad from 'react-lazyload';
import CircularProgress from '@mui/material/CircularProgress';
import { useYieldState } from '../../stores/yield/hooks';
import { ScatterChartProps, YieldRes } from './types';
import { YieldMetrics } from './YieldMetrics';

const formatTickX = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 0,
  }).format(value);
};

const formatTickY = (value: number) => {
  return value.toFixed(0);
};

const main: SxProps = {
  width: '100%',
  height: 380,
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '24px 0',
  alignItems: 'center',
  borderRadius: '8px',
  position: 'relative',
};

const background: SxProps = {
  position: 'absolute',
  top: 150,
  img: {
    width: 150,
    opacity: 0.35,
  },
  zIndex: 1,
};

export function YieldChart() {
  let { list } = useYieldState();

  list = list.filter((item: YieldRes) => item.tvl_number > 10e6);

  const filterData = (
    key: string,
    name: string,
    color: string
  ): ScatterChartProps => {
    const data: YieldRes[] = list.filter(
      (item: YieldRes) => item.project === key
    );
    list = list.filter((item: YieldRes) => item.project !== key);
    return {
      data,
      name,
      color,
    };
  };

  const data: ScatterChartProps[] = [
    filterData('pickle', 'Pickle', '#4dc053'),
    filterData('sushiswap', 'Sushiswap', '#f752a1'),
    filterData('beefy', 'Beefy', '#5ba566'),
    filterData('velodrome', 'Velodrome', '#4866d4'),
    filterData('balancer', 'Balancer', '#27292f'),
    filterData('uniswap-v3', 'UniswapV3', '#ff00c6'),
    filterData('acryptos', 'Acryptos', '#fc8c40'),
    filterData('curve', 'Curve', '#8ab4f7'),
    filterData('autofarm', 'Autofarm', '#485cc1'),
    filterData('stakedao', 'Stakedao', '#923ee5'),
    filterData('kyberswap', 'Kyberswap', '#39caa0'),
    filterData('reaper-farm', 'ReaperFarm', '#1db7e9'),
    filterData('o3-swap', 'O3swap', '#b0f86f'),
    filterData('dforce', 'dForce', '#9d2df4'),
    filterData('tarot', 'Tarot', '#352c1d'),
    filterData('convex-finance', 'Convex Finance', '#1886f9'),
    filterData('frax', 'Frax', '#000000'),
    filterData('iron-bank', 'Iron Bank', '#2aa64f'),
    filterData('vector-finance', 'Vector Finance', '#676de3'),
    filterData('vesper', 'Vesper', '#586fe7'),
    filterData('yearn-finance', 'Yearn Finance', '#0d0d0d'),
    filterData('hop-protocol', 'Hop', '#B32EFF'),
    filterData('stargate', 'stargate', '#53beaf'),
  ];

  const otherData: ScatterChartProps = {
    data: list,
    color: '#9a9a9a',
    name: 'Other',
  };

  // console.log('other', otherData.data.length);

  return (
    <Box sx={main}>
      <Box sx={background}>
        <img
          src='/logos/logo-bw.png'
          alt='logo'
        />
      </Box>
      <Typography
        variant='h5'
        color='primary'
      >
        Scatterplot of Total APY vs TVL
      </Typography>
      <LazyLoad
        height='100%'
        offset={100}
        style={{
          width: '100%',
          height: '100%',
        }}
        once
      >
        <ResponsiveContainer
          width='100%'
          height='100%'
        >
          <ScatterChart
            width={500}
            height={400}
            margin={{
              top: 12,
              right: 50,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              type='number'
              dataKey='tvl_number'
              name='TVL'
              tickFormatter={formatTickX}
              domain={['dataMin', 'dataMax']}
            />
            <YAxis
              type='number'
              dataKey='total_apy'
              name='APY'
              tickFormatter={formatTickY}
              axisLine={false}
              unit='%'
            />

            <Tooltip
            // wrapperStyle={{
            //   zIndex: 2,
            // }}
            // content={<ScatterChartTooltip />}
            />
            {data.map((item: ScatterChartProps) => (
              <Scatter
                name={item.name}
                data={item.data}
                fill={item.color}
                key={v4()}
                fillOpacity={0.4}
                isAnimationActive={false}
              />
            ))}
            <Scatter
              name={otherData.name}
              data={otherData.data}
              fill={otherData.color}
              key={v4()}
              fillOpacity={0.4}
              isAnimationActive={false}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </LazyLoad>
    </Box>
  );
}
