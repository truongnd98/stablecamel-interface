import { Box, SxProps } from '@mui/material';
import Footer from '../../components/Footer';
import { useGetListPegTracker } from '../../stores/pegtracker/hooks';
import { PegTrackerTable } from './PegTrackerTable';
import { PegTrackerTitle } from './PegTrackerTitle';

const container: SxProps = {
	width: 'calc(100% - 240px)',
	marginLeft: '240px',
	padding: '20px 28px',
	paddingBottom: '0',
	display: 'flex',
	flexDirection: 'column',
	minHeight: '100vh',
	backgroundColor: '#f5f5f5',
	height: 'fit-content'
};

const main: SxProps = {
	minHeight: 'calc(100vh - 20px)',
	display: 'flex',
	flexDirection: 'column',
	// justifyContent: 'space-between',
	gap: '28px'
};

export function PegTrackerPage() {
	useGetListPegTracker();

	return (
		<Box sx={container}>
			<Box sx={main}>
				<PegTrackerTitle />
				<PegTrackerTable />
				<Footer />
			</Box>
		</Box>
	);
}
