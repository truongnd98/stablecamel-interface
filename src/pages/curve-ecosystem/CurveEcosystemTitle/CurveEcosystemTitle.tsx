import { Box, Chip, Menu, MenuItem, SxProps, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { listEcosystem } from '../../../components/MainSideBar/ListNav';
import { v4 } from 'uuid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Page } from '../../../components/MainSideBar/types';
import { CurveEcosystemTitleTooltip } from './CurveEcosystemTitleTooltip';

const pageTitle: SxProps = {
  width: '100%',
  height: 32,
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

const chipLabel: SxProps = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  img: {
    width: 20,
    height: 20,
  },
};

const menu: SxProps = {
  borderRadius: '8px',
};

const menuItem: SxProps = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  img: {
    width: 20,
    height: 20,
  },
};

const wrap: SxProps = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

export function CurveEcosystemTitle() {
  const { network } = useParams();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickItem = (network: string) => {
    navigate(`/${Page.CURVE_ECOSYSTEM}/${network}`);
    setAnchorEl(null);
  };
  return (
    <Box sx={pageTitle}>
      <Box sx={wrap}>
        <Typography
          variant='h5'
          color='primary'
        >
          FRAX Analytics
        </Typography>

        <CurveEcosystemTitleTooltip />
      </Box>

      <Chip
        id='network'
        aria-controls={open ? 'network-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        clickable
        label={
          <Box sx={chipLabel}>
            <b>{network}</b>
            <KeyboardArrowDownIcon />
          </Box>
        }
      />
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        id='network-menu'
        MenuListProps={{
          'aria-labelledby': 'network',
        }}
        sx={menu}
      >
        {listEcosystem.map((network: string) => (
          <MenuItem
            key={v4()}
            sx={menuItem}
            onClick={() => {
              handleClickItem(network);
            }}
          >
            {network}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
