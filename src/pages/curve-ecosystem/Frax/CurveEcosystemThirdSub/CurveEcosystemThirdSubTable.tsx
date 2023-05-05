import { Box, SxProps, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { v4 } from 'uuid';
import { useCurveEcosystemState } from '../../../../stores/curve-ecosystem/hooks';
import { fxsLeaderboard } from '../../types';

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
		padding: '0 8px'
	}
};

const grid: SxProps = {
	'div.MuiDataGrid-row': {
		':hover': {
			backgroundColor: '#FAFAFA !important'
		}
	},
	'div.MuiDataGrid-columnHeaderTitle': {
		fontSize: 18,
		fontWeight: 600,
		'@media (max-width: 1280px)': {
			fontSize: 14
		}
	},
	'div.MuiDataGrid-cell': {
		borderBottom: 'none',
		':focus': {
			outline: 'none'
		},
		':focus-within': {
			outline: 'none'
		}
	},
	'div.MuiDataGrid-columnHeaders': {
		borderBottom: 'none'
	},
	'div.MuiDataGrid-columnHeader': {
		':focus': {
			outline: 'none'
		},
		':focus-within': {
			outline: 'none'
		}
	},
	border: 'none'
};

const columns: GridColDef[] = [
	// { field: 'id', headerName: 'ID', flex: 1, maxWidth: 50, hideable: true },
	{
		headerName: 'Wallet',
		field: 'wallet',
		flex: 1,
		sortable: false,
		renderCell: ({ value }) =>
			value.startsWith('0x')
				? value.slice(0, 6) + '...' + value.slice(-6)
				: value
	},
	{
		headerName: 'Lokced FXS Balance',
		field: 'balance',
		flex: 1,
		sortable: false,
		renderCell: ({ value }) =>
			new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value)
	},
	{
		headerName: '% of Total Locked',
		field: 'percent_of_total',
		flex: 1,
		sortable: false,
		renderCell: ({ value }) => (value * 100).toFixed(2) + '%'
	}
	// {
	// 	headerName: '% Change (7D)',
	// 	field: 'change_7d_rate',
	// 	flex: 1,
	// 	sortable: false
	// }
];

export function CurveEcosystemThirdSubTable() {
	const { fxs } = useCurveEcosystemState();

	const formatList = !fxs
		? []
		: fxs.fxs_leader_board.map((item: fxsLeaderboard) => ({
				...item,
				id: v4()
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
