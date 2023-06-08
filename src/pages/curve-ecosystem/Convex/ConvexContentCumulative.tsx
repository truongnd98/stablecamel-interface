import { Box, SxProps } from "@mui/material";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";
import CustomAreaChart from "../../../components/AreaChart";
import { ChartDetailProps } from "../../../components/AreaChart/types";

const main: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
  //   gap: "28px",
};

const cumulative3CRV: ChartDetailProps = {
  key: "total_3crv_usd",
  color: "#000080",
  name: "cvxCRV",
};

const crvFarmed: ChartDetailProps = {
  key: "cum_farmed_crv",
  color: "#008080",
  name: "CRV",
};

const fsxFarmed: ChartDetailProps[] = [
  {
    key: "fxs_to_LPs_usd",
    color: "#3465A4",
    name: "to LPs",
  },
  {
    key: "fxs_to_vlCVX_usd",
    color: "#cc61b0",
    name: "to vlCVX",
  },
  {
    key: "fxs_to_cvxFXS_usd",
    color: "#008080",
    name: "to cvxFXS",
  },
];

export function ConvexContentCumulative() {
  const { convex } = useCurveEcosystemState();

  return !convex ? (
    <></>
  ) : (
    <>
      <Box sx={main}>
        <Box
          id="3crv-admin-fees-earned-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <CustomAreaChart
            data={convex.cumulative_3crv}
            title={"3CRV Admin Fees Earned by Convex ($)"}
            detail={cumulative3CRV}
            id="3crv-admin-fees-earned"
            legend
          />
        </Box>
        <Box
          id="crv-farmed-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <CustomAreaChart
            data={convex.crv_farmed}
            title={"Farmed CRV ($)"}
            detail={crvFarmed}
            id="crv-farmed"
            legend
          />
        </Box>
      </Box>
      <Box id="fsx-farmed-wrap" sx={main}>
        <CustomAreaChart
          data={convex.fsx_farmed}
          title={"Cumulative Farmed FSX ($)"}
          detail={fsxFarmed}
          id="fsx-farmed"
          legend
        />
      </Box>
    </>
  );
}
