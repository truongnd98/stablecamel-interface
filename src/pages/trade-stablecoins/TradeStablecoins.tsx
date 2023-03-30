import { Box, SxProps } from '@mui/material';
import { TradingWidget } from './components/TradingWidget';

const main: SxProps = {
	width: 'calc(100% - 230px)',
	height: '100vh',
	marginLeft: '230px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#f5f5f5'
};

export default function TradeStablecoin() {
	return (
		<Box sx={main}>
			<TradingWidget />
		</Box>
	);
}
