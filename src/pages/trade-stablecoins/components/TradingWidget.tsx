import { Box } from '@mui/material';

export function TradingWidget() {
	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				height: '100%'
			}}
		>
			<iframe
				src='https://ramp.stably.io/?address=hx777535db1b4039c837580e74aac35d0bbaaa7b4c&amount=42.42&network=icon&asset=USDS&filter=true'
				title='Stably Widget'
				style={{
					width: '100%',
					height: '100%'
				}}
			/>
		</Box>
	);
}
