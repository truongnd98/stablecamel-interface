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

export function CurveCrvUSDPageCharts21() {
  const { tusd_pool_chart, usdp_pool_chart } = useCurveCrvUSDState();

  return (
    <Box sx={main}>
      <Box
        id="crvusd-tusd-pool-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        {/* <section id="crvusd-tusd-pool-chart" /> */}
        <CustomAreaChart
          data={tusd_pool_chart}
          title="crvUSD TUSD Pool"
          detail={[
            {
              key: "tusd",
              color: "#56569b",
              name: "TUSD",
            },
            {
              key: "crvusd",
              color: "#a7a7a7",
              name: "crvUSD",
            },
          ]}
          id="crvusd-tusd-pool-chart"
          // legend
        />
      </Box>
      <Box
        id="crvusd-usdp-pool-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        {/* <section id="crvusd-usdp-pool-chart" /> */}
        <CustomAreaChart
          data={usdp_pool_chart}
          title="crvUSD USDP Pool"
          detail={[
            {
              key: "usdp",
              color: "#56569b",
              name: "USDP",
            },
            {
              key: "crvusd",
              color: "#a7a7a7",
              name: "crvUSD",
            },
          ]}
          id="crvusd-usdp-pool-chart"
          // legend
        />
      </Box>
    </Box>
  );
}
