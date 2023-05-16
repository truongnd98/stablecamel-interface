import { useGetDataConic } from "../../../stores/curve-ecosystem/hooks";
import { ConicContentCNCLockedMetrics } from "./ConicContentCNCLockedMetrics";
import { ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly } from "./ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly";
import { ConicContentLockedCNCAndLeaderboard } from "./ConicContentLockedCNCAndLeaderboard";
import { ConicContentMetrics } from "./ConicContentMetrics";
import { ConicContentTVLByTokenAndTVLCurvePoolDistribution } from "./ConicContentTVLByTokenAndTVLCurvePoolDistribution";
import { ConicTitle } from "./ConicTitle";

export function ConicContent() {
  useGetDataConic();
  return (
    <>
      <ConicTitle />
      <ConicContentMetrics />
      <ConicContentTVLByTokenAndTVLCurvePoolDistribution />
      <ConicContentCNCLockedMetrics />
      <ConicContentLockedCNCAndLeaderboard />
      <ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly />
    </>
  );
}
