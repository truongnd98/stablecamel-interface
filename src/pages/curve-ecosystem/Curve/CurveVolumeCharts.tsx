import { Box } from "@mui/material";
import { ComposeChart } from "../../../components/ComposeChart/ComposeChart";
import { ComposeChartDetails } from "../../../components/ComposeChart/types";
import StackedBarChart from "../../../components/StackedBarChart";
import { ChartDetailProps } from "../../../components/StackedBarChart/types";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";

const curveVolumeDetail: ComposeChartDetails = {
  bar: {
    key: "usd_volume",
    color: "#6d3099", //6d3099
  },
  area: {
    key: "cum",
    color: "#a3a3a3", //
  },
};

const curvePoolVolumeDetail: ChartDetailProps[] = [
  {
    key: "other",
    color: "#2d46ec",
  },
  {
    key: "tricrypto2",
    color: "#6d3099",
  },
  {
    key: "3pool",
    color: "#474747",
  },
  {
    key: "steth",
    color: "#8f9b00",
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
