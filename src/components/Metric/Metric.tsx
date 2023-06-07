import { Box, Paper, Skeleton, SxProps, Typography } from "@mui/material";
import { MetricProps } from "./types";

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

export function Metric({ title, value, tooltip }: MetricProps) {
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
            fontSize: { sm: "11px", md: "16px", lg: "18px" },
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
