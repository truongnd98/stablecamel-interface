import { useGetDataConvex } from "../../../stores/curve-ecosystem/hooks";
import { ConvexContentMetrics } from "./ConvexContentMetrics";
import { ConvexContentLockedCVXAndLeaderboard } from "./ConvexContentLockedCVXAndLeaderboard";
import { ConvexContentBribeRevenueAndUnlockTracker } from "./ConvexContentBribeRevenueAndUnlockTracker";
import { ConvexContentCumulative } from "./ConvexContentCumulative";
import { ConvexTitle } from "./ConvexTitle";
import { useEffect } from "react";

export function ConvexContent() {
  useGetDataConvex();

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
      <ConvexTitle />
      <ConvexContentMetrics />
      <ConvexContentLockedCVXAndLeaderboard />
      <ConvexContentBribeRevenueAndUnlockTracker />
      <ConvexContentCumulative />
    </>
  );
}
