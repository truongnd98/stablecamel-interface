import { Box, Typography } from "@mui/material";
import { v4 } from "uuid";

const convertNumber = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    // style: 'currency',
    // currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

export const MoneyPrinterGroupAreaChartTooltip = ({
  active,
  payload,
  label,
}: any) => {
  // console.log('payload', payload);
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          width: 200,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: " 12px",
          borderRadius: "4px",
          border: "1.2px solid #8c00ef",
          "&.recharts-tooltip-wrapper": {
            zIndex: 100,
          },
        }}
      >
        <Typography variant="body1" color="primary">
          <b>{label}</b>
        </Typography>
        {payload
          .sort((a: any, b: any) => b.value - a.value)
          // .slice(0, 12)
          .map((item: any) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              key={v4()}
            >
              {item.value > 0 ? (
                <>
                  <Typography
                    variant="body1"
                    sx={{
                      color: item.color,
                    }}
                  >{`${item.name}:`}</Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: item.color,
                    }}
                  >
                    {convertNumber(item.value)}
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
};
