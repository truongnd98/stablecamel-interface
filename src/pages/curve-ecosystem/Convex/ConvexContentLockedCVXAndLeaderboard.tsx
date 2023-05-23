import { Box } from "@mui/material";
import CustomAreaChart from "../../../components/AreaChart";
import { ChartDetailProps } from "../../../components/AreaChart/types";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";
import { ConvexContentLeaderboardTable } from "./ConvexContentLeaderboardTable";
import PositiveAndNegativeBarChart from "../../../components/PositiveAndNegativeBarChart";
import { PopoverTooltip } from "../../../components/PopoverTooltip/PopoverTooltip";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const lockedCVX: ChartDetailProps = {
  key: "cum_from",
  color: "#949494",
  name: "vlCVX",
};

const lockedCVXDaily: ChartDetailProps = {
  key: "delta",
  color: "#7c7c7c",
  name: "Locked",
};

export function ConvexContentLockedCVXAndLeaderboard() {
  const { convex } = useCurveEcosystemState();
  const Tooltip = () => {
    return (
      <PopoverTooltip
        content={
          <>
            <Typography sx={{ p: 1 }}>
              Vote-locked CVX is used for voting on how Convex Finance allocates
              it's veCRV and veFXS towards gauge weight votes and other
              proposals. Users must vote-lock their CVX tokens in order to
              participate. Vote locking requires users to time-lock their CVX
              tokens for 16+ weeks.
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
        <Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
          <CustomAreaChart
            data={convex.locked_cvx}
            title="Total Locked CVX (vlCVX)"
            id="total-locked-cvx-vlcvx"
            detail={lockedCVX}
            tooltip={<Tooltip />}
          />
        </Box>
        <Box sx={{ width: "calc(50% - 14px)", height: "100%" }}>
          <section id="cvx-leaderboard" />
          <ConvexContentLeaderboardTable />
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: 380 }}>
        <PositiveAndNegativeBarChart
          data={convex.locked_cvx}
          title="Daily Locked CVX (vlCVX)"
          id="locked-cvx-daily"
          details={lockedCVXDaily}
        />
      </Box>
    </>
  );
}
