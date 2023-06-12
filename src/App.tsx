import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import Networks from "./jsons/networks.json";
import { NetworkContext } from "./contexts";
import { HelmetProvider } from "react-helmet-async";
import { image } from "./assets/logos/favicon";

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
  const [load, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setLoaded(false);
    }, 500);
  }, []);
  if (load)
    return (
      <div className="divLoader">
        <img
          className="imgLoader"
          src={image}
          alt="Stable Camel - Stable Camel favicon"
        ></img>
      </div>
    );

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <NetworkContext.Provider value={{ network, setNetwork }}>
          <RouterProvider router={router} />
        </NetworkContext.Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
