import { useEffect } from "react";
import { useGetDataConic } from "../../../stores/curve-ecosystem/hooks";
import { ConicContentCNCLockedMetrics } from "./ConicContentCNCLockedMetrics";
import { ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly } from "./ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly";
import { ConicContentLockedCNCAndLeaderboard } from "./ConicContentLockedCNCAndLeaderboard";
import { ConicContentMetrics } from "./ConicContentMetrics";
import { ConicContentTVLByTokenAndTVLCurvePoolDistribution } from "./ConicContentTVLByTokenAndTVLCurvePoolDistribution";
import { ConicTitle } from "./ConicTitle";

export function ConicContent() {
  useGetDataConic();
  const handleElementScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.split("#")[1].toString();
      const timer1 = setTimeout(() => {
        handleElementScroll(id);
      }, 3200);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, []);
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
