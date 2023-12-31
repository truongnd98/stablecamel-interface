import { Box, SxProps } from "@mui/material";
import PositiveAndNegativeBarChart from "../../../components/PositiveAndNegativeBarChart";
import { useAnalyticState } from "../../../stores/analytic/hooks";
import { useNetworkContext } from "../AnalyticPage";
import { StablecoinChartDetail, stableCoinDetailProps } from "../type";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  flexDirection: "column",
};

export default function ChartInflow() {
  const { dataInflow } = useAnalyticState();
  const currentNetwork = useNetworkContext();
  // window.location.hash = '#chart-inflow';
  return (
    <Box id="stablecoin-inflow-wrap" sx={main}>
      <PositiveAndNegativeBarChart
        title={`Stablecoin Inflow (${currentNetwork.name})`}
        data={dataInflow}
        details={stableCoinDetailProps.filter(
          (item: StablecoinChartDetail) =>
            dataInflow &&
            dataInflow.length > 0 &&
            (typeof dataInflow[0][item.key] !== "undefined" ||
              typeof dataInflow[dataInflow.length - 1][item.key] !==
                "undefined")
        )}
        id="stablecoin-inflow"
      />
    </Box>
  );
}
