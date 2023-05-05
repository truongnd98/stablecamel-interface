import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import MainSideBar from './components/MainSideBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './constants/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import Networks from './jsons/networks.json';
import { NetworkContext } from './contexts';
import { HelmetProvider } from 'react-helmet-async';

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
  ETHEREUM = 'ethereum',
  BSC = 'BSC',
  AVAX = 'avalanche',
  ARBITRUM = 'arbitrum',
  POLYGON = 'polygon',
}

export interface Protocol {
  name: string;
  logo: string;
  slug: string;
}

function App() {
  const [network, setNetwork] = useState<Network>(Networks[0]);

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

const Main = styled.div`
  width: 100%;
  display: flex;
`;

export default App;
