import { SxProps } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./Tooltip";
import { Box, Typography, Skeleton } from "@mui/material";
import { v4 } from "uuid";
import LazyLoad from "react-lazyload";
import CircularProgress from "@mui/material/CircularProgress";
import LinkIcon from "@mui/icons-material/Link";
import { CopyToClipboardButton } from "../CopyToClipboardButton/CopyToClipboardButton";
import { AreaChartOptions, ChartDetailProps } from "./types";

const formatTickY = (value: number) => {
  if (value > 1e9) return (value / 1e9).toFixed(0) + "B";
  else if (value > 1e6 || value < -1e6) return (value / 1e6).toFixed(0) + "M";
  else if (value > 1e3 || value < -1e3) return (value / 1e3).toFixed(0) + "K";
  else return value.toFixed(0);
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

const background: SxProps = {
  position: "absolute",
  top: 150,
  img: {
    width: 150,
    opacity: 0.35,
  },
  zIndex: 1,
};

const rowTitle: SxProps = {
  width: "100%",
  padding: "0 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function CustomAreaChart({
  data,
  title,
  detail,
  legend = false,
  id,
  tooltip,
}: AreaChartOptions) {
  return (
    <>
      <section id={id}></section>
      {!data || !data.length ? (
        <Skeleton variant="rounded" width="100%" height="100%" />
      ) : (
        <LazyLoad
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          once
          placeholder={<CircularProgress color="secondary" />}
        >
          <Box sx={main}>
            <Box sx={background}>
              <img
                src="/logos/logo-bw.png"
                alt="Stable Camel - Stable Camel icon"
              />
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
                {tooltip ? tooltip : <></>}
              </Box>
              <CopyToClipboardButton
                type={
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    <LinkIcon color="primary" />
                    <Typography variant="body1" color="primary">
                      <b>Copy link</b>
                    </Typography>
                  </Box>
                }
                content={`${window.location.toString().split("#")[0]}#${id}`}
              />
            </Box>
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
                  <XAxis
                    dataKey="time"
                    tickFormatter={formatTickX}
                    minTickGap={50}
                  />
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
                    content={<CustomTooltip />}
                  />
                  {!Array.isArray(detail) ? (
                    <Area
                      type="monotone"
                      dataKey={detail.key}
                      name={detail.name}
                      stroke="none"
                      fill={detail.color}
                      activeDot={false}
                      fillOpacity={1}
                      isAnimationActive={false}
                    />
                  ) : (
                    detail.map((item: ChartDetailProps) => (
                      <Area
                        type="monotone"
                        dataKey={item.key}
                        name={item.name}
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
        </LazyLoad>
      )}
    </>
  );
}
