import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/material";
import DefillamaLogo from "../../assets/logos/defillama-logo.png";

export default function YieldTooltip() {
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
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <InfoIcon
          color="primary"
          sx={{
            height: 22,
          }}
        />
      </Box>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          //   opacity: 0.9,
          width: 820,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Box
          sx={{
            border: "1.2px solid #8c00ef",
            borderRadius: "4px",
          }}
        >
          <Typography sx={{ p: 1 }}>
            Tracking Total Value Locked and Total APY of 1,000 stablecoin pools
            with $10K+ TVL over 156 protocols on 33 chains.
          </Typography>
          <Typography
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            Data source:
            <img
              src={DefillamaLogo}
              alt="defillama-logo"
              style={{
                height: 36,
              }}
            />
          </Typography>
        </Box>
      </Popover>
    </div>
  );
}
