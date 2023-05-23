import { Box, SxProps, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { v4 } from "uuid";
import { useCurveEcosystemState } from "../../../stores/curve-ecosystem/hooks";

import { CNCLeaderboard } from "../types";
import { CopyToClipboardButton } from "../../../components/CopyToClipboardButton/CopyToClipboardButton";
import LinkIcon from "@mui/icons-material/Link";

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
    maxHeight: "48px !important",
    minHeight: "48px !important",
    alignItems: "center",
    borderRadius: "8px",
    ":hover": {
      backgroundColor: "#1c273014 !important",
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
    maxHeight: "42px !important",
    minHeight: "42px !important",

    ":focus": {
      outline: "none",
    },
    ":focus-within": {
      outline: "none",
    },
  },

  ".MuiDataGrid-cell--textLeft": {
    "&:nth-child(2)": {
      justifyContent: "flex-end",
    },
    "&:nth-child(3)": {
      justifyContent: "flex-end",
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

  ".MuiDataGrid-columnHeader": {
    "&:nth-child(3)": {
      ".MuiDataGrid-columnHeaderTitleContainer": {
        justifyContent: "flex-end",
      },
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
    <>
      <Box sx={main}>
        <Box
          p="24px 10px 12px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize="18px" color="#293845" fontWeight="600">
            CNC Leaderboard
          </Typography>
          <CopyToClipboardButton
            type={
              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <LinkIcon color="primary" />
                <Typography variant="body1" color="primary">
                  <b>Copy link</b>
                </Typography>
              </Box>
            }
            content={`${
              window.location.toString().split("#")[0]
            }#cnc-leaderboard`}
          />
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
    </>
  );
}
