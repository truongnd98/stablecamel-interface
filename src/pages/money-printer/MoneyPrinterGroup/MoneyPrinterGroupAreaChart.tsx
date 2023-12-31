import { SxProps, Skeleton } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { MoneyPrinterGroupAreaChartTooltip } from "./MoneyPrinterGroupAreaChartTooltip";
import { Box, Typography } from "@mui/material";
import { v4 } from "uuid";
import LazyLoad from "react-lazyload";
import CircularProgress from "@mui/material/CircularProgress";
import { CopyToClipboardButton } from "../../../components/CopyToClipboardButton/CopyToClipboardButton";
import LinkIcon from "@mui/icons-material/Link";

const formatTickY = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 0,
  }).format(value);
};

const formatTickX = (value: string) => {
  return value.slice(0, 3) + " " + value.slice(-4, value.length);
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
const rowTitle: SxProps = {
  width: "100%",
  padding: "0 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
export interface ChartDetailProps {
  color: string;
  key: string;
}

const background: SxProps = {
  position: "absolute",
  top: 150,
  img: {
    width: 150,
    opacity: 0.35,
  },
  zIndex: 1,
};

export function MoneyPrinterGroupAreaChart({
  data,
  title,
  detail,
  legend = false,
  id,
}: {
  data: any[];
  title: string;
  detail: ChartDetailProps | ChartDetailProps[];
  legend?: boolean;
  id?: string;
}) {
  return !data.length ? (
    <Skeleton variant="rounded" width="100%" height="100%" />
  ) : (
    <Box sx={main}>
      <Box sx={background}>
        <img src="/logos/logo-bw.png" alt="Stable Camel - Stable Camel icon" />
      </Box>
      <Box sx={rowTitle}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="8px"
        >
          <Typography variant="h5" color="primary">
            {title}
          </Typography>
          {/* {tooltip ? tooltip : <></>} */}
        </Box>
        <CopyToClipboardButton
          type={
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <LinkIcon color="primary" />
              <Typography variant="body1" color="primary">
                <b>Copy link</b>
              </Typography>
            </Box>
          }
          content={`${window.location.toString().split("#")[0]}#${id}`}
        />
      </Box>
      {/* <Typography
        variant='h5'
        color='primary'
      >
        {title}
      </Typography> */}
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
          <AreaChart
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
            {/* <CartesianGrid strokeDasharray='3 3' /> */}
            <XAxis dataKey="time" tickFormatter={formatTickX} minTickGap={50} />
            <YAxis
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
              content={<MoneyPrinterGroupAreaChartTooltip />}
            />
            {!Array.isArray(detail) ? (
              <Area
                type="monotone"
                dataKey={detail.key}
                stroke="none"
                fill={detail.color}
                activeDot={false}
                fillOpacity={1}
              />
            ) : (
              detail.map((item: ChartDetailProps) => (
                <Area
                  type="monotone"
                  dataKey={item.key}
                  stroke="none"
                  stackId={item.key === "total" ? "1" : "0"}
                  fill={item.key === "total" ? "none" : item.color}
                  activeDot={false}
                  key={v4()}
                  fillOpacity={1}
                  isAnimationActive={false}
                />
              ))
            )}
          </AreaChart>
        </ResponsiveContainer>
      </LazyLoad>
    </Box>
  );
}
