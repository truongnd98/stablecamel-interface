import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/material';

export default function GraveYardToolTip() {
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
					alignItems: 'center'
				}}>
				<InfoIcon
					color='primary'
					sx={{
						height: 22
					}}
				/>
			</Box>
			<Popover
				id='mouse-over-popover'
				sx={{
					pointerEvents: 'none',
					//   opacity: 0.9,
					width: 820
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus>
				<Box
					sx={{
						border: '2px solid #8c00ef',
						borderRadius: '4px'
					}}>
					<Typography sx={{ p: 1 }}>
						We've collected thousands of stablecoin pool contract addresses to
						track their Total Value Locked (TVL) across major chains.
					</Typography>
					<Typography
						sx={{
							p: 1,
							display: 'flex',
							alignItems: 'center',
							gap: '12px'
						}}>
						Data source:{' '}
						<img
							src='https://dune.com/docs/reference/images/dune-standard-logo.svg'
							alt='dune-logo'
							style={{
								height: 20
							}}
						/>
					</Typography>
				</Box>
			</Popover>
		</div>
	);
}
