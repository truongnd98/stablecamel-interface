import { Box, SxProps } from "@mui/material";
import { useParams } from "react-router-dom";
import { CurveContent } from "./Curve/CurveContent";
import { FraxContent } from "./Frax/FraxContent";
import { ConvexContent } from "./Convex/ConvexContent";
import { ConicContent } from "./Conic/ConicConten";
import { CleverContent } from "./Clever/CleverContent";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <meta property="og:description" content={`Stablecoin TVL Dashboard`} />
        <meta
          property="og:image"
          content={`https://www.stablecamel.com/thumbnails/thumbnail-${network?.toLowerCase()}.png`}
        />
      </Helmet>
      <Box sx={container}>
        {network === "frax-finance" ? <FraxContent /> : <></>}
        {network === "curve" ? <CurveContent /> : <></>}
        {network === "convex" ? <ConvexContent /> : <></>}
        {network === "conic" ? <ConicContent /> : <></>}
        {network === "clever" ? <CleverContent /> : <></>}
        {/* <Footer /> */}
      </Box>
    </>
  );
}
