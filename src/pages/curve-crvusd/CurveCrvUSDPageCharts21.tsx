import { Box, SxProps } from "@mui/material";
import CustomAreaChart from "../../components/AreaChart";
import { useCurveCrvUSDState } from "../../stores/curve-crvusd/hook";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  padding: "28px 0px 0px 0px",
};

export function CurveCrvUSDPageCharts21() {
  const { tusd_pool_chart, usdp_pool_chart } = useCurveCrvUSDState();

  return (
    <Box sx={main}>
      <Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
        {/* <section id="crvusd-tusd-pool-chart" /> */}
        <CustomAreaChart
          data={tusd_pool_chart}
          title="crvUSD TUSD Pool"
          detail={[
            {
              key: "tusd",
              color: "#1C59FB",
              name: "TUSD",
            },
            {
              key: "crvusd",
              color: "#3465A4",
              name: "crvUSD",
            },
          ]}
          id="crvusd-tusd-pool-chart"
          legend
        />
      </Box>
      <Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
        {/* <section id="crvusd-usdp-pool-chart" /> */}
        <CustomAreaChart
          data={usdp_pool_chart}
          title="crvUSD USDP Pool"
          detail={[
            {
              key: "usdp",
              color: "#50B849",
              name: "USDP",
            },
            {
              key: "crvusd",
              color: "#3465A4",
              name: "crvUSD",
            },
          ]}
          id="crvusd-usdp-pool-chart"
          legend
        />
      </Box>
    </Box>
  );
}
