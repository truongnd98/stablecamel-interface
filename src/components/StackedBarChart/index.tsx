import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Box,
  CircularProgress,
  SxProps,
  Typography,
  Skeleton,
} from "@mui/material";
import { v4 } from "uuid";
import StackedChartTooltip from "./Tooltip";
import LazyLoad from "react-lazyload";
import { BarChartOptions, ChartDetailProps } from "./types";
import { CopyToClipboardButton } from "../CopyToClipboardButton/CopyToClipboardButton";
import LinkIcon from "@mui/icons-material/Link";

const main: SxProps = {
  width: "100%",
  height: "100%",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
  padding: "24px 0",
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

const formatTickY = (value: number) => {
  if (value > 1e9) return (value / 1e9).toFixed(0) + "B";
  else if (value > 1e6 || value < -1e6) return (value / 1e6).toFixed(0) + "M";
  else if (value > 1e3 || value < -1e3) return (value / 1e3).toFixed(0) + "K";
  else return value.toFixed(0);
};

const formatTickX = (value: string) => {
  return value.slice(0, 3) + " " + value.slice(-4, value.length);
};

export default function StackedBarChart({
  id,
  title,
  data,
  details,
  legend = true,
  tooltip,
}: BarChartOptions) {
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
              <img src="/logos/logo-bw.png" alt="logo" />
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
              style={{
                width: "100%",
                height: "100%",
              }}
              once
              offset={100}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
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
                  <YAxis tickFormatter={formatTickY} axisLine={false} />
                  <Tooltip
                    wrapperStyle={{
                      zIndex: 2,
                    }}
                    content={<StackedChartTooltip />}
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

                  {!Array.isArray(details) ? (
                    <Bar
                      dataKey={details.key}
                      stackId="a"
                      fill={details.color}
                      fillOpacity={1}
                    />
                  ) : (
                    details.map((detail: ChartDetailProps) => (
                      <Bar
                        key={v4()}
                        dataKey={detail.key}
                        stackId="1"
                        fill={detail.key === "total" ? "none" : detail.color}
                        fillOpacity={1}
                        isAnimationActive={false}
                      />
                    ))
                  )}
                </BarChart>
              </ResponsiveContainer>
            </LazyLoad>
          </Box>
        </LazyLoad>
      )}
    </>
  );
}
