import { Box, SxProps } from "@mui/material";
import { MoneyPrinterGroupChart } from "./MoneyPrinterGroupChart";

import { MoneyPrinterGroupDataGrid } from "./MoneyPrinterGroupDataGrid";

const container: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  justifyContent: "space-between",
};

export function MoneyPrinterGroupLayout({
  data,
  title,
}: {
  data: any[];
  title: string;
}) {
  const id = title?.toLowerCase().replaceAll(" ", "-");
  const chartId = id + "-chart";
  return (
    <>
      <section id={id} />
      <Box sx={container}>
        <MoneyPrinterGroupChart data={data} title={title} id={chartId} />
        <MoneyPrinterGroupDataGrid data={data} title={title} id={id} />
      </Box>
    </>
  );
}
