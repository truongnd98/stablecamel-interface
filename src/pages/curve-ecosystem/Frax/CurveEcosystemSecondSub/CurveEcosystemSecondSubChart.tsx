import { Box } from "@mui/material";
import { ComposeChart } from "../../../../components/ComposeChart/ComposeChart";
import { useCurveEcosystemState } from "../../../../stores/curve-ecosystem/hooks";
import { ComposeChartDetails } from "../../../../components/ComposeChart/types";

const frxETHSupplyDetails: ComposeChartDetails = {
  bar: {
    key: "frxETH_supply_delta",
    color: "#000000", //001f54
  },
  area: {
    key: "frxETH_supply",
    color: "#d3d3d3",
  },
};

export function CurveEcosystemSecondSubChart() {
  const { frxETH } = useCurveEcosystemState();
  return (
    <Box
      id="frxETH-supply-wrap"
      sx={{
        width: "100%",
        height: 380,
      }}
    >
      <ComposeChart
        data={frxETH ? frxETH.eth_supply : undefined}
        title="frxETH Supply"
        details={frxETHSupplyDetails}
        id="frxETH-supply"
        yAxisKey={{
          left: "frxETH_supply",
          right: "frxETH_supply_delta",
        }}
      />
    </Box>
  );
}
