import { Box, SxProps } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MainSideBar from '../MainSideBar';

const main: SxProps = {
  width: '100%',
  height: '100vh',
  display: 'flex',
};

const content: SxProps = {
  width: 'calc(100% - 260px)',
  marginLeft: '260px',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
  height: 'fit-content',
};

export function ApplicationLayout() {
  return (
    <Box sx={main}>
      <MainSideBar />
      <Box sx={content}>
        <Outlet />
      </Box>
    </Box>
  );
}
