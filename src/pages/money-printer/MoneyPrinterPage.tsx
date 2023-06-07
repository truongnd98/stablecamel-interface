import { Box, SxProps, Typography } from "@mui/material";
import {
  useFetchData,
  useMoneyPrinterState,
} from "../../stores/moneyprinter/hooks";
import { MoneyPrinterGroupLayout } from "./MoneyPrinterGroup/MoneyPrinterGroupLayout";
import { MoneyPrinterGroupLayoutBalance } from "./MoneyPrinterGroup/MoneyPrinterGroupLayoutBalance";
import { MoneyPrinterMainChart } from "./MoneyPrinterMainChart/MoneyPrinterMainChart";
import { MoneyPrinterMetrics } from "./MoneyPrinterMetrics/MoneyPrinterMetrics";
import { USDCMoneyPrinterTitleTooltip } from "./USDCMoneyPrinterTitleTooltip";

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
      animationDelay: ".5s",
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

const wrap: SxProps = {
  height: 32,
  display: "flex",
  alignItems: "center",
  gap: "12px",
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
    const elementWrap = document.getElementById(id + "-wrap");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section // set time out for the render can catch after api fetched
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
        elementWrap?.classList.add("animation-active");
        console.log("", id);
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
          <Box sx={wrap}>
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
            <USDCMoneyPrinterTitleTooltip />
          </Box>
          <MoneyPrinterMetrics />
          <MoneyPrinterMainChart />
          <MoneyPrinterGroupLayoutBalance
            data={exchangeBalanceByCEXList}
            title="USDC Exchange Balances"
          />
          <MoneyPrinterGroupLayout
            data={usdcDeployedLendingProtocolList}
            title="USDC Deployed to Lending Protocols"
          />
          <MoneyPrinterGroupLayout
            data={usdcDeployedToLPs}
            title="USDC Deployed to DEXs"
          />
          <MoneyPrinterGroupLayout
            data={usdcDeployedBridgesByBridge}
            title="USDC Deployed to Bridges"
          />
        </Box>
      </Box>
    </>
  );
}
