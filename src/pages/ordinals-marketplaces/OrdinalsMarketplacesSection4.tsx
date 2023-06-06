import { Box, SxProps } from "@mui/material";
import { useOrdinalsMarketplacesState } from "../../stores/ordinals-marketplaces/hooks";
import CustomBarChart from "../../components/BarChart";
import { ChartDetailProps } from "../../components/BarChart/types";
import { formatDateTransform } from "./transform";
import CustomTooltip from "../../components/BarChart/Tooltip";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
  padding: "28px 0px 0px 0px",
};

export function OrdinalsMarketplacesSection4() {
  const { marketplace9, marketplace10 } = useOrdinalsMarketplacesState();

  const marketplace9Details:ChartDetailProps[] = [
    {
        "key": "ordswap",
        "color": "#F504D3"
    },
    {
        "key": "ordinals market",
        "color": "#40404A"
    },
    {
        "key": "open ordex",
        "color": "#278081"
    },
    {
        "key": "ordinals wallet",
        "color": "#905DFF"
    },
    {
        "key": "gamma",
        "color": "#DE2D02"
    },
    {
        "key": "magic eden",
        "color": "#FF8E00"
    },
    {
        "key": "unisat",
        "color": "#E5BE4A"
    }
  ];

  const marketplace10Details:ChartDetailProps[] = [
    {
      "key": "bitcoin",
      "color": "#F79319"
    },
    {
      "key": "ethereum",
      "color": "#1C335E"
    },
  ];

  return (
    <Box sx={main}>
      <Box
        id="usdt-supply-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={marketplace9}
          XAxisKey="time"
          title="Unique Users by Marketplace (Cumulative)"
          details={marketplace9Details}
          CustomTooltip={<CustomTooltip showTotal={true} customLabel={formatDateTransform("PP",(item)=>item)}/>}
          formatTickX={formatDateTransform("PP",(item)=>item)}
          id="unique-users-by-marketplace"
          legend
        />
      </Box>
      <Box
        id="usdt-supply-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={marketplace10}
          title="Unique Users by Blockchain (Cumulative)"
          details={marketplace10Details}
          CustomTooltip={<CustomTooltip showTotal={true} customLabel={formatDateTransform("PP",(item)=>item)}/>}
          formatTickX={formatDateTransform("PP",(item)=>item)}
          id="unique-users-by-blockchain"
          legend
        />
      </Box>
    </Box>
  );
}
