import { Box, SxProps } from "@mui/material";
import { CustomLineChart } from "../../components/LineChart/LineChart";
import { useUSDTMoneyPrinterState } from "../../stores/usdt-moneyprinter/hooks";
import { ChartDetailProps } from "../../components/LineChart/types";
import randomColor from "randomcolor";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  padding: "28px 0px 0px 0px",
};

export function LiquidityAggregation4Page() {
  const {  totalUSDTDeployedToLenders , usdtDeployedToLendersByProtocol} = useUSDTMoneyPrinterState();

  const usdtDeployedToLendersByProtocolDetails: ChartDetailProps[] = [
    {
        "key": "Aave",
        "color": "#8af2b3"
    },
    {
        "key": "Compound",
        "color": "#6da3d6"
    },
    {
        "key": "other",
        "color": "#fcb3bb"
    },
    {
        "key": "Ironbank",
        "color": "#f9a9d8"
    },
    {
        "key": "Silo",
        "color": "#09a066"
    },
    {
        "key": "Uwulend",
        "color": "#937ad3"
    }
];


  return (
    <Box sx={main}>
      <Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
        <CustomLineChart
          data={totalUSDTDeployedToLenders}
          title="Total USDT Deployed to Lenders"
          details={[
            {
              key: "value",
              color: "#2775ca",
              name: "USDT (Lending)",
            },
          ]}
          id="total-usdt-deployed-to-lenders-chart"
          legend
        />
      </Box>
      <Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
        <CustomLineChart
          data={usdtDeployedToLendersByProtocol}
          title="USDT Deployed to Lenders - By Protocol"
          details={usdtDeployedToLendersByProtocolDetails}
          id="usdt-deployed-to-lenders-by-protocol-chart"
          legend
        />
      </Box>
    </Box>
  );
}
