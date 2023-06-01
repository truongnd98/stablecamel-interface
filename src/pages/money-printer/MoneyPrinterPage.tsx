import { Box, SxProps, Typography } from "@mui/material";
import {
  useFetchData,
  useMoneyPrinterState,
} from "../../stores/moneyprinter/hooks";
import { MoneyPrinterGroupLayout } from "./MoneyPrinterGroup/MoneyPrinterGroupLayout";
import { MoneyPrinterGroupLayoutBalance } from "./MoneyPrinterGroup/MoneyPrinterGroupLayoutBalance";
import { MoneyPrinterMainChart } from "./MoneyPrinterMainChart/MoneyPrinterMainChart";
import { MoneyPrinterMetrics } from "./MoneyPrinterMetrics/MoneyPrinterMetrics";

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

export function MoneyPrinterPage() {
  const {
    exchangeBalanceByCEXList,
    usdcDeployedLendingProtocolList,
    usdcDeployedToLPs,
    usdcDeployedBridgesByBridge,
  } = useMoneyPrinterState();

  const handleElementScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section // set time out for the render can catch after api fetched
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
  };

  const hash = window.location.hash;

  const id = hash.split("#")[1] ? hash.split("#")[1].toString() : "#";

  useFetchData(() => handleElementScroll(id));

  return (
    <>
      <Box sx={container}>
        <Box sx={main}>
          {/* <Box sx={group}> */}
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
          {/* </Box> */}
          {/* <Box sx={group}> */}
          {/* <Typography variant="h5" color="primary">
              USDC Exchange Balances
            </Typography> */}
          <MoneyPrinterGroupLayoutBalance
            data={exchangeBalanceByCEXList}
            title="USDC Exchange Balances"
          />
          {/* </Box> */}
          {/* <Box sx={group}> */}
          {/* <Typography variant="h5" color="primary">
              USDC Deployed to Lending Protocols
            </Typography> */}
          <MoneyPrinterGroupLayout
            data={usdcDeployedLendingProtocolList}
            title="USDC Deployed to Lending Protocols"
          />
          {/* </Box> */}
          {/* <Box sx={group}> */}
          {/* <Typography variant="h5" color="primary">
              USDC Deployed to LPs
            </Typography> */}
          <MoneyPrinterGroupLayout
            data={usdcDeployedToLPs}
            title="USDC Deployed to DEXs"
          />
          {/* </Box> */}
          {/* <Box sx={group}> */}
          {/* <Typography variant="h5" color="primary">
              USDC Deployed to Bridges
            </Typography> */}
          <MoneyPrinterGroupLayout
            data={usdcDeployedBridgesByBridge}
            title="USDC Deployed to Bridges"
          />
          {/* </Box> */}
          {/* <Footer /> */}
        </Box>
      </Box>
    </>
  );
}
