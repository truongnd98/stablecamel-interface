import { useEffect } from "react";
import { useGetDataFrax } from "../../../stores/curve-ecosystem/hooks";
import { CurveEcosystemMain } from "./CurveEcosystemMain/CurveEcosystemMain";
import { CurveEcosystemSecondSub } from "./CurveEcosystemSecondSub/CurveEcosystemSecondSub";
import { CurveEcosystemSubContent } from "./CurveEcosystemSubContent/CurveEcosystemSubContent";
import { CurveEcosystemThirdSub } from "./CurveEcosystemThirdSub/CurveEcosystemThirdSub";
import { FraxTitle } from "./FraxTitle/FraxTitle";

export function FraxContent() {
  useGetDataFrax();
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
      <FraxTitle />
      <CurveEcosystemMain />
      <CurveEcosystemSubContent />
      <CurveEcosystemSecondSub />
      <CurveEcosystemThirdSub />
    </>
  );
}
