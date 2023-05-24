import Box from "@mui/material/Box";
import { SxProps, Link, Typography, Tooltip, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGraveYardState } from "../../stores/graveyard/hooks";
import Networks from "../../jsons/networks.json";
import { Network } from "../../App";
import { format } from "date-fns";
import { GraveYardRes } from "./types";
const status: SxProps = {
  display: "flex",
  alignItems: "center",
  cursor: "default",
};
const tooltip: SxProps = {
  ":hover": {
    backgroundColor: "unset",
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
const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', flex: 1, maxWidth: 50, hideable: true },
  {
    headerName: "Name",
    field: "name",
    flex: 1,
    minWidth: 250,
  },
  {
    headerName: "Network",
    field: "network",
    minWidth: 120,
    flex: 1,
    renderCell: ({ value }) => (
      <img
        src={
          Networks.find(
            (network: Network) =>
              network.name.toLowerCase().includes(value.toLowerCase()) ||
              network.slug.toLowerCase().includes(value.toLowerCase())
          )?.logo
        }
        alt={`logo-network`}
        style={{
          width: "20px",
        }}
        title={value}
      />
    ),
  },
  {
    headerName: "Price",
    field: "price",
    flex: 1,
    minWidth: 120,
    renderCell: ({ value }) => (
      <>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact",
          maximumFractionDigits: 6,
          minimumFractionDigits: 6,
        }).format(value ?? 0)}
      </>
    ),
  },
  {
    headerName: "3M Supply Change",
    field: "three_month_market_cap_change",
    flex: 1,
    minWidth: 200,
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
        {value > 0 ? "+" : ""}
        {value ? value?.toFixed(2) + "%" : ""}
      </Typography>
    ),
  },
  {
    headerName: "Status",
    field: "status",
    flex: 1,
    minWidth: 150,
    renderCell: ({ value }) => (
      <Box sx={status}>
        <Tooltip
          title={value === 1 ? "barely alive" : "dead"}
          placement="top"
          arrow
          disableInteractive
          sx={tooltip}
        >
          <IconButton>{value === 1 ? "🫠" : "🪦"}</IconButton>
        </Tooltip>
      </Box>
    ),
  },
  {
    headerName: "Type",
    field: "type",
    flex: 1,
    minWidth: 150,
  },
  {
    headerName: "Peak supply",
    field: "peak_supply_number",
    flex: 1,
    minWidth: 150,
    renderCell: ({ value }) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        compactDisplay: "short",
        maximumFractionDigits: 2,
      }).format(value),
  },
  {
    headerName: "Date",
    field: "depeg_date_time",
    flex: 1,
    minWidth: 120,
    renderCell: ({ value }) => format(new Date(value), "PP"),
  },
  {
    headerName: "Classification",
    field: "classification",
    flex: 1,
    minWidth: 250,
  },
  {
    headerName: "Learn more",
    field: "learn_more",
    minWidth: 140,
    flex: 1,
    renderCell: ({ value }) => (
      <Link
        href={value}
        target="_blank"
        color="secondary"
        sx={{
          textDecoration: "none",
        }}
      >
        More
      </Link>
    ),
  },
];

const grid: SxProps = {
  "div.MuiDataGrid-row": {
    ":hover": {
      backgroundColor: "#1c273014 !important",
    },
  },
  "div.MuiDataGrid-columnHeaderTitle": {
    fontSize: 18,
    fontWeight: 600,
    "@media (max-width: 1280px)": {
      fontSize: 16,
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
    height: 80,
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

const main: SxProps = {
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "0 22px",
  paddingBottom: "12px",
};

export default function GraveYardTable() {
  const { list } = useGraveYardState();
  const formatList = list.map((item: GraveYardRes, index: number) => ({
    ...item,
    id: index + 1,
  }));
  return (
    <Box sx={main}>
      <DataGrid
        autoHeight
        rows={formatList}
        columns={columns}
        initialState={
          {
            //   pagination: {
            //     paginationModel: {
            //       pageSize: 0,
            //     },
            //   },
          }
        }
        columnHeaderHeight={80}
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
