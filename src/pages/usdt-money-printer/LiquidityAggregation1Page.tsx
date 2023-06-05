import { Box, SxProps } from "@mui/material";
import { useUSDTMoneyPrinterState } from "../../stores/usdt-moneyprinter/hooks";
import CustomAreaChart from "../../components/AreaChart";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  padding: "28px 0px 0px 0px",
};

export function LiquidityAggregation1Page() {
  const { usdtSupply } = useUSDTMoneyPrinterState();

  return (
    <Box sx={main}>
      <Box
        id="usdt-supply-chart-wrap"
        sx={{ width: "calc(100% - 14px)", height: "100%" }}
      >
        <CustomAreaChart
          data={usdtSupply}
          title="USDT Supply"
          detail={[
            {
              key: "supply",
              color: "#3465A4",
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
