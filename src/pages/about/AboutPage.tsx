import { Box, SxProps, Typography, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";

const container: SxProps = {
  width: "100%",
  height: "100vh",
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const main: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "28px",
};

const card: SxProps = {
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
  borderRadius: "8px",
};

const wrapInfoCard: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingBottom: "12px",
};

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <meta property="og:description" content="Stable Camel About Page" />
        {/* <meta
          property="og:image"
          content={`https://www.stablecamel.com/thumbnails/thumbnail-general.png`}
        /> */}
      </Helmet>
      <Box sx={container}>
        <Box sx={main}>
          <Typography variant="h5" color="primary">
            About
          </Typography>
          <Box sx={card}>
            <Typography
              variant="body1"
              color="primary"
              sx={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              About Stable Camel
            </Typography>
            <Box sx={wrapInfoCard}>
              <Typography variant="body1" color="primary">
                Stable Camel is a DeFi dashboard that provides the most
                important on-chain stablecoin TVL stats, metrics, and charts.
              </Typography>
              <Typography variant="body1" color="primary">
                We use open-source blockchain data to develop Stable Camel and
                publish many{" "}
                <Link
                  href="https://dune.com/stablecamel"
                  target="_blank"
                  color="secondary"
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Dune dashboards
                </Link>
                , featured in the newsletter{" "}
                <Link
                  href="https://dunedigest.substack.com/p/dune-digest-36"
                  target="_blank"
                  color="secondary"
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Dune Digest #36
                </Link>{" "}
                and stablecoin research decks, including the{" "}
                <Link
                  href="https://drive.google.com/file/d/14koAek8fHQgJ5lIX-vKsjjjzs0bsBME4/view"
                  target="_blank"
                  color="secondary"
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Frax Finance report
                </Link>
                .
              </Typography>
              <Typography variant="body1" color="primary">
                Our popular{" "}
                <Link
                  href="https://dune.com/stablecamel/usdc-money-printer"
                  target="_blank"
                  color="secondary"
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  USDC Money Printer
                </Link>{" "}
                dashboard got into the top 180 most favorite dashboards of all
                time on Dune out of 66k dashboards.
              </Typography>
            </Box>
          </Box>
          <Box sx={card}>
            <Typography
              variant="body1"
              color="primary"
              sx={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Contact
            </Typography>
            <Box sx={wrapInfoCard}>
              <Typography variant="body1" color="primary">
                Contact us on{" "}
                <Link
                  href="https://twitter.com/Stably_Official"
                  target="_blank"
                  color="secondary"
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Twitter
                </Link>{" "}
                or{" "}
                <Link
                  href="https://discord.com/channels/978765464186540093/1022531141535813783"
                  target="_blank"
                  color="secondary"
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Discord
                </Link>
                .
              </Typography>
              <Typography variant="body1" color="primary">
                Stable Camel is a part of{" "}
                <Link
                  href="https://stably.io/"
                  target="_blank"
                  color="secondary"
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Stably Corporation
                </Link>
                .
              </Typography>
              <Typography variant="body1" color="primary">
                Stably is a Web3 payment infrastructure provider and
                FinCEN-registered MSB from Seattle. The company specializes in
                providing #1 fiat-to-stablecoin gateway{" "}
                <Link
                  href="https://ramp.stably.io/"
                  target="_blank"
                  color="secondary"
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Stably Ramp
                </Link>
                , USD-backed stablecoin{" "}
                <Link
                  href="https://stably.io/usds/"
                  target="_blank"
                  color="secondary"
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Stably USD ($USDS)
                </Link>{" "}
                on 12+ networks (such as XRP Ledger, Harmony, Stellar, VeChain),
                and cross-chain bridged tokens to million users of Web3
                applications.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* <Footer /> */}
      </Box>
    </>
  );
}
