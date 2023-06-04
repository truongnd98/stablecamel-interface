import { Box, SxProps, Typography } from "@mui/material";
import { USDTMoneyPrinterPageTitle } from "./USDTMoneyPrinterPageTitle";
import { LiquidityAggregation1Page } from "./LiquidityAggregation1Page";
import { LiquidityAggregation2Page } from "./LiquidityAggregation2Page";
import { LiquidityAggregation3Page } from "./LiquidityAggregation3Page";
import { LiquidityAggregation4Page } from "./LiquidityAggregation4Page";
import { LiquidityAggregation5Page } from "./LiquidityAggregation5Page";
import { USDTLockedInBridgesPage } from "./USDTLockedInBridgesPage";
import { useGetUSDTMoneyPrinterData } from "../../stores/usdt-moneyprinter/hooks";

const container: SxProps = {
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "fit-content",
  gap: "28px",
};

export function USDTMoneyPrinterPage() {

  const handleElementScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section // set time out for the render can catch after api fetched
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
        console.log("!", id);
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
        <Typography variant="h5" color="primary">
            Liquidity Aggregation 1 - Total Supply
        </Typography>
        <LiquidityAggregation1Page />
        <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            Liquidity Aggregation 2 - USDT TVL in DEXs and Lending Protocols
          </Typography>
        </Box>
        <LiquidityAggregation2Page />
        <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            Liquidity Aggregation 3 - USDT Balance on Exchanges
          </Typography>
        </Box>
        <LiquidityAggregation3Page />
        <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            Liquidity Aggregation 4 - USDT Deployed to Lending Protocols
          </Typography>
        </Box>
        <LiquidityAggregation4Page />
        <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            Liquidity Aggregation 5 - USDC Deployed to DEXs
          </Typography>
        </Box>
        <LiquidityAggregation5Page />
        <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            USDT Locked in Bridges
          </Typography>
        </Box>
        <USDTLockedInBridgesPage />
      </Box>
    </Box>
  );
}
