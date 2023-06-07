import { Box, SxProps } from "@mui/material";
import { CustomLineChart } from "../../components/LineChart/LineChart";
import { useUSDTMoneyPrinterState } from "../../stores/usdt-moneyprinter/hooks";
import { ChartDetailProps } from "../../components/LineChart/types";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  m: "28px 0px 0px 0px",
};

export function USDTLockedInBridgesPage() {
  const { usdtDeployedToBridgesTotal, usdtDeployedToBridgesByBridge } =
    useUSDTMoneyPrinterState();

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
        id="usdt-deployed-to-bridges-total-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomLineChart
          data={usdtDeployedToBridgesTotal}
          title="USDT Deployed to Bridges - Total"
          details={[
            {
              key: "value",
              color: "#52b095",
              name: "USDT Locked in Bridges",
            },
          ]}
          id="usdt-deployed-to-bridges-total-chart"
          legend
        />
      </Box>
      <Box
        id="usdt-deployed-to-bridges-by-bridge-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomLineChart
          data={usdtDeployedToBridgesByBridge}
          title="USDT Deployed to Bridges by Bridge"
          details={chartDetails}
          id="usdt-deployed-to-bridges-by-bridge-chart"
          legend
        />
      </Box>
    </Box>
  );
}
