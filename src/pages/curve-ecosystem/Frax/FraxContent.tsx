import { useGetDataFrax } from "../../../stores/curve-ecosystem/hooks";
import { CurveEcosystemMain } from "./CurveEcosystemMain/CurveEcosystemMain";
import { CurveEcosystemSecondSub } from "./CurveEcosystemSecondSub/CurveEcosystemSecondSub";
import { CurveEcosystemSubContent } from "./CurveEcosystemSubContent/CurveEcosystemSubContent";
import { CurveEcosystemThirdSub } from "./CurveEcosystemThirdSub/CurveEcosystemThirdSub";
import { FraxTitle } from "./FraxTitle/FraxTitle";

export function FraxContent() {
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
  useGetDataFrax(() => handleElementScroll(id));
  return (
    <>
      <FraxTitle />
      <CurveEcosystemMain />
      <CurveEcosystemSubContent />
      <CurveEcosystemSecondSub />
      <CurveEcosystemThirdSub />
    </>
  );
}
