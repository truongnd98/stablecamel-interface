import { Chip, SxProps } from '@mui/material';

interface ChipProps {
	label: string;
}

const chip: SxProps = {
	height: '100%',
	fontWeight: 600,
	fontSize: '11px',
	span: {
		padding: '0 8px'
	}
};

export function SoonChip({ label }: ChipProps) {
	return (
		<Chip
			label={label}
			color='secondary'
			sx={chip}
		/>
	);
}
