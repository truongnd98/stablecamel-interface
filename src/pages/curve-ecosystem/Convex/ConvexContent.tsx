import { useGetDataConvex } from "../../../stores/curve-ecosystem/hooks";
import { ConvexContentMetrics } from "./ConvexContentMetrics";
import { ConvexContentLockedCVXAndLeaderboard } from "./ConvexContentLockedCVXAndLeaderboard";
import { ConvexContentBribeRevenueAndUnlockTracker } from "./ConvexContentBribeRevenueAndUnlockTracker";
import { ConvexContentCumulative } from "./ConvexContentCumulative";
import { ConvexTitle } from "./ConvexTitle";
import { useEffect } from "react";

export function ConvexContent() {
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
  useGetDataConvex(() => handleElementScroll(id));

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
