import { Box, SxProps } from "@mui/material";
import { USDTMoneyPrinterGroupDataGrid } from "./MoneyPrinterGroupDataGrid";
import { CustomLineChart } from "../../components/LineChart/LineChart";
import { useUSDTMoneyPrinterState } from "../../stores/usdt-moneyprinter/hooks";

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
      <Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
        <CustomLineChart
          data={usdtSupply}
          title="USDT Supply"
          details={[
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
      <Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
        <USDTMoneyPrinterGroupDataGrid
          id="usdt-supply-table"
          title="USDT Supply"
          data={usdtSupply}
        />
      </Box>
    </Box>
  );
}
