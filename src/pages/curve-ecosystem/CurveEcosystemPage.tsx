import { Box, SxProps } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { CurveContent } from "./Curve/CurveContent";
import { FraxContent } from "./Frax/FraxContent";
import { ConvexContent } from "./Convex/ConvexContent";
import { ConicContent } from "./Conic/ConicConten";
import { CleverContent } from "./Clever/CleverContent";
import { Helmet } from "react-helmet-async";

const container: SxProps = {
  width: "100%",
  minHeight: "calc(100vh - 124px)",
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
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
      animationDelay: "2s",
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

export function CurveEcosystemPage() {
  const { network } = useParams();

  const pageName =
    network === "frax-finance"
      ? "frax-finance"
      : network === "curve"
      ? "Curve"
      : network === "convex"
      ? "Convex"
      : "Clever";

  return (
    <>
      <Helmet>
        <meta
          property="og:description"
          content={`Stable Camel - Curve Ecosystem ${pageName} dashboard`}
        />
        <meta
          property="og:image"
          content={`https://www.stablecamel.com/thumbnails/thumbnail-${network?.toLowerCase()}.png`}
        />
      </Helmet>
      <Box sx={container}>
        {network === "frax-finance" ? (
          <FraxContent />
        ) : network === "curve" ? (
          <CurveContent />
        ) : network === "convex" ? (
          <ConvexContent />
        ) : network === "conic" ? (
          <ConicContent />
        ) : network === "clever" ? (
          <CleverContent />
        ) : (
          <Navigate to="/curve-ecosystem/frax-finance" />
        )}
      </Box>
    </>
  );
}
