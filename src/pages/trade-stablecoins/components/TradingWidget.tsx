import { Box, SxProps } from "@mui/material";

export function TradingWidget({ url }: { url: string }) {
  const wrapper: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: { sm: "3rem", lg: "4rem" },
    mb: "3rem",
  };
  const iframeStyle = {
    width: "400px",
    height: "575px",
    border: "none",
    borderRadius: "8px",
    maxWidth: "100%",
    boxShadow: "0 2px 10px rgba(0,0,0,.25)",
  };
  return (
    <Box sx={wrapper}>
      <iframe src={url} title="Stably Widget" style={iframeStyle} />
    </Box>
  );
}
