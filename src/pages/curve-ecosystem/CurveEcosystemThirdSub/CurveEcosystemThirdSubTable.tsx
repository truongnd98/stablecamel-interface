import { Box, SxProps, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const main: SxProps = {
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '0 22px',
  paddingBottom: '12px',
  overflowY: 'scroll',
  // scrollbarWidth: 'thin',
  // '::-webkit-scrollbar': {
  //   width: '8px',
  // },

  '@media (max-width: 1280px)': {
    padding: '0 8px',
  },
};

const grid: SxProps = {
  'div.MuiDataGrid-row': {
    ':hover': {
      backgroundColor: '#FAFAFA !important',
    },
  },
  'div.MuiDataGrid-columnHeaderTitle': {
    fontSize: 18,
    fontWeight: 600,
    '@media (max-width: 1280px)': {
      fontSize: 14,
    },
  },
  'div.MuiDataGrid-cell': {
    borderBottom: 'none',
    ':focus': {
      outline: 'none',
    },
    ':focus-within': {
      outline: 'none',
    },
  },
  'div.MuiDataGrid-columnHeaders': {
    borderBottom: 'none',
  },
  'div.MuiDataGrid-columnHeader': {
    ':focus': {
      outline: 'none',
    },
    ':focus-within': {
      outline: 'none',
    },
  },
  border: 'none',
};

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', flex: 1, maxWidth: 50, hideable: true },
  {
    headerName: 'Wallet',
    field: 'exchange',
    flex: 1,
    sortable: false,
  },
  {
    headerName: 'Lokced FXS Balance',
    field: 'tvl',
    flex: 1,
    sortable: false,
  },
  {
    headerName: '% of Total Locked',
    field: 'change_7d',
    flex: 1,
    sortable: false,
  },
  {
    headerName: '% Change (7D)',
    field: 'change_7d_rate',
    flex: 1,
    sortable: false,
  },
];

export function CurveEcosystemThirdSubTable() {
  return (
    <Box sx={main}>
      <DataGrid
        autoHeight
        rows={[]}
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
