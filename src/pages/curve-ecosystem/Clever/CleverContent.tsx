import { useGetDataClever } from "../../../stores/curve-ecosystem/hooks";
import { CleverContentCharts } from "./CleverContentCharts";
import { CleverContentMetrics } from "./CleverContentMetrics";
import { CleverTitle } from "./CleverTitle";

export function CleverContent() {
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
  useGetDataClever(() => handleElementScroll(id));
  return (
    <>
      <CleverTitle />
      <CleverContentMetrics />
      <CleverContentCharts />
    </>
  );
}
