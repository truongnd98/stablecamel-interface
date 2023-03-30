import * as React from 'react';
import Box from '@mui/material/Box';
import { SxProps, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useYieldState } from '../../stores/yield/hooks';
import { YieldRes } from './types';
import Networks from '../../jsons/networks.json';
import { Network } from '../../App';

const columns: GridColDef[] = [
	{
		headerName: 'Pool',
		field: 'pool',
		minWidth: 200,
		flex: 1
	},
	{
		headerName: 'Project',
		field: 'project',
		minWidth: 200,
		flex: 1,
		renderCell: ({ value }) =>
			value
				.split('-')
				.map((item: string) => item[0].toUpperCase() + item.slice(1))
				.join(' ')
	},
	{
		headerName: 'Network',
		field: 'network',
		minWidth: 100,
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
					width: '20px'
				}}
				title={value}
			/>
		)
	},
	{
		headerName: 'TVL',
		field: 'tvl_number',
		minWidth: 100,
		flex: 1,
		renderCell: ({ value }) => (
			<b>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					notation: 'compact',
					maximumFractionDigits: 2
				}).format(value)}
			</b>
		)
	},
	{
		headerName: 'APY',
		field: 'total_apy',
		minWidth: 120,
		flex: 1,
		renderCell: ({ value }) => (value ? value.toFixed(2) + '%' : value)
	},
	{
		headerName: 'Base APY',
		field: 'base_apy',
		minWidth: 120,
		flex: 1,
		renderCell: ({ value }) => (value ? value.toFixed(2) + '%' : value)
	},
	{
		headerName: 'Reward APY',
		field: 'reward_apy',
		minWidth: 130,
		flex: 1,
		renderCell: ({ value }) => (value ? value.toFixed(2) + '%' : value)
	},
	{
		headerName: '7D APY',
		field: 'apy_7d',
		minWidth: 130,
		flex: 1,
		renderCell: ({ value }) => (value ? value.toFixed(2) + '%' : value)
	},
	{
		headerName: '30D APY',
		field: 'apy_30d',
		minWidth: 120,
		flex: 1,
		renderCell: ({ value }) => (value ? value.toFixed(2) + '%' : value)
	}
];

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
			fontSize: 16
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
		borderBottom: 'none',
		height: 80
	},
	'div.MuiDataGrid-columnHeader': {
		':focus': {
			outline: 'none'
		},
		':focus-within': {
			outline: 'none'
		}
	},
	border: 'none',
	height: '100%'
};

const main: SxProps = {
	width: '100%',
	height: '100%',
	backgroundColor: '#ffffff',
	borderRadius: '8px',
	padding: '0 22px',
	paddingBottom: '12px'
};

export function YieldTable() {
	const { list } = useYieldState();
	const formatList = list
		.map((item: YieldRes, index: number) => ({
			...item,
			id: index + 1
		}))
		.sort((a: YieldRes, b: YieldRes) => b.tvl_number - a.tvl_number);

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
				// autoPageSize
				// pageSizeOptions={[1000]}
				columnHeaderHeight={80}
				disableColumnMenu
				disableRowSelectionOnClick
				// hideFooterPagination
				// hideFooter
				sx={grid}
			/>
		</Box>
	);
}
