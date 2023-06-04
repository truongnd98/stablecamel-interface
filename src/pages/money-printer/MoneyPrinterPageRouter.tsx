import { Box, SxProps } from "@mui/material";
import { useParams } from "react-router-dom";
import { MoneyPrinterPage } from "./MoneyPrinterPage";
import { CurveCrvUSDPage } from "../curve-crvusd/CurveCrvUSDPage";
import { Helmet } from "react-helmet-async";
import { USDTMoneyPrinterPage } from "../usdt-money-printer/USDTMoneyPrinterPage";

const container: SxProps = {
  width: "100%",
  // padding: '20px 28px',
  // paddingBottom: '0',
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  // gap: '28px'
};

export function MoneyPrinterPageRouter() {
  const { network } = useParams();

  return (
    <Box sx={container}>
      <Helmet>
        <meta
          property="og:description"
          content={`Stable Camel Money Printer ${
            network === "usdc"
              ? "USDC"
              : network === "crvUSD"
              ? "crvUSD"
              : network === "usdt"
              ? "USDT"
              : ""
          } dashboard`}
        />
        <meta
          property="og:image"
          content={`https://www.stablecamel.com/thumbnails/thumbnail-moneyprinter-${network?.toLocaleLowerCase()}.png`}
        />
      </Helmet>
      {network === "usdc" ? <MoneyPrinterPage /> : <></>}
      {network === "crvUSD" ? <CurveCrvUSDPage /> : <></>}
      {network === "usdt" ? <USDTMoneyPrinterPage /> : <></>}
    </Box>
  );
}
