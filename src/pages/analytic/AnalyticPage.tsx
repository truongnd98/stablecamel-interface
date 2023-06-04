import { Box, SxProps } from "@mui/material";
import Overview from "./AnalyticPageContent";
import Title from "./AnalyticPageTitle";
import Networks from "../../jsons/networks.json";
import { createContext, useContext } from "react";
import { Network } from "../../App";
import { useParams } from "react-router-dom";
import { useScrollToId } from "../../hooks/useScrollToId";
import { Helmet } from "react-helmet-async";

const main: SxProps = {
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
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
      animationDelay: "1.5s",
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

const NetworkContext = createContext<Network | undefined>(undefined);

export const useNetworkContext = () => {
  const context: Network | undefined = useContext(NetworkContext);
  if (!context) throw new Error("Network context is undefined");
  return context;
};

export default function AnalyticPage() {
  const { network } = useParams();
  const currentNetwork: Network | undefined = !network
    ? Networks[0]
    : Networks.slice(1, Networks.length).find((item: Network) =>
        network.includes(item.slug)
      );

  // const location = useLocation();
  const pageName =
    network === "ethereum"
      ? "Ethereum"
      : network === "avalanche"
      ? "Avalanche"
      : network === "BSC"
      ? "BSC"
      : network === "arbitrum"
      ? "Arbitrum"
      : "";

  useScrollToId();
  return (
    <>
      {currentNetwork?.slug ? (
        <Helmet>
          <meta
            property="og:description"
            content={`Stablecoin TVL ${pageName} dashboard`}
          />
          <meta
            property="og:image"
            content={`https://www.stablecamel.com/thumbnails/thumbnail-${currentNetwork?.slug?.toLowerCase()}.png`}
          />
        </Helmet>
      ) : (
        <></>
      )}
      <NetworkContext.Provider value={currentNetwork}>
        <Box sx={main}>
          <Title />
          <Overview />
        </Box>
      </NetworkContext.Provider>
    </>
  );
}
