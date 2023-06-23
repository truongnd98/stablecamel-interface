import { Box, SxProps } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useGetListPegTracker } from "../../stores/pegtracker/hooks";
import { PegTrackerTable } from "./PegTrackerTable";
import { PegTrackerTitle } from "./PegTrackerTitle";

const container: SxProps = {
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
};

const main: SxProps = {
  minHeight: "calc(100vh - 20px)",
  display: "flex",
  flexDirection: "column",
  // justifyContent: 'space-between',
  gap: "28px",
  width: "100%",
};

export function PegTrackerPage() {
  useGetListPegTracker();

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Stable Camel - Activity Monitor dashboard"
        />
        <meta
          name="image"
          content="https://www.stablecamel.com/thumbnails/thumbnail-activity.png"
        />

        <meta
          property="og:description"
          content="Stable Camel - Activity Monitor dashboard"
        />
        <meta
          property="og:image"
          content="https://www.stablecamel.com/thumbnails/thumbnail-activity.png"
        />

        <meta
          name="twitter:description"
          content="Stable Camel - Activity Monitor dashboard"
        />
        <meta
          name="twitter:image"
          content="https://www.stablecamel.com/thumbnails/thumbnail-activity.png"
        />
      </Helmet>
      <Box sx={container}>
        <Box sx={main}>
          <PegTrackerTitle />
          <PegTrackerTable />
        </Box>
      </Box>
    </>
  );
}
