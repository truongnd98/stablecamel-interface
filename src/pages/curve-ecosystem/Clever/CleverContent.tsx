import { useGetDataClever } from "../../../stores/curve-ecosystem/hooks";
import { CleverContentCharts } from "./CleverContentCharts";
import { CleverContentMetrics } from "./CleverContentMetrics";
import { CleverTitle } from "./CleverTitle";

export function CleverContent() {
  useGetDataClever();
  return (
    <>
      <CleverTitle />
      <CleverContentMetrics />
      <CleverContentCharts />
    </>
  );
}
