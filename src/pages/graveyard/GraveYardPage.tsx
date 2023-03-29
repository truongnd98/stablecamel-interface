import { Box, SxProps, Typography } from '@mui/material';
import Footer from '../../components/Footer';
import { useGetListGraveYard } from '../../stores/graveyard/hooks';
import GraveYardTable from './GraveYardTable';
import { GraveYardTitle } from './GraveYardTitle';

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
	minHeight: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	gap: '20px'
};

const wrapData: SxProps = {
	display: 'flex',
	flexDirection: 'column',
	gap: '20px'
};

export default function GraveYardPage() {
	useGetListGraveYard();
	return (
		<Box sx={container}>
			<Box sx={main}>
				<Box sx={wrapData}>
					<GraveYardTitle />
					<GraveYardTable />
				</Box>
				<Footer />
			</Box>
		</Box>
	);
}
