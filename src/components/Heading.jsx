import * as React from 'react';
import { Stack, Typography } from '@mui/joy';

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
