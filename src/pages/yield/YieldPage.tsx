import { Box, SxProps } from "@mui/material";
import { YieldTable } from "./YieldTable";
import { YieldTitle } from "./YieldTitle";
import { YieldMetrics } from "./YieldMetrics";
import { YieldChart } from "./YieldChart";
import { useGetListYield } from "../../stores/yield/hooks";
import { Helmet } from "react-helmet-async";

const container: SxProps = {
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "fit-content",
};

const main: SxProps = {
  minHeight: "calc(100vh - 20px)",
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

export default function YieldPage() {
  useGetListYield();
  return (
    <>
      <Helmet>
        {/* <title>Yield Page</title> */}

        <meta
          property="og:description"
          content="Stable Camel - Stablecoin Yields dashboard"
        />
        <meta
          property="og:image"
          content="https://www.stablecamel.com/thumbnails/thumbnail-yield.png"
        />
        <meta
          name="description"
          content="Stable Camel - Stablecoin Yields dashboard"
        />
        <meta
          name="image"
          content="https://www.stablecamel.com/thumbnails/thumbnail-yield.png"
        />

        <meta
          property="og:description"
          content="Stable Camel - Stablecoin Yields dashboard"
        />
        <meta
          property="og:image"
          content="https://www.stablecamel.com/thumbnails/thumbnail-yield.png"
        />

        <meta
          name="twitter:description"
          content="Stable Camel - Stablecoin Yields dashboard"
        />
        <meta
          name="twitter:image"
          content="https://www.stablecamel.com/thumbnails/thumbnail-yield.png"
        />
      </Helmet>
      <Box sx={container}>
        <Box sx={main}>
          <Box sx={wrapData}>
            <YieldTitle />
            <YieldMetrics />
            <YieldChart />
            <YieldTable />
          </Box>
          {/* <Footer /> */}
        </Box>
      </Box>
    </>
  );
}
