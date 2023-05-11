import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/material';
import { PopoverTooltipProps } from './types';

export function PopoverTooltip({ content, component }: PopoverTooltipProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Box
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {component}
      </Box>
      <Popover
        id='mouse-over-popover'
        sx={{
          pointerEvents: 'none',
          //   opacity: 0.9,
          width: 1200,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box
          sx={{
            border: '2px solid #8c00ef',
            borderRadius: '4px',
          }}
        >
          {content}
        </Box>
      </Popover>
    </div>
  );
}
