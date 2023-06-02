import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Avatar, AvatarGroup, Box, SxProps, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Tokens from "../../jsons/tokens.json";
import Networks from "../../jsons/networks.json";
import { v4 } from "uuid";
import { Network, Token } from "../../App";
import { usePegTrackerState } from "../../stores/pegtracker/hooks";
import { PegTrackerRes } from "./types";

const header: SxProps = {
  fontSize: 18,
  fontWeight: 600,
  height: 80,
  // flexWrap: 'nowrap',
  padding: "0 24px",
  whiteSpace: "nowrap",
  "@media (max-width: 1280px)": {
    fontSize: 16,
  },
};

const cell: SxProps = {
  padding: "0 24px",
  whiteSpace: "nowrap",
};

const stablecoin: SxProps = {
  display: "flex",
  alignItems: "center",

  gap: "8px",
  img: {
    width: 20,
    height: 20,
  },
};

const row: SxProps = {
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  width: "100%",
  height: 50,
  ":hover": {
    backgroundColor: "#1c273014 !important",
  },
};

const body: SxProps = {
  "&:last-child ": {
    height: 62,
    paddingBottom: "12px",
  },
};

const skeleton: SxProps = {
  width: "100%",
  height: 50,
};

const avatar: SxProps = {
  width: 20,
  height: 20,
  "$.MuiAvatar-root": {
    border: "none",
    fontSize: 8,
  },
};

const handleColor = (value: number) => {
  if (value > 0)
    return {
      main: "#2e8c57",
      background: "#dcfce7",
    };
  else if (value < 0) return { main: "#be3832", background: "#fde2e1" };
  else return { main: "#676b74", background: "#f3f4f6" };
};

const handleIcon = (symbol?: string): Token | undefined => {
  return Tokens.find(
    (item: Token) => item.symbol.toLowerCase() === symbol?.toLowerCase()
  );
};

const handleAvatar = (data: Record<string, string>) => {
  const listAvatar: Network[] = [];
  for (const network in data) {
    const networkName = network.split("-")[0];
    const avatar = Networks.slice(1).find((item: Network) =>
      item.slug.toLowerCase().includes(networkName.toLowerCase())
    );
    if (avatar) listAvatar.push(avatar);
  }
  return listAvatar;
};

const handleNumber = (data?: number | null) => {
  return data
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        maximumFractionDigits: 2,
      }).format(data)
    : "";
};

export function PegTrackerTable() {
  const { list } = usePegTrackerState();

  const usdc = list.find((item: PegTrackerRes) => item.symbol === "usdc");
  const usdt = list.find((item: PegTrackerRes) => item.symbol === "usdt");
  const busd = list.find((item: PegTrackerRes) => item.symbol === "busd");
  const frax = list.find((item: PegTrackerRes) => item.symbol === "frax");
  const dai = list.find((item: PegTrackerRes) => item.symbol === "dai");

  const tempList: PegTrackerRes[] = list.filter(
    (item: PegTrackerRes) =>
      item.symbol !== "usdc" &&
      item.symbol !== "usdt" &&
      item.symbol !== "busd" &&
      item.symbol !== "frax" &&
      item.symbol !== "dai"
  );
  const listData = [usdc, usdt, dai, frax, busd, ...tempList];
  // const formatList = list?.sort(
  // 	(a: PegTrackerRes, b: PegTrackerRes) => b.supply - a.supply
  // );
  return (
    <TableContainer
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        width: "100%",
        overflow: "scroll",
      }}
    >
      <Table
        sx={{
          minWidth: 650,
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={header}>Stablecoin</TableCell>
            <TableCell sx={header}>Networks</TableCell>
            <TableCell sx={header}>Price</TableCell>
            <TableCell sx={header}>% Off Peg</TableCell>
            <TableCell sx={header}>30D % Off Peg</TableCell>
            <TableCell sx={header}>Total TVL</TableCell>
            <TableCell sx={header}>Ethereum TVL</TableCell>
            <TableCell sx={header}>BSC TVL</TableCell>
            <TableCell sx={header}>Avalanche TVL</TableCell>
            <TableCell sx={header}>Arbitrum TVL</TableCell>
            <TableCell sx={header}>Total Supply</TableCell>
          </TableRow>
        </TableHead>
        {list && list.length > 0 ? (
          <TableBody sx={body}>
            {listData.map((data: PegTrackerRes | undefined, index: number) => (
              <TableRow key={v4()} sx={row} hover>
                <TableCell
                  // component='th'
                  // scope='row'
                  sx={cell}
                >
                  <Box sx={stablecoin}>
                    <img
                      src={handleIcon(data?.symbol)?.icon}
                      alt={`Stable-Camel-Activity-Monitor-${
                        handleIcon(data?.symbol)?.name.replaceAll(" ", "-") ??
                        ""
                      }-icon`}
                    />
                    {handleIcon(data?.symbol)?.name ?? data?.symbol}
                  </Box>
                  {/* <Typography variant='body1'>{data?.symbol}</Typography> */}
                </TableCell>
                <TableCell sx={cell}>
                  {data?.platforms ? (
                    <AvatarGroup
                      sx={{
                        justifyContent: "flex-end",
                        ".MuiAvatarGroup-avatar": {
                          width: 20,
                          height: 20,
                          fontSize: 10,
                          backgroundColor: "#293845",
                        },
                      }}
                    >
                      {handleAvatar(data.platforms).map((item: Network) => (
                        <Avatar
                          src={item.logo}
                          alt={`Stable-Camel-Activity-Monitor-${item.name}-logo`}
                          sx={avatar}
                          key={v4()}
                          title={item.name}
                        />
                      ))}
                    </AvatarGroup>
                  ) : (
                    <></>
                  )}
                </TableCell>
                <TableCell sx={cell}>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    notation: "compact",
                    maximumFractionDigits: 6,
                    minimumFractionDigits: 6,
                  }).format(data?.usd ?? 0)}
                </TableCell>
                <TableCell sx={cell}>
                  <Typography
                    variant="body1"
                    color={handleColor(data?.current_off_per ?? 0).main}
                    sx={{
                      width: "fit-content",
                      padding: "0 8px",
                      backgroundColor: handleColor(data?.current_off_per ?? 0)
                        .background,
                    }}
                  >
                    {data?.current_off_per
                      ? data?.current_off_per > 0
                        ? "+"
                        : ""
                      : ""}
                    {data?.current_off_per.toFixed(2)}%
                  </Typography>
                </TableCell>
                <TableCell sx={cell}>
                  <Typography
                    variant="body1"
                    color={handleColor(data?.thirty_off_per ?? 0).main}
                    sx={{
                      width: "fit-content",
                      padding: "0 8px",
                      backgroundColor: handleColor(data?.thirty_off_per ?? 0)
                        .background,
                    }}
                  >
                    {data?.thirty_off_per
                      ? data?.thirty_off_per > 0
                        ? "+"
                        : ""
                      : ""}
                    {data?.thirty_off_per.toFixed(2)}%
                  </Typography>
                </TableCell>

                <TableCell sx={cell}>{handleNumber(data?.total_tvl)}</TableCell>
                <TableCell sx={cell}>
                  {handleNumber(data?.ethereum_tvl)}
                </TableCell>
                <TableCell sx={cell}>{handleNumber(data?.bsc_tvl)}</TableCell>
                <TableCell sx={cell}>
                  {handleNumber(data?.avalanche_tvl)}
                </TableCell>
                <TableCell sx={cell}>
                  {handleNumber(data?.arbitrum_tvl)}
                </TableCell>
                <TableCell sx={cell}>{handleNumber(data?.supply)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <Box
            sx={{
              width: "100%",
              padding: "0 20px",
            }}
          >
            <Skeleton sx={skeleton} />
            <Skeleton sx={skeleton} />
            <Skeleton sx={skeleton} />
            <Skeleton sx={skeleton} />
          </Box>
        )}
        <Box sx={{ height: 12 }} />
      </Table>
    </TableContainer>
  );
}
