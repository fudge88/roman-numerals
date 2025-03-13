import React, { useState } from 'react';
import { romanNumeralGenerator } from '../utils/core.js';
import { Input, Stack, Divider, styled, Typography } from '@mui/joy';

const CenteredPlaceholderInput = styled(Input)({
	'& input::placeholder': {
		textAlign: 'center',
	},
});

const NumberBlock = () => {
	const [input, setInput] = useState('');
	const [romanNumeral, setRomanNumeral] = useState('');

	const handleInputChange = (event) => {
		const value = event.target.value;
		setInput(value);
		try {
			const number = parseInt(value.trim(), 10);

			if (!isNaN(number)) {
				if (number >= 1 && number <= 3999) {
					const roman = romanNumeralGenerator(number);
					setRomanNumeral(roman);
				} else {
					setRomanNumeral('Number must be between 1 and 3999');
				}
			} else {
				setRomanNumeral('No letters - No symbols ...Just numbers!');
			}
		} catch (error) {
			console.error('Error:', error.message);
			setRomanNumeral('Invalid input');
		}
	};

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
				value={input}
				onChange={handleInputChange}
				placeholder="Enter a number"
				sx={{
					textAlign: 'center',
					width: '200px',
					marginBottom: '20px',
				}}
			/>
			<Divider>Your roman numeral result</Divider>
			<Typography level="h2" sx={{ fontSize: 'xl', mt: 2 }}>
				{romanNumeral}
			</Typography>
		</Stack>
	);
};

export default NumberBlock;
