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
  m: "28px 0px 0px 0px",
};

export function OrdinalsMarketplacesSection4() {
  const { marketplace9, marketplace10 } = useOrdinalsMarketplacesState();

  const marketplace9Details: ChartDetailProps[] = [
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

  const marketplace10Details: ChartDetailProps[] = [
    {
      key: "bitcoin",
      color: "#F79319",
      name: "Bitcoin",
    },
    {
      key: "ethereum",
      color: "#1C335E",
      name: "Ethereum",
    },
  ];

  return (
    <Box sx={main}>
      <Box
        id="unique-users-by-marketplace-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={marketplace9}
          XAxisKey="time"
          title="Unique Users by Marketplace (Cumulative)"
          details={marketplace9Details}
          CustomTooltip={
            <CustomTooltip
              showTotal={true}
              customLabel={formatDateTransform("PP", (item) => item)}
            />
          }
          formatTickX={formatDateTransform("PP", (item) => item)}
          id="unique-users-by-marketplace-chart"
          // legend
        />
      </Box>
      <Box
        id="unique-users-by-blockchain-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={marketplace10}
          title="Unique Users by Blockchain (Cumulative)"
          details={marketplace10Details}
          CustomTooltip={
            <CustomTooltip
              showTotal={true}
              customLabel={formatDateTransform("PP", (item) => item)}
            />
          }
          formatTickX={formatDateTransform("PP", (item) => item)}
          id="unique-users-by-blockchain-chart"
          // legend
        />
      </Box>
    </Box>
  );
}
