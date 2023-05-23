import { Box, SxProps } from "@mui/material";
import { MoneyPrinterGroupChart } from "./MoneyPrinterGroupChart";
import { MoneyPrinterGroupDataGridBalance } from "./MoneyPrinterGroupDataGridBalance";

const container: SxProps = {
  width: "100%",
  height: 380,
  display: "flex",
  gap: "28px",
};

export function MoneyPrinterGroupLayoutBalance({
  data,
  title,
}: {
  data: any[];
  title: string;
}) {
  const id = title?.toLowerCase().replaceAll(" ", "-");
  const chartId = id + "-chart";
  // console.log("id =>", id);

  return (
    <>
      <section id={id} />
      <Box sx={container}>
        <MoneyPrinterGroupChart data={data} title={title} id={chartId} />
        <MoneyPrinterGroupDataGridBalance data={data} title={title} id={id} />
      </Box>
    </>
  );
}
