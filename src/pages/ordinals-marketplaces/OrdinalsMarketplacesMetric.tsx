import { Box, Paper, Skeleton, SxProps, Typography } from "@mui/material";
// import { Metric } from "../../components/Metric/Metric";
import { useOrdinalsMarketplacesState } from "../../stores/ordinals-marketplaces/hooks";
import { MetricProps } from "../../components/Metric/types";

const main: SxProps = {
  width: "100%",
  height: 120,
  display: "flex",
  justifyContent: "space-between",
  gap: "28px",
};
const paper: SxProps = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
};

function Metric({ title, value, tooltip }: MetricProps) {
  return value ? (
    <Paper sx={paper} elevation={0}>
      <Box
        sx={{
          display: "flex",
          gap: "12px",
        }}
      >
        <Typography
          variant="h5"
          color="primary"
          sx={{
            fontSize: { sm: "13px", md: "18px", lg: "20px" },
          }}
        >
          <b>{title}</b>
        </Typography>
        {tooltip ? tooltip : <></>}
      </Box>
      <Typography
        variant="h3"
        color="secondary"
        sx={{
          fontSize: { sm: "26px", md: "28px", lg: "35px" },
        }}
      >
        {value}
      </Typography>
    </Paper>
  ) : (
    <Skeleton variant="rounded" width="100%" height="100%" />
  );
}

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
