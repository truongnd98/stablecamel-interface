import React from 'react';
import { Box, SxProps } from '@mui/material';
import CustomAreaChart, {
	ChartDetailProps
} from '../../../components/AreaChart';
import Skeleton from '@mui/material/Skeleton';
import { useAnalyticState } from '../../../stores/analytic/hooks';
import { useNetworkContext } from '../AnalyticPage';
import CircularProgress from '@mui/material/CircularProgress';
import LazyLoad from 'react-lazyload';

const main: SxProps = {
	width: '100%',
	height: 'fit-content',
	display: 'flex',
	flexDirection: 'column',
	gap: '28px'
};

const wrap: SxProps = {
	height: 380,
	display: 'flex',
	justifyContent: 'space-between'
};

const chart: SxProps = {
	width: 'calc(50% - 14px)',
	height: '100%'
};

const skeleton: SxProps = {
	width: '100%',
	height: '100%'
};

const ChartUSDCDetail: ChartDetailProps[] = [
	{
		key: 'Aave',
		color: '#3fb4c5'
	},
	{
		key: 'dYdX',
		color: '#6866ff'
	},
	{
		key: 'Curve',
		color: '#8ab4f7'
	},
	{
		key: 'Maker',
		color: '#2cb7a8'
	},
	{
		key: 'Other',
		color: '#000000'
	},
	{
		key: 'Bancor',
		color: '#14b9d4'
	},
	{
		key: 'Uniswap',
		color: '#ff00c6'
	},
	{
		key: 'Balancer',
		color: '#27292f'
	},
	{
		key: 'Compound',
		color: '#01d394'
	},
	{
		key: 'Treasury',
		color: '#5f395c'
	},
	{
		key: 'Sushiswap',
		color: '#f752a1'
	},
	{
		key: 'GMX',
		color: '#4f1df6'
	},
	{
		key: 'Vesta',
		color: '#fbcabc'
	},
	{
		key: 'Hundred',
		color: '#02cefe'
	},
	{
		key: 'Radiant',
		color: '#705aff'
	},
	{
		key: 'Benqi',
		color: '#11baf0'
	},
	{
		key: 'HashFlow',
		color: '#0f1319'
	},
	{
		key: 'IronBank',
		color: '#96f077'
	},
	{
		key: 'Pangolin',
		color: '#ffc800'
	},
	{
		key: 'Platypus',
		color: '#00f152'
	},
	{
		key: 'KyberSwap',
		color: '#33ca9d'
	},
	{
		key: 'TraderJoe',
		color: '#a7adf8'
	},
	{
		key: 'Cream',
		color: '#69e2dc'
	},
	{
		key: 'Valas',
		color: '#494846'
	},
	{
		key: 'Venus',
		color: '#3a78ff'
	},
	{
		key: 'Biswap',
		color: '#1263f1'
	},
	{
		key: 'Planet',
		color: '#55b7ff'
	},
	{
		key: 'Wombat',
		color: '#bfa38b'
	},
	{
		key: 'dForce',
		color: '#9d2df4'
	},
	{
		key: 'Apeswap',
		color: '#ffb300'
	},
	{
		key: 'BabySwap',
		color: '#e89d39'
	},
	{
		key: 'PancakeSwap',
		color: '#d1884f'
	}
];

const ChartUSDTDetail: ChartDetailProps[] = [
	{
		key: 'Aave',
		color: '#3fb4c5'
	},
	{
		key: 'Curve',
		color: '#8ab4f7'
	},
	{
		key: 'Other',
		color: '#000000'
	},
	{
		key: 'Yearn',
		color: '#ef498b'
	},
	{
		key: 'Bancor',
		color: '#14b9d4'
	},
	{
		key: 'Uniswap',
		color: '#ff00c6'
	},
	{
		key: 'Balancer',
		color: '#27292f'
	},
	{
		key: 'Compound',
		color: '#01d394'
	},
	{
		key: 'Treasury',
		color: '#5f395c'
	},
	{
		key: 'Sushiswap',
		color: '#f752a1'
	},
	{
		key: 'GMX',
		color: '#4f1df6'
	},
	{
		key: 'Hundred',
		color: '#02cefe'
	},
	{
		key: 'Radiant',
		color: '#705aff'
	},
	{
		key: 'Benqi',
		color: '#11baf0'
	},
	{
		key: 'HashFlow',
		color: '#0f1319'
	},
	{
		key: 'IronBank',
		color: '#96f077'
	},
	{
		key: 'Pangolin',
		color: '#ffc800'
	},
	{
		key: 'Platypus',
		color: '#00f152'
	},
	{
		key: 'TraderJoe',
		color: '#a7adf8'
	},
	{
		key: 'Dodo',
		color: '#ffe804'
	},
	{
		key: 'Cream',
		color: '#69e2dc'
	},
	{
		key: 'Venus',
		color: '#3a78ff'
	},
	{
		key: 'Biswap',
		color: '#1263f1'
	},
	{
		key: 'Planet',
		color: '#55b7ff'
	},
	{
		key: 'Wombat',
		color: '#bfa38b'
	},
	{
		key: 'Apeswap',
		color: '#ffb300'
	},
	{
		key: 'BabySwap',
		color: '#e89d39'
	},
	{
		key: 'Coinwind',
		color: '#042860'
	},
	{
		key: 'Ellipsis',
		color: '#c660db'
	},
	{
		key: 'KnightSwap',
		color: '#ff720d'
	},
	{
		key: 'PancakeSwap',
		color: '#d1884f'
	}
];

const ChartDAIDetail: ChartDetailProps[] = [
	{
		key: 'Aave',
		color: '#3fb4c5'
	},
	{
		key: 'dYdX',
		color: '#6866ff'
	},
	{
		key: 'Curve',
		color: '#8ab4f7'
	},
	{
		key: 'Other',
		color: '#000000'
	},
	{
		key: 'Yearn',
		color: '#ef498b'
	},
	{
		key: 'Bancor',
		color: '#14b9d4'
	},
	{
		key: 'Uniswap',
		color: '#ff00c6'
	},
	{
		key: 'Balancer',
		color: '#27292f'
	},
	{
		key: 'Compound',
		color: '#01d394'
	},
	{
		key: 'Treasury',
		color: '#5f395c'
	},
	{
		key: 'Sushiswap',
		color: '#f752a1'
	},
	{
		key: 'Hundred',
		color: '#02cefe'
	},
	{
		key: 'Radiant',
		color: '#705aff'
	},
	{
		key: 'MUX',
		color: '#41def4'
	},
	{
		key: 'Premia',
		color: '#5294ff'
	},
	{
		key: 'WePiggy',
		color: '#dc2e7c'
	},
	{
		key: 'Axial',
		color: '#eaab50'
	},
	{
		key: 'Benqi',
		color: '#11baf0'
	},
	{
		key: 'InsurAce',
		color: '#65686d'
	},
	{
		key: 'IronBank',
		color: '#96f077'
	},
	{
		key: 'Pangolin',
		color: '#ffc800'
	},
	{
		key: 'Platypus',
		color: '#00f152'
	},
	{
		key: 'KyberSwap',
		color: '#33ca9d'
	},
	{
		key: 'TraderJoe',
		color: '#a7adf8'
	},
	{
		key: 'NereusFinance',
		color: '#4d4aec'
	},
	{
		key: 'Cream',
		color: '#69e2dc'
	},
	{
		key: 'Valas',
		color: '#494846'
	},
	{
		key: 'Venus',
		color: '#3a78ff'
	},
	{
		key: 'Wombat',
		color: '#bfa38b'
	},
	{
		key: 'dForce',
		color: '#9d2df4'
	},
	{
		key: 'Apeswap',
		color: '#ffb300'
	},
	{
		key: 'Ellipsis',
		color: '#c660db'
	},
	{
		key: 'KnightSwap',
		color: '#ff720d'
	},
	{
		key: 'PancakeSwap',
		color: '#d1884f'
	}
];

const ChartFRAXDetail: ChartDetailProps[] = [
	{
		key: 'Aave',
		color: '#3fb4c5'
	},
	{
		key: 'Frax',
		color: '#000000'
	},
	{
		key: 'Curve',
		color: '#8ab4f7'
	},
	{
		key: 'Other',
		color: '#000000'
	},
	{
		key: 'Uniswap',
		color: '#ff00c6'
	},
	{
		key: 'Alchemix',
		color: '#f5bf9a'
	},
	{
		key: 'Treasury',
		color: '#5f395c'
	},
	{
		key: 'Sushiswap',
		color: '#f752a1'
	},
	{
		key: 'Saddle',
		color: '#4b11f2'
	},
	{
		key: 'dForce',
		color: '#9d2df4'
	},
	{
		key: 'Hundred',
		color: '#02cefe'
	},
	{
		key: 'Dex',
		color: '#4ea8de'
	},
	{
		key: 'Axial',
		color: '#eaab50'
	},
	{
		key: 'Platypus',
		color: '#00f152'
	},
	{
		key: 'Planet',
		color: '#55b7ff'
	},
	{
		key: 'Apeswap',
		color: '#ffb300'
	},
	{
		key: 'PancakeSwap',
		color: '#d1884f'
	}
];

const ChartBUSDDetail: ChartDetailProps[] = [
	{
		key: 'Aave',
		color: '#3fb4c5'
	},
	{
		key: 'Curve',
		color: '#8ab4f7'
	},
	{
		key: 'Other',
		color: '#000000'
	},
	{
		key: 'Yearn',
		color: '#ef498b'
	},
	{
		key: 'Strike',
		color: '#107def'
	},
	{
		key: 'Uniswap',
		color: '#ff00c6'
	},
	{
		key: 'Dodo',
		color: '#ffe804'
	},
	{
		key: 'Cream',
		color: '#69e2dc'
	},
	{
		key: 'Venus',
		color: '#3a78ff'
	},
	{
		key: 'Wombat',
		color: '#bfa38b'
	},
	{
		key: 'Apeswap',
		color: '#ffb300'
	},
	{
		key: 'JulSwap',
		color: '#dc3545'
	},
	{
		key: 'BabySwap',
		color: '#e89d39'
	},
	{
		key: 'Ellipsis',
		color: '#c660db'
	},
	{
		key: 'KnightSwap',
		color: '#ff720d'
	},
	{
		key: 'PancakeSwap',
		color: '#d1884f'
	}
];

const ChartDetails = () => {
	const { dataUSDC, dataUSDT, dataDAI, dataFRAX, dataBUSD } =
		useAnalyticState();
	const currentNetwork = useNetworkContext();
	return (
		<Box sx={main}>
			<Box sx={wrap}>
				<Box sx={chart}>
					{dataUSDC.length > 0 ? (
						<CustomAreaChart
							data={dataUSDC}
							title={`Total USDC TVL (${currentNetwork.name})`}
							detail={ChartUSDCDetail}
						/>
					) : (
						<Skeleton
							variant='rounded'
							sx={skeleton}
						/>
					)}
				</Box>
				<Box sx={chart}>
					{dataUSDT.length > 0 ? (
						<CustomAreaChart
							data={dataUSDT}
							title={`Total USDT TVL (${currentNetwork.name})`}
							detail={ChartUSDTDetail}
						/>
					) : (
						<Skeleton
							variant='rounded'
							sx={skeleton}
						/>
					)}
				</Box>
			</Box>

			<Box sx={wrap}>
				<Box sx={chart}>
					{dataDAI.length > 0 ? (
						<CustomAreaChart
							data={dataDAI}
							title={`Total DAI TVL (${currentNetwork.name})`}
							detail={ChartDAIDetail}
						/>
					) : (
						<Skeleton
							variant='rounded'
							sx={skeleton}
						/>
					)}
				</Box>
				<Box sx={chart}>
					{dataFRAX.length > 0 ? (
						<CustomAreaChart
							data={dataFRAX}
							title={`Total FRAX TVL (${currentNetwork.name})`}
							detail={ChartFRAXDetail}
						/>
					) : (
						<Skeleton
							variant='rounded'
							sx={skeleton}
						/>
					)}
				</Box>
			</Box>

			{!dataBUSD.length ? (
				<></>
			) : (
				<Box sx={wrap}>
					<Box sx={chart}>
						{dataBUSD.length > 0 ? (
							<CustomAreaChart
								data={dataBUSD}
								title={`Total BUSD TVL (${currentNetwork.name})`}
								detail={ChartBUSDDetail}
							/>
						) : (
							<Skeleton
								variant='rounded'
								sx={skeleton}
							/>
						)}
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default ChartDetails;
