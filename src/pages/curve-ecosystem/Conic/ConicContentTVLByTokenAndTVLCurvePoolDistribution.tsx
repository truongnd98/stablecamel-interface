import { Box } from "@mui/material";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";
import { CustomPieChart } from "../../../components/PieChart/PieChart";
import { v4 } from "uuid";
import randomColor from "randomcolor";
import CustomAreaChart from "../../../components/AreaChart";
import { ChartDetailProps } from "../../../components/AreaChart/types";

export function ConicContentTVLByTokenAndTVLCurvePoolDistribution() {
  const { conic } = useCurveEcosystemState();

  const tvlByTokenDetail: ChartDetailProps[] = [
    {
      key: "FRAX",
      color: "#000000",
    },
    {
      key: "DAI",
      color: "#FAC146",
    },
    {
      key: "USDC",
      color: "#2775ca",
    },
    {
      key: "USDT",
      color: "#52b095",
    },
  ];
  const pieChartColor = [
    {
      key: "mim+3crv",
      color: "#F504D3",
    },
    {
      key: "frax+usdc",
      color: "#905DFF",
    },
    {
      key: "3pool",
      color: "#E5BE4A",
    },
    {
      key: "frax+3crv",
      color: "#DE2D02",
    },
    {
      key: "gusd+fraxbp",
      color: "#278081",
    },
    {
      key: "DAI+USDC+USDT+sUSD",
      color: "#40404A",
    },
  ];

  const dataTVLCurvePoolDistribution = conic.tvl_curve_pool_distribution.map(
    (item) => ({
      key: v4(),
      color: randomColor({ seed: item.label }),
      name: item.label,
      value: item.amount,
    })
  );

  for (let i in dataTVLCurvePoolDistribution) {
    dataTVLCurvePoolDistribution[i].color = pieChartColor[i].color;
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 380,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          id="cnc-tvl-by-token-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <CustomAreaChart
            title="Conic TVL by Token"
            id="cnc-tvl-by-token"
            data={conic.tvl_by_token}
            detail={tvlByTokenDetail}
            legend
          />
        </Box>
        <Box
          id="tvl-curve-pool-distribution-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <CustomPieChart
            title="Conic TVL Curve Pool Distribution"
            data={dataTVLCurvePoolDistribution}
            id="tvl-curve-pool-distribution"
            legend
          />
        </Box>
      </Box>
    </>
  );
}
