import { Box, SxProps, Typography } from "@mui/material";
import { USDTMoneyPrinterPageTitle } from "./USDTMoneyPrinterPageTitle";
import { LiquidityAggregation1Page } from "./LiquidityAggregation1Page";
import { LiquidityAggregation2Page } from "./LiquidityAggregation2Page";
import { LiquidityAggregation3Page } from "./LiquidityAggregation3Page";
import { LiquidityAggregation4Page } from "./LiquidityAggregation4Page";
import { LiquidityAggregation5Page } from "./LiquidityAggregation5Page";
import { USDTLockedInBridgesPage } from "./USDTLockedInBridgesPage";
import { useGetUSDTMoneyPrinterData } from "../../stores/usdt-moneyprinter/hooks";
import { USDTMoneyPrinterMetric } from "./USDTMoneyPrinterMetric";

const container: SxProps = {
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "fit-content",
  gap: "28px",
  ".animation-active": {
    position: "relative",
    "::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      borderRadius: "8px",
      animation: "noti 1 4s",
      animationDelay: "1.2s",
      animationFillMode: "forwards",
    },
  },
  "@keyframes noti": {
    "0%": {
      backgroundColor: "transparent",
      display: "block",
    },
    "30%": {
      backgroundColor: "#cf99fc80",
    },
    "99%": {
      backgroundColor: "transparent",
    },
    "100%": {
      display: "none",
      zIndex: -1,
    },
  },
};

export function USDTMoneyPrinterPage() {
  const handleElementScroll = (id: string) => {
    const element = document.getElementById(id);
    const elementWrap = document.getElementById(id + "-wrap");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section // set time out for the render can catch after api fetched
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
        elementWrap?.classList.add("animation-active");
        console.log("");
      }, 1000);
    }
  };

  const hash = window.location.hash;

  const id = hash.split("#")[1] ? hash.split("#")[1].toString() : "#";

  useGetUSDTMoneyPrinterData(() => handleElementScroll(id));

  return (
    <Box sx={container}>
      <Box>
        <USDTMoneyPrinterPageTitle />
      </Box>
      <Box>
        <USDTMoneyPrinterMetric />
      </Box>
      <Box>
        {/* <Typography variant="h5" color="primary">
          Total Supply
        </Typography> */}
        <LiquidityAggregation1Page />
        {/* <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            USDT TVL in DEXs and Lending Protocols
          </Typography>
        </Box> */}
        <LiquidityAggregation2Page />
        {/* <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            USDT Balance on Exchanges
          </Typography>
        </Box> */}
        <LiquidityAggregation3Page />
        {/* <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            USDT Deployed to Lending Protocols
          </Typography>
        </Box> */}
        <LiquidityAggregation4Page />
        {/* <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            USDC Deployed to DEXs
          </Typography>
        </Box> */}
        <LiquidityAggregation5Page />
        {/* <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            USDT Locked in Bridges
          </Typography>
        </Box> */}
        <USDTLockedInBridgesPage />
      </Box>
    </Box>
  );
}
