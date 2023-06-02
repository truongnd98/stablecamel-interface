import { Box, SxProps, Typography } from "@mui/material";
import CustomAreaChart from "../../../../components/AreaChart";
import { ChartDetailProps } from "../../../../components/AreaChart/types";
import { CurveEcosystemThirdSubTable } from "./CurveEcosystemThirdSubTable";
import { useCurveEcosystemState } from "../../../../stores/curve-ecosystem/hooks";
import { Link } from "react-router-dom";
import { HoverTooltip } from "../../../../components/HoverToolitp";

const container: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "28px",
};

const wrap: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
};

const each: SxProps = {
  width: "calc(50% - 14px)",
  height: "100%",
};

const details: ChartDetailProps[] = [
  {
    key: "veFXS",
    color: "#000000",
  },
];

export function CurveEcosystemThirdSub() {
  const { fxs } = useCurveEcosystemState();
  return (
    <Box sx={container}>
      <Box
        sx={{
          display: "flex",
          gap: "12px",
        }}
      >
        <Typography variant="h5" color="primary">
          Locked FXS
        </Typography>
        <HoverTooltip
          content={
            <>
              <Typography sx={{ p: 1 }}>
                Vote Escrow FXS (veFXS) is a system that allows users to lock up
                their FXS tokens for a certain period of time (up to 4 years) in
                exchange for veFXS tokens. The longer the lock-up period, the
                more veFXS tokens the user receives. veFXS is not a transferable
                token and does not trade on liquid markets. Holding veFXS
                provides multiple benefits such as special boosts, special
                governance rights, and AMO profits.{" "}
                <Link
                  to="https://docs.frax.finance/vefxs/vefxs"
                  target="_blank"
                >
                  Read more
                </Link>
              </Typography>
            </>
          }
        />
      </Box>
      <Box sx={wrap}>
        <Box id="locked-fxs-wrap" sx={each}>
          <CustomAreaChart
            data={fxs ? fxs.locked_fxs : undefined}
            title="Locked FXS (veFXS)"
            detail={details}
            id="locked-fxs"
          />
        </Box>
        <Box id="fxs-leaderboard-wrap" sx={each}>
          <section id="fxs-leaderboard" />
          <CurveEcosystemThirdSubTable />
        </Box>
      </Box>
    </Box>
  );
}
