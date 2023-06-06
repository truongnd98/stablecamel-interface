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
};

export function OrdinalsMarketplacesSection1() {
  const { marketplace2, marketplace3 } = useOrdinalsMarketplacesState();

  const marketplace2Details:ChartDetailProps[] = [
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

  const marketplace3Details:ChartDetailProps[] = [
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
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={marketplace2}
          XAxisKey="time"
          title="Volume by Marketplace $"
          details={marketplace2Details}
          CustomTooltip={<CustomTooltip 
            showTotal={true} 
            customLabel={formatDateTransform("PP",(item)=>item)}
            />
          }
          formatTickX={formatDateTransform("PP",(item)=>item)}
          id="volume-by-marketplace"
          legend
        />
      </Box>
      <Box
        id="usdt-supply-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={marketplace3}
          XAxisKey="time"
          title="Transactions by Marketplace"
          details={marketplace3Details}
          CustomTooltip={<CustomTooltip showTotal={true} customLabel={formatDateTransform("PP",(item)=>item)}/>}
          formatTickX={formatDateTransform("PP",(item)=>item)}
          id="transactions-by-marketplace"
          legend
        />
      </Box>
    </Box>
  );
}
