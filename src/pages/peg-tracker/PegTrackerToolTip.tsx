import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/material";
import CoingeckoLogo from "../../assets/logos/coingecko-logo.png";

export function PegTrackerToolTip() {
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
            We use Coingecko API to track price data of listed stablecoins and
            calculate the total TVL and supply per stablecoin based on network
            availability of our dashboards.
          </Typography>
          <Typography
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            Data source:{" "}
            <img
              src={CoingeckoLogo}
              alt="Stable Camel - Activity Monitor Coingecko logo"
              style={{
                height: 46,
              }}
            />
          </Typography>
        </Box>
      </Popover>
    </div>
  );
}
