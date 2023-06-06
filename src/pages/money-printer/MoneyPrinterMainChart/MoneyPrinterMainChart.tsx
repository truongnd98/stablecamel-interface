import { Box, SxProps } from "@mui/material";
import { format } from "date-fns";
import { useMoneyPrinterState } from "../../../stores/moneyprinter/hooks";
import { MoneyPrinterMainChartTooltip } from "./MoneyPrinterMainChartTooltip";
import CustomAreaChart from "../../../components/AreaChart";

const main: SxProps = {
  width: "100%",
  height: 380,
  backgroundColor: "#ffffff",
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

const formatTickX = (value: string) => {
  const time: string = format(new Date(value), "PP");
  return time.slice(0, 3) + " " + time.slice(-4, time.length);
};

const formatTickY = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(value);
};

export function MoneyPrinterMainChart() {
  const { supplyUSDCList } = useMoneyPrinterState();

  return (
    <Box id="usdc-supply-chart-wrap" sx={main}>
      {supplyUSDCList && supplyUSDCList.length > 0 ? (
        <CustomAreaChart
          CustomTooltip={<MoneyPrinterMainChartTooltip />}
          XAxisKey="day"
          formatTickX={formatTickX}
          formatTickY={formatTickY}
          detail={[
            {
              key: "supply",
              color: "#2975ca",
              name: "Supply",
            },
          ]}
          data={supplyUSDCList}
          id="usdc-supply-chart"
          title="USDC Supply"
          legend
        />
      ) : null}
    </Box>
  );
}
