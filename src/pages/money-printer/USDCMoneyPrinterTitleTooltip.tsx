import * as React from "react";
import Typography from "@mui/material/Typography";
import StarsIcon from "@mui/icons-material/Stars";
import {
  Box,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
  useMediaQuery,
} from "@mui/material";
function USDCMoneyPrinterTitleTooltip() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const isMobile = useMediaQuery("(max-width:1000px)", { noSsr: true });

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
                The USDC Money Printer dashboard offers real-time visibility
                into the movement of USD Coin (USDC) across the crypto
                ecosystem. It enables users to monitor the distribution of USDC
                to CEX balances, DEX liquidity pools (LPs), lending protocols,
                and bridges. The USDC Money Printer dashboard received a
                shoutout from Dune (
                <Typography
                  component="a"
                  href="https://twitter.com/duneanalytics/status/1651898873424629761"
                  target="_blank"
                >
                  Tweet
                </Typography>
                ) and ranks among the top 220 most favorited dashboards out of
                total 76,660 (
                <Typography
                  component="a"
                  href="https://dune.com/browse/dashboards?order=favorites&time_range=all&page=11"
                  target="_blank"
                >
                  Dune
                </Typography>
                ).
                <br />
                <Typography
                  sx={{
                    // p: 1,
                    mt: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  Data source:{" "}
                  <img
                    src="..\logos\dune-logo.png"
                    alt="Stable Camel - Stablecoin TVL Dune logo"
                    style={{
                      height: 36,
                    }}
                  />
                </Typography>
              </Typography>
            </Box>
          }
        >
          <StarsIcon
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

export default React.memo(USDCMoneyPrinterTitleTooltip);
