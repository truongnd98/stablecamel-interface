import Box from "@mui/material/Box";
import { SxProps, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import LinkIcon from "@mui/icons-material/Link";
import { GroupDataGridBalanceProps } from "./type";
import { CopyToClipboardButton } from "../../components/CopyToClipboardButton/CopyToClipboardButton";

const grid: SxProps = {
  "div.MuiDataGrid-row": {
    alignItems: "center",
    borderRadius: "8px",
    ":hover": {
      backgroundColor: "#1c273014 !important",
    },
  },
  "div.MuiDataGrid-columnHeaderTitle": {
    fontSize: 14,
    fontWeight: 600,
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
  width: "100%",
  height: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "0 22px",
  paddingBottom: "12px",
  overflowY: "scroll",
  // scrollbarWidth: 'thin',
  // '::-webkit-scrollbar': {
  //   width: '8px',
  // },

  "@media (max-width: 1280px)": {
    padding: "0 8px",
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
    headerName: "Exchange",
    field: "exchange",
    flex: 1,
    minWidth: 100,
    sortable: false,
  },
  {
    headerName: "Balance",
    field: "balance",
    flex: 1,
    minWidth: 140,
    sortable: false,
    renderCell: ({ value }) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        maximumFractionDigits: 2,
      }).format(value),
  },
  {
    headerName: "Change (7D)",
    field: "change_7d",
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
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact",
          maximumFractionDigits: 2,
        }).format(value)}
      </Typography>
    ),
  },
  {
    headerName: "% Change (7D)",
    field: "change_7d_rate",
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
        {value.toFixed(2) + "%"}
      </Typography>
    ),
  },
];

export function USDTMoneyPrinterGroupDataGridBalance({
  data,
  title,
  id,
}: {
  data: any[];
  title: string;
  id: string;
}) {
  let list: GroupDataGridBalanceProps[] = [];

  let i: number = 0;
  for (let exchange in data[data.length - 1]) {
    if (exchange !== "time" && exchange !== "other") {
      const change_7d_value =
        data[data.length - 1][exchange] - data[data.length - 7][exchange] || 0;

      const change_7d_rate =
        (data[data.length - 1][exchange] - data[data.length - 7][exchange]) /
          data[data.length - 1][exchange] || 0;

      list.push({
        id: i,
        exchange,
        balance: data[data.length - 1][exchange],
        change_7d: change_7d_value,
        change_7d_rate: change_7d_rate,
      });
    }
    i++;
  }

  list = list.sort((a, b) => b.balance - a.balance);

  return (
    <Box id={id + "-wrap"} sx={main}>
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
        hideFooterPagination
        hideFooter
        sx={grid}
      />
    </Box>
  );
}
