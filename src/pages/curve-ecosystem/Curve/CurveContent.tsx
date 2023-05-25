import { useGetDataCurve } from "../../../stores/curve-ecosystem/hooks";
import { CurveContentCurveRevenue } from "./CurveContentCurveRevenue";
import { CurveContentLockedCRV } from "./CurveContentLockedCRV";
import { CurveVolumeCharts } from "./CurveVolumeCharts";
import { CurveTitle } from "./CurveTitle/CurveTitle";
import { useEffect } from "react";

export function CurveContent() {
  useGetDataCurve();

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
      }, 1200);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, []);

  return (
    <>
      <CurveTitle />
      <CurveVolumeCharts />
      <CurveContentCurveRevenue />
      <CurveContentLockedCRV />
    </>
  );
}
