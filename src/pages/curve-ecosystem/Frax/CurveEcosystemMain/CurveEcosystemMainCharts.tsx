import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import CustomAreaChart from "../../../../components/AreaChart";
import { ChartDetailProps } from "../../../../components/PositiveAndNegativeBarChart/types";
import randomColor from "randomcolor";

import { useCurveEcosystemState } from "../../../../stores/curve-ecosystem/hooks";
import { CustomLineChart } from "../../../../components/LineChart/LineChart";
import { ComposeChart } from "../../../../components/ComposeChart/ComposeChart";
import { ComposeChartDetails } from "../../../../components/ComposeChart/types";

const container: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "28px",
};

const wrapChart: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  height: 380,
};

const singleChart: SxProps = {
  width: "100%",
  height: 380,
};

const volumeDetails: ComposeChartDetails = {
  bar: {
    key: "usd_volume",
    color: "#000000", //001f54
  },
  area: {
    key: "cum",
    color: "#e9e9e9",
  },
};

const supplyDetails: ChartDetailProps[] = [
  {
    key: "eth",
    color: "#6f7bba",
  },
  {
    key: "arbitrum",
    color: "#1569a1",
  },
  {
    key: "avalanche",
    color: "#e84142",
  },
  {
    key: "fantom",
    color: "#1969ff",
  },
  {
    key: "optimism",
    color: "#ff0420",
  },
];

const priceDetails: ChartDetailProps[] = [
  {
    key: "frax",
    color: "#000000",
  },
  {
    key: "stable",
    color: "#d3d3d3",
  },
];

export function CurveEcosystemMainCharts() {
  const { frax } = useCurveEcosystemState();
  return (
    <Box sx={container}>
      <Box sx={wrapChart}>
        <Box
          id="frax-supply"
          sx={{
            width: "40%",
          }}
        >
          <CustomAreaChart
            data={frax ? frax.supply : undefined}
            title="FRAX Supply"
            detail={supplyDetails}
            id="frax-supply"
            legend
          />
        </Box>
        <Box
          sx={{
            width: "calc(60% - 28px)",
          }}
        >
          <CustomLineChart
            // data={[]}
            data={frax ? frax.price : undefined}
            title="FRAX Price"
            details={priceDetails}
            id="frax-price"
            legend
          />
        </Box>
      </Box>
      <Box sx={singleChart} id="fraxswap-volume">
        <ComposeChart
          data={frax ? frax.swap_volume : undefined}
          title="FraxSwap Volume"
          details={volumeDetails}
          id="fraxswap-volume"
          yAxisKey={{
            left: "usd_volume",
            right: "cum",
          }}
        />
      </Box>
    </Box>
  );
}
