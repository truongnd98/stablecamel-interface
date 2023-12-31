import { Box } from "@mui/material";
import { ChartDetailProps } from "../../../components/AreaChart/types";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";
import PositiveAndNegativeBarChart from "../../../components/PositiveAndNegativeBarChart";
import { ComposeChart } from "../../../components/ComposeChart/ComposeChart";

const dailyCNCNetLockedDetail: ChartDetailProps = {
  key: "locked",
  color: "#7fbfe2",
  name: "CNC Net Locked",
};

const unlockTrackerWeeklyDetail = {
  bar: [
    { key: "expired_locked_amount", name: "Expired unlock", color: "#a4a4a4" },
    // { key: "expired_locked_amount", name: "Expired unlock", color: "#6d3099" },
    { key: "locked_amount", name: "Upcoming unlock", color: "#0080c5" },
  ],
  line: [
    {
      key: "expired_unlock_usd",
      name: "Expired (USD)",
      color: "#a4a4a4",
      //   color: "#6d3099",
      right: true,
    },
    {
      key: "unlock_usd",
      name: "Upcoming (USD)",
      color: "#0080c5",
      right: true,
    },
  ],
};

export function ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly() {
  const { conic } = useCurveEcosystemState();

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
          id="daily-cnc-net-locked-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <PositiveAndNegativeBarChart
            data={conic.daily_cnc_net_locked}
            title="Daily CNC Net Locked"
            id="daily-cnc-net-locked"
            details={dailyCNCNetLockedDetail}
          />
        </Box>
        <Box
          id="vlcnc-unlocks-tracker-weekly-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <ComposeChart
            data={conic.unlocks_tracker_weekly}
            title="vlCNC Unlocks Tracker - Weekly"
            details={unlockTrackerWeeklyDetail}
            yAxisKey={{
              left: "expired_locked_amount",
              right: "expired_unlock_usd",
            }}
            id="vlcnc-unlocks-tracker-weekly"
          />
        </Box>
      </Box>
    </>
  );
}
