import { Box, SxProps } from "@mui/material";
import CustomAreaChart from "../../../../components/AreaChart";
import { ChartDetailProps } from "../../../../components/AreaChart/types";
import randomColor from "randomcolor";
import { useCurveEcosystemState } from "../../../../stores/curve-ecosystem/hooks";
import { ComposeChart } from "../../../../components/ComposeChart/ComposeChart";
import { ComposeChartDetails } from "../../../../components/ComposeChart/types";

const container: SxProps = {
  width: "100%",
  display: "flex",
  gap: "28px",
  flexWrap: "wrap",
};

const each: SxProps = {
  width: "calc(50% -  14px)",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
};

const details: ChartDetailProps[] = [
  {
    key: "arbitrum",
    color: randomColor({ seed: "arbitrum" }),
  },
];

const fraxBP_TVLDetails: ChartDetailProps[] = [
  {
    key: "usdc",
    color: "#2775ca",
  },
  {
    key: "frax",
    color: "#000000", //001f54
  },
];

const threePoolTVLDetails: ChartDetailProps[] = [
  {
    key: "dai",
    color: "#FAC146",
  },
  {
    key: "usdc",
    color: "#2775ca",
  },
  {
    key: "usdt",
    color: "#52b095", //001f54
  },
];

const fraxBPVolumeDetails: ComposeChartDetails = {
  bar: {
    key: "volume",
    color: "#000000", //001f54
  },
  line: {
    key: "cumulative",
    color: "#d3d3d3",
  },
};

const threePoolVolumeDetails: ComposeChartDetails = {
  bar: {
    key: "volume",
    color: "#000000", //001f54
  },
  line: {
    key: "cumulative",
    color: "#d3d3d3",
  },
};

export function CurveEcosystemSubContentCharts() {
  const { fraxBP } = useCurveEcosystemState();
  return (
    <Box sx={container}>
      <Box sx={each} id="fraxbp-tvl-wrap">
        <CustomAreaChart
          data={fraxBP ? fraxBP.bp_tvl : undefined}
          title="FRAXBP TVL"
          detail={fraxBP_TVLDetails}
          id="fraxbp-tvl"
          legend
        />
      </Box>
      <Box id="3pool-tvl-wrap" sx={each}>
        <CustomAreaChart
          data={fraxBP ? fraxBP.three_pool_tvl : undefined}
          title="3pool TVL"
          detail={threePoolTVLDetails}
          id="3pool-tvl"
          legend
        />
      </Box>
      <Box id="fraxbp-volume-wrap" sx={each}>
        <ComposeChart
          data={fraxBP ? fraxBP.bp_volume : undefined}
          title="FRAXBP Volume"
          details={fraxBPVolumeDetails}
          yAxisKey={{
            left: "volume",
            right: "cumulative",
          }}
          id="fraxbp-volume"
        />
      </Box>
      <Box id="3pool-volume-wrap" sx={each}>
        <ComposeChart
          data={fraxBP ? fraxBP.three_pool_volume : undefined}
          title="3pool Volume"
          details={threePoolVolumeDetails}
          id="3pool-volume"
          yAxisKey={{
            left: "volume",
            right: "cumulative",
          }}
        />
      </Box>
    </Box>
  );
}
