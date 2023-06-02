import { useGetDataConic } from "../../../stores/curve-ecosystem/hooks";
import { ConicContentCNCLockedMetrics } from "./ConicContentCNCLockedMetrics";
import { ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly } from "./ConicContentDailyCNCNetLockedAndUnlocksCNCTrackerWeekly";
import { ConicContentLockedCNCAndLeaderboard } from "./ConicContentLockedCNCAndLeaderboard";
import { ConicContentMetrics } from "./ConicContentMetrics";
import { ConicContentTVLByTokenAndTVLCurvePoolDistribution } from "./ConicContentTVLByTokenAndTVLCurvePoolDistribution";
import { ConicTitle } from "./ConicTitle";

export function ConicContent() {
  const handleElementScroll = (id: string) => {
    const element = document.getElementById(id);
    const elementWrap = document.getElementById(id + "-wrap");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section // set time out for the render can catch after api fetched
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
        elementWrap?.classList.add("animation-active");
        console.log("", id);
      }, 1000);
    }
  };

  const hash = window.location.hash;
  const id = hash.split("#")[1] ? hash.split("#")[1].toString() : "#";
  useGetDataConic(() => handleElementScroll(id));

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
