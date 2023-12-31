import { Box } from "@mui/material";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";
import StackedBarChart from "../../../components/StackedBarChart";
import { ComposeChart } from "../../../components/ComposeChart/ComposeChart";
import { PopoverTooltip } from "../../../components/PopoverTooltip/PopoverTooltip";
import { Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { bribe_color } from "./color";

export function ConvexContentBribeRevenueAndUnlockTracker() {
  const { convex } = useCurveEcosystemState();

  const unlockTrackerV2 = convex.unlock_tracker_v2;
  const unlockTrackerV2Detail = {
    bar: [
      { key: "expired_unlock", color: "#000080" },
      { key: "future_unlock", color: "#008080" },
    ],
    line: [
      { key: "expired_unlock_usd", color: "#000080", right: true },
      { key: "future_unlock_usd", color: "#008080", right: true },
    ],
  };

  const Tooltip = () => {
    return (
      <PopoverTooltip
        content={
          <>
            <Typography sx={{ p: 1 }}>
              CVX holders can benefit from being bribed by receiving additional
              tokens or rewards in exchange for voting in favor of a specific
              proposal. This can provide them with an additional source of
              income and increase the value of their holdings.
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
          id="vlcvx-bribe-revenue-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <StackedBarChart
            data={convex.bribe_revenue}
            title="vlCVX Bribe Revenue"
            id="vlcvx-bribe-revenue"
            details={bribe_color}
            legend={false}
            tooltip={<Tooltip />}
          />
        </Box>
        <Box
          id="vlcvx-unlock-tracker-v2-wrap"
          sx={{ width: "calc(50% - 14px)", height: "100%" }}
        >
          <ComposeChart
            data={unlockTrackerV2}
            title="vlCVX Unlock Tracker v2"
            details={unlockTrackerV2Detail}
            yAxisKey={{
              left: "expired_unlock",
              right: "expired_unlock_usd",
            }}
            id="vlcvx-unlock-tracker-v2"
          />
        </Box>
      </Box>
    </>
  );
}
