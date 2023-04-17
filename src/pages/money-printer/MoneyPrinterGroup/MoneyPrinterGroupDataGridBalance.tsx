import * as React from 'react';
import Box from '@mui/material/Box';
import { SxProps, Typography, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useMoneyPrinterState } from '../../../stores/moneyprinter/hooks';
import { GroupDataGridBalanceProps, GroupDataGridProps } from '../types';

const handleColor = (value: number) => {
  if (value > 0)
    return {
      main: '#2e8c57',
      background: '#dcfce7',
    };
  else if (value < 0) return { main: '#be3832', background: '#fde2e1' };
  else return { main: '#676b74', background: '#f3f4f6' };
};

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', flex: 1, maxWidth: 50, hideable: true },
  {
    headerName: 'Exchange',
    field: 'exchange',
    flex: 1,
    minWidth: 100,
    sortable: false,
  },
  {
    headerName: 'Balance',
    field: 'balance',
    flex: 1,
    minWidth: 100,
    sortable: false,
    renderCell: ({ value }) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 2,
      }).format(value),
  },
  {
    headerName: 'Change (7D)',
    field: 'change_7d',
    flex: 1,
    minWidth: 120,
    sortable: false,

    renderCell: ({ value }) => (
      <Typography
        variant='body1'
        color={handleColor(value).main}
        sx={{
          width: 'fit-content',
          padding: '0 8px',
          backgroundColor: handleColor(value).background,
        }}
      >
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          notation: 'compact',
          maximumFractionDigits: 2,
        }).format(value)}
      </Typography>
    ),
  },
  {
    headerName: '% Change (7D)',
    field: 'change_7d_rate',
    flex: 1,
    minWidth: 120,

    sortable: false,
    renderCell: ({ value }) => (
      <Typography
        variant='body1'
        color={handleColor(value).main}
        sx={{
          width: 'fit-content',
          padding: '0 8px',
          backgroundColor: handleColor(value).background,
        }}
      >
        {value.toFixed(2) + '%'}
      </Typography>
    ),
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

const main: SxProps = {
  width: '50%',
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

export function MoneyPrinterGroupDataGridBalance({ data }: { data: any[] }) {
  let list: GroupDataGridBalanceProps[] = [];
  const limitGrid: number = 1000000;

  let i: number = 0;
  for (let exchange in data[0]) {
    if (
      exchange !== 'day' &&
      exchange !== 'time' &&
      exchange !== 'seven_d_chng' &&
      data[0][exchange] >= limitGrid
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