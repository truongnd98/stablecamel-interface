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

  const dailyusersDetails: ChartDetailProps[] = [
    {
      key: "ordswap",
      color: "#F504D3",
      name: "Ordswap",
    },
    {
      key: "ordinals market",
      color: "#40404A",
      name: "Ordinals Market",
    },
    {
      key: "open ordex",
      color: "#278081",
      name: "Open Ordex",
    },
    {
      key: "ordinals wallet",
      color: "#905DFF",
      name: "Ordinals Wallet",
    },
    {
      key: "gamma",
      color: "#DE2D02",
      name: "Gamma",
    },
    {
      key: "magic eden",
      color: "#FF8E00",
      name: "Magic Eden",
    },
    {
      key: "unisat",
      color: "#E5BE4A",
      name: "Unisat",
    },
  ];

  return (
    <Box sx={main}>
      <Box
        id="unique-daily-users-by-marketplace-chart-wrap"
        sx={{ width: "calc(100% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={dailyusers}
          XAxisKey="time"
          title="Unique Daily Users by Marketplace"
          details={dailyusersDetails}
          formatTickX={formatDateTransform("PP", (item) => item)}
          CustomTooltip={
            <CustomTooltip
              showTotal={true}
              customLabel={formatDateTransform("PP", (item) => item)}
            />
          }
          id="unique-daily-users-by-marketplace-chart"
          // legend
        />
      </Box>
    </Box>
  );
}
