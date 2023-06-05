import { Box } from "@mui/material";
import randomColor from "randomcolor";
import { ComposeChart } from "../../../components/ComposeChart/ComposeChart";
import { ComposeChartDetails } from "../../../components/ComposeChart/types";
import StackedBarChart from "../../../components/StackedBarChart";
import { ChartDetailProps } from "../../../components/StackedBarChart/types";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";

const curveVolumeDetail: ComposeChartDetails = {
  bar: {
    key: "usd_volume",
    color: "#3465A4", //6d3099
  },
  area: {
    key: "cum",
    color: "#a3a3a3",
  },
};

const curvePoolVolumeDetail: ChartDetailProps[] = [
  {
    key: "other",
    color: randomColor({ seed: "other" }),
  },
  {
    key: "tricrypto2",
    color: randomColor({ seed: "tricrypto2" }),
  },
  {
    key: "3pool",
    color: randomColor({ seed: "3pool" }),
  },
  {
    key: "steth",
    color: "#00a3ff",
  },
];

export function CurveVolumeCharts() {
  const { curve } = useCurveEcosystemState();
  return (
    <Box
      sx={{
        width: "100%",
        height: 380,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        id="curve-volume-wrap"
        sx={{
          width: "calc(50% - 14px)",
          height: "100%",
        }}
      >
        <ComposeChart
          data={curve ? curve.curve_volume : undefined}
          title="Curve Volume"
          id="curve-volume"
          details={curveVolumeDetail}
          yAxisKey={{
            left: "usd_volume",
            right: "cum",
          }}
        />
      </Box>
      <Box
        id="curve-pool-volume-wrap"
        sx={{
          width: "calc(50% - 14px)",
          height: "100%",
        }}
      >
        <StackedBarChart
          data={curve ? curve.curve_pool_volume : undefined}
          title="Curve Pool Volume"
          id="curve-pool-volume"
          details={curvePoolVolumeDetail}
        />
      </Box>
    </Box>
  );
}
