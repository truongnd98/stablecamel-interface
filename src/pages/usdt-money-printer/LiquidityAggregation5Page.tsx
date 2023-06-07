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

export function LiquidityAggregation5Page() {
  const { usdtDeployedToLPsByProtocol } = useUSDTMoneyPrinterState();

  const usdtDeployedToLPsByProtocolDetails: ChartDetailProps[] = [
    {
      key: "other",
      color: "#fcb3bb",
    },
    {
      key: "Kyber",
      color: "#33ca9d",
    },
    {
      key: "Uniswap",
      color: "#ff007a",
    },
    {
      key: "Curvefi",
      color: "#3465A4", //d86b11
    },
    {
      key: "Sushi",
      color: "#fc6bd7", //d1922e
    },
    {
      key: "Pancakeswap",
      color: "#53dee9",
    },
    {
      key: "Balancer",
      color: "#09213c",
    },
    {
      key: "Saddle",
      color: "#65b0a9",
    },
    {
      key: "Clipper",
      color: "#e4c662",
    },
    {
      key: "Shibaswap",
      color: "#ffa409",
    },
    {
      key: "Hashflow",
      color: "#171b21",
    },
  ];

  return (
    <Box sx={main}>
      <Box
        id="usdt-deployed-to-lps-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomAreaChart
          data={usdtDeployedToLPsByProtocol}
          title="USDT Deployed to LPs"
          detail={usdtDeployedToLPsByProtocolDetails}
          id="usdt-deployed-to-lps-chart"
          // legend
        />
      </Box>
      <Box
        id="usdt-deployed-to-lps-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <USDTMoneyPrinterGroupDataGridBalance
          data={usdtDeployedToLPsByProtocol}
          title="USDT Deployed to LPs"
          id="usdt-deployed-to-lps"
          // legend
        />
      </Box>
    </Box>
  );
}
