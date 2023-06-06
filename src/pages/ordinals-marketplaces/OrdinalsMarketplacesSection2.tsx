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

export function OrdinalsMarketplacesSection2() {
  const { marketplace2p, marketplace3p } = useOrdinalsMarketplacesState();

  const marketplace2pDetails:ChartDetailProps[] = [
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

  const marketplace3pDetails:ChartDetailProps[] = [
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
          data={marketplace2p}
          XAxisKey="time"
          title="Percentage Share of Volume by Marketplace $"
          details={marketplace2pDetails}
          CustomTooltip={<CustomTooltip 
            showTotal={false}
            customLabel={formatDateTransform("PP",(item)=>item)}
            customContent={(value: number) => {
              return `${new Intl.NumberFormat("en-US", {
                maximumFractionDigits: 1,
              }).format(value * 100)}%`;
            }}
            />
          }
          formatTickX={formatDateTransform("PP",(item)=>item)}
          id="percentage-share-of-volume-by-marketplace"
          legend
        />
      </Box>
      <Box
        id="usdt-supply-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={marketplace3p}
          title="Percentage Share of Transactions by Marketplace"
          details={marketplace3pDetails}
          formatTickX={formatDateTransform("PP",(item)=>item)}
          CustomTooltip={<CustomTooltip 
            showTotal={false}
            customLabel={formatDateTransform("PP",(item)=>item)}
            customContent={(value: number) => {
              return `${new Intl.NumberFormat("en-US", {
                maximumFractionDigits: 1,
              }).format(value * 100)}%`;
            }}
            />
          }
          id="percentage-share-of-transactions-by-marketplace"
          legend
        />
      </Box>
    </Box>
  );
}
