import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/material";
import CoingeckoLogo from "../../assets/logos/coingecko-logo.png";

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
          maxWidth: { sm: 600, md: 820, lg: 1020 },
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
            We{"’"}ve conducted internal research and come up with these rules
            to determine whether a stablecoin is barely alive or dead:
            <br />
            • If the current price is in $0.90 - $0.95 AND 3M mcap change is
            positive, the stablecoin is barely alive
            <br />• If the current price is in $0.90 - $1.00 AND 3M mcap change
            is negative, the stablecoin is dead <br />• If the current price is{" "}
            {"<"}
            $0.90, the stablecoin is dead <br />• If the current price is not
            available on Coingecko, then stablecoin is dead
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
              alt="Stable Camel - Graveyard Coingecko icon"
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
