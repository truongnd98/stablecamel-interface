import { Box, Skeleton } from '@mui/material';
import { ChartDetailProps } from '../../../components/AreaChart';
import randomColor from 'randomcolor';
import { format } from 'date-fns';
import { MoneyPrinterGroupAreaChart } from './MoneyPrinterGroupAreaChart';

export function MoneyPrinterGroupChart({ data }: { data: any[] }) {
	const details: ChartDetailProps[] = [];
	for (let exchange in data[0]) {
		details.push({ key: exchange, color: randomColor({ seed: exchange }) });
	}

	const list = !data.length
		? []
		: data
				// .map((item: any) => ({
				//   ...item,
				//   time: format(new Date(item.day ?? item.time), 'PP'),
				// }))
				.map((item: any) => {
					const result: any = {
						time: format(new Date(item.day ?? item.time), 'PP')
					};
					const temp = { ...item };
					delete temp.time;
					delete temp.seven_d_chng;
					Object.keys(temp)
						.sort((a: string, b: string) => temp[b] - temp[a])
						.slice(0, 10)
						.map((key: string) => (result[key] = temp[key]));

					return {
						...result
					};
				})
				.reverse();
	return (
		<Box
			sx={{
				width: '50%'
			}}
		>
			{data.length > 0 ? (
				<MoneyPrinterGroupAreaChart
					data={list}
					title='Stablecoin Exchange Flow'
					detail={details}
				/>
			) : (
				<Skeleton
					variant='rounded'
					width='100%'
					height='100%'
				/>
			)}
		</Box>
	);
}
