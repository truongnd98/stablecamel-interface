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

export function OrdinalsMarketplacesSection3() {
  const { marketplace5, marketplace6 } = useOrdinalsMarketplacesState();

  const marketplace5Details:ChartDetailProps[] = [
    {
        "key": "bitcoin",
        "color": "#F79319"
    },
    {
        "key": "ethereum",
        "color": "#1C335E"
    },
  ];

  const marketplace6Details:ChartDetailProps[] = [
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
          data={marketplace5}
          XAxisKey="time"
          title="Volume by Blockchain $"
          details={marketplace5Details}
          CustomTooltip={<CustomTooltip 
            showTotal={true} 
            customLabel={formatDateTransform("PP",(item)=>item)}
            customContent={(value: number) => {
              return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(value);
            }}
            />
          }
          formatTickX={formatDateTransform("PP",(item)=>item)}
          id="volume-by-blockchain"
          legend
        />
      </Box>
      <Box
        id="usdt-supply-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={marketplace6}
          title="Transactions by Blockchain"
          details={marketplace6Details}
          CustomTooltip={<CustomTooltip showTotal={true} customLabel={formatDateTransform("PP",(item)=>item)}/>}
          formatTickX={formatDateTransform("PP",(item)=>item)}
          id="transactions-by-blockchain"
          legend
        />
      </Box>
    </Box>
  );
}
