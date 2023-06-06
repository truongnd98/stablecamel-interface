import { Box, SxProps } from "@mui/material";
import { useUSDTMoneyPrinterState } from "../../stores/usdt-moneyprinter/hooks";
import CustomAreaChart from "../../components/AreaChart";
import { USDTMoneyPrinterMainChartTooltip } from "./USDTMoneyPrinterMainChartTooltip";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  // padding: "28px 0px 0px 0px",
};

export function LiquidityAggregation1Page() {
  const { usdtSupply } = useUSDTMoneyPrinterState();

  return (
    <Box sx={main}>
      <Box id="usdt-supply-chart-wrap" sx={{ width: "100%", height: "100%" }}>
        <CustomAreaChart
          data={usdtSupply}
          CustomTooltip={<USDTMoneyPrinterMainChartTooltip />}
          title="USDT Supply"
          detail={[
            {
              key: "supply",
              color: "#52b095",
              name: "Supply",
            },
          ]}
          id="usdt-supply-chart"
          legend
        />
      </Box>
    </Box>
  );
}
