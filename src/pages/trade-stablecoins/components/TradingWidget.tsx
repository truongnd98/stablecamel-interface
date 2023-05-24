import { Box, SxProps } from "@mui/material";

export function TradingWidget() {
  const wrapper: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: "4rem",
    mb: "3rem",
  };
  const iframeStyle = {
    width: "400px",
    height: "565px",
    border: "none",
    borderRadius: "8px",
    maxWidth: "100%",
    boxShadow: "0 2px 10px rgba(0,0,0,.25)",
  };
  return (
    <Box sx={wrapper}>
      <iframe
        src="https://ramp.stably.io/?integrationId=stablecamel-5c58e755"
        title="Stably Widget"
        style={iframeStyle}
      />
    </Box>
  );
}
