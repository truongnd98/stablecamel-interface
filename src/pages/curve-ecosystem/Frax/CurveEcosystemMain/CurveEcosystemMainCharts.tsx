import { SxProps } from "@mui/material";
import { Box } from "@mui/system";
import CustomAreaChart from "../../../../components/AreaChart";
import { ChartDetailProps } from "../../../../components/PositiveAndNegativeBarChart/types";
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
    color: "#001f54", //001f54
  },
  area: {
    key: "cum",
    color: "#e9e9e9",
  },
};

const supplyDetails: ChartDetailProps[] = [
  {
    key: "eth",
    color: "#001f54",
  },
  {
    key: "arbitrum",
    color: "#56569b",
  },
  {
    key: "avalanche",
    color: "#909090",
  },
  {
    key: "fantom",
    color: "#cc61b0",
  },
  {
    key: "optimism",
    color: "#f2b701",
  },
];

const priceDetails: ChartDetailProps[] = [
  {
    key: "frax",
    color: "#001f54",
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
          id="frax-supply-wrap"
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
          id="frax-price-wrap"
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
      <Box sx={singleChart} id="fraxswap-volume-wrap">
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
