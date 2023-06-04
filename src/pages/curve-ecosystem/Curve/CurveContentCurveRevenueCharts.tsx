import { Box, SxProps } from "@mui/material";
import randomColor from "randomcolor";
import { v4 } from "uuid";
import CustomAreaChart from "../../../components/AreaChart";
import { ChartDetailProps } from "../../../components/AreaChart/types";
import { CustomPieChart } from "../../../components/PieChart/PieChart";
import StackedBarChart from "../../../components/StackedBarChart";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";
import { FeeRevenuePoolType } from "../types";
import { colors } from "../../../utils/colors/colors";

const wrap: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: 380,
};

export function CurveContentCurveRevenueCharts() {
  const { curve } = useCurveEcosystemState();

  const dataPie = curve.fee_revenue_by_pool_type.map(
    (item: FeeRevenuePoolType) => ({
      key: v4(),
      color: randomColor({ seed: item.token_type }),
      name: item.token_type,
      value: item._col1,
    })
  );

  const cumulativeDetail: ChartDetailProps[] = [];
  const dataCumulative = curve.fee_revenue_by_pool_cumulative;

  if (dataCumulative?.[dataCumulative.length - 1]) {
    for (const key in dataCumulative[dataCumulative.length - 1]) {
      if (key !== "time")
        cumulativeDetail.push({
          key: key,
          color: randomColor({
            seed: key,
          }),
        });
    }
  }

  const dailyDetail: ChartDetailProps[] = [];
  const dataDaily = curve.fee_revenue_by_pool_daily;

  if (dataDaily?.[dataDaily.length - 1]) {
    for (const key in dataDaily[dataDaily.length - 1]) {
      if (key !== "time") {
        dailyDetail.push({
          key: key,
          color: randomColor({
            seed: key,
          }),
        });
      }
    }
  }

  return (
    <>
      <Box sx={wrap}>
        <Box
          id="curve-fee-revenue-pool-cumulative-wrap"
          sx={{
            width: "calc(50% - 14px)",
          }}
        >
          <CustomAreaChart
            title="Curve Fee Revenue by Pool: Cumulative"
            id="curve-fee-revenue-pool-cumulative"
            data={dataCumulative}
            detail={cumulativeDetail}
          />
        </Box>
        <Box
          id="curve-fee-revenue-pool-type-wrap"
          sx={{
            width: "calc(50% - 14px)",
          }}
        >
          <CustomPieChart
            data={dataPie}
            title="Curve Fee Revenue by Pool Type"
            id="curve-fee-revenue-pool-type"
            legend
          />
        </Box>
      </Box>
      <Box
        id="curve-fee-revenue-pool-daily-wrap"
        sx={{
          width: "100%",
          height: 380,
        }}
      >
        <StackedBarChart
          title="Curve Fee Revenue by Pool: Daily"
          id="curve-fee-revenue-pool-daily"
          data={dataDaily}
          details={dailyDetail}
          legend={false}
        />
      </Box>
    </>
  );
}
