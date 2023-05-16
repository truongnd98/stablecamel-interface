import { Box, SxProps, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { v4 } from "uuid";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";

import { CNCLeaderboard, CRVLeaderboard, CVXLeaderboard } from "../types";

const main: SxProps = {
  width: "100%",
  height: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "0 15px",
  paddingBottom: "12px",
  overflowY: "scroll",
  "@media (max-width: 1280px)": {
    padding: "0 8px",
  },
};

const grid: SxProps = {
  "div.MuiDataGrid-row": {
    maxHeight: "42px !important",
    minHeight: "42px !important",
    ":hover": {
      backgroundColor: "#FAFAFA !important",
    },
  },
  "div.MuiDataGrid-columnHeaderTitle": {
    fontSize: 14,
    fontWeight: 600,
    "@media (max-width: 1280px)": {
      fontSize: 14,
    },
  },
  "div.MuiDataGrid-cell": {
    borderBottom: "none",
    ":focus": {
      outline: "none",
    },
    ":focus-within": {
      outline: "none",
    },
  },
  "div.MuiDataGrid-columnHeaders": {
    borderBottom: "none",
  },
  "div.MuiDataGrid-columnHeader": {
    ":focus": {
      outline: "none",
    },
    ":focus-within": {
      outline: "none",
    },
  },
  border: "none",
};

const columns: GridColDef[] = [
  {
    headerName: "Wallet",
    field: "wallet",
    flex: 1,
    sortable: false,
    renderCell: ({ value }) =>
      value.startsWith("0x")
        ? value.slice(0, 6) + "..." + value.slice(-6)
        : value,
  },
  {
    headerName: "Locked CNC Balance",
    field: "balance",
    flex: 1,
    sortable: false,
    renderCell: ({ value }) =>
      new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
        value
      ),
  },
  {
    headerName: "% of Total Locked",
    field: "percent_of_total",
    flex: 1,
    sortable: false,
    renderCell: ({ value }) => (value * 100).toFixed(2) + "%",
  },
];

export function ConicContentLeaderboardTable() {
  const { conic } = useCurveEcosystemState();

  const formatList = !conic.leaderboard
    ? []
    : conic.leaderboard.map((item: CNCLeaderboard) => ({
        ...item,
        id: v4(),
      }));

  return (
    <Box sx={main}>
      <Box p="24px 10px 12px">
        <Typography fontSize="18px" color="#293845" fontWeight="600">
          CNC Leaderboard
        </Typography>
      </Box>
      <DataGrid
        autoHeight
        rows={formatList}
        columns={columns}
        initialState={{}}
        columnHeaderHeight={22}
        pageSizeOptions={[5]}
        disableColumnMenu
        disableRowSelectionOnClick
        hideFooterPagination
        hideFooter
        sx={grid}
      />
    </Box>
  );
}
