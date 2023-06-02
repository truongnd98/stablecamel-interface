import { SxProps } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  Legend,
} from "recharts";
import { ScatterChartTooltip } from "./ScatterChartTooltip";
import { Box, Typography } from "@mui/material";
import { v4 } from "uuid";
import LazyLoad from "react-lazyload";
import CircularProgress from "@mui/material/CircularProgress";
import { ChartDetailProps } from "./types";

const formatTickX = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 0,
  }).format(value);
  //   if (value > 1e9) return (value / 1e9).toFixed(0) + 'B';
  //   else if (value > 1e6 || value < -1e6) return (value / 1e6).toFixed(0) + 'M';
  //   else if (value > 1e3 || value < -1e3) return (value / 1e3).toFixed(0) + 'K';
  //   else return value.toFixed(0);
};

const formatTickY = (value: number) => {
  return value.toFixed(0);
};

const main: SxProps = {
  width: "100%",
  height: "100%",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "24px 0",
  alignItems: "center",
  borderRadius: "8px",
  position: "relative",
};

const background: SxProps = {
  position: "absolute",
  top: 150,
  img: {
    width: 150,
    opacity: 0.35,
  },
  zIndex: 1,
};

export function ScatterChartComponent({
  data,
  title,
  detail,
  legend = false,
}: {
  data: any[];
  title: string;
  detail: ChartDetailProps | ChartDetailProps[];
  legend?: boolean;
}) {
  return (
    <Box sx={main}>
      <Box sx={background}>
        <img src="/logos/logo-bw.png" alt="Stable-Camel-watermark" />
      </Box>
      <Typography variant="h5" color="primary">
        {title}
      </Typography>
      <LazyLoad
        height="100%"
        offset={100}
        style={{
          width: "100%",
          height: "100%",
        }}
        once
      >
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 12,
              right: 50,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="tvl_number"
              tickFormatter={formatTickX}
              minTickGap={50}
            />
            <YAxis
              dataKey="total_apy"
              tickFormatter={formatTickY}
              domain={["dataMin", "dataMax"]}
              axisLine={false}
            />
            {legend ? (
              <Legend
                iconType="circle"
                wrapperStyle={{
                  paddingLeft: "50px",
                }}
              />
            ) : (
              <></>
            )}
            <Tooltip
              wrapperStyle={{
                zIndex: 2,
              }}
              content={<ScatterChartTooltip />}
            />
            {!Array.isArray(detail) ? (
              <Scatter
                type="monotone"
                dataKey={detail.key}
                stroke="none"
                fill={detail.color}
                fillOpacity={1}
              />
            ) : (
              detail.map((item: ChartDetailProps) => (
                <Scatter
                  type="monotone"
                  dataKey={item.key}
                  stroke="none"
                  fill={item.key === "total" ? "none" : item.color}
                  key={v4()}
                  fillOpacity={1}
                  isAnimationActive={false}
                />
              ))
            )}
          </ScatterChart>
        </ResponsiveContainer>
      </LazyLoad>
    </Box>
  );
}
