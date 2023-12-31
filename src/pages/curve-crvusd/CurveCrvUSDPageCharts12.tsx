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
  m: "28px 0px 0px 0px",
};

export function CurveCrvUSDPageCharts12() {
  const { collateral_chart } = useCurveCrvUSDState();

  return (
    <Box sx={main}>
      <Box
        id="token-crvusd-collateral-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomAreaChart
          data={collateral_chart}
          title="Token: crvUSD Collateral"
          detail={[
            {
              key: "supply",
              color: "#aaaacd",
              name: "sfrxETH",
            },
          ]}
          id="token-crvusd-collateral-chart"
          // legend
        />
      </Box>
      <Box
        id="usd-crvusd-collateral-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomAreaChart
          data={collateral_chart}
          title="USD: crvUSD Collateral"
          detail={[
            {
              key: "usd",
              color: "#aaaacd",
              name: "$ Collateral",
            },
          ]}
          id="usd-crvusd-collateral-chart"
          // legend
        />
      </Box>
    </Box>
  );
}
