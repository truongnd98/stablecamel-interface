import { Box, SxProps } from '@mui/material';
import { useCurveEcosystemState } from '../../../stores/curve-ecosystem/hooks';
import CustomAreaChart from '../../../components/AreaChart';
import { ChartDetailProps } from '../../../components/AreaChart/types';
import randomColor from 'randomcolor';

const main: SxProps = {
	width: '100%',
	height: 380,
	display: 'flex',
	justifyContent: 'space-between',
	gap: '28px'
};

const cumulative3CRV: ChartDetailProps = {
	key: 'total_3crv_usd',
	color: '#6d3099',
	name: 'cvxCRV'
};

const crvFarmed: ChartDetailProps = {
	key: 'cum_farmed_crv',
	color: '#6d3099',
	name: 'CRV'
};

const fsxFarmed: ChartDetailProps[] = [
	{
		key: 'fxs_to_LPs_usd',
		color: randomColor({ seed: 'fxs_to_LPs_usd' }),
		name: 'to LPs'
	},
	{
		key: 'fxs_to_vlCVX_usd',
		color: randomColor({ seed: 'fxs_to_vlCVX_usd' }),
		name: 'to vlCVX'
	},
	{
		key: 'fxs_to_cvxFXS_usd',
		color: randomColor({ seed: 'fxs_to_cvxFXS_usd' }),
		name: 'to cvxFXS'
	}
];



export function ConvexContentCumulative() {
	const { convex } = useCurveEcosystemState();

	return !convex ? (
		<></>
	) : (
		<>
		<Box sx={main}>
			  <CustomAreaChart
            data={convex.cumulative_3crv}
            title={'Cumulative 3CRV Admin Fees Earned by Convex ($)'}
            detail={cumulative3CRV}
            id='cumulative-3crv'
						legend
          />
				<CustomAreaChart
            data={convex.crv_farmed}
            title={'Cumulative Farmed CRV ($)'}
            detail={crvFarmed}
            id='crv-farmed'
						legend
          />
		</Box>
		<Box sx={main}>
			<CustomAreaChart
            data={convex.fsx_farmed}
            title={'Cumulative Farmed FSX ($)'}
            detail={fsxFarmed}
            id='fsx-farmed'
						legend
          />
		</Box>
		</>
	);
}
