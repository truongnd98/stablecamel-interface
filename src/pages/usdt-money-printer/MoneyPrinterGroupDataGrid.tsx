import * as React from "react";
import Box from "@mui/material/Box";
import { SxProps, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import LinkIcon from "@mui/icons-material/Link";
import { CopyToClipboardButton } from "../../components/CopyToClipboardButton/CopyToClipboardButton";
import { v4 } from "uuid";
import { USDTSupply } from "./type";

const handleColor = (value: number) => {
  if (value > 0)
    return {
      main: "#2e8c57",
      background: "#dcfce7",
    };
  else if (value < 0) return { main: "#be3832", background: "#fde2e1" };
  else return { main: "#676b74", background: "#f3f4f6" };
};

const columns: GridColDef[] = [
  {
    headerName: "Day",
    field: "time",
    flex: 1,
    minWidth: 100,
    sortable: false,
  },
  {
    headerName: "Supply",
    field: "supply",
    flex: 1,
    minWidth: 100,
    sortable: false,
    renderCell: ({ value }) =>
      new Intl.NumberFormat("en-US", {
        // notation: "compact",
        maximumFractionDigits: 0,
      }).format(value),
  },
  {
    headerName: "Seven Day Change",
    field: "seven_d_chng",
    flex: 1,
    minWidth: 120,
    sortable: false,

    renderCell: ({ value }) => (
      <Typography
        variant="body1"
        color={handleColor(value).main}
        sx={{
          width: "fit-content",
          padding: "0 8px",
          backgroundColor: handleColor(value).background,
        }}
      >
        {(value * 100).toFixed(2) + "%"}
      </Typography>
    ),
  },
  {
    headerName: "Thirty Day Change",
    field: "thirty_d_chng",
    flex: 1,
    minWidth: 120,

    sortable: false,
    renderCell: ({ value }) => (
      <Typography
        variant="body1"
        color={handleColor(value).main}
        sx={{
          width: "fit-content",
          padding: "0 8px",
          backgroundColor: handleColor(value).background,
        }}
      >
        {(value * 100).toFixed(2) + "%"}
      </Typography>
    ),
  },
];

const grid: SxProps = {
  "div.MuiDataGrid-row": {
    alignItems: "center",
    borderRadius: "8px",
    ":hover": {
      backgroundColor: "#1c273014 !important",
    },
  },
  "div.MuiDataGrid-columnHeaderTitle": {
    fontWeight: 600,
    fontSize: 14,
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
  ".MuiDataGrid-cell--textLeft": {
    ":not(:first-child)": {
      justifyContent: "flex-end",
    },
  },
  "div.MuiDataGrid-columnHeaders": {
    borderBottom: "none",
  },
  "div.MuiDataGrid-columnHeader": {
    ":not(:first-child)": {
      ".MuiDataGrid-columnHeaderTitleContainer": {
        justifyContent: "flex-end",
      },
    },
    ":focus": {
      outline: "none",
    },
    ":focus-within": {
      outline: "none",
    },
  },
  border: "none",
};

const main: SxProps = {
  // width: "calc(100% - 14px)",
  height: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "0 22px",
  paddingBottom: "12px",
  overflowY: "scroll",
  scrollbarWidth: "thin",
  "::-webkit-scrollbar": {
    width: "8px",
  },

  "@media (max-width: 1280px)": {
    padding: "0 8px",
  },
};

export function USDTMoneyPrinterGroupDataGrid({
  data,
  title,
  id,
}: {
  data: any[];
  title: string;
  id: string;
}) {
  let list: USDTSupply[] = [];

  list = data.map((item) => ({ ...item, id: v4() }));

  list.sort((a, b) => -new Date(a.day).getTime() + new Date(b.day).getTime());

  return (
    <Box sx={main}>
      <section id={id} />
      <Box
        p="24px 10px 12px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontSize="18px" color="#293845" fontWeight="600">
          {title}
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
          content={`${window.location.toString().split("#")[0]}#${id}`}
        />
      </Box>
      <DataGrid
        autoHeight
        rows={list}
        columns={columns}
        initialState={{}}
        columnHeaderHeight={22}
        pageSizeOptions={[5]}
        disableColumnMenu
        disableRowSelectionOnClick
        // hideFooterPagination
        // hideFooter
        sx={grid}
      />
    </Box>
  );
}
