import { Box, SxProps, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import {
  useFetchData,
  useMoneyPrinterState,
} from "../../stores/moneyprinter/hooks";
import { MoneyPrinterGroupLayout } from "./MoneyPrinterGroup/MoneyPrinterGroupLayout";
import { MoneyPrinterGroupLayoutBalance } from "./MoneyPrinterGroup/MoneyPrinterGroupLayoutBalance";
import { MoneyPrinterMainChart } from "./MoneyPrinterMainChart/MoneyPrinterMainChart";
import { MoneyPrinterMetrics } from "./MoneyPrinterMetrics/MoneyPrinterMetrics";
import { useEffect } from "react";

const container: SxProps = {
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "fit-content",
};

const main: SxProps = {
  minHeight: "calc(100vh - 20px)",
  display: "flex",
  flexDirection: "column",
  // justifyContent: 'space-between',
  gap: "28px",
};

const group: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export function MoneyPrinterPage() {
  const {
    exchangeBalanceByCEXList,
    usdcDeployedLendingProtocolList,
    usdcDeployedToLPs,
    usdcDeployedBridgesByBridge,
  } = useMoneyPrinterState();
  useFetchData();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleElementScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.split("#")[1].toString();
      handleElementScroll(id);
    }
  }, []);

  return (
    <>
      <Helmet>
        {/* <title>Money Printer Page</title> */}
        <meta
          property="og:description"
          content="Stable Camel Money Printer page"
        />
        <meta
          property="og:image"
          content={`${baseUrl}/thumbnails/thumbnail-moneyprinter.png`}
        />
      </Helmet>
      <Box sx={container}>
        <Box sx={main}>
          <Box sx={group}>
            <Typography
              variant="h5"
              color="primary"
              sx={{
                "@media (max-width: 1280px)": {
                  fontSize: "18px !important",
                },
              }}
            >
              USDC Money Printer (Ethereum)
            </Typography>
            <MoneyPrinterMetrics />
            <MoneyPrinterMainChart />
          </Box>
          <Box sx={group}>
            {/* <Typography variant="h5" color="primary">
              USDC Exchange Balances
            </Typography> */}
            <MoneyPrinterGroupLayoutBalance
              data={exchangeBalanceByCEXList}
              title="USDC Exchange Balances"
            />
          </Box>
          <Box sx={group}>
            {/* <Typography variant="h5" color="primary">
              USDC Deployed to Lending Protocols
            </Typography> */}
            <MoneyPrinterGroupLayout
              data={usdcDeployedLendingProtocolList}
              title="USDC Deployed to Lending Protocols"
            />
          </Box>
          <Box sx={group}>
            {/* <Typography variant="h5" color="primary">
              USDC Deployed to LPs
            </Typography> */}
            <MoneyPrinterGroupLayout
              data={usdcDeployedToLPs}
              title="USDC Deployed to LPs"
            />
          </Box>
          <Box sx={group}>
            {/* <Typography variant="h5" color="primary">
              USDC Deployed to Bridges
            </Typography> */}
            <MoneyPrinterGroupLayout
              data={usdcDeployedBridgesByBridge}
              title="USDC Deployed to Bridges"
            />
          </Box>
          {/* <Footer /> */}
        </Box>
      </Box>
    </>
  );
}
