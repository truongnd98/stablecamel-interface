import { Box, Typography } from "@mui/material";
import { convertCurrency } from "../../utils/convertCurrency";
import { v4 } from "uuid";

const convertValue = (type: "TVL" | "APY", data: number) => {
  switch (type) {
    case "TVL":
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",

        maximumFractionDigits: 0,
      }).format(data);
    case "APY":
      return data.toFixed(2) + "%";
  }
};

const convertString = (value: string): string => {
  return value
    .split("-")
    .map((item: string) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};

export function YieldChartTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          width: 200,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: " 12px",
          borderRadius: "8px",
          border: "1.2px solid #8c00ef",
          "&.recharts-tooltip-wrapper": {
            zIndex: 100,
          },
        }}
      >
        <Typography variant="body1" color="primary">
          <b>
            {payload[0].payload.pool} on{" "}
            {convertString(payload[0].payload.project)}
          </b>
        </Typography>
        {payload.map((item: any, index: number) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            key={v4()}
          >
            {item.value > 0 ? (
              <>
                <Typography variant="body1">{`${item.name}:`}</Typography>
                <Typography variant="body1">
                  {convertValue(index === 0 ? "TVL" : "APY", item.value)}
                </Typography>
              </>
            ) : (
              <></>
            )}
          </Box>
        ))}
      </Box>
    );
  }

  return null;
}
