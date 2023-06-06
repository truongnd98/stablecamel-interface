import { Box, SxProps } from "@mui/material";
import { Metric } from "../../components/Metric/Metric";
import { useOrdinalsMarketplacesState } from "../../stores/ordinals-marketplaces/hooks";

const main: SxProps = {
  width: "100%",
  height: 120,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
};

export function OrdinalsMarketplacesMetric() {
  const { marketplace12, marketplace13 } = useOrdinalsMarketplacesState();

  const volume = marketplace13?.[0]?.total || 0;
  const trades = marketplace13?.[0]?.trades || 0;
  const uniqueUser = marketplace12?.[0]?.users || 0;

  return (
    <Box sx={main}>
      <Metric
        title="Volume"
        value={new Intl.NumberFormat("en-US", {
          notation: "standard",
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(volume)}
      />
      <Metric
        title="Trades"
        value={new Intl.NumberFormat("en-US", {
          notation: "standard",
          maximumFractionDigits: 0,
        }).format(trades)}
      />
      <Metric
        title="Unique Users"
        value={new Intl.NumberFormat("en-US", {
          notation: "standard",
          maximumFractionDigits: 0,
        }).format(uniqueUser)}
      />
    </Box>
  );
}
