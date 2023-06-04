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

export function LiquidityAggregation5Page() {
  const { totalUSDTDeployedToDEXs, usdtDeployedToLPsByProtocol } =
    useUSDTMoneyPrinterState();

  const usdtDeployedToLPsByProtocolDetails: ChartDetailProps[] = [
    {
      key: "other",
      color: "#fcb3bb",
    },
    {
      key: "Kyber",
      color: "#99e6e8",
    },
    {
      key: "Uniswap",
      color: "#e827e8",
    },
    {
      key: "Curvefi",
      color: "#d86b11",
    },
    {
      key: "Sushi",
      color: "#d1922e",
    },
    {
      key: "Pancakeswap",
      color: "#3be596",
    },
    {
      key: "Balancer",
      color: "#b631ea",
    },
    {
      key: "Saddle",
      color: "#c1b8f2",
    },
    {
      key: "Clipper",
      color: "#e532b5",
    },
    {
      key: "Shibaswap",
      color: "#b0f298",
    },
    {
      key: "Hashflow",
      color: "#73a313",
    },
  ];

  return (
    <Box sx={main}>
      <Box
        id="total-usdt-deployed-to-dexs-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomLineChart
          data={totalUSDTDeployedToDEXs}
          title="Total USDT Deployed to DEXs"
          details={[
            {
              key: "value",
              color: "#2775ca",
              name: "USDT (Lending)",
            },
          ]}
          id="total-usdt-deployed-to-dexs-chart"
          legend
        />
      </Box>
      <Box
        id="usdt-deployed-to-lps-by-protocol-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomLineChart
          data={usdtDeployedToLPsByProtocol}
          title="USDT Deployed to LPs - By Protocol"
          details={usdtDeployedToLPsByProtocolDetails}
          id="usdt-deployed-to-lps-by-protocol-chart"
          legend
        />
      </Box>
    </Box>
  );
}
