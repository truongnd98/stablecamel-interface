import {
  Box,
  CircularProgress,
  Skeleton,
  SxProps,
  Typography,
} from "@mui/material";
import React, { PureComponent } from "react";
import LazyLoad from "react-lazyload";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { ComposeChartProps } from "./types";
import { CopyToClipboardButton } from "../CopyToClipboardButton/CopyToClipboardButton";
import LinkIcon from "@mui/icons-material/Link";
import { ComposeChartTooltip } from "./ComposeChartTooltip";

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

const formatTickY = (value: number) => {
  if (value > 1e9) return (value / 1e9).toFixed(0) + "B";
  else if (value > 1e6 || value < -1e6) return (value / 1e6).toFixed(0) + "M";
  else if (value > 1e3 || value < -1e3) return (value / 1e3).toFixed(0) + "K";
  else return value.toFixed(0);
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

export function ComposeChart({
  id,
  title,
  data,
  details,
  yAxisKey,
}: ComposeChartProps) {
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
              height="100%"
              offset={100}
              style={{
                width: "100%",
                height: "100%",
              }}
              once
            >
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 0,
                    right: 20,
                    bottom: 0,
                    left: 20,
                  }}
                >
                  {/* <CartesianGrid stroke='#f5f5f5' /> */}
                  <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickFormatter={formatTickX}
                    minTickGap={50}
                  />
                  <YAxis
                    orientation="left"
                    axisLine={false}
                    tickFormatter={formatTickY}
                    dataKey={yAxisKey.left}
                  />
                  <YAxis
                    axisLine={false}
                    yAxisId="right"
                    tickFormatter={formatTickY}
                    orientation="right"
                    dataKey={yAxisKey.right}
                  />
                  <Tooltip
                    wrapperStyle={{
                      zIndex: 2,
                    }}
                    content={<ComposeChartTooltip />}
                  />
                  {/* <Legend /> */}

                  {details.area &&
                    (!Array.isArray(details.area) ? (
                      <Area
                        type="monotone"
                        dataKey={details.area.key}
                        name={details.area.name}
                        fill={details.area.color}
                        stroke="none"
                        activeDot={false}
                        fillOpacity={1}
                        isAnimationActive={false}
                        yAxisId={
                          details.area.right ||
                          details.area.key === yAxisKey.right
                            ? "right"
                            : undefined
                        }
                      />
                    ) : (
                      details.area.map((item) => (
                        <Area
                          type="monotone"
                          dataKey={item.key}
                          name={item.name}
                          key={item.key}
                          fill={item.color}
                          stroke="none"
                          activeDot={false}
                          fillOpacity={1}
                          isAnimationActive={false}
                          yAxisId={
                            item.right || item.key === yAxisKey.right
                              ? "right"
                              : undefined
                          }
                        />
                      ))
                    ))}
                  {details.bar &&
                    (!Array.isArray(details.bar) ? (
                      <Bar
                        dataKey={details.bar.key}
                        name={details.bar.name}
                        barSize={20}
                        fill={details.bar.color}
                        isAnimationActive={false}
                        yAxisId={
                          details.bar.right ||
                          details.bar.key === yAxisKey.right
                            ? "right"
                            : undefined
                        }
                      />
                    ) : (
                      details.bar.map((item) => (
                        <Bar
                          dataKey={item.key}
                          name={item.name}
                          key={item.key}
                          barSize={20}
                          fill={item.color}
                          isAnimationActive={false}
                          yAxisId={
                            item.right || item.key === yAxisKey.right
                              ? "right"
                              : undefined
                          }
                        />
                      ))
                    ))}
                  {details.line &&
                    (!Array.isArray(details.line) ? (
                      <Line
                        dataKey={details.line.key}
                        name={details.line.name}
                        stroke={details.line.color}
                        dot={false}
                        activeDot={false}
                        isAnimationActive={false}
                        yAxisId={
                          details.line.right ||
                          details.line.key === yAxisKey.right
                            ? "right"
                            : undefined
                        }
                      />
                    ) : (
                      details.line.map((item) => (
                        <Line
                          dataKey={item.key}
                          name={item.name}
                          key={item.key}
                          stroke={item.color}
                          dot={false}
                          activeDot={false}
                          isAnimationActive={false}
                          yAxisId={
                            item.right || item.key === yAxisKey.right
                              ? "right"
                              : undefined
                          }
                        />
                      ))
                    ))}
                  {details.scatter &&
                    (!Array.isArray(details.scatter) ? (
                      <Scatter
                        dataKey={details.scatter.key}
                        name={details.scatter.name}
                        fill={details.scatter.color}
                        yAxisId={
                          details.scatter.right ||
                          details.scatter.key === yAxisKey.right
                            ? "right"
                            : undefined
                        }
                      />
                    ) : (
                      details.scatter.map((item) => (
                        <Scatter
                          dataKey={item.key}
                          name={item.name}
                          key={item.key}
                          fill={item.color}
                          yAxisId={
                            item.right || item.key === yAxisKey.right
                              ? "right"
                              : undefined
                          }
                        />
                      ))
                    ))}
                </ComposedChart>
              </ResponsiveContainer>
            </LazyLoad>
          </Box>
        </LazyLoad>
      )}
    </>
  );
}
