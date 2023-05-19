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

export function CurveCrvUSDPageTitleTooltip() {
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
              crvUSD is Curve's new decentralized stablecoin. More metrics will be added as developments continue

The most notable aspect of crvUSD is LLAMMA, which stands for "Lending-Liquidating AMM Algorithm."

On other lending platforms, if your token's value decreases, your loan's stability deteriorates quickly, leading to immediate liquidation. This unpleasant experience results in frequent price fluctuations, yet there have been few attempts to improve this process.

In the $crvUSD system, after providing your collateral, your portfolio contains 100% of that collateral. If the LLAMMA detects a decline in the collateral's value, it automatically converts your portfolio into $crvUSD. If the value increases, your collateral is repurchased. As a result, instead of an abrupt liquidation, the process takes place gradually over a continuous range.

This approach significantly reduces potential losses and enables more hands-off management of your position. Nonetheless, liquidations are still possible and remain a crucial component of the ecosystem. Conveniently, the $crvUSD protocol also provides self-liquidation in such cases..{" "}
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
