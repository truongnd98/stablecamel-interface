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

export function OrdinalsMarketplacesSection5() {
  const { dailyusers } = useOrdinalsMarketplacesState();

  const dailyusersDetails:ChartDetailProps[] = [
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

  return (
    <Box sx={main}>
      <Box
        id="usdt-supply-chart-wrap"
        sx={{ width: "calc(100% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={dailyusers}
          XAxisKey="time"
          title="Unique Daily Users by Marketplace"
          details={dailyusersDetails}
          formatTickX={formatDateTransform("PP",(item)=>item)}
          CustomTooltip={<CustomTooltip showTotal={true} customLabel={formatDateTransform("PP",(item)=>item)}/>}
          id="unique-daily-users-by-marketplace"
          legend
        />
      </Box>
    </Box>
  );
}
