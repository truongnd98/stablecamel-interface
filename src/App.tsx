import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import Networks from "./jsons/networks.json";
import { NetworkContext } from "./contexts";
import { HelmetProvider } from "react-helmet-async";
import { image } from "../src/assets/logos/favicon";

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
  const [load, setLoaded] = useState(true);
  const element = document.getElementById("body-id");
  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
      element?.classList.remove("overflow-hidden");
    }, 800);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <NetworkContext.Provider value={{ network, setNetwork }}>
            <div className={`divLoaderBox ${!load && "d-none"}`}>
              <img
                className="imgLoader"
                src={image}
                alt="Stable Camel - Stable Camel favicon"
              ></img>
            </div>
            <RouterProvider router={router} />
          </NetworkContext.Provider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
