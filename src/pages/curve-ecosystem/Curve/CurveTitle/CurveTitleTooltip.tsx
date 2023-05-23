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

export function CurveTitleTooltip() {
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
                border: "1.2px solid #8c00ef",
                backgroundColor: "#fff",
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px",
              }}
            >
              <Typography sx={{ p: 1, color: "rgba(0, 0, 0, 0.87)" }}>
                Curve is one of DeFi's leading AMM, (Automated Market Maker).
                Hundreds of liquidity pools have been launched through Curve's
                factory and incentivized by Curve's DAO. Users rely on Curve's
                proprietary formulas to provide high liquidity, low slippage,
                low fee transactions among ERC-20 tokens.{" "}
                <Link to="https://resources.curve.fi/" target="_blank">
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
