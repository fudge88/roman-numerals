import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

const Header = () => {
	return (
		<Stack spacing={2}>
			<Typography level="h1">Roman Numeral Converter</Typography>
			<Typography level="h4" fontWeight="lg" component="h1">
				Please enter a number between 1 and 3999.
			</Typography>
		</Stack>
	);
};

export default Header;
