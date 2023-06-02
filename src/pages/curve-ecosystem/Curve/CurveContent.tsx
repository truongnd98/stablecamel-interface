import { useGetDataCurve } from "../../../stores/curve-ecosystem/hooks";
import { CurveContentCurveRevenue } from "./CurveContentCurveRevenue";
import { CurveContentLockedCRV } from "./CurveContentLockedCRV";
import { CurveVolumeCharts } from "./CurveVolumeCharts";
import { CurveTitle } from "./CurveTitle/CurveTitle";

export function CurveContent() {
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
  useGetDataCurve(() => handleElementScroll(id));

  return (
    <>
      <CurveTitle />
      <CurveVolumeCharts />
      <CurveContentCurveRevenue />
      <CurveContentLockedCRV />
    </>
  );
}
