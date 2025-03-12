const romanLookUp = {
	1000: 'M',
	900: 'CM',
	500: 'D',
	400: 'CD',
	100: 'C',
	90: 'XC',
	50: 'L',
	40: 'XL',
	10: 'X',
	9: 'IX',
	5: 'V',
	4: 'IV',
	1: 'I',
};

// create a function to convert the number to a roman numeral
export const romanNumeralGenerator = (num) => {
	// Log the input number
	console.log('Input number:', num);

	// Log the lookup table
	console.log('Roman numeral lookup table:', romanLookUp);

	// convert the number to a roman numeral
	const result = romanLookUp[num];
	console.log('Converted roman numeral:', result);
	return result;
	//  validate the number to be between 1 - 3999 and to be a number type

	// sort object into descending order
};

romanNumeralGenerator(1000);
