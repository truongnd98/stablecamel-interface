import * as React from 'react';
import Box from '@mui/material/Box';
import { SxProps, Typography, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useMoneyPrinterState } from '../../../stores/moneyprinter/hooks';
import { GroupDataGridProps } from '../types';

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', flex: 1, maxWidth: 50, hideable: true },
  {
    headerName: 'Exchange',
    field: 'exchange',
    flex: 1,
    minWidth: 140,
  },
  {
    headerName: 'USDC Balance',
    field: 'balance',
    flex: 1,
    minWidth: 150,
    renderCell: ({ value }) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(value),
  },
  {
    headerName: 'Change (7D)',
    field: 'change_7d',
    flex: 1,
    minWidth: 100,
    renderCell: ({ value }) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(value),
  },
  {
    headerName: '% Change (7D)',
    field: 'change_7d_rate',
    flex: 1,
    minWidth: 100,
    renderCell: ({ value }) => value.toFixed(2) + '%',
  },
];

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
      fontSize: 16,
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
    height: 80,
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

const main: SxProps = {
  width: '50%',
  height: '100%',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '0 22px',
  paddingBottom: '12px',
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
};

export function MoneyPrinterGroupDataGrid({ data }: { data: any[] }) {
  let list: GroupDataGridProps[] = [];

  let i: number = 0;
  for (let exchange in data[0]) {
    if (
      exchange !== 'day' &&
      exchange !== 'time' &&
      exchange !== 'seven_d_chng'
    )
      list.push({
        id: i,
        exchange,
        balance: data[0][exchange],
        change_7d: data[0]['seven_d_chng'][exchange].amount_chng,
        change_7d_rate: data[0]['seven_d_chng'][exchange].rate,
      });
    i++;
  }

  list = list.sort((a, b) => b.balance - a.balance);
  return (
    <Box sx={main}>
      <DataGrid
        autoHeight
        rows={list}
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
