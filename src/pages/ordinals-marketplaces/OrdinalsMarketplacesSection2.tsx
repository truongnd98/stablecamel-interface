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

  const marketplace2pDetails: ChartDetailProps[] = [
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

  const marketplace3pDetails: ChartDetailProps[] = [
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
        id="percentage-share-of-volume-by-marketplace-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={marketplace2p}
          XAxisKey="time"
          title="Percentage Share of Volume by Marketplace $"
          details={marketplace2pDetails}
          CustomTooltip={
            <CustomTooltip
              showTotal={false}
              customLabel={formatDateTransform("PP", (item) => item)}
              customContent={(value: number) => {
                return `${new Intl.NumberFormat("en-US", {
                  maximumFractionDigits: 1,
                }).format(value * 100)}%`;
              }}
            />
          }
          formatTickX={formatDateTransform("PP", (item) => item)}
          formatTickY={(item) => {
            return item > 1 ? item.toFixed(0) : item;
          }}
          id="percentage-share-of-volume-by-marketplace-chart"
          // legend
        />
      </Box>
      <Box
        id="percentage-share-of-transactions-by-marketplace-chart-wrap"
        sx={{ width: "calc(50% - 14px)", height: "100%" }}
      >
        <CustomBarChart
          data={marketplace3p}
          title="Percentage Share of Transactions by Marketplace"
          details={marketplace3pDetails}
          formatTickX={formatDateTransform("PP", (item) => item)}
          formatTickY={(item) => {
            return item > 1 ? item.toFixed(0) : item;
          }}
          CustomTooltip={
            <CustomTooltip
              showTotal={false}
              customLabel={formatDateTransform("PP", (item) => item)}
              customContent={(value: number) => {
                return `${new Intl.NumberFormat("en-US", {
                  maximumFractionDigits: 1,
                }).format(value * 100)}%`;
              }}
            />
          }
          id="percentage-share-of-transactions-by-marketplace-chart"
          // legend
        />
      </Box>
    </Box>
  );
}
