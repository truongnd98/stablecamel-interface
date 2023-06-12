import { Box, SxProps, Typography } from "@mui/material";
import { USDTMoneyPrinterTitleTooltip } from "./USDTMoneyPrinterTitleTooltip";

const pageTitle: SxProps = {
  width: "100%",
  height: 32,
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

export function USDTMoneyPrinterPageTitle() {
  return (
    <Box sx={pageTitle}>
      <Box sx={wrap}>
        <Typography variant="h5" color="primary">
          USDT Money Printer (Ethereum)
        </Typography>
        <USDTMoneyPrinterTitleTooltip />
      </Box>
    </Box>
  );
}
