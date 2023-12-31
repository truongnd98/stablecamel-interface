import { Box, SxProps, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import { useGetListGraveYard } from "../../stores/graveyard/hooks";
import GraveYardTable from "./GraveYardTable";
import { GraveYardTitle } from "./GraveYardTitle";

const container: SxProps = {
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "fit-content",
};

const main: SxProps = {
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",
};

const wrapData: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "28px",
};

export default function GraveYardPage() {
  useGetListGraveYard();
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Stable Camel - Stablecoin Graveyard dashboard"
        />
        <meta
          name="image"
          content="https://www.stablecamel.com/thumbnails/thumbnail-graveyard.png"
        />

        <meta
          property="og:description"
          content="Stable Camel - Stablecoin Graveyard dashboard"
        />
        <meta
          property="og:image"
          content="https://www.stablecamel.com/thumbnails/thumbnail-graveyard.png"
        />

        <meta
          name="twitter:description"
          content="Stable Camel - Stablecoin Graveyard dashboard"
        />
        <meta
          name="twitter:image"
          content="https://www.stablecamel.com/thumbnails/thumbnail-graveyard.png"
        />
      </Helmet>
      <Box sx={container}>
        <Box sx={main}>
          <Box sx={wrapData}>
            <GraveYardTitle />
            <GraveYardTable />
          </Box>
          {/* <Footer /> */}
        </Box>
      </Box>
    </>
  );
}
