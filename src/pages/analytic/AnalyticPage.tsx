import { Box, SxProps, Typography } from '@mui/material';
import Footer from '../../components/Footer';
import Overview from './AnalyticPageContent';
import Title from './AnalyticPageTitle';
import Networks from '../../jsons/networks.json';
import { createContext, useContext } from 'react';
import { Network } from '../../App';
import { useLocation, useParams } from 'react-router-dom';
import { useScrollToId } from '../../hooks/useScrollToId';
import { Helmet } from 'react-helmet';

const main: SxProps = {
  width: 'calc(100% - 260px)',
  marginLeft: '260px',
  padding: '20px 28px',
  paddingBottom: '0',
  display: 'flex',
  flexDirection: 'column',
  height: 'fit-content',
  backgroundColor: '#f5f5f5',
};

const NetworkContext = createContext<Network | undefined>(undefined);

export const useNetworkContext = () => {
  const context: Network | undefined = useContext(NetworkContext);
  if (!context) throw new Error('Network context is undefined');
  return context;
};

export default function AnalyticPage() {
  const { network } = useParams();
  const currentNetwork: Network | undefined = !network
    ? Networks[0]
    : Networks.slice(1, Networks.length).find((item: Network) =>
        network.includes(item.slug)
      );
  const location = useLocation();
  console.log('location', location);
  useScrollToId();
  return (
    <>
      <Helmet>
        {/* <title>Analytic Page</title> */}
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <meta
          property='og:description'
          content={`Stablecoin TVL Dashboard (${currentNetwork?.name})`}
        />
        <meta
          property='og:image'
          content='/thumbnails/thumbnail-general.png'
        />
      </Helmet>
      <NetworkContext.Provider value={currentNetwork}>
        <Box sx={main}>
          <Title />
          <Overview />
          <Footer />
        </Box>
      </NetworkContext.Provider>
    </>
  );
}
