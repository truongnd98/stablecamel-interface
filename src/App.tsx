import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import Networks from "./jsons/networks.json";
import { NetworkContext } from "./contexts";
import { HelmetProvider } from "react-helmet-async";
import OverlayLoading from "./components/OverlayLoading";

export interface Network {
  chainId: string;
  slug: string;
  name: string;
  logo: string;
}

export interface Token {
  icon: string;
  name: string;
  symbol: string;
}

export enum Chain {
  ETHEREUM = "ethereum",
  BSC = "BSC",
  AVAX = "avalanche",
  ARBITRUM = "arbitrum",
  POLYGON = "polygon",
}

export interface Protocol {
  name: string;
  logo: string;
  slug: string;
}

function App() {
  const [network, setNetwork] = useState<Network>(Networks[0]);

  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <NetworkContext.Provider value={{ network, setNetwork }}>
            <OverlayLoading />
            <RouterProvider router={router} />
          </NetworkContext.Provider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
