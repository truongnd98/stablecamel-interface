import { Box, SxProps } from "@mui/material";
import CustomAreaChart from "../../components/AreaChart";
import { useCurveCrvUSDState } from "../../stores/curve-crvusd/hook";
import randomColor from "randomcolor";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  padding: "28px 0px 0px 0px",
};

export function CurveCrvUSDPageCharts11() {
  const { supply_chart, total_borrowed_chart } = useCurveCrvUSDState();

  return (
    <Box sx={main}>
      <Box
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
        id="crvusd-supply-chart-wrap"
      >
        <CustomAreaChart
          data={supply_chart}
          title="crvUSD Supply"
          detail={[
            {
              key: "supply",
              color: "#3465A4",
              name: "Supply",
            },
          ]}
          id="crvusd-supply-chart"
          legend
        />
      </Box>
      <Box
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
        id="total-crvusd-borrowed-chart-wrap"
      >
        <CustomAreaChart
          data={total_borrowed_chart}
          title="Total crvUSD borrowed"
          detail={[
            {
              key: "amount",
              color: "#3465A4",
              name: "Total Borrowed",
            },
          ]}
          id="total-crvusd-borrowed-chart"
          legend
        />
      </Box>
    </Box>
  );
}
