import { Box, SxProps, Typography } from "@mui/material";

const pageTitle: SxProps = {
  width: "100%",
  // height: 32,
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const wrap: SxProps = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

export function OrdinalsMarketplacesTitle() {
  return (
    <Box sx={pageTitle}>
      <Box sx={wrap}>
        <Typography variant="h5" color="primary">
          Ordinals BRC-20 Marketplaces
        </Typography>
      </Box>
    </Box>
  );
}
