import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/material";
import DuneLogo from "../../assets/logos/dune-logo.png";

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
            • If the current price is in $0.90 - $0.95 AND 12M mcap change is
            positive, the stablecoin is barely alive
            <br />• If the current price is in $0.90 - $1.00 AND 12M mcap change
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
              src="data:image/png;base64,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"
              alt="coingecko-logo"
              style={{
                height: 20,
              }}
            />
          </Typography>
        </Box>
      </Popover>
    </div>
  );
}
