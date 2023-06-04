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
  padding: "28px 0px 0px 0px",
};

export function USDTLockedInBridgesPage() {
  const { usdtDeployedToBridgesTotal, usdtDeployedToBridgesByBridge } = useUSDTMoneyPrinterState();

  const chartDetails: ChartDetailProps[] = [
    {
        "key": "Avalanche",
        "color": "#f7bca0"
    },
    {
        "key": "Gravity Bridge",
        "color": "#bfe9fc"
    },
    {
        "key": "Arbitrum One",
        "color": "#66e2c5"
    },
    {
        "key": "Optimism",
        "color": "#f7d199"
    },
    {
        "key": "HECO Chain",
        "color": "#eaf49a"
    },
    {
        "key": "other",
        "color": "#fcb3bb"
    }
];

  return (
    <Box sx={main}>
      <Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
        <CustomLineChart
          data={usdtDeployedToBridgesTotal}
          title="USDT Deployed to Bridges - Total"
          details={[
            {
              key: "value",
              color: "#2775ca",
              name: "USDC Locked in Bridges",
            }
          ]}
          id="usdt-deployed-to-bridges-total-chart"
          legend
        />
      </Box>
      <Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
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
