import { Box, SxProps } from "@mui/material";
import { OrdinalsMarketplacesTitle } from "./OrdinalsMarketplacesTitle";
import { OrdinalsMarketplacesSection1 } from "./OrdinalsMarketplacesSection1";
import { OrdinalsMarketplacesSection2 } from "./OrdinalsMarketplacesSection2";
import { OrdinalsMarketplacesSection3 } from "./OrdinalsMarketplacesSection3";
import { OrdinalsMarketplacesSection4 } from "./OrdinalsMarketplacesSection4";
import { OrdinalsMarketplacesSection5 } from "./OrdinalsMarketplacesSection5";
import { OrdinalsMarketplacesMetric } from "./OrdinalsMarketplacesMetric";
import { useGetOrdinalsMarketplacesData } from "../../stores/ordinals-marketplaces/hooks";
import { Helmet } from "react-helmet-async";

const container: SxProps = {
  padding: "20px 28px",
  paddingBottom: "0",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "fit-content",
  gap: "28px",
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
      animationDelay: "1.2s",
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

export function OrdinalsMarketplacesPage() {
  const handleElementScroll = (id: string) => {
    const element = document.getElementById(id);
    const elementWrap = document.getElementById(id + "-wrap");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section // set time out for the render can catch after api fetched
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
        elementWrap?.classList.add("animation-active");
      }, 1000);
    }
  };

  const hash = window.location.hash;

  const id = hash.split("#")[1] ? hash.split("#")[1].toString() : "#";

  useGetOrdinalsMarketplacesData(() => handleElementScroll(id));

  return (
    <Box sx={container}>
      <Helmet>
        <meta
          property="og:description"
          content={`Stable Camel - Ordinals BRC-20 Marketplaces dashboard`}
        />
        <meta
          property="og:image"
          content={`https://www.stablecamel.com/thumbnails/thumbnail-ordinal-marketplaces.png`}
        />
      </Helmet>
      <Box>
        <OrdinalsMarketplacesTitle />
      </Box>
      {/* <Typography variant="h5" color="primary">
          Total Supply
      </Typography> */}
      <Box>
        <OrdinalsMarketplacesMetric />
      </Box>
      <Box>
        <OrdinalsMarketplacesSection1 />

        <OrdinalsMarketplacesSection2 />

        <OrdinalsMarketplacesSection3 />

        <OrdinalsMarketplacesSection4 />

        <OrdinalsMarketplacesSection5 />
      </Box>
    </Box>
  );
}
