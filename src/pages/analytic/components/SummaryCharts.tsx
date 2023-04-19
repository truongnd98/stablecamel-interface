import React, { Suspense, useEffect, useState } from 'react';
import { Box, SxProps, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useAnalyticState } from '../../../stores/analytic/hooks';
import CustomAreaChart from '../../../components/AreaChart';
import { useNetworkContext } from '../AnalyticPage';
import { StablecoinChartDetail, stableCoinDetailProps } from '../type';
import LazyLoad from 'react-lazyload';
import CircularProgress from '@mui/material/CircularProgress';

const main: SxProps = {
	width: '100%',
	height: 380,
	display: 'flex',
	justifyContent: 'space-between'
};

const each: SxProps = {
	width: 'calc(50% - 14px)',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: '#ffffff',
	borderRadius: '8px',
	position: 'relative'
};

const SummaryCharts = () => {
	const { dataTVL, dataSupply } = useAnalyticState();
	const currentNetwork = useNetworkContext();

	return (
		<Box sx={main}>
			<Box sx={each}>
				<CustomAreaChart
					data={dataTVL}
					title={`Stablecoin TVL (${currentNetwork.name})`}
					detail={stableCoinDetailProps.filter(
						(item: StablecoinChartDetail) =>
							dataTVL &&
							dataTVL.length > 0 &&
							(typeof dataTVL[0][item.key] !== 'undefined' ||
								typeof dataTVL[dataTVL.length - 1][item.key] !== 'undefined')
					)}
					legend
					id='chart-tvl'
				/>
			</Box>

			<Box sx={each}>
				<CustomAreaChart
					data={dataSupply}
					title={`Stablecoin Supply (${currentNetwork.name})`}
					detail={stableCoinDetailProps.filter(
						(item: StablecoinChartDetail) =>
							dataSupply &&
							dataSupply.length > 0 &&
							(typeof dataSupply[dataSupply.length - 1][item.key] !==
								'undefined' ||
								typeof dataSupply[0][item.key] !== 'undefined')
					)}
					legend
					id='chart-supply'
				/>
			</Box>
		</Box>
	);
};

export default SummaryCharts;
