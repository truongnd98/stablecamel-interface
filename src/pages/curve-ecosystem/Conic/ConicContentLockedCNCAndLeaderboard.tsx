import { Box } from "@mui/material";
import CustomAreaChart from "../../../components/AreaChart";
import { ChartDetailProps } from "../../../components/AreaChart/types";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";
import { ConicContentLeaderboardTable } from "./ConicContentLeaderboardTable";

import { Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { PopoverTooltip } from "../../../components/PopoverTooltip/PopoverTooltip";
const lockedCNC: ChartDetailProps = {
  key: "vlcnc",
  color: "#7fbfe2",
  name: "vlCNC",
};

export function ConicContentLockedCNCAndLeaderboard() {
  const { conic } = useCurveEcosystemState();
  const Tooltip = () => {
    return (
      <PopoverTooltip
        content={
          <>
            <Typography sx={{ p: 1 }}>
              CNC can be locked for a period of four to eight months in exchange
              for vote-locked CNC (vlCNC). The longer people lock their CNC, the
              higher their vlCNC balance will be. vlCNC allows users to engage
              in different voting procedures including: biweekly liquidity
              allocation, whitelisting Curve pools, and whitelisting assets.
            </Typography>
          </>
        }
        component={
          <InfoIcon
            color="primary"
            sx={{
              height: 22,
            }}
          />
        }
      />
    );
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 380,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          id="locked-cnc-vlcnc-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <CustomAreaChart
            data={conic.locked_cnc}
            title="Locked CNC (vlCNC)"
            id="locked-cnc-vlcnc"
            detail={lockedCNC}
            tooltip={<Tooltip />}
          />
        </Box>
        <Box
          id="cnc-leaderboard-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <section id="cnc-leaderboard" />
          <ConicContentLeaderboardTable />
        </Box>
      </Box>
    </>
  );
}
