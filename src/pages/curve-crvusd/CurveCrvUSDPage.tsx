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
  gap: "28px",
  ".animation-active": {
    position: "relative",
    "::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      borderRadius: "8px",
      animation: "noti 1 4s",
      animationDelay: ".5s",
      animationFillMode: "forwards",
    },
  },
  "@keyframes noti": {
    "0%": {
      backgroundColor: "transparent",
      display: "block",
    },
    "30%": {
      backgroundColor: "#cf99fc80",
    },
    "99%": {
      backgroundColor: "transparent",
    },
    "100%": {
      display: "none",
      zIndex: -1,
    },
  },
};

export function CurveCrvUSDPage() {
  // useGetDataCurveCrvUSD();

  const handleElementScroll = (id: string) => {
    const element = document.getElementById(id);
    const elementWrap = document.getElementById(id + "-wrap");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section // set time out for the render can catch after api fetched
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
        elementWrap?.classList.add("animation-active");
        console.log("", id);
      }, 1000);
    }
  };

  const hash = window.location.hash;

  const id = hash.split("#")[1] ? hash.split("#")[1].toString() : "#";

  useGetDataCurveCrvUSD(() => handleElementScroll(id));

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
