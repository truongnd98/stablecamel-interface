import { Box, SxProps } from "@mui/material";
import StackedBarChart from "../../../components/StackedBarChart";
import { useAnalyticState } from "../../../stores/analytic/hooks";
import { StablecoinChartDetail, stableCoinDetailProps } from "../type";
import { useNetworkContext } from "../AnalyticPage";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
};

const chart: SxProps = {
  width: "calc(100% - 14px)",
  height: "100%",
};

export default function ChartActivities() {
  const { dataDAU, dataDaily } = useAnalyticState();
  const currentNetwork = useNetworkContext();
  return (
    <Box sx={main}>
      <Box id="dau-per-stable-wrap" sx={chart}>
        <StackedBarChart
          title={`DAU Per Stable (${currentNetwork.name})`}
          data={dataDAU}
          details={stableCoinDetailProps.filter(
            (item: StablecoinChartDetail) =>
              dataDAU &&
              dataDAU.length > 0 &&
              (typeof dataDAU[0][item.key] !== "undefined" ||
                typeof dataDAU[dataDAU.length - 1][item.key] !== "undefined")
          )}
          id="dau-per-stable"
        />
      </Box>

      <Box id="daily-transfer-amount-wrap" sx={chart}>
        <StackedBarChart
          data={dataDaily}
          title={`Daily Transfer Amount (${currentNetwork.name})`}
          details={stableCoinDetailProps.filter(
            (item: StablecoinChartDetail) =>
              dataDaily &&
              dataDaily.length > 0 &&
              (typeof dataDaily[0][item.key] !== "undefined" ||
                typeof dataDaily[dataDaily.length - 1][item.key] !==
                  "undefined")
          )}
          id="daily-transfer-amount"
        />
      </Box>
    </Box>
  );
}
