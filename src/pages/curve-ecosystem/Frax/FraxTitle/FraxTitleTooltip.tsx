import * as React from "react";
// import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

export function FraxTitleTooltip() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const isMobile = useMediaQuery("(max-width:1000px)", { noSsr: true });

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // console.log("isMobile -->", isMobile);

  const handleTooltipClick = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile) {
      open ? handlePopoverClose() : handlePopoverOpen(e);
    }
    return false;
  };

  //Tooltip
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: "500px",
      fontSize: 11,
    },
  }));

  return (
    <div>
      <Box
        // aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        onClick={(e) => handleTooltipClick(e)}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <LightTooltip
          id="mouse-over-popover"
          disableFocusListener
          // disableTouchListener
          open={open}
          placement="bottom-start"
          sx={{
            backgroundColor: "transparent",
          }}
          title={
            <Box
              sx={{
                border: "2px solid #8c00ef",
                backgroundColor: "#fff",
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px",
              }}
            >
              <Typography sx={{ p: 1, color: "rgba(0, 0, 0, 0.87)" }}>
                Frax Protocol is a decentralized platform that issues three
                stablecoins: FRAX, FPI, and frxETH. It also has three
                subprotocols: Fraxlend, Fraxswap, and Fraxferry. Fraxlend is a
                permissionless lending market for Frax-based stablecoins.
                Fraxswap is a native AMM used by the Frax Protocol for
                rebalancing collateral and other functions. Fraxferry transfers
                natively issued Frax Protocol tokens across many blockchains.
                The governance token of the entire Frax ecosystem is Frax Share
                (FXS), which accrues fees, revenue, and excess collateral value.{" "}
                <Link to="https://docs.frax.finance/" target="_blank">
                  Read more
                </Link>
              </Typography>
            </Box>
          }
        >
          <InfoIcon
            color="primary"
            sx={{
              height: 22,
            }}
          />
        </LightTooltip>
      </Box>
    </div>
  );
}
