import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export function FraxTitleTooltip() {
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
				}}
			>
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
					width: 1200
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
				disableRestoreFocus
			>
				<Box
					sx={{
						border: '2px solid #8c00ef',
						borderRadius: '4px',
						zIndex: 100
					}}
				>
					<Typography sx={{ p: 1 }}>
						Frax Protocol is a decentralized platform that issues three
						stablecoins: FRAX, FPI, and frxETH. It also has three subprotocols:
						Fraxlend, Fraxswap, and Fraxferry. Fraxlend is a permissionless
						lending market for Frax-based stablecoins. Fraxswap is a native AMM
						used by the Frax Protocol for rebalancing collateral and other
						functions. Fraxferry transfers natively issued Frax Protocol tokens
						across many blockchains. The governance token of the entire Frax
						ecosystem is Frax Share (FXS), which accrues fees, revenue, and
						excess collateral value.{' '}
						<Link
							to='https://docs.frax.finance/'
							target='_blank'
						>
							Read more
						</Link>
					</Typography>
				</Box>
			</Popover>
		</div>
	);
}
