import { useGetDataConvex } from "../../../stores/curve-ecosystem/hooks";
import { ConvexContentMetrics } from "./ConvexContentMetrics";
import { ConvexContentLockedCVXAndLeaderboard } from "./ConvexContentLockedCVXAndLeaderboard";
import { ConvexContentBribeRevenueAndUnlockTracker } from "./ConvexContentBribeRevenueAndUnlockTracker";
import { ConvexContentCumulative } from "./ConvexContentCumulative";
import { ConvexTitle } from "./ConvexTitle";

export function ConvexContent() {
  useGetDataConvex();
  return (
    <>
      <ConvexTitle />
      <ConvexContentMetrics />
      <ConvexContentLockedCVXAndLeaderboard />
      <ConvexContentBribeRevenueAndUnlockTracker />
      <ConvexContentCumulative />
    </>
  );
}
