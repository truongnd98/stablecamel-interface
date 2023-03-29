import { Box, SxProps } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MainSideBar from '../MainSideBar';

const main: SxProps = {
	width: '100%',
	height: '100vh',
	display: 'flex'
};

export function ApplicationLayout() {
	return (
		<Box sx={main}>
			<MainSideBar />
			<Outlet />
		</Box>
	);
}
