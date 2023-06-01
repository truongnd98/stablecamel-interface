import { Box, SxProps } from "@mui/material";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { MoneyPrinterPage } from "./MoneyPrinterPage";
import { CurveCrvUSDPage } from "../curve-crvusd/CurveCrvUSDPage";

const container: SxProps = {
  width: "100%",
  // padding: '20px 28px',
  // paddingBottom: '0',
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  // gap: '28px'
};

export function MoneyPrinterPageRouter() {
  const { network } = useParams();

  return (
    <Box sx={container}>
      {network === "usdc" ? <MoneyPrinterPage /> : <></>}
      {network === "crvUSD" ? <CurveCrvUSDPage /> : <></>}
    </Box>
  );
}
