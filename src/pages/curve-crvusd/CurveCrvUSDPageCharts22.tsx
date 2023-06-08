import { Box, SxProps } from "@mui/material";
import CustomAreaChart from "../../components/AreaChart";
import { useCurveCrvUSDState } from "../../stores/curve-crvusd/hook";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  m: "28px 0px 0px 0px",
};

export function CurveCrvUSDPageCharts22() {
  const { usdc_pool_chart, usdt_pool_chart } = useCurveCrvUSDState();

  return (
    <Box sx={main}>
      <Box
        id="crvusd-usdc-pool-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomAreaChart
          data={usdc_pool_chart}
          title="crvUSD USDC Pool"
          detail={[
            {
              key: "usdc",
              color: "#7c6af0",
              name: "USDC",
            },
            {
              key: "crvusd",
              color: "#a7a7a7",
              name: "crvUSD",
            },
          ]}
          id="crvusd-usdc-pool-chart"
          // legend
        />
      </Box>
      <Box
        id="crvusd-usdt-pool-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomAreaChart
          data={usdt_pool_chart}
          title="crvUSD USDT Pool"
          detail={[
            {
              key: "crvusd",
              color: "#318ef5",
              name: "crvUSD",
            },
            {
              key: "usdt",
              color: "#868686",
              name: "USDT",
            },
          ]}
          id="crvusd-usdt-pool-chart"
          // legend
        />
      </Box>
    </Box>
  );
}
