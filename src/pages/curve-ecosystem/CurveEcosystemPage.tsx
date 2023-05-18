import { Box, SxProps } from "@mui/material";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { CurveContent } from "./Curve/CurveContent";
import { CurveEcosystemTitle } from "./CurveEcosystemTitle/CurveEcosystemTitle";
import { FraxContent } from "./Frax/FraxContent";
import { ConvexContent } from "./Convex/ConvexContent";
import { ConicContent } from "./Conic/ConicConten";
import { CleverContent } from "./Clever/CleverContent";

const container: SxProps = {
  width: "100%",
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  gap: "28px",
};

export function CurveEcosystemPage() {
  const { network } = useParams();
  return (
    <Box sx={container}>
      {network === "frax-finance" ? <FraxContent /> : <></>}
      {network === "curve" ? <CurveContent /> : <></>}
      {network === "convex" ? <ConvexContent /> : <></>}
      {network === "conic" ? <ConicContent /> : <></>}
      {network === "clever" ? <CleverContent /> : <></>}
      {/* <Footer /> */}
    </Box>
  );
}
