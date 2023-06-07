import { Box, SxProps } from "@mui/material";
import { useUSDTMoneyPrinterState } from "../../stores/usdt-moneyprinter/hooks";
import { ChartDetailProps } from "../../components/LineChart/types";
import CustomAreaChart from "../../components/AreaChart";
import { USDTMoneyPrinterGroupDataGridBalance } from "./USDTMoneyPrinterGroupDataGrid";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  m: "28px 0px 0px 0px",
};

export function USDTLockedInBridgesPage() {
  const { usdtDeployedToBridgesByBridge } = useUSDTMoneyPrinterState();

  const chartDetails: ChartDetailProps[] = [
    {
      key: "Avalanche",
      color: "#e84142",
    },
    {
      key: "Gravity Bridge",
      color: "#002fa7",
    },
    {
      key: "Arbitrum One",
      color: "#1569a1",
    },
    {
      key: "Optimism",
      color: "#ff0420",
    },
    {
      key: "HECO Chain",
      color: "#aefb19",
    },
    {
      key: "other",
      color: "#fcb3bb",
    },
  ];

  return (
    <Box sx={main}>
      <Box
        id="usdt-deployed-to-bridges-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomAreaChart
          data={usdtDeployedToBridgesByBridge}
          title="USDT Deployed to Bridges"
          detail={chartDetails}
          id="usdt-deployed-to-bridges-chart"
          // legend
        />
      </Box>
      <Box
        id="usdt-deployed-to-bridges-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <USDTMoneyPrinterGroupDataGridBalance
          data={usdtDeployedToBridgesByBridge}
          title="USDT Deployed to Bridges"
          id="usdt-deployed-to-bridges"
          // legend
        />
      </Box>
    </Box>
  );
}
