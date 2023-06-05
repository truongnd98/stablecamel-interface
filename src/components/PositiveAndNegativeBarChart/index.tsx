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
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import {
  Box,
  CircularProgress,
  SxProps,
  Typography,
  Skeleton,
} from "@mui/material";
import { ChartDetailProps, PositiveAndNegativeBarChartOptions } from "./types";
import { v4 } from "uuid";
import PositiveAndNegativeChartTooltip from "./Tooltip";
import LazyLoad from "react-lazyload";
import { CopyToClipboardButton } from "../CopyToClipboardButton/CopyToClipboardButton";
import LinkIcon from "@mui/icons-material/Link";

const main: SxProps = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
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

const formatTickY = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(value);
  // if (value > 1e9 || value < -1e9) return (value / 1e9).toFixed(0) + 'B';
  // else if (value > 1e6 || value < -1e6) return (value / 1e6).toFixed(0) + 'M';
  // else if (value > 1e3 || value < -1e3) return (value / 1e3).toFixed(0) + 'K';
  // else return value.toFixed(0);
};

const formatTickX = (value: string) => {
  return value.slice(0, 3) + " " + value.slice(-4, value.length);
};

const rowTitle: SxProps = {
  width: "100%",
  padding: "0 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function PositiveAndNegativeBarChart({
  title,
  details,
  data,
  id,
}: PositiveAndNegativeBarChartOptions) {
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
              <Typography variant="h5" color="primary">
                {title}
              </Typography>
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
                    axisLine={false}
                    tickFormatter={formatTickX}
                    minTickGap={50}
                  />
                  <YAxis axisLine={false} tickFormatter={formatTickY} />
                  <Tooltip
                    wrapperStyle={{
                      zIndex: 2,
                    }}
                    content={<PositiveAndNegativeChartTooltip />}
                  />
                  <Legend
                    iconType="circle"
                    wrapperStyle={{
                      paddingLeft: "50px",
                    }}
                  />
                  <ReferenceLine y={0} stroke="#000" />
                  {!Array.isArray(details) ? (
                    <Bar
                      dataKey={details.key}
                      name={details.name}
                      stackId="a"
                      fill={details.color}
                      fillOpacity={1}
                    />
                  ) : (
                    details.map((detail: ChartDetailProps) => (
                      <Bar
                        key={v4()}
                        dataKey={detail.key}
                        name={detail.name}
                        stackId={"a"}
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
