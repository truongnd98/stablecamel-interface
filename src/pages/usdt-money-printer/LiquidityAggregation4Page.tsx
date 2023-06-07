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

export function LiquidityAggregation4Page() {
  const { usdtDeployedToLendersByProtocol } = useUSDTMoneyPrinterState();

  const usdtDeployedToLendersByProtocolDetails: ChartDetailProps[] = [
    {
      key: "Aave",
      color: "#B6509E",
    },
    {
      key: "Compound",
      color: "#00d395",
    },
    {
      key: "other",
      color: "#fcb3bb",
    },
    {
      key: "Ironbank",
      color: "#1fa647",
    },
    {
      key: "Silo",
      color: "#171717",
    },
    {
      key: "Uwulend",
      color: "#5959ff",
    },
  ];

  return (
    <Box sx={main}>
      <Box
        id="usdt-deployed-to-lenders-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomAreaChart
          data={usdtDeployedToLendersByProtocol}
          title="USDT Deployed to Lenders"
          detail={usdtDeployedToLendersByProtocolDetails}
          id="usdt-deployed-to-lenders-chart"
          // legend
        />
      </Box>
      <Box
        id="usdt-deployed-to-lenders-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <USDTMoneyPrinterGroupDataGridBalance
          data={usdtDeployedToLendersByProtocol}
          title="USDT Deployed to Lenders"
          id="usdt-deployed-to-lenders"
        />
      </Box>
    </Box>
  );
}
