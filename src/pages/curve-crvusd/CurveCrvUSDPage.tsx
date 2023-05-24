import { Box, SxProps, Typography } from "@mui/material";
import { CurveCrvUSDPageTitle } from "./CurveCrvUSDPageTitle";
import { CurveCrvUSDPageMetrics } from "./CurveCrvUSDPageMetrics";
import { CurveCrvUSDPageCharts11 } from "./CurveCrvUSDPageCharts11";
import { CurveCrvUSDPageCharts12 } from "./CurveCrvUSDPageCharts12";
import { CurveCrvUSDPageCharts21 } from "./CurveCrvUSDPageCharts21";
import { CurveCrvUSDPageCharts22 } from "./CurveCrvUSDPageCharts22";
import { useGetDataCurveCrvUSD } from "../../stores/curve-crvusd/hook";

// const container: SxProps = {
// 	width: '100%',
// 	padding: '20px 28px',
// 	paddingBottom: '0',
// 	display: 'flex',
// 	flexDirection: 'column',
// 	height: 'fit-content',
// 	gap: '28px'
// };

const container: SxProps = {
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "fit-content",
  gap: "20px",
};

const main: SxProps = {
  minHeight: "calc(100vh - 20px)",
  display: "flex",
  flexDirection: "column",
  // justifyContent: 'space-between',
  gap: "28px",
};

const group: SxProps = {
  display: "flex",
  flexDirection: "column",
};

export function CurveCrvUSDPage() {
  useGetDataCurveCrvUSD();
  return (
    <Box sx={container}>
      <Box>
        <CurveCrvUSDPageTitle />
      </Box>
      <Box>
        <CurveCrvUSDPageMetrics />
        <CurveCrvUSDPageCharts11 />
        <CurveCrvUSDPageCharts12 />
        <Box
          sx={{
            display: "flex",
            paddingTop: "28px",
          }}
        >
          <Typography variant="h5" color="primary">
            crvUSD Liquidity
          </Typography>
        </Box>
        <CurveCrvUSDPageCharts21 />
        <CurveCrvUSDPageCharts22 />
      </Box>
    </Box>
  );
}
