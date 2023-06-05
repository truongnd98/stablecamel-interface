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
        id="total-usdt-deployed-to-dexs-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomLineChart
          data={totalUSDTDeployedToDEXs}
          title="Total USDT Deployed to DEXs"
          details={[
            {
              key: "value",
              color: "#52b095",
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
