import React from 'react';
import { Input, Stack, Divider, styled, Typography } from '@mui/joy';

const CenteredPlaceholderInput = styled(Input)({
	'& input::placeholder': {
		textAlign: 'center',
	},
});

const NumberBlock = () => {
	return (
		<Stack
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				p: 3,
			}}>
			<CenteredPlaceholderInput
				placeholder="Enter a number"
				sx={{
					textAlign: 'center',
					width: '200px',
					marginBottom: '20px',
				}}
			/>
			<Divider>Your roman numeral result</Divider>
			<Typography level="h2" sx={{ fontSize: 'xl', mt: 2 }}>
				TEST
			</Typography>
		</Stack>
	);
};

export default NumberBlock;
