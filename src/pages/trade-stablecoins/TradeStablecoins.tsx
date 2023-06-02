import { Box, SxProps } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { TradeStablecoinsDisclaimer } from "./components/TradeStablecoinsDisclaimer";
import { TradingWidget } from "./components/TradingWidget";

const main: SxProps = {
  minHeight: "calc(100vh - 48px - 48px - 28px)",
  mb: "0",
  //   height: '100vh',
};

export default function TradeStablecoin({ action }: { action: string }) {
  const stablyUrl =
    action === "buy"
      ? "https://ramp.stably.io/?integrationId=stablecamel-5c58e755&asset=USDS&asset=USD&asset=VeUSD&asset=USDC&asset=USDT&asset=FRAX&asset=USDP&asset=TUSD&asset=DAI&asset=AVALANCHE_BRIDGED_DAI&asset=GUSD&lock=true"
      : "https://ramp.stably.io/?integrationId=stablecamel-5c58e755";

  return (
    <>
      <Helmet>
        {/* <title>Trade Stablecoin</title> */}

        <meta
          property="og:description"
          content={`Stable Camel ${
            action === "buy" ? "Buy" : "Sell"
          } Stablecoin dashboard`}
        />
        <meta
          property="og:image"
          content={`https://www.stablecamel.com/thumbnails/thumbnail-${action}-stablecoins.png`}
        />
      </Helmet>
      <Box sx={main}>
        <TradingWidget url={stablyUrl} />
        <TradeStablecoinsDisclaimer />
      </Box>
    </>
  );
}
